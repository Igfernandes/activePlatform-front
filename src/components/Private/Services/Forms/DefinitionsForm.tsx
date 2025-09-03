import { useFormContext } from "react-hook-form";
import i18n from "@configs/i18n";
import { Input } from "@components/shared/forms/Input";
import { TextEdit } from "@components/shared/forms/TextEdit";
import { ServicesPayload } from "./Schemas";
import { File } from "@components/shared/forms/File";
import { Datetime } from "@components/shared/forms/DateTime";

export function DefinitionsForm() {
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext<ServicesPayload>();
  return (
    <>
      <div className="form-group w-full mb-4 lg:mb-6">
        <Input
          {...register("name")}
          dataTestId="name"
          label={i18n("Words.service_name")}
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
            {...register("expired_at")}
            dataTestId="expired_at"
            type="datetime-local"
            label={i18n(`Words.expired_at`)}
            defaultValue={getValues("expired_at") ?? ""}
            errors={errors.expired_at}
          />
        </div>
      </div>
      <div className="form-row flex flex-wrap lg:flex-none justify-between mt-6">
        <div className="form-select w-full">
          <File
            {...register("photo")}
            dataTestId="service_image"
            label={i18n(`Screens.dashboard.services.service_image`)}
            accept=".jpg,.jpge,.png"
            errors={errors.photo}
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
      <div className="mt-6">
        <Input
          {...register("gratuity")}
          type={"number"}
          dataTestId="gratuity"
          min={0}
          max={120}
          label={i18n(`Texts.until_years_gratuity`)}
          errors={errors.gratuity}
        />
      </div>
      <div className="mt-6">
        <Input
          {...register("snippet")}
          type={"text"}
          dataTestId="snippet"
          min={0}
          maxLength={40}
          label={i18n(`Texts.brief_description`)}
          errors={errors.snippet}
        />
        <span className="text-xs text-red">{i18n("Texts.max_length_40")}</span>
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
