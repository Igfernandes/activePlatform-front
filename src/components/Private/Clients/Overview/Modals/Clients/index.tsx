import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { useModalForm } from "./hooks/useClientCreateModal";
import { ModalFormProps } from "./type";
import { Modal } from "../../../../../shared/layouts/Modal";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { Checkbox } from "@components/shared/layouts/Checkbox";
import { handleMaskDate } from "@helpers/date";
import { handleMaskCPF, handleMaskPhone } from "@helpers/string";
import { SelectSearch } from "@components/shared/forms/SelectSearch";

export function ClientCreateModal({
  isShowModal,
  onModal,
  title,
  categories,
}: ModalFormProps) {
  const { formMethods, handleSubmit, submit, isLoading } = useModalForm();
  const {
    setValue,
    register,
    formState: { errors },
  } = formMethods;

  return (
    <Modal title={title} isShowModal={isShowModal} handleModal={onModal}>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)} className="md:w-[424px]">
          <div className="form-title mb-4">
            <h4 className="text-sm md:text-lg">
              <strong>
                {i18n("Screens.dashboard.clients.client.text_select_category")}
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
                };
              })}
              label={i18n("Words.category")}
              dataTestId="category"
              required={true}
              errors={errors.category}
            />
          </div>
          <div className="my-2 md:my-6">
            <div className="form-title mt-4 md:mt-6 mb-2 md:mb-4">
              <h4 className="text-sm md:text-lg">
                <strong>
                  {i18n(
                    "Screens.dashboard.clients.client.text_fill_information"
                  )}
                </strong>
              </h4>
            </div>
            <div
              className="overflow-y-auto scrollbar"
              style={{
                height: "21vh",
              }}
            >
              <div className="form-group my-4">
                <Input
                  {...register("name")}
                  label={i18n("Words.name")}
                  dataTestId="name"
                  required={true}
                  errors={errors.name}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("cpf")}
                  label={i18n("Words.cpf")}
                  dataTestId="cpf"
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
                  label={i18n("Words.birthdate")}
                  dataTestId="birthdate"
                  placeholder={i18n(`Configs.format.date`)}
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
                  label={i18n("Words.email")}
                  dataTestId="email"
                  errors={errors.email}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("phone")}
                  label={i18n("Words.phone")}
                  dataTestId="phone"
                  onChange={(ev) => {
                    handleMaskPhone(ev);
                    setValue("phone", ev.currentTarget.value);
                  }}
                  errors={errors.phone}
                />
              </div>
            </div>
          </div>
          <div className="form-btn flex flex-wrap md:flex-nowrap justify-between pt-4 border-t-2 border-secondary">
            <div className="w-full md:w-auto flex items-center">
              <Checkbox
                {...register("hasContinueRegister")}
                dataTestId="continue_register"
                id={"continue_register"}
                label={i18n(`Texts.continue_register`)}
              />
            </div>
            <div className="mt-4 md:my-auto w-full md:w-1/2">
              <div className="md:w-[60%] ml-auto">
                <Button
                  type="submit"
                  className="bg-red text-white"
                  text={i18n("Words.save")}
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
