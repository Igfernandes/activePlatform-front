import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type CheckboxProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  type?: "checkbox";
  label?: string;
  dataTestId: string;
  onChecked?: (isChecked: boolean) => void;
  onChange?: () => void;
  checked?: boolean;
};
