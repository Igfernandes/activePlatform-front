import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { SetValue } from "../../type";

export type InputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "required"
> & {
  handledChange?: (ev: React.ChangeEvent<HTMLInputElement> | undefined) => void;
  setValue?: SetValue;
};
