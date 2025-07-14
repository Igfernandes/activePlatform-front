import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { FieldShape } from "../../type";

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  FieldShape & {
    dataTestId?: string;
    isLoading?: boolean;
    label?: string;
    errors?: FieldError;
    handledChange?: (
      ev: React.ChangeEvent<HTMLInputElement> | undefined
    ) => void;
  };
