import { Input } from "@components/shared/forms/Input";
import { Radio } from "@components/shared/forms/Radio";
import i18n from "@configs/i18n";
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { ServicesPayload } from "./Schemas";

type Props = {
  register: UseFormRegister<ServicesPayload>;
  watch: UseFormWatch<ServicesPayload>;
  errors: FieldErrors<ServicesPayload>;
};

export function LimitAndReservationForm({ register, watch, errors }: Props) {
  
  return (
    <>
      <div className="my-3 lg:my-6 flex flex-wrap lg:flex-none">
        <div>
          <p>{i18n(`Screens.dashboard.services.has_limit_vacancies`)}</p>
        </div>
        <div className="flex mt-2 lg:mt-auto">
          <div className="mx-0 lg:mx-1">
            <Radio
              {...register("disabledLimitVacancies")}
              dataTestId="disabled_limit_vacancies_yes"
              label={i18n(`Words.yes`)}
              value={i18n(`Words.yes`)}
            />
          </div>
          <div className="mx-1">
            <Radio
              {...register("disabledLimitVacancies")}
              dataTestId="disabled_limit_vacancies_no"
              label={i18n(`Words.not`)}
              value={i18n(`Words.not`)}
            />
          </div>
        </div>
      </div>
      <div className="my-6">
        <Input
          {...register("stock")}
          type="number"
          dataTestId="limit_vacancies"
          label={i18n("Screens.dashboard.services.inform_limit_vacancies")}
          disabled={watch("disabledLimitVacancies") === "Não"}
          max={99999}
          className="line-clamp-1"
          errors={errors.stock}
        />
      </div>
      <div className="my-3 lg:my-6 flex flex-wrap lg:flex-none">
        <div>
          <p>{i18n(`Screens.dashboard.services.has_limit_reservation`)}</p>
        </div>
        <div className="flex mt-2 lg:mt-auto">
          <div className="mx-0 lg:mx-1">
            <Radio
              {...register("disabledReservationVacancies")}
              dataTestId="disabled_reservation_vacancies_yes"
              label={i18n(`Words.yes`)}
              value={i18n(`Words.yes`)}
            />
          </div>
          <div className="mx-1">
            <Radio
              {...register("disabledReservationVacancies")}
              dataTestId="disabled_reservation_vacancies_no"
              label={i18n(`Words.not`)}
              value={i18n(`Words.not`)}
            />
          </div>
        </div>
      </div>
      <div className="my-6">
        <Input
          {...register("reservations")}
          type="number"
          dataTestId="reservation_vacancies"
          label={i18n("Screens.dashboard.services.inform_limit_reservation")}
          disabled={watch("disabledReservationVacancies") === "Não"}
          max={99999}
          errors={errors.reservations}
        />
      </div>
    </>
  );
}
