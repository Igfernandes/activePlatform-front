import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { TFields } from "../../type";

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  TFields & {
    dataTestId?: string;
    isLoading?: boolean;
    label?: string;
    errors?: FieldError;
    handledChange?: (
      ev: React.ChangeEvent<HTMLInputElement> | undefined
    ) => void;
  };
