import i18n from "@configs/i18n";
import { ModalFormProps } from "./type";
import { Modal } from "../../../../shared/layouts/Modal";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { Select } from "@components/shared/forms/Select";
import { MOCK_USER_CATEGORIES } from "../../../../../data/users/__mocks__/userCategories";
import { useClientCategoriesModal } from "./hooks/useClientCategoriesModal";

export function ClientCategoriesModal({
  isShowModal,
  onModal,
  title,
}: ModalFormProps) {
  const { formMethods, register, errors } = useClientCategoriesModal();

  return (
    <Modal title={title} isShowModal={isShowModal} handleModal={onModal}>
      <FormProvider {...formMethods}>
        <form className="w-[424px]">
          <div className="form-title mb-4">
            <h4 className="text-lg">
              <strong>
                {i18n("clients.modal.category.text_select_category")}
              </strong>
            </h4>
          </div>
          <div className="form-group mb-6">
            <Select
              {...register("category")}
              label={i18n("words.category")}
              dataTestId="category"
              required={true}
              options={MOCK_USER_CATEGORIES.map((category) => ({
                text: category.name,
                value: category.id,
              }))}
              errors={errors.category}
            />
          </div>

          <div className="form-btn flex justify-end pt-4 border-t-2 border-secondary">
            <div>
              <Button
                className="border-secondary border-2 px-4"
                text={i18n("words.cancel")}
                onClick={() => onModal(false)}
              />
            </div>
            <div className="w-[25%] ml-5">
              <Button className="bg-red text-white" text={i18n("words.save")} />
            </div>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}
