import i18n from "@configs/i18n";
import { FormProvider } from "react-hook-form";
import { useServicesForm } from "./hooks/useServicesForm";
import { Button } from "@components/shared/layouts/Button";
import { File } from "@components/shared/forms/File";
import { LimitAndReservationForm } from "./LimitAndReservationForm";
import { DefinitionsForm } from "./DefinationsForm";
import { RadioBox } from "@components/shared/forms/RadioBox";
import { UserGroup } from "@assets/Icons/black/UserGroup";
import { Lock } from "@assets/Icons/black/Lock";
import { Checkbox } from "@components/shared/layouts/Checkbox";

export function ServicesForm() {
  const {
    formMethods,
    register,
    handleSubmit,
    submit,
    handleCleanForm,
    errors,
    setIsKeepCreating,
  } = useServicesForm();

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
            <div className="flex justify-between">
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
            <div className="mt-2 w-1/2">
              <File
                {...register("photo")}
                dataTestId="service_image"
                label={i18n(`words.service_image`)}
                accept=".jpg,.jpge,.png"
                errors={errors.photo}
              />
            </div>

            <div className="flex justify-between mt-12 items-center">
              <div>
                <span onClick={handleCleanForm} className="cursor-pointer">
                  <strong>{i18n("words.clean")}</strong>
                </span>
              </div>
              <div className="flex items-center">
                <div>
                  <Checkbox
                    dataTestId="continue_create"
                    label={i18n(`words.keep_creating`)}
                    onChecked={setIsKeepCreating}
                  />
                </div>
                <div className="ml-8">
                  <Button
                    className="p-3 border-[1px] border-secondary rounded-xl"
                    text={i18n(`words.cancel`)}
                    type="button"
                  />
                </div>
                <div className="ml-4">
                  <Button
                    className="p-3 bg-red text-white rounded-xl"
                    text={i18n(`words.save`)}
                  />
                </div>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
