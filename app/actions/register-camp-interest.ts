"use server";

import type {
  RegistrationFieldName,
  RegistrationFormState,
} from "@/components/registration-form-state";

import { registrationAgeGroups } from "@/config/camp-content";

const allowedAgeGroups = new Map<string, string>(
  registrationAgeGroups.map((group) => [group.value, group.label]),
);

type RegistrationSubmission = {
  guardianName: string;
  email: string;
  camperName: string;
  phone: string;
  ageGroup: string;
  notes: string;
};

function getValue(formData: FormData, key: RegistrationFieldName) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function validateRegistration(formData: FormData) {
  const submission: RegistrationSubmission = {
    guardianName: getValue(formData, "guardianName"),
    email: getValue(formData, "email"),
    camperName: getValue(formData, "camperName"),
    phone: getValue(formData, "phone"),
    ageGroup: getValue(formData, "ageGroup"),
    notes: getValue(formData, "notes"),
  };

  const fieldErrors: Partial<Record<RegistrationFieldName, string>> = {};

  if (
    submission.guardianName.length < 2 ||
    submission.guardianName.length > 100
  ) {
    fieldErrors.guardianName = "Enter the parent or guardian's full name.";
  }

  if (
    submission.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)
  ) {
    fieldErrors.email = "Enter a valid email address.";
  }

  if (submission.camperName.length < 2 || submission.camperName.length > 100) {
    fieldErrors.camperName = "Enter the camper's name.";
  }

  if (
    submission.phone.length > 40 ||
    !/^[0-9()+\-\s]{7,}$/.test(submission.phone)
  ) {
    fieldErrors.phone = "Enter a valid phone number.";
  }

  if (!allowedAgeGroups.has(submission.ageGroup)) {
    fieldErrors.ageGroup = "Select a camper age group.";
  }

  if (submission.notes.length > 2000) {
    fieldErrors.notes = "Keep additional notes under 2000 characters.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false as const,
      fieldErrors,
    };
  }

  return {
    ok: true as const,
    submission: {
      ...submission,
      ageGroup:
        allowedAgeGroups.get(submission.ageGroup) ?? submission.ageGroup,
    },
  };
}

function getResendConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    process.env.NOTIFICATION_FROM_EMAIL?.trim() ||
    process.env.CONTACT_FROM_EMAIL?.trim();
  const to = process.env.REGISTRATION_TO_EMAIL?.trim();

  if (!apiKey || !from || !to) {
    throw new Error(
      "Email delivery is not configured. Set RESEND_API_KEY, REGISTRATION_TO_EMAIL, and one sender address from RESEND_FROM_EMAIL, NOTIFICATION_FROM_EMAIL, or CONTACT_FROM_EMAIL.",
    );
  }

  return {
    apiKey,
    from,
    to,
  };
}

function buildEmailPayload(submission: RegistrationSubmission) {
  const submittedAt = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/New_York",
  }).format(new Date());

  const notes = submission.notes || "None provided.";
  const escapedNotes = escapeHtml(notes).replaceAll("\n", "<br />");

  return {
    subject: `Camp Messiah registration: ${submission.camperName}`,
    text: [
      "New Camp Messiah registration",
      "",
      `Submitted: ${submittedAt} (America/New_York)`,
      `Parent or guardian: ${submission.guardianName}`,
      `Email: ${submission.email}`,
      `Phone: ${submission.phone}`,
      `Camper name: ${submission.camperName}`,
      `Age group: ${submission.ageGroup}`,
      `Notes: ${notes}`,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; color: #16362f; line-height: 1.6;">
        <h1 style="margin: 0 0 20px; font-size: 24px;">New Camp Messiah registration</h1>
        <p style="margin: 0 0 24px;">Submitted: ${escapeHtml(submittedAt)} (America/New_York)</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 680px;">
          <tbody>
            <tr>
              <td style="padding: 8px 0; font-weight: 700;">Parent or guardian</td>
              <td style="padding: 8px 0;">${escapeHtml(submission.guardianName)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 700;">Email</td>
              <td style="padding: 8px 0;">${escapeHtml(submission.email)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 700;">Phone</td>
              <td style="padding: 8px 0;">${escapeHtml(submission.phone)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 700;">Camper name</td>
              <td style="padding: 8px 0;">${escapeHtml(submission.camperName)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 700;">Age group</td>
              <td style="padding: 8px 0;">${escapeHtml(submission.ageGroup)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 700; vertical-align: top;">Notes</td>
              <td style="padding: 8px 0;">${escapedNotes}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  };
}

export async function registerCampInterest(
  _previousState: RegistrationFormState,
  formData: FormData,
): Promise<RegistrationFormState> {
  if (getValue(formData, "website")) {
    return {
      status: "success",
      message:
        "Your registration request has been sent. We’ll follow up by email.",
    };
  }

  const validated = validateRegistration(formData);

  if (!validated.ok) {
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      fieldErrors: validated.fieldErrors,
    };
  }

  let resendConfig;

  try {
    resendConfig = getResendConfig();
  } catch (error) {
    console.error("Registration email configuration error:", error);

    return {
      status: "error",
      message:
        "Registration email is temporarily unavailable. Please try again later.",
    };
  }

  const payload = buildEmailPayload(validated.submission);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendConfig.apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
      },
      body: JSON.stringify({
        from: resendConfig.from,
        to: [resendConfig.to],
        reply_to: validated.submission.email,
        subject: payload.subject,
        text: payload.text,
        html: payload.html,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    const result = (await response.json().catch(() => null)) as {
      id?: string;
      message?: string;
      error?: { message?: string };
    } | null;

    if (!response.ok) {
      const resendMessage =
        result?.error?.message ??
        result?.message ??
        "Resend rejected the request.";

      console.error("Resend registration email error:", {
        message: resendMessage,
        status: response.status,
      });

      return {
        status: "error",
        message:
          "The registration request could not be sent. Please try again later.",
      };
    }

    return {
      status: "success",
      message:
        "Your registration request has been sent. We’ll follow up by email.",
    };
  } catch (error) {
    console.error("Registration email request failed:", error);

    return {
      status: "error",
      message:
        "The registration request could not be sent. Please try again later.",
    };
  }
}
