import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { SetValue } from "../../type";

export type InputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "required"
> & {
  label?: string;
  errors?: FieldError;
  required?: boolean;
  tooltip?: string;
  setValue?: SetValue;
};
