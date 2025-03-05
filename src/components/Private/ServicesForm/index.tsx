import i18n from "@configs/i18n";
import { FormProvider } from "react-hook-form";
import { useServicesForm } from "./hooks/useServicesForm";
import { Select } from "@components/shared/forms/Select";
import { Input } from "@components/shared/forms/Input";
import { TextArea } from "@components/shared/forms/TextArea";
import { Checkbox } from "@components/shared/forms/Checkbox";
import { Button } from "@components/shared/layouts/Button";
import { File } from "@components/shared/forms/File";

export function ServicesForm() {
  const { formMethods, register } = useServicesForm();

  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="mb-6">
        <h1 className="text-2xl">
          <strong>{i18n(`words.definition`)}</strong>
        </h1>
      </div>
      <div>
        <FormProvider {...formMethods}>
          <form action="">
            <div className="form-row flex  justify-between">
              <div className="form-select w-full lg:w-[48%]">
                <Select
                  dataTestId="type"
                  label={i18n(`words.service_type`)}
                  options={[
                    {
                      text: "Recorrente",
                      value: "APPELLANT",
                    },
                    {
                      text: "Pontual",
                      value: "PUNCTUAL",
                    },
                  ]}
                  required={true}
                />
              </div>
              <div className="form-group w-full lg:w-[48%]">
                <Input
                  dataTestId="name"
                  label={i18n("words.service_name")}
                  required={true}
                />
              </div>
            </div>
            <div className="form-row mt-6">
              <TextArea
                dataTestId="describe"
                className="h-28"
                label={i18n(`words.describe`)}
              />
            </div>
            <div className="form-subtitle my-6">
              <h2>
                <strong>{i18n(`services.settings_privacy`)}</strong>
              </h2>
            </div>
            <div></div>
            <div className="my-6">
              <div>
                <p>{i18n(`services.has_limit_vacancies`)}</p>
              </div>
              <div></div>
            </div>
            <div className="my-6">
              <Input
                type="number"
                dataTestId="limit_vacancies"
                label={i18n("services.inform_limit_vacancies")}
                disabled={true}
              />
            </div>
            <div className="my-6">
              <div>
                <p>{i18n(`services.has_limit_reservation`)}</p>
              </div>
              <div></div>
            </div>
            <div className="my-6">
              <Input
                type="number"
                dataTestId="limit_vacancies"
                label={i18n("services.inform_limit_reservation")}
                disabled={true}
              />
            </div>
            <div className="form-subtitle">
              <h2>
                <strong>{i18n(`services.service_image`)}</strong>
              </h2>
            </div>
            <div>
              <File
                {...register("image")}
                dataTestId="service_image"
                label={i18n(`words.service_image`)}
                accept=".pdf,.jpg,.jpge,.png"
              />
            </div>

            <div className="flex justify-between mt-12 items-center">
              <div>
                <span>
                  <strong>{i18n("words.clean")}</strong>
                </span>
              </div>
              <div className="flex items-center">
                <div>
                  <Checkbox
                    dataTestId="continue_create"
                    label={i18n(`words.keep_creating`)}
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
