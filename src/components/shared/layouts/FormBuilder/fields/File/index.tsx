import React from "react";
import { InputProps } from "./type";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "@components/shared/others/ErrorMessage";

export const File = React.forwardRef<HTMLInputElement, InputProps>(
  function File({ ...rest }: InputProps, ref) {
    const { formState: { errors } } = useFormContext();
    const error = errors[rest.name as string];


    return (
      <>
        <div className={`relative w-full my-4 ${!!error ? "border-yellow" : ""}`}>

          {/* INPUT REAL FORA DO FLUXO REACT */}
          <input
            {...rest}
            ref={ref}
            type="file"
            accept="image/*,.pdf,.xlsx"
            className="appearance-none w-full pl-3 pr-7 pb-3 pt-5 h-14 bg-white border-secondary cursor-pointer border-2 rounded-lg text-sm text-rose-500"

          />
        </div>

        <ErrorMessage errors={!(error?.message as string)?.includes("Expected string") ? error?.message as string : ""} />
      </>
    );
  })
