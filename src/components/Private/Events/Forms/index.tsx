import i18n from "@configs/i18n";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { DefinitionsForm } from "./DefinitionsForm";
import { When } from "@components/utilities/When";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { useStateFields } from "./hooks/useStateFields";
import { getFileUrl } from "@helpers/file";
import Image from "next/image";
import { ToggleSwitch } from "@components/shared/forms/ToggleSwitch";
import { Input } from "@components/shared/forms/Input";
import { InscribesTable } from "./InscribesTable";
import { TextEdit } from "@components/shared/forms/TextEdit";
import { useEffect } from "react";
import { EventShape } from "@type/Events";
import { useEventsForm } from "./hooks/useEventsForm";

type Props = {
  event?: EventShape;
};

export function EventsForm({ event }: Props) {
  const { formMethods, forms, register, handleSubmit, submit, errors, isLoading } =
    useEventsForm({ event });
  const router = useRouter();
  const { handleCleanForm, handleUpdateForm } = useStateFields({ formMethods });
  const { watch, setValue } = formMethods;
  const banner = watch("banner") ?? [];
  const stock = +formMethods.watch("stock");

  useEffect(() => {
    if (!event) return;

    handleUpdateForm(event);
  }, [event]);

  return (
    <>
      <When value={banner.length > 0 || !!event?.banner}>
        <div className="image mb-2 bg-white rounded-xl">
          <div className="">
            <Image
              src={
                getFileUrl(banner ? banner[0] : null, event?.banner) ??
                event?.banner
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
              <strong>{i18n(`Words.definition`)}</strong>
            </h1>
          </div>
          <div className="flex ">
            <div className="form-select w-full lg:w-[15%] min-w-[130px] mt-4 lg:mt-auto">
              <ToggleSwitch
                setValue={setValue}
                name="status"
                dataTestId="status"
                label={i18n(`Words.service_status`)}
                defaultValue={event?.status}
                options={{
                  left: {
                    text: i18n("Words.active"),
                    value: "ACTIVE",
                  },
                  right: {
                    text: i18n("Words.inactive"),
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

              <div className="my-6">
                <Input
                  {...register("stock")}
                  type="number"
                  dataTestId="limit_vacancies"
                  label={i18n(
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
                  label={i18n(`Screens.dashboard.services.inscribes_alert`)}
                  placeholder={i18n(
                    "Screens.dashboard.services.text_alert_about_alerts_inscribes"
                  )}
                  errors={errors.alerts}
                />
              </div>
              <div className="flex flex-wrap lg:flex-none justify-between mt-12 items-center relative">
                <When value={!event}>
                  <div className="w-full lg:w-auto mb-4 lg:mb-auto">
                    <span onClick={handleCleanForm} className="cursor-pointer">
                      <strong>{i18n("Words.clean")}</strong>
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
                        text={i18n(`Words.cancel`)}
                        type="button"
                        onClick={() => router.push(privateRoutes.services)}
                      />
                    </div>
                    <div className="ml-4 w-[47%] lg:w-auto">
                      <Button
                        className="py-3 px-8  bg-red text-white rounded-xl w-full"
                        text={
                          !event ? i18n(`Words.save`) : i18n(`Words.update`)
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
              stock: stock,
            }}
            stock={stock}
            title={i18n("Words.inscribes")}
          />
        </div>
      </When>
    </>
  );
}
