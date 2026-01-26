import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { DefinitionsForm } from "./DefinitionsForm";
import { When } from "@components/utilities/When";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { useStateFields } from "./hooks/useStateFields";
import Image from "next/image";
import { ToggleSwitch } from "@components/shared/forms/ToggleSwitch";
import { Input } from "@components/shared/forms/Input";
import { InscribesTable } from "./InscribesTable";
import { TextEdit } from "@components/shared/forms/TextEdit";
import { EventShape } from "@type/Events";
import { useEventsForm } from "./hooks/useEventsForm";
import { useI18n } from "@contexts/I18n";

type Props = {
  event?: EventShape;
};

export function EventsForm({ event }: Props) {
  const { t } = useI18n()
  const { formMethods, forms, register, handleSubmit, submit, errors, isLoading } =
    useEventsForm({ event });
  const router = useRouter();
  const { handleCleanForm } = useStateFields({ formMethods });
  const { watch, setValue } = formMethods;
  const banner = watch("banner");
  const stock = formMethods.watch("stock");

  return (
    <>
      <When value={!!banner}>
        <div className="image mb-2 bg-white rounded-xl">
          <div className="">
            <Image
              src={
                banner ?? ""
              }
              width={200}
              height={100}
              className="w-full object-cover h-[35vh]"
              alt=""
            />
          </div>
        </div>
      </When>
      <div className="bg-white p-6 rounded-xl">
        <div className="flex flex-wrap justify-between mb-6">
          <div>
            <h1 className="text-2xl">
              <strong>{t(`Screens.events.form.title`)}</strong>
            </h1>
          </div>
          <div className="flex ">
            <div className="form-select w-full lg:w-[15%] min-w-[130px] mt-4 lg:mt-auto">
              <ToggleSwitch
                setValue={setValue}
                name="status"
                dataTestId="status"
                label={t(`Words.service_status`)}
                defaultValue={event?.status}
                options={{
                  left: {
                    text: t("Words.active"),
                    value: "ACTIVE",
                  },
                  right: {
                    text: t("Words.inactive"),
                    value: "INACTIVE",
                  },
                }}
                errors={errors.status}
              />
            </div>
          </div>
        </div>
        <div>
          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(submit)}>
              <DefinitionsForm forms={forms} />

              <div className="my-6 pt-6">
                <Input
                  {...register("stock", {
                    valueAsNumber: true,
                  })}
                  required={true}
                  type="number"
                  dataTestId="limit_vacancies"
                  label={t(
                    "Screens.dashboard.services.inform_limit_vacancies"
                  )}
                  max={99999}
                  className="line-clamp-1"
                  errors={errors.stock}
                />
              </div>
              <div className="form-row mt-6">
                <TextEdit
                  {...register("alerts")}
                  dataTestId="alerts"
                  label={t(`Screens.dashboard.services.inscribes_alert`)}
                  placeholder={t(
                    "Screens.dashboard.services.text_alert_about_alerts_inscribes"
                  )}
                  maxLength={14000}
                  errors={errors.alerts}
                />
              </div>
              <div className="flex flex-wrap pt-6 lg:flex-none justify-between mt-12 items-center relative">
                <When value={!event}>
                  <div className="w-full lg:w-auto mb-4 lg:mb-auto">
                    <span onClick={handleCleanForm} className="cursor-pointer">
                      <strong>{t("Words.clean")}</strong>
                    </span>
                  </div>
                </When>
                <div
                  className={
                    !event
                      ? "flex items-center flex-wrap lg:flex-nowrap w-full lg:w-auto"
                      : "ml-auto"
                  }
                >
                  <div className="flex justify-between w-full">
                    <div className="lg:ml-8 w-[47%] lg:w-auto">
                      <Button
                        className="py-3 px-6  border-[1px] border-secondary rounded-xl w-full"
                        text={t(`Words.cancel`)}
                        type="button"
                        onClick={() => router.push(privateRoutes.services)}
                      />
                    </div>
                    <div className="ml-4 w-[47%] lg:w-auto">
                      <Button
                        className="py-3 px-8  bg-red text-white rounded-xl w-full"
                        text={
                          !event ? t(`Words.save`) : t(`Words.update`)
                        }
                        isLoading={isLoading}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
      <When value={!!event}>
        <div className="relative z-10 my-10">
          <InscribesTable
            event={{
              ...(event as EventShape),
              stock,
            }}
            title={t("Words.inscribes")}
          />
        </div>
      </When>
    </>
  );
}
