import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  dataTestId: string;
  label: string;
  name: string;
  errors?: FieldError;
  tooltip?: string;
  labelColor?: string;
  handledChange?: (ev: React.ChangeEvent<HTMLInputElement> | undefined) => void;
};
