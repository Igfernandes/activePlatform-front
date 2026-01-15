import React from "react";
import { InputProps } from "./type";

export const Hidden = React.forwardRef<HTMLInputElement, InputProps>(
  function Hidden(
    {
      id,
      ...rest
    }: InputProps,
    ref
  ) {
    const IdCurrent = id;

    return (
      <div className={`relative w-full my-2`}>
        <input
          {...rest}
          ref={ref}
          type={"hidden"}
          id={IdCurrent}
        />
      </div>
    );
  }
)
