import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export type RadioBoxProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  type?: "radio";
  label?: string;
  dataTestId: string;
  errors?: FieldError;
  defaultValue: string;
  icon: React.ReactNode;
  onChecked?: (isChecked: boolean) => void;
};
