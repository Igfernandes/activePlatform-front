import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { useModalForm } from "./hooks/useClientCreateModal";
import { ModalFormProps } from "./type";
import { Modal } from "../../../../../shared/layouts/Modal";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { Select } from "@components/shared/forms/Select";
import { Checkbox } from "@components/shared/layouts/Checkbox";
import { handleMaskDate } from "@helpers/date";
import { handleMaskPhone } from "@helpers/string";

export function ClientCreateModal({
  isShowModal,
  onModal,
  title,
  categories,
}: ModalFormProps) {
  const {
    formMethods,
    handleSubmit,
    submit,
    isLoading,
    handleToggleContinueRegistering,
    shouldContinueRegistering,
  } = useModalForm();
  const {
    setValue,
    register,
    formState: { errors },
  } = formMethods;

  return (
    <Modal title={title} isShowModal={isShowModal} handleModal={onModal}>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)} className="w-[424px]">
          <div className="form-title mb-4">
            <h4 className="text-lg">
              <strong>
                {i18n("clients.modal.create.text_select_category")}
              </strong>
            </h4>
          </div>
          <div className="form-category">
            <Select
              {...register("category")}
              options={categories.map((category) => {
                return {
                  text: category.name,
                  value: category.id,
                };
              })}
              label={i18n("words.category")}
              dataTestId="category"
              required={true}
              errors={errors.category}
            />
          </div>
          <div className="my-6">
            <div className="form-title mt-6 mb-4">
              <h4 className="text-lg">
                <strong>
                  {i18n("clients.modal.create.text_fill_information")}
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
                  label={i18n("words.name")}
                  dataTestId="name"
                  required={true}
                  errors={errors.name}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("birthdate")}
                  label={i18n("words.birthdate")}
                  dataTestId="birthdate"
                  placeholder={i18n(`configs.formats.date`)}
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
                  label={i18n("words.email")}
                  dataTestId="email"
                  errors={errors.email}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("phone")}
                  label={i18n("words.phone")}
                  dataTestId="phone"
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
          <div className="form-btn flex justify-between pt-4 border-t-2 border-secondary">
            <div className="flex items-center">
              <Checkbox
                dataTestId="continue_register"
                label={i18n(`words.continue_register`)}
                defaultChecked={shouldContinueRegistering}
                onClick={handleToggleContinueRegistering}
              />
            </div>
            <div className="w-1/2">
              <div className="w-[60%] ml-auto">
                <Button
                  type="submit"
                  className="bg-red text-white"
                  text={i18n("words.save")}
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
