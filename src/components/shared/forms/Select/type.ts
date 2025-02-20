import { DetailedHTMLProps, SelectHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export type SelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  dataTestId: string;
  label: string;
  errors?: FieldError;
  options: Array<OptionsShape>;
  handledChange?: (
    ev: React.ChangeEvent<HTMLSelectElement> | undefined
  ) => void;
};

type OptionsShape = {
  value: string | number;
  text: string;
};
