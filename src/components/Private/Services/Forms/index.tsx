import i18n from "@configs/i18n";
import { FormProvider } from "react-hook-form";
import { useServicesForm } from "./hooks/useServicesForm";
import { Button } from "@components/shared/layouts/Button";
import { DefinitionsForm } from "./DefinitionsForm";
import { ServicesShape } from "../../../../types/Services";
import { When } from "@components/utilities/When";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { useEffect } from "react";
import { useStateFields } from "./hooks/useStateFields";
import { getFileUrl } from "@helpers/file";
import Image from "next/image";
import { FloppyDisk } from "@assets/Icons/black/FloppyDisck";
import { useNavigator } from "@hooks/useNavigator";
import useWindow from "@hooks/useWindow";
import { ToggleSwitch } from "@components/shared/forms/ToggleSwitch";
import { Input } from "@components/shared/forms/Input";
import { Radio } from "@components/shared/forms/Radio";
import { InscribesTable } from "./InscribesTable";
import { TextEdit } from "@components/shared/forms/TextEdit";

type Props = {
  service?: ServicesShape;
};

export function ServicesForm({ service }: Props) {
  const { formMethods, register, handleSubmit, submit, errors, isLoading } =
    useServicesForm({ service });
  const router = useRouter();
  const { handleCleanForm, handleUpdateForm } = useStateFields({ formMethods });
  const { watch, setValue, getValues } = formMethods;
  const { handleCopy } = useNavigator();
  const { baseUrl } = useWindow();

  useEffect(() => {
    if (!service) return;
    handleUpdateForm(service);
  }, [service]);

  return (
    <>
      <When
        value={
          !!service?.photo ||
          !!getFileUrl(watch("photo") ? watch("photo")[0] : null)
        }
      >
        <div className="image mb-2 bg-white rounded-xl">
          <div className="">
            <Image
              src={
                service?.photo ??
                getFileUrl(watch("photo") ? watch("photo")[0] : null)
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
            <When value={!!service}>
              <div
                className="px-4 py-2 shadow-md rounded-md cursor-pointer ml-2"
                onClick={() =>
                  handleCopy(`${baseUrl}/services?key=${service?.id}`)
                }
              >
                <FloppyDisk className="hover:fill-red" />
              </div>
            </When>
          </div>
        </div>
        <div>
          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(submit)}>
              <DefinitionsForm service={service} />
              <div className="form-subtitle my-6">
                <h2>
                  <strong>
                    {i18n(`Screens.dashboard.services.settings_privacy`)}
                  </strong>
                </h2>
              </div>
              <div className="my-3 lg:my-6 flex flex-wrap lg:flex-none">
                <div>
                  <p>
                    {i18n(`Screens.dashboard.services.has_limit_vacancies`)}
                  </p>
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
                  label={i18n(
                    "Screens.dashboard.services.inform_limit_vacancies"
                  )}
                  disabled={watch("disabledLimitVacancies") === "Não"}
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
                  defaultValue={getValues("alerts")}
                  placeholder={i18n(
                    "Screens.dashboard.services.text_alert_about_alerts_inscribes"
                  )}
                  errors={errors.alerts}
                />
              </div>
              <When value={!!service}>
                <div className="my-10">
                  <InscribesTable
                    service={service as ServicesShape}
                    stock={+formMethods.watch("stock")}
                    title={i18n("Words.inscribes")}
                  />
                </div>
              </When>
              <div className="flex flex-wrap lg:flex-none justify-between mt-12 items-center relative">
                <When value={!service}>
                  <div className="w-full lg:w-auto mb-4 lg:mb-auto">
                    <span onClick={handleCleanForm} className="cursor-pointer">
                      <strong>{i18n("Words.clean")}</strong>
                    </span>
                  </div>
                </When>
                <div
                  className={
                    !service
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
                          !service ? i18n(`Words.save`) : i18n(`Words.update`)
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
    </>
  );
}
