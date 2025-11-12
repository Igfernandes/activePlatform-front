import { useFormRules } from "@hooks/Forms/useFormRules";
import { FormsPayload, formsSchema } from "../../schema";
import { FormsShape } from "@type/Forms";

type Props = {
  targetForm: FormsShape;
}

export function useFormData({ targetForm }: Props) {
  const { formMethods } = useFormRules<FormsPayload>({
    schema: formsSchema,
    defaultValues: {
      id: targetForm.id,
      name: targetForm.name,
      description: targetForm.description,
      started_at: targetForm.started_at,
      expired_at: targetForm.expired_at,
      template: String(targetForm.id),
      status: targetForm.status,
      stock: String(targetForm.stock ?? 0),
      category: String(targetForm?.category?.id),
      color_mark: String(targetForm?.color_mark),
      thanks_message: targetForm?.thanks_message,
      service_id: targetForm.service_id
        ? String(targetForm.service_id)
        : undefined,
    },
  });

  return {
    formMethods
  }
}