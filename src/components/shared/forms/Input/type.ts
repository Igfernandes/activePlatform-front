import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  dataTestId: string;
  isLoading?: boolean;
  label: string;
  name: string;
  errors?: FieldError;
  tooltip?: string;
  handledChange?: (ev: React.ChangeEvent<HTMLInputElement> | undefined) => void;
};
