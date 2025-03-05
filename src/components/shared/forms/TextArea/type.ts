import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export type TextAreaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  dataTestId: string;
  isLoading?: boolean;
  label: string;
  errors?: FieldError;
  handledChange?: (ev: React.ChangeEvent<HTMLTextAreaElement> | undefined) => void;
};
