import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { SetValue } from "../../type";

export type FieldProps = Omit<
  DetailedHTMLProps<
    InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  "required"
> & {
  label?: string;
  errors?: FieldError;
  required?: string | null;
  tooltip?: string;
  handledChange?: (
    ev: React.ChangeEvent<HTMLTextAreaElement> | undefined
  ) => void;
  setValue?: SetValue;
};
