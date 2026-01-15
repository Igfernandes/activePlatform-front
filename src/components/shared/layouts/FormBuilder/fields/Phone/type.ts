import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export type PhoneProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "required"
> & {
  name: string;
  isLoading?: boolean;
  label?: string;
  errors?: FieldError;
  required?:  boolean;
  tooltip?: string;
  handledChange?: (ev: React.ChangeEvent<HTMLInputElement> | undefined) => void;
};
