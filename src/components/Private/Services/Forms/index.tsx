import i18n from "@configs/i18n";
import { FormProvider } from "react-hook-form";
import { useServicesForm } from "./hooks/useServicesForm";
import { Button } from "@components/shared/layouts/Button";
import { DefinitionsForm } from "./DefinitionsForm";
import { ServicesShape } from "../../../../types/Services";
import { When } from "@components/utilities/When";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { useStateFields } from "./hooks/useStateFields";
import Image from "next/image";
import { useNavigator } from "@hooks/useNavigator";
import useWindow from "@hooks/useWindow";
import { ToggleSwitch } from "@components/shared/forms/ToggleSwitch";
import { TextEdit } from "@components/shared/forms/TextEdit";
import { FormsTable } from "./FormsTable";
import { Link } from "@assets/Icons/black/Link";
import { useEffect } from "react";

type Props = {
  service?: ServicesShape;
};

export function ServicesForm({ service }: Props) {
  const { formMethods, register, handleSubmit, submit, errors, isLoading } =
    useServicesForm({ service });
  const router = useRouter();
  const { handleCleanForm, handleUpdateForm } = useStateFields({ formMethods });
  const { watch, setValue } = formMethods;
  const { handleCopy } = useNavigator();
  const { baseUrl } = useWindow();
  const photo = watch("photo") ?? [];

  useEffect(() => {
    if (!service) return;

    handleUpdateForm(service);
  }, [service]);

  return (
    <>
      <When value={photo.length > 0 || !!service?.photo}>
        <div className="image mb-2 bg-white rounded-xl">
          <div className="">
            <Image
              src={
                photo ??
                service?.photo
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
                defaultValue={service?.status}
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
                className="px-3 py-2 shadow-md rounded-md cursor-pointer hover:bg-red ml-2"
                onClick={() =>
                  handleCopy(`${baseUrl}/services?key=${service?.id}`)
                }
              >
                <Link />
              </div>
            </When>
          </div>
        </div>
        <div>
          <FormProvider {...formMethods}>
            <form onSubmit={handleSubmit(submit)}>
              <DefinitionsForm />
              <div className="form-subtitle my-6">
                <h2>
                  <strong>
                    {i18n(`Screens.dashboard.services.settings_privacy`)}
                  </strong>
                </h2>
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
              <div className="my-10 ">
                <When value={!!service}>
                  <div className="my-10">
                    <FormsTable service={service as ServicesShape} />
                  </div>
                </When>
              </div>

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
