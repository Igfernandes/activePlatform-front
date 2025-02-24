import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  dataTestId: string;
  errors?: FieldError;
  handledChange?: (ev: React.ChangeEvent<HTMLInputElement> | undefined) => void;
};
