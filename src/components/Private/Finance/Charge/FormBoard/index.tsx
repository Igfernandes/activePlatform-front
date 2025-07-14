import { useForms } from "../hooks/useForms";
import { InfoBoard } from "@components/shared/forms/InfoBoard/form";
import { TInput } from "@components/shared/forms/InfoBoard/fields/Input";
import i18n from "@configs/i18n";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { ChargeShape } from "@type/Charges";
import { FormBoardHeader } from "./header";
import { TSelect } from "@components/shared/forms/InfoBoard/fields/Select";
import { When } from "@components/utilities/When";

dayjs.extend(customParseFormat);

type Props = {
  charge: ChargeShape;
};

export function FormBoard({ charge }: Props) {
  const { formMethods, submit, errors, isLoadingPutCharge, services } =
    useForms({ charge });

  return (
    <div className="bg-white py-7 px-4 rounded-lg">
      <div className="mb-6">
        <FormBoardHeader charge={charge} setValue={formMethods.setValue} />
      </div>
      <InfoBoard
        formMethods={formMethods}
        submit={submit}
        isLoading={isLoadingPutCharge}
      >
        <TInput
          label={i18n("Words.name")}
          name={"title"}
          dataTestId="title"
          errors={errors.title?.message}
          defaultValue={charge.title}
        />
        <TSelect
          label={i18n("Words.service")}
          name={"service"}
          dataTestId="service"
          options={
            services?.map((service) => ({
              id: service.id,
              name: service.name,
            })) ?? []
          }
          errors={errors.service_id}
          defaultValue={charge.service?.id}
        />
        <When value={charge.type === "APPELLANT"}>
          <TInput
            label={i18n("Words.period")}
            name={"period"}
            dataTestId="period"
            errors={errors.period?.message}
            defaultValue={String(charge.period)}
            type="number"
          />
          <TInput
            label={i18n("Words.started_at")}
            name={"started_at"}
            dataTestId="started_at"
            errors={errors.started_at?.message}
            defaultValue={charge.started_at}
            type="number"
          />
        </When>
        <When value={charge.type !== "APPELLANT"}>
          <TInput
            label={i18n("Words.amount")}
            name={"amount"}
            dataTestId="amount"
            errors={errors.amount?.message}
            defaultValue={String(charge.amount)}
            type="number"
          />
        </When>
        <TInput
          label={i18n("Words.price")}
          name={"price"}
          dataTestId="price"
          errors={errors.price?.message}
          defaultValue={String(charge.price)}
          type="number"
        />
        <TInput
          label={i18n("Texts.promotional_price")}
          name={"promotional_price"}
          dataTestId="promotional_price"
          errors={errors.promotional_price?.message}
          defaultValue={String(charge.promotional_price)}
          type="number"
        />
        <TInput
          label={i18n("Words.expired_days")}
          name={"expired_days"}
          dataTestId="expired_days"
          className="bg-white"
          type="number"
          min={1}
          defaultValue={String(charge.expired_days)}
        />
      </InfoBoard>
    </div>
  );
}
