import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { useModalForm } from "./hooks/useModalForm";
import { ModalFormProps } from "./type";
import { Modal } from "../../../../shared/layouts/Modal";
import { FormProvider } from "react-hook-form";
import { GroupChecks } from "@components/shared/forms/GroupChecks";
import { UsersGroupPayload } from "./schemas";
import { Button } from "@components/shared/layouts/Button";

export function ModalFormUsersGroup({
  isShowModal,
  onModal,
  groups,
}: ModalFormProps) {
  const {
    errors,
    permissions,
    handleSubmit,
    isLoading,
    submit,
    formMethods,
    register,
  } = useModalForm({ onModal, groups });

  return (
    <Modal
      title={i18n("Screens.dashboard.users.user_group")}
      isShowModal={isShowModal}
      handleModal={onModal}
    >
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)} className="w-full md:w-[424px]">
          <div className="form-title mb-4">
            <h4 className="text-sm md:text-lg">
              <strong>
                {i18n("Screens.dashboard.users.group.text_insert_name")}
              </strong>
            </h4>
          </div>
          <div className="form-group">
            <Input
              {...register("name")}
              label={i18n("Words.name")}
              dataTestId="name"
              required={true}
              errors={errors.name}
            />
          </div>
          <div className="form-title mt-6 mb-4">
            <h4 className="text-sm md:text-lg">
              <strong>
                {i18n("Screens.dashboard.users.group.text_select_permissions")}
              </strong>
            </h4>
          </div>
          <div>
            <GroupChecks<UsersGroupPayload>
              name="permissions"
              items={permissions.map((permission) => ({
                label: i18n(`Permissions.${permission.name}`) as string,
                value: permission.id,
              }))}
              register={register}
            />
          </div>
          <div className="form-btn flex justify-end pt-4 border-t-2 border-secondary">
            <div>
              <Button
                className="border-secondary border-2 px-4 w-1/2 md:w-auto"
                text={i18n("Words.cancel")}
                onClick={() => onModal(false)}
              />
            </div>
            <div className="w-1/2 md:w-[25%] ml-5">
              <Button
                type="submit"
                isLoading={isLoading}
                className="bg-red text-white"
                text={i18n("Words.save")}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}
