import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { useModalForm } from "./hooks/useModalForm";
import { ModalFormProps } from "./type";
import { Modal } from "../../../../shared/layouts/Modal";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/others/Button";
import { Select } from "@components/shared/forms/Select";
import { MOCK_USERS_GROUP } from "../../../../../data/users/__mocks__/usersGroups";

export function ModalFormUsers({
  isShowModal,
  onModal,
  title,
}: ModalFormProps) {
  const { formMethods, register, errors } = useModalForm();

  return (
    <Modal title={title} isShowModal={isShowModal} handleModal={onModal}>
      <FormProvider {...formMethods}>
        <form className="w-[424px]">
          <div className="form-title mb-4">
            <h4 className="text-lg">
              <strong>{i18n("my_users.modal.user.text_select_group")}</strong>
            </h4>
          </div>
          <div className="form-group">
            <Select
              {...register("group")}
              options={MOCK_USERS_GROUP.map((group) => {
                return {
                  text: group.name,
                  value: group.id,
                };
              })}
              label={i18n("words.user_group")}
              dataTestId="name"
              required={true}
              errors={errors.name}
              multiple={true}
            />
          </div>
          <div className="my-6">
            <div className="form-title mt-6 mb-4">
              <h4 className="text-lg">
                <strong>
                  {i18n("my_users.modal.user.text_fill_information")}
                </strong>
              </h4>
            </div>
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
