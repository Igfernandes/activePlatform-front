import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { SetValue } from "../../type";

export type InputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "required"
> & {
  isLoading?: boolean;
  label?: string;
  errors?: FieldError;
  required?: boolean;
  tooltip?: string;
  handledChange?: (ev: React.ChangeEvent<HTMLInputElement> | undefined) => void;
  setValue?: SetValue;
};
