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
import { ClientCategoriesShape } from "@type/Clients/ClientCategories";
import Link from "next/link";

type Props = Pick<ComponentsProps, "handleChangeFormFields"> & {
  slug?: string;
};

export function Definitions({ handleChangeFormFields, slug }: Props) {
  const { forms, services, categories, events } = useFormsData();
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
      <div className="form-group w-full">
        <Input
          {...register("stock")}
          label={i18n(`Words.vacancies_total`)}
          dataTestId="form_stock"
          type="number"
          errors={errors.stock}
        />
      </div>
      <div className="flex flex-wrap justify-between my-4">
        <div className="w-100 md:w-[49%]">
          <Select
            {...register("has_event")}
            label={i18n("Texts.has_event")}
            dataTestId="services"
            defaultValue={events && events.length > 0 ? 1 : 0}
            options={[
              {
                text: i18n("Words.not"),
                value: 0,
                selected: !events || events.length === 0
              },
              {
                text: i18n("Words.yes"),
                value: 1,
                selected: events && events.length > 0
              },
            ]}
          />
          <When value={events && events.length > 0}>
            <div className="mt-2">
              <Link className="text-red text-sm" href={events ? `/dashboard/events/${events[0].id}` : "#"} >
                <u>{i18n("Texts.view_event")}</u>
              </Link>
            </div>
          </When>
        </div>
        <div className="w-100 md:w-[49%]">
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
              })),
            ]}
          />
        </div>
      </div>
      <div className="my-4">

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
      <div className="form-group my-6">
        <Select
          {...register("category")}
          label={i18n("Words.category")}
          dataTestId="category"
          options={[
            {
              text: "--",
              value: "",
            },
            ...(categories ?? [])?.map((category: ClientCategoriesShape) => ({
              text: category.name,
              value: String(category.id),
              selected: getValues("category") === String(category.id),
            })),
          ]}
        />
        <span className="text-red text-sm">
          <strong>AVISO:</strong> A categoria acima selecionada será atrelada aos clientes gerados por
          esse formulário.
        </span>
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
