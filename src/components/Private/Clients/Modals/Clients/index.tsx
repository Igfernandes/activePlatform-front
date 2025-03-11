import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { useModalForm } from "./hooks/useClientCreateModal";
import { ModalFormProps } from "./type";
import { Modal } from "../../../../shared/layouts/Modal";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { Select } from "@components/shared/forms/Select";
import { Checkbox } from "@components/shared/layouts/Checkbox";

export function ClientCreateModal({
  isShowModal,
  onModal,
  title,
  categories,
}: ModalFormProps) {
  const { formMethods, register, errors } = useModalForm();

  return (
    <Modal title={title} isShowModal={isShowModal} handleModal={onModal}>
      <FormProvider {...formMethods}>
        <form className="w-[424px]">
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
                  {...register("identify")}
                  label={i18n("words.cpf_cnpj")}
                  dataTestId="identify"
                  required={true}
                  errors={errors.identify}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("email")}
                  label={i18n("words.email")}
                  dataTestId="email"
                  required={true}
                  errors={errors.email}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("phone")}
                  label={i18n("words.phone")}
                  dataTestId="phone"
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
              />
            </div>
            <div className="w-1/2">
              <div className="w-[60%] ml-auto">
                <Button
                  type="submit"
                  className="bg-red text-white"
                  text={i18n("words.save")}
                />
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}
