import { Input } from "@components/shared/forms/Input";
import { TextArea } from "@components/shared/forms/TextArea";
import i18n from "@configs/i18n";
import { useFormContext } from "react-hook-form";
import { FormsPayload } from "./schema";
import { Select } from "@components/shared/forms/Select";
import { useFormsData } from "./hooks/useFormsData";
import { When } from "@components/utilities/When";
import { ComponentsProps } from "./type";
import { ServicesShape } from "@type/Services";
import { Datetime } from "@components/shared/forms/DateTime";
import { TopBar } from "./TopBar";
import { TextEdit } from "@components/shared/forms/TextEdit";

type Props = Pick<ComponentsProps, "handleChangeFormFields"> & {
  slug?: string;
};

export function Definitions({ handleChangeFormFields, slug }: Props) {
  const { forms, services } = useFormsData();
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext<FormsPayload>();

  return (
    <div className="form-definitions">
      <TopBar slug={slug} />
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
      <div className="my-4">
        <Select
          {...register("service_id")}
          label={i18n("Words.service")}
          dataTestId="services"
          options={[
            {
              text: "--",
              value: "",
            },
            ...(services ?? [])?.map((service: ServicesShape) => ({
              text: service.name,
              value: service.id,
              selected: getValues("service_id") === String(service.id),
            })),
          ]}
        />
      </div>
      <div className="flex flex-wrap md:flex-nowrap my-4">
        <div className="form-group w-full md:w-1/2 md:mr-2">
          <Datetime
            {...register("started_at")}
            label={i18n("Words.started_at")}
            dataTestId="started_at"
          />
        </div>
        <div className="form-group w-full my-4 md:my-auto md:w-1/2 md:ml-2">
          <Datetime
            {...register("expired_at")}
            label={i18n("Words.expired_at")}
            dataTestId="expired_at"
          />
        </div>
      </div>
      <div className="form-group">
        <TextArea
          {...register("description")}
          label={i18n("Words.description")}
          dataTestId="description"
          maxLength={800}
          errors={errors.description}
        />
      </div>
      <div className="form-row mt-6">
        <TextEdit
          {...register("thanks_message")}
          dataTestId="alerts"
          label={i18n(`Texts.thanks_message`)}
          defaultValue={getValues("thanks_message") ?? ""}
          placeholder={i18n("Screens.dashboard.forms.about_thanks_message")}
          errors={errors.thanks_message}
        />
      </div>
    </div>
  );
}
