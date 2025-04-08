import i18n from "@configs/i18n";
import { FormProvider } from "react-hook-form";
import { useServicesForm } from "./hooks/useServicesForm";
import { Button } from "@components/shared/layouts/Button";
import { File } from "@components/shared/forms/File";
import { LimitAndReservationForm } from "./LimitAndReservationForm";
import { DefinitionsForm } from "./DefinitionsForm";
import { RadioBox } from "@components/shared/forms/RadioBox";
import { UserGroup } from "@assets/Icons/black/UserGroup";
import { Lock } from "@assets/Icons/black/Lock";
import { Checkbox } from "@components/shared/layouts/Checkbox";
import { ServicesShape } from "../../../types/Services";
import { When } from "@components/utilities/When";
import { useRouter } from "next/router";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { useEffect } from "react";
import { useStateFields } from "./hooks/useStateFields";

type Props = {
  service?: ServicesShape;
};

export function ServicesForm({ service }: Props) {
  const {
    formMethods,
    register,
    handleSubmit,
    submit,
    errors,
    setIsKeepCreating,
  } = useServicesForm({ service });
  const router = useRouter();
  const { handleCleanForm, handleUpdateForm } = useStateFields({ formMethods });

  useEffect(() => {
    if (!service) return;

    handleUpdateForm(service);
  }, [service]);

  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="mb-6">
        <h1 className="text-2xl">
          <strong>{i18n(`words.definition`)}</strong>
        </h1>
      </div>
      <div>
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(submit)}>
            <DefinitionsForm register={register} errors={errors} />
            <div className="form-subtitle my-6">
              <h2>
                <strong>{i18n(`services.settings_privacy`)}</strong>
              </h2>
            </div>
            <div className="flex flex-wrap lg:flex-none justify-between">
              <div className="w-full lg:w-[48%]">
                <RadioBox
                  {...register("privacy")}
                  icon={<UserGroup />}
                  defaultValue={"PUBLIC"}
                  dataTestId="privacy_public"
                  label={i18n(`words.public`)}
                />
              </div>
              <div className="w-full lg:w-[48%]">
                <RadioBox
                  {...register("privacy")}
                  icon={<Lock />}
                  defaultValue={"PRIVATE"}
                  dataTestId="privacy_private"
                  defaultChecked={true}
                  label={i18n(`words.private`)}
                />
              </div>
            </div>
            <LimitAndReservationForm register={register} />
            <div className="form-subtitle">
              <h2>
                <strong>{i18n(`services.service_image`)}</strong>
              </h2>
            </div>
            <div className="mt-2 lg:w-1/2">
              <File
                {...register("photo")}
                dataTestId="service_image"
                label={i18n(`words.service_image`)}
                accept=".jpg,.jpge,.png"
                errors={errors.photo}
              />
            </div>

            <div className="flex flex-wrap lg:flex-none justify-between mt-12 items-center relative">
              <When value={!service}>
                <div className="w-full lg:w-auto mb-4 lg:mb-auto">
                  <span onClick={handleCleanForm} className="cursor-pointer">
                    <strong>{i18n("words.clean")}</strong>
                  </span>
                </div>
              </When>
              <div
                className={!service ? "flex items-center flex-wrap lg:flex-nowrap w-full lg:w-auto" : "ml-auto"}
              >
                <When value={!service}>
                  <div className="ml-auto lg:w-[70%] absolute lg:static top-0 right-0">
                    <Checkbox
                      dataTestId="continue_create"
                      label={i18n(`words.keep_creating`)}
                      onChecked={setIsKeepCreating}
                    />
                  </div>
                </When>

                <div className="flex justify-between w-full">
                  <div className="lg:ml-8 w-[47%] lg:w-auto">
                    <Button
                      className="p-3 border-[1px] border-secondary rounded-xl w-full"
                      text={i18n(`words.cancel`)}
                      type="button"
                      onClick={() => router.push(privateRoutes.services)}
                    />
                  </div>
                  <div className="ml-4 w-[47%] lg:w-auto">
                    <Button
                      className="p-3 bg-red text-white rounded-xl w-full"
                      text={
                        !service ? i18n(`words.save`) : i18n(`words.update`)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
