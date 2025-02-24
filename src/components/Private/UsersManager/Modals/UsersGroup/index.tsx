import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { useModalForm } from "./hooks/useModalForm";
import { ModalFormProps } from "./type";
import { Modal } from "../../../../shared/layouts/Modal";
import { FormProvider } from "react-hook-form";
import { GroupChecks } from "@components/shared/forms/GroupChecks";
import { MOCK_PERMISSIONS } from "../../../../../data/permissions/__mocks__";
import { UsersGroupPayload } from "./schemas";
import { Button } from "@components/shared/layouts/Button";

export function ModalFormUsersGroup({
  isShowModal,
  onModal,
}: ModalFormProps) {
  const { formMethods, register, errors } = useModalForm();

  return (
    <Modal title={i18n("words.user_group")} isShowModal={isShowModal} handleModal={onModal}>
      <FormProvider {...formMethods}>
        <form className="w-[424px]">
          <div className="form-title mb-4">
            <h4 className="text-lg">
              <strong>{i18n("manager_user.modal.group.text_insert_name")}</strong>
            </h4>
          </div>
          <div className="form-group">
            <Input
              {...register("name")}
              label={i18n("words.name")}
              dataTestId="name"
              required={true}
              errors={errors.name}
            />
          </div>
          <div className="form-title mt-6 mb-4">
            <h4 className="text-lg">
              <strong>
                {i18n("manager_user.modal.group.text_select_permissions")}
              </strong>
            </h4>
          </div>
          <div>
            <GroupChecks<UsersGroupPayload>
              name="permissions"
              values={MOCK_PERMISSIONS}
              register={register}
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
