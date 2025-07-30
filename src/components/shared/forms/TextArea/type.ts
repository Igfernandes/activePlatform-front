import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export type TextAreaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  dataTestId: string;
  label: string;
  name: string;
  errors?: FieldError;
  handledChange?: (
    ev: React.ChangeEvent<HTMLTextAreaElement> | undefined
  ) => void;
};
