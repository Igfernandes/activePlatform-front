import i18n from "@configs/i18n";
import { FormProvider } from "react-hook-form";
import { useServicesForm } from "./hooks/useServicesForm";
import { Button } from "@components/shared/layouts/Button";
import { LimitAndReservationForm } from "./LimitAndReservationForm";
import { DefinitionsForm } from "./DefinitionsForm";
import { RadioBox } from "@components/shared/forms/RadioBox";
import { UserGroup } from "@assets/Icons/black/UserGroup";
import { Lock } from "@assets/Icons/black/Lock";
import { Checkbox } from "@components/shared/layouts/Checkbox";
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

  useEffect(() => {
    if (!service) return;
    handleUpdateForm(service);
  }, [service]);

  return (
    <>
      <When value={!!service?.photo || !!getFileUrl(watch("photo"))}>
        <div className="image mb-2 bg-white rounded-xl">
          <div className="">
            <Image
              src={service?.photo ?? getFileUrl(watch("photo"))}
              width={200}
              height={100}
              className="w-full object-contain h-[30vh]"
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
                className="px-4 pt-5 shadow-md rounded-md cursor-pointer ml-2"
                onClick={() =>
                  handleCopy(`${baseUrl}/services?key=${service?.id}`)
                }
              >
                <FloppyDisk />
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
                  <strong>{i18n(`Screens.dashboard.services.settings_privacy`)}</strong>
                </h2>
              </div>
              <div className="flex flex-wrap lg:flex-none justify-between">
                <div className="w-full lg:w-[48%]">
                  <RadioBox
                    {...register("privacy")}
                    icon={<UserGroup />}
                    defaultValue={"PUBLIC"}
                    dataTestId="privacy_public"
                    label={i18n(`Words.public`)}
                  />
                </div>
                <div className="w-full lg:w-[48%]">
                  <RadioBox
                    {...register("privacy")}
                    icon={<Lock />}
                    defaultValue={"PRIVATE"}
                    dataTestId="privacy_private"
                    defaultChecked={true}
                    label={i18n(`Words.private`)}
                  />
                </div>
              </div>
              <LimitAndReservationForm
                register={register}
                watch={watch}
                errors={errors}
              />

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
                  <When value={!service}>
                    <div className="ml-auto lg:w-[70%] absolute lg:static top-0 right-0">
                      <Checkbox
                        {...register("hasContinueRegister")}
                        dataTestId="continue_create"
                        label={i18n(`Words.keep_creating`)}
                        value={"true"}
                      />
                    </div>
                  </When>

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
