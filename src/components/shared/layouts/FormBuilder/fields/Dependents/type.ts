import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export type InputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "required"
> & {
  isLoading?: boolean;
  label?: string;
  errors?: FieldError;
  required?: string | null;
  tooltip?: string;
  handledChange?: (ev: React.ChangeEvent<HTMLInputElement> | undefined) => void;
};

export type DependentsData = {
  name: string;
  cpf: string;
  birthdate: string;
};
