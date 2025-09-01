import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export type PhoneProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  dataTestId: string;
  label: string;
  name: string;
  errors?: FieldError;
  tooltip?: string;
};
