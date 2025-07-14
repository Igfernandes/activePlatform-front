import { useEffect, useState } from "react";
import { HookFillFieldsProps } from "../type";
import { FieldsShape } from "@type/Fields";

export function useFillFields({ fields, form }: HookFillFieldsProps) {
  const [fieldsData, setFieldsData] = useState<Array<FieldsShape>>([]);

  useEffect(() => {
    if (!form.components) return;

    const components = JSON.parse(form.components) as Array<FieldsShape>;
    setFieldsData(
      components
        .filter((component) =>
          ["simple", "user", "custom"].includes(component?.group ?? "")
        )
        .map((component) => {
          const field = fields.find((field) => field.field_id == component?.id);

          return {
            ...component,
            name: `input_${component.id}`,
            defaultValue: field?.value,
          };
        })
    );
  }, [fields, form]);

  return {
    fieldsData,
  };
}
