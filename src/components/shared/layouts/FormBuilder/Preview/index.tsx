import { FormProvider } from "react-hook-form";
import { FieldShape } from "../type";
import { Field } from "./Field";
import { useFormPreview } from "./hooks/useFormPreview";
import { Button } from "@components/shared/forms/Button";
import { useI18n } from "@contexts/I18n";

type Props = {
  fields: Array<FieldShape>;
  onSubmit?: (payload: Record<string, unknown>) => void;
  isLoading?: boolean;
};

export function FormBuilderPreview({ fields = [], onSubmit = () => { }, isLoading }: Props) {
  const { formMethods } = useFormPreview({ fields });
  const { t } = useI18n()

  console.log(formMethods.formState.errors)
  return (
    <FormProvider {...formMethods} >
      <form onSubmit={formMethods.handleSubmit(onSubmit)} >
        <div className="canvas w-full">
          <div className="canvas-fields flex flex-wrap w-full p-2">
            {fields?.map((field, i) => (
              <Field key={i} {...field} />
            ))}
          </div>
        </div>
        <div className="mt-4 text-right ml-auto w-[250px] mb-6">
          <Button
            className="text-white font-semibold"
            text={t("Words.send")}
            isLoading={isLoading}
          />
        </div>
      </form>
    </FormProvider >
  );
}
