import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export type CheckboxProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  type?: "checkbox";
  label?: string;
  dataTestId: string;
  errors?: FieldError;
  groupName?: string;
  onChecked?: (isChecked: boolean) => void;
};
