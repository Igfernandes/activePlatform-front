import { Input } from "@components/shared/forms/Input";
import { Modal } from "../../../../../shared/layouts/Modal";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { handleMaskDate } from "@helpers/date";
import { getCPFFormatted, getNumberFormatted, handleMaskCPF, handleMaskPhone } from "@helpers/string";
import { ModalFormProps } from "./type";
import { useClientModal } from "./hooks/useClientModal";
import dayjs from "dayjs";
import { SelectSearch } from "@components/shared/forms/SelectSearch";
import { useEffect } from "react";
import { useI18n } from "@contexts/I18n";

export function ClientUpdateModal({
  isShowModal,
  onModal,
  client,
}: ModalFormProps) {
  const { formMethods, handleSubmit, submit, isLoading, categories } =
    useClientModal({ client });
  const {
    setValue,
    register,
    formState: { errors },
  } = formMethods;
  const { t } = useI18n()

  useEffect(() => {
    if (client.categories.length > 0)
      setValue("category", String(client.categories[0].id));
  }, [client, setValue]);

  return (
    <Modal
      title={t("Words.update_client")}
      isShowModal={isShowModal}
      handleModal={onModal}
    >
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)}>
          <div className="form-title mb-4">
            <h4 className="text-sm md:text-lg">
              <strong>
                {t("Screens.dashboard.clients.client.text_select_category")}
              </strong>
            </h4>
          </div>
          <div className="form-category">
            <SelectSearch
              {...register("category")}
              options={categories.map((category) => {
                return {
                  text: category.name,
                  value: category.id,
                  selected: !!client.categories.find(
                    (clientCategory) => clientCategory.id === category.id
                  ),
                };
              })}
              label={t("Words.category")}
              dataTestId="category"
              required={true}
              errors={errors.category}
            />
          </div>
          <div className="my-6">
            <div className="form-title mt-6 mb-4">
              <h4 className="text-xs md:text-lg">
                <strong>
                  {t(
                    "Screens.dashboard.clients.client.text_fill_information"
                  )}
                </strong>
              </h4>
            </div>
            <div
              className="overflow-y-auto scrollbar"
              style={{
                height: "24vh",
              }}
            >
              <div className="form-group my-4">
                <Input
                  {...register("name")}
                  label={t("Words.name")}
                  dataTestId="name"
                  required={true}
                  defaultValue={client.name}
                  errors={errors.name}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("cpf")}
                  label={t("Words.cpf")}
                  dataTestId="cpf"
                  defaultValue={getCPFFormatted(client.cpf)}
                  onChange={(ev) => {
                    handleMaskCPF(ev);
                    setValue("cpf", ev.currentTarget.value);
                  }}
                  required={true}
                  errors={errors.cpf}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("birthdate")}
                  label={t("Words.birthdate")}
                  dataTestId="birthdate"
                  placeholder={t(`Configs.format.date`)}
                  defaultValue={
                    client.birthdate
                      ? dayjs(client.birthdate).format("DD/MM/YYYY")
                      : ""
                  }
                  onChange={(ev) => {
                    handleMaskDate(ev);
                    setValue("birthdate", ev.currentTarget.value);
                  }}
                  errors={errors.birthdate}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("email")}
                  label={t("Words.email")}
                  dataTestId="email"
                  errors={errors.email}
                  defaultValue={client.email}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("phone")}
                  label={t("Words.phone")}
                  dataTestId="phone"
                  defaultValue={getNumberFormatted(client?.phone ?? "")}
                  onChange={(ev) => {
                    handleMaskPhone(ev);
                    setValue("phone", ev.currentTarget.value);
                  }}
                  required={true}
                  errors={errors.phone}
                />
              </div>
            </div>
          </div>
          <div className="form-btn pt-4 border-t-2 border-secondary">
            <div className="w-full md:w-1/2 mx-auto">
              <div className=" ml-auto">
                <Button
                  type="submit"
                  className="bg-red text-white"
                  text={t("Words.save")}
                  isLoading={isLoading}
                />
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}
