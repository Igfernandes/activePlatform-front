import { ModalFormProps } from "./type";
import { Modal } from "../../../../../shared/layouts/Modal";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { Select } from "@components/shared/forms/Select";
import { useClientCategoriesModal } from "./hooks/useClientCategoriesModal";
import { useI18n } from "@contexts/I18n";

export function ClientCategoriesModal({
  isShowModal,
  onModal,
  title,
  categories,
  selectors,
}: ModalFormProps) {
  const { formMethods, register, errors, submit } = useClientCategoriesModal({
    selectors,
  });
  const { t } = useI18n()

  return (
    <Modal title={title} isShowModal={isShowModal} handleModal={onModal}>
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(submit)}
          className=" md:w-[424px]"
        >
          <div className="form-title mb-4">
            <h4 className="md:text-lg">
              <strong>
                {t("Screens.dashboard.clients.client.text_select_category")}
              </strong>
            </h4>
          </div>
          <div className="form-group mb-6">
            <Select
              {...register("category")}
              label={t("Words.category")}
              id="category"
              dataTestId="category"
              required={true}
              options={(categories ?? []).map((category) => ({
                text: category.name,
                value: category.id,
              }))}
              errors={errors.category}
            />
          </div>

          <div className="form-btn flex justify-end pt-4 border-t-2 border-secondary">
            <div className="w-1/2 mr-1 md:mr-0">
              <Button
                className="border-secondary border-2 px-4"
                text={t("Words.cancel")}
                onClick={() => onModal(false)}
              />
            </div>
            <div className="w-1/2 md:w-[25%] md:ml-5">
              <Button
                type="submit"
                className="bg-red text-white"
                text={t("Words.save")}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}
