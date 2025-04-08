import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { ModalFormProps } from "./type";
import { Modal } from "../../../../../shared/layouts/Modal";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { GroupChecks } from "@components/shared/forms/GroupChecks";
import { UserSharedPayload } from "./schemas";
import { useSharedModalForm } from "./hooks/useClientSharedModal";
import { MOCK_USER_FIELDS_GROUP } from "../../../../../../data/users/__mocks__/usersFieldsGroup";

export function ClientSharedModal({
  isShowModal,
  onModal,
  title,
}: ModalFormProps) {
  const { formMethods, register, errors } = useSharedModalForm();

  return (
    <Modal title={title} isShowModal={isShowModal} handleModal={onModal}>
      <FormProvider {...formMethods}>
        <form className="w-[424px]">
          <div className="form-title mb-4">
            <h4 className="text-lg">
              <strong>{i18n("clients.modal.shared.text_insert_email")}</strong>
            </h4>
          </div>
          <div className="form-group">
            <Input
              {...register("email")}
              label={i18n("words.email")}
              dataTestId="email"
              required={true}
              errors={errors.email}
            />
          </div>
          <div className="my-6">
            <div className="form-title mt-6 mb-4">
              <h4 className="text-lg">
                <strong>
                  {i18n("clients.modal.shared.text_select_information")}
                </strong>
              </h4>
            </div>
            <div className="form-group my-4">
              <GroupChecks<UserSharedPayload>
                name="sectors"
                register={register}
                items={MOCK_USER_FIELDS_GROUP.map((group) => ({
                  label: group.name,
                  value: group.id,
                }))}
              />
            </div>
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
