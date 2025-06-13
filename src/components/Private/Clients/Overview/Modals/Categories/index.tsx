import i18n from "@configs/i18n";
import { useModalForm } from "./hooks/useModalForm";
import { ModalFormProps } from "./type";
import { Modal } from "../../../../../shared/layouts/Modal";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { GroupFields } from "@components/shared/forms/GroupFields";

export function ModalFormCategories({
  isShowModal,
  onModal,
  title,
  categories,
}: ModalFormProps) {
  const { formMethods, handleSubmit, submit, isLoading } = useModalForm();

  return (
    <Modal title={title} isShowModal={isShowModal} handleModal={onModal}>
      <FormProvider {...formMethods}>
        <form className="lg:w-[424px]" onSubmit={handleSubmit(submit)}>
          <div className="form-title mb-4">
            <h4 className="text-base text-justify lg:text-left xl:text-lg leading-6">
              <strong>
                {i18n("Screens.dashboard.clients.category.text_create_category")}
              </strong>
            </h4>
            <span className="text-xs lg:text-base">{i18n("Screens.dashboard.clients.category.text_organized_items")}</span>
          </div>
          <GroupFields
            name="categories"
            data={
              categories?.map((category) => ({
                value: category.name,
                position: category.position,
              })) ?? []
            }
          />
          <div className="my-6"></div>
          <div className="form-btn flex justify-end pt-4 border-t-2 border-secondary">
            <div>
              <Button
                className="border-secondary border-2 px-4"
                text={i18n("Words.cancel")}
                onClick={() => onModal(false)}
              />
            </div>
            <div className="w-1/2 md:w-[30%] ml-2 md:ml-5">
              <Button
                className="bg-red text-white"
                text={i18n("Words.save")}
                type="submit"
                isLoading={isLoading}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}
