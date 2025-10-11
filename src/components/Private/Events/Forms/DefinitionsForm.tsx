import { useFormContext } from "react-hook-form";
import i18n from "@configs/i18n";
import { Input } from "@components/shared/forms/Input";
import { TextEdit } from "@components/shared/forms/TextEdit";
import { File } from "@components/shared/forms/File";
import { Datetime } from "@components/shared/forms/DateTime";
import { EventsPayload } from "./Schemas";
import { Select } from "@components/shared/forms/Select";
import { FormsShape } from "@type/Forms";

type Props = {
  forms?: Array<FormsShape>;
};

export function DefinitionsForm({ forms }: Props) {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext<EventsPayload>();

  return (
    <>
      <div className="form-group w-full mb-4 lg:mb-6">
        <Input
          {...register("name")}
          dataTestId="name"
          label={i18n("Words.name")}
          required={true}
          errors={errors.name}
        />
      </div>
      <div className="form-row flex flex-wrap lg:flex-none justify-between">
        <div className="form-select w-full lg:w-[48%]">
          <Datetime
            {...register("realized_at")}
            dataTestId="realized_at"
            type="datetime-local"
            label={i18n(`Words.realized_at`)}
            defaultValue={getValues("realized_at") ?? ""}
            errors={errors.realized_at}
          />
        </div>
        <div className="form-select w-full lg:w-[48%]">
          <Datetime
            {...register("completed_at")}
            dataTestId="completed_at"
            type="datetime-local"
            label={i18n(`Words.completed_at`)}
            defaultValue={getValues("completed_at") ?? ""}
            errors={errors.completed_at}
          />
        </div>
      </div>
      <div className="form-row flex flex-wrap lg:flex-none justify-between mt-6">
        <div className="form-select w-full">
          <File
            {...register("banner")}
            dataTestId="event_image"
            label={i18n(`Screens.dashboard.events.event_image`)}
            accept=".jpg,.jpge,.png"
            errors={errors.banner}
          />
        </div>
      </div>
      <div className="mt-6">
        <Input
          {...register("address")}
          dataTestId="address"
          label={i18n(`Words.address`)}
          errors={errors.address}
        />
      </div>
      <div className="w-full my-4">
        <Input
          {...register("confirmation_expired_time")}
          type={"number"}
          dataTestId="confirmation_expired_time"
          min={0}
          label={i18n(`Texts.confirm_expired_time`)}
          errors={errors.confirmation_expired_time}
        />
      </div>
      <div className="w-full my-4">
        <Select
          {...register("form_id")}
          label={i18n("Words.form")}
          dataTestId="forms"
          options={[
            {
              text: "--",
              value: "",
            },
            ...(forms ?? [])?.map((form: FormsShape) => ({
              text: form.name,
              value: form.id,
              selected: getValues("form_id") === String(form.id),
            })),
          ]}
        />
      </div>
      <div className="w-full my-4">
        <Select
          {...register("feedback_id")}
          label={'Feedback'}
          dataTestId="forms"
          options={[
            {
              text: "--",
              value: "",
            },
            ...(forms ?? [])?.map((form: FormsShape) => ({
              text: form.name,
              value: form.id,
              selected: getValues("feedback_id") === String(form.id),
            })),
          ]}
        />
      </div>
      <div className="form-row mt-6">
        <TextEdit
          {...register("description")}
          dataTestId="describe"
          label={i18n(`Words.describe`)}
          placeholder="Escreva detalhes sobre o passeio"
          errors={errors.description}
        />
      </div>
    </>
  );
}
