import { Input } from "@components/shared/forms/Input";
import { Select } from "@components/shared/forms/Select";
import i18n from "@configs/i18n";
import { useDefinitions } from "./hooks/useDefinitions";
import { useFormContext } from "react-hook-form";
import { ChargesPayload } from "./schemas";
import { When } from "@components/utilities/When";

export function Definitions() {
  const { services } = useDefinitions();
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext<ChargesPayload>();

  return (
    <div className="bg-white  py-4 px-6 rounded-xl mb-6">
      <div className="form-title mt-3 mb-5">
        <h3 className="text-xl">
          <strong>{i18n("Words.definitions")}</strong>
        </h3>
      </div>
      <div className="form-row flex flex-wrap mb-6 justify-between">
        <div className="form-group w-full lg:w-[48%]">
          <Input
            {...register("title")}
            dataTestId="title"
            label={i18n("Words.charge_name")}
            errors={errors.title}
          />
        </div>
        <div className="form-group w-full lg:w-[48%] mt-4 lg:mt-0">
          <Select
            {...register("service_id")}
            dataTestId="service"
            label={`${i18n("Words.service")} (${i18n("Words.optional")})`}
            options={[
              {
                text: i18n("Words.select_service"),
                value: 0,
              },
              ...services.map((service) => ({
                text: service.name,
                value: service.id,
              })),
            ]}
            errors={errors.service_id}
          />
          <span className="text-xs text-red ml-2 block mt-1">
            {i18n(`Screens.dashboard.finances.about_name_and_service`)}
          </span>
        </div>
      </div>
      <div className="form-row flex flex-wrap mb-6 justify-between">
        <div className="form-group w-full lg:w-[48%]">
          <Select
            {...register("privacy")}
            dataTestId="privacy"
            label={i18n("Words.privacy")}
            options={["PUBLIC", "PRIVATE"].map((type) => ({
              text: i18n(`Words.${type.toLowerCase()}`),
              value: type,
            }))}
            required={true}
            errors={errors.privacy}
          />
          <span className="text-xs text-red ml-2 block mt-1">
            {i18n(`Screens.dashboard.finances.about_privacy_and_services`)}
          </span>
        </div>
        <div className="form-group w-full lg:w-[48%]">
          <Select
            {...register("type")}
            dataTestId="type"
            label={i18n("Words.charge_type")}
            options={["APPELLANT", "PUNCTUAL"].map((type) => ({
              text: i18n(`Words.${type.toLowerCase()}`),
              value: type,
            }))}
            errors={errors.type}
          />
        </div>
      </div>
      <div className="form-row flex flex-wrap mb-6 justify-between">
        <When value={watch("type") === "APPELLANT"}>
          <div className="w-full md:w-[48%] ">
            <Input
              {...register("period")}
              dataTestId="period"
              type="number"
              min={1}
              label={`${i18n("Words.period")} (${i18n("Words.months")})`}
              errors={errors.type}
              required={true}
            />
            <span className="text-xs text-red ml-2 block mt-1">
              {i18n(`Screens.dashboard.finances.about_period`)}
            </span>
          </div>
        </When>
        <When value={watch("type") !== "APPELLANT"}>
          <div className="form-group w-full lg:w-[48%] lg:mt-0">
            <Input
              {...register("amount")}
              type="number"
              dataTestId="amount"
              label={`${i18n("Words.charge_amount")}`}
              min={1}
              required={true}
              errors={errors.amount}
            />
          </div>
        </When>
        <div className="form-group w-full lg:w-[48%] mt-4 lg:mt-0">
          <Input
            {...register("expired_days")}
            type="number"
            placeholder=" "
            min="0"
            dataTestId="expired_days"
            label={`${i18n("Words.expired_days")} (${i18n("Words.optional")})`}
            errors={errors.expired_days}
          />
        </div>
      </div>
      <div>
        <When value={watch("type") === "APPELLANT"}>
          <div className="w-full md:w-[48%] my-6">
            <Input
              {...register("started_at")}
              dataTestId="started_at"
              type="datetime-local"
              placeholder=" "
              label={`${i18n("Words.started_at")}`}
              errors={errors.type}
              required={true}
            />
          </div>
        </When>
      </div>
      <div className="form-row flex flex-wrap mb-6 justify-between">
        <div className="form-group w-full lg:w-[48%]">
          <Input
            {...register("price")}
            dataTestId="price"
            label={i18n("Words.price")}
            type="number"
            errors={errors.price}
          />
        </div>
        <div className="form-group w-full lg:w-[48%] mt-4 lg:mt-0">
          <Input
            {...register("promotional_price")}
            dataTestId="promotional_price"
            errors={errors.promotional_price}
            label={`${i18n("Texts.promotional_price")} (${i18n(
              "Words.optional"
            )})`}
            type="number"
          />
        </div>
      </div>
    </div>
  );
}
