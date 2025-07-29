import React from "react";
import { InputProps } from "./type";

export function Hidden({ id, name, setValue, onChange, ...rest }: InputProps) {
  const IdCurrent = id;

  return (
    <>
      <div className={`relative w-full my-2`}>
        <input
          {...rest}
          name={name}
          onChange={(ev) => {
            if (setValue) setValue(name ?? "", ev.currentTarget.value);
            if (onChange) onChange(ev);
          }}
          type={"hidden"}
          id={IdCurrent}
        />
      </div>
    </>
  );
}
