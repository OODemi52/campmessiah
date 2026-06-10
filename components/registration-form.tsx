"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import {
  Button,
  Description,
  Form,
  Input,
  Label,
  Radio,
  RadioGroup,
  TextArea,
  TextField,
} from "@heroui/react";

import { registerCampInterest } from "@/app/actions/register-camp-interest";
import { registrationAgeGroups } from "@/config/camp-content";
import { initialRegistrationFormState } from "@/components/registration-form-state";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="bg-[#f26f4d] px-6 text-white opacity-100"
      isDisabled={pending}
      type="submit"
    >
      {pending ? "Sending..." : "Send Registration"}
    </Button>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="text-sm text-[#b42318]">{message}</p>;
}

export function RegistrationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(
    registerCampInterest,
    initialRegistrationFormState,
  );

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <Form
      ref={formRef}
      action={formAction}
      className="camp-registration-form grid gap-6"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="website">Website</label>
        <input
          autoComplete="off"
          id="website"
          name="website"
          tabIndex={-1}
          type="text"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <TextField
          fullWidth
          isRequired
          className="grid gap-2"
          isInvalid={Boolean(state.fieldErrors?.guardianName)}
        >
          <Label>Parent or guardian name</Label>
          <Input
            autoComplete="name"
            className="font-vietnam"
            maxLength={100}
            minLength={2}
            name="guardianName"
            placeholder="Full name"
          />
          <FieldError message={state.fieldErrors?.guardianName} />
        </TextField>

        <TextField
          fullWidth
          isRequired
          className="grid gap-2"
          isInvalid={Boolean(state.fieldErrors?.email)}
          type="email"
        >
          <Label>Email address</Label>
          <Input
            autoComplete="email"
            className="font-vietnam"
            maxLength={254}
            name="email"
            placeholder="name@example.com"
          />
          <FieldError message={state.fieldErrors?.email} />
        </TextField>

        <TextField
          fullWidth
          isRequired
          className="grid gap-2"
          isInvalid={Boolean(state.fieldErrors?.camperName)}
        >
          <Label>Camper name</Label>
          <Input
            autoComplete="off"
            className="font-vietnam"
            maxLength={100}
            minLength={2}
            name="camperName"
            placeholder="Child's name"
          />
          <FieldError message={state.fieldErrors?.camperName} />
        </TextField>

        <TextField
          fullWidth
          isRequired
          className="grid gap-2"
          isInvalid={Boolean(state.fieldErrors?.phone)}
          type="tel"
        >
          <Label>Phone number</Label>
          <Input
            autoComplete="tel"
            className="font-vietnam"
            inputMode="tel"
            maxLength={40}
            name="phone"
            pattern="[0-9()+\\-\\s]{7,}"
            placeholder="301-555-0123"
            title="Enter a valid phone number."
          />
          <FieldError message={state.fieldErrors?.phone} />
        </TextField>
      </div>

      <RadioGroup
        isRequired
        className="grid gap-3"
        isInvalid={Boolean(state.fieldErrors?.ageGroup)}
        name="ageGroup"
      >
        <Label>Camper age group</Label>
        <Description>
          Choose the age range that best matches your camper.
        </Description>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {registrationAgeGroups.map((group) => (
            <Radio
              key={group.value}
              className="camp-track-option"
              value={group.value}
            >
              {group.label}
            </Radio>
          ))}
        </div>
        <FieldError message={state.fieldErrors?.ageGroup} />
      </RadioGroup>

      <TextField
        fullWidth
        className="grid gap-2"
        isInvalid={Boolean(state.fieldErrors?.notes)}
      >
        <Label>Anything we should know?</Label>
        <TextArea
          className="min-h-32 font-vietnam"
          maxLength={2000}
          name="notes"
          placeholder="Questions, session preferences, allergies, or accommodation notes."
        />
        <FieldError message={state.fieldErrors?.notes} />
      </TextField>

      {state.message ? (
        <p
          className={
            state.status === "success"
              ? "text-sm leading-6 text-[#027353]"
              : "text-sm leading-6 text-[#b42318]"
          }
          role="status"
        >
          {state.message}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
        <SubmitButton />
      </div>
    </Form>
  );
}
