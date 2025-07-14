import { useRef } from "react";

export function useFormDynamicFields() {
  const fields = useRef<Record<string, unknown>>({});

  const handleChange = (name: string, value: unknown) => {
    const updateFields = {
      ...fields.current,
      [name]: ["object"].includes(typeof value) ? JSON.stringify(value) : value,
    };

    fields.current = updateFields;
  };

  return {
    fields,
    handleChange,
  };
}
