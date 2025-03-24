import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { useModalForm } from "./hooks/useModalForm";
import { ModalFormProps } from "./type";
import { Modal } from "../../../../shared/layouts/Modal";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { Select } from "@components/shared/forms/Select";

export function ModalFormUsers({
  isShowModal,
  onModal,
  title,
  groups,
}: ModalFormProps) {
  const { formMethods, register, errors, submit, handleSubmit, isLoading } =
    useModalForm({
      onModal,
    });

  return (
    <Modal title={title} isShowModal={isShowModal} handleModal={onModal}>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)} className="w-[424px]">
          <div className="form-title mb-2 lg:mb-4">
            <h4 className="text-lg">
              <strong>
                {i18n("manager_user.modal.user.text_select_group")}
              </strong>
            </h4>
          </div>
          <div className="form-group">
            <Select
              {...register("group")}
              options={(groups ?? []).map((group) => {
                return {
                  text: group.name,
                  value: group.id,
                };
              })}
              label={i18n("words.user_group")}
              dataTestId="group"
              required={true}
              multiple={true}
            />
          </div>
          <div className="my-4 lg:my-6">
            <div className="form-title mt-4 xl:mt-6">
              <h4 className="text-lg">
                <strong>
                  {i18n("manager_user.modal.user.text_fill_information")}
                </strong>
              </h4>
            </div>
            <div className="overflow-y-auto h-[20vh] hidden-scroll">
              <div className="form-group my-3 ">
                <Input
                  {...register("name")}
                  label={i18n("words.name")}
                  dataTestId="name"
                  required={true}
                  errors={errors.name}
                />
              </div>
              <div className="form-group my-3">
                <Input
                  {...register("email")}
                  label={i18n("words.email")}
                  dataTestId="email"
                  required={true}
                  errors={errors.email}
                />
              </div>
              <div className="form-group my-3">
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
          <div className="form-btn flex justify-end pt-2 lg:pt-4 border-t-2 border-secondary">
            <div>
              <Button
                className="border-secondary border-2 px-4"
                text={i18n("words.cancel")}
                onClick={() => onModal(false)}
              />
            </div>
            <div className="w-[25%] ml-5">
              <Button
                type="submit"
                className="bg-red text-white"
                text={i18n("words.save")}
                isLoading={isLoading}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}
