import { FieldErrors, UseFormRegister } from "react-hook-form";
import i18n from "@configs/i18n";
import { Select } from "@components/shared/forms/Select";
import { Input } from "@components/shared/forms/Input";
import { TextArea } from "@components/shared/forms/TextArea";
import { ServicesPayload } from "./Schemas";

type Props = {
  register: UseFormRegister<ServicesPayload>;
  errors: FieldErrors<ServicesPayload>;
};

export function DefinitionsForm({ register, errors }: Props) {
  return (
    <>
      <div className="form-group w-full mb-6">
        <Input
          {...register("name")}
          dataTestId="name"
          label={i18n("words.service_name")}
          required={true}
          errors={errors.name}
        />
      </div>
      <div className="form-row flex  justify-between">
        <div className="form-select w-full lg:w-[48%]">
          <Select
            {...register("type")}
            dataTestId="type"
            label={i18n(`words.service_type`)}
            options={[
              {
                text: i18n("words.appellant"),
                value: "APPELLANT",
              },
              {
                text: i18n("words.punctual"),
                value: "PUNCTUAL",
              },
            ]}
            required={true}
            errors={errors.type}
          />
        </div>
        <div className="form-select w-full lg:w-[48%]">
          <Select
            {...register("status")}
            dataTestId="status"
            label={i18n(`words.service_status`)}
            options={[
              {
                text: i18n("words.active"),
                value: "ACTIVE",
              },
              {
                text: i18n("words.inactive"),
                value: "INACTIVE",
              },
            ]}
            required={true}
            errors={errors.type}
          />
        </div>
      </div>
      <div className="form-row mt-6">
        <TextArea
          {...register("description")}
          dataTestId="describe"
          className="h-28"
          label={i18n(`words.describe`)}
          errors={errors.description}
        />
      </div>
    </>
  );
}
