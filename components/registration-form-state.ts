export type RegistrationFieldName =
  | "guardianName"
  | "email"
  | "camperName"
  | "phone"
  | "ageGroup"
  | "notes"
  | "website";

export type RegistrationFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<RegistrationFieldName, string>>;
};

export const initialRegistrationFormState: RegistrationFormState = {
  status: "idle",
};
