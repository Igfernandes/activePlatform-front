import { Input } from "@components/shared/forms/Input";
import { TextArea } from "@components/shared/forms/TextArea";
import i18n from "@configs/i18n";
import { useFormContext } from "react-hook-form";
import { FormsPayload } from "./schema";
import { Select } from "@components/shared/forms/Select";
import { useFormsData } from "./hooks/useFormsData";
import { When } from "@components/utilities/When";
import { ComponentsProps } from "./type";

type Props = Pick<ComponentsProps, "handleChangeFormFields">;

export function Definitions({ handleChangeFormFields }: Props) {
  const { forms } = useFormsData();
  const {
    register,
    formState: { errors },
  } = useFormContext<FormsPayload>();

  return (
    <div className="form-definitions">
      <div className="form-row flex flex-wrap mb-4 justify-between">
        <div className="form-group w-full">
          <Input
            {...register("name")}
            label={i18n(`Words.form_name`)}
            dataTestId="form_name"
            required={true}
            errors={errors.name}
          />
        </div>
      </div>
      <div className="form-group mb-4">
        <When value={forms.length > 0}>
          <Select
            {...register("template")}
            options={[
              {
                text: "--",
                value: "",
              },
              ...forms.map((form) => ({
                text: form.name,
                value: form.id,
              })),
            ]}
            onChange={(ev) => {
              const formId = ev.currentTarget.value;
              if (!formId) handleChangeFormFields([]);

              const targetForm = forms.find((form) => form.id === +formId);

              if (!targetForm?.components) return;

              handleChangeFormFields(JSON.parse(targetForm?.components));
            }}
            dataTestId="templates-forms"
            label={i18n("Words.templates")}
          />
        </When>
        <When value={forms.length == 0}>
          <span className="bg-disabled border-2 border-tertiary block p-4">
            {i18n("Words.not_found_templates")}
          </span>
        </When>
      </div>
      <div className="form-group">
        <TextArea
          {...register("description")}
          label={i18n("Words.description")}
          dataTestId="description"
          maxLength={200}
          errors={errors.description}
        />
      </div>
    </div>
  );
}
