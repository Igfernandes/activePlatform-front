import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export type PasswordProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  dataTestId: string;
  isLoading?: boolean;
  label: string;
  type?: "password";
  errors?: FieldError;
};

export type StatusValidation = "success" | "error" | "void";

export type ValidationProps = {
  password: string;
  passwordConfirm?: string;
};

export type CriteriaStatusShape = {
  hasLowercase: StatusValidation;
  hasUppercase: StatusValidation;
  hasNumber: StatusValidation;
  hasSpecialLetter: StatusValidation;
  hasMinEightLetters: StatusValidation;
};
