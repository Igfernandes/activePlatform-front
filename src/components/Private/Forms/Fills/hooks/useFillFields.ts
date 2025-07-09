import { useEffect, useState } from "react";
import { FillFieldData, HookFillFieldsProps } from "../type";
import { FieldsShape } from "@type/Fields";

export function useFillFields({ fields, form }: HookFillFieldsProps) {
  const [fieldsData, setFieldsData] = useState<Array<FillFieldData>>([]);

  useEffect(() => {
    if (!form.components) return;

    const fieldsForm = JSON.parse(form.components) as Array<FieldsShape>;

    setFieldsData(
      fieldsForm
        .filter((field) =>
          ["simple", "user", "custom"].includes(field?.group ?? "")
        )
        .map((fieldForm) => {
          const data = {
            component: fieldForm.element,
            text: fieldForm.label,
            value: "--",
          };
          const fieldValue = fields.filter(
            (fieldValue) => fieldValue.field_id == fieldForm.id
          );

          if (fieldValue.length == 0) return data;

          data.value = fieldValue[0].value;

          return data;
        })
    );
  }, [fields, form]);

  return {
    fieldsData,
  };
}
