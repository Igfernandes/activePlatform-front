import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react";

export type FormGroupProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  measure?: "px" | "%";
  onChange?: (ev: ChangeEvent<HTMLInputElement>) => void;
};
