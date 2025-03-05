import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export type CheckboxProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  type?: "radio";
  label?: string;
  dataTestId: string;
  errors?: FieldError;
  onChecked?: (isChecked: boolean) => void;
};
