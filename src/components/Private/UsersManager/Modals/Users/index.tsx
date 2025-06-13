import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { useModalForm } from "./hooks/useModalForm";
import { ModalFormProps } from "./type";
import { Modal } from "../../../../shared/layouts/Modal";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { Select } from "@components/shared/forms/Select";
import { getNumberFormatted, handleMaskPhone } from "@helpers/string";
import { useEffect } from "react";
import { useModalContext } from "@contexts/Modal";

export function ModalFormUsers({
  isShowModal,
  onModal,
  title,
  groups,
  users,
}: ModalFormProps) {
  const { formMethods, register, errors, submit, handleSubmit, isLoading } =
    useModalForm({
      onModal,
    });
  const { modal } = useModalContext();

  useEffect(() => {
    const user = users?.find((user) => user.id === modal.id);

    if (!user) return formMethods.reset();

    const { setValue } = formMethods;
    setValue("id", user.id);
    setValue("name", user.name);
    setValue("email", user.email);
    setValue("phone", getNumberFormatted(user?.phone));

    if (!user?.groups || user?.groups.length === 0) return;

    setValue("group", user?.groups.map((group) => String(group.id)) ?? []);
  }, [users, modal]);

  return (
    <Modal title={title} isShowModal={isShowModal} handleModal={onModal}>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)} className="w-full md:w-[424px]">
          <div className="form-title mb-2 lg:mb-4">
            <h4 className="text-sm md:text-lg">
              <strong>
                {i18n("Screens.dashboard.users.user.text_select_group")}
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
              label={i18n("Screens.dashboard.users.user_group")}
              dataTestId="group"
              required={true}
              multiple={true}
            />
          </div>
          <div className="my-4 lg:my-6">
            <div className="form-title mt-4 xl:mt-6 pb-2">
              <h4 className="text-sm md:text-lg">
                <strong>
                  {i18n("Screens.dashboard.users.user.text_fill_information")}
                </strong>
              </h4>
            </div>
            <div className="overflow-y-auto h-[20vh] pr-2">
              <div className="form-group my-3 ">
                <Input
                  {...register("name")}
                  label={i18n("Words.name")}
                  dataTestId="name"
                  required={true}
                  errors={errors.name}
                />
              </div>
              <div className="form-group my-3">
                <Input
                  {...register("email")}
                  label={i18n("Words.email")}
                  dataTestId="email"
                  required={true}
                  errors={errors.email}
                />
              </div>
              <div className="form-group my-3">
                <Input
                  {...register("phone")}
                  label={i18n("Words.phone")}
                  dataTestId="phone"
                  onChange={(ev) => {
                    handleMaskPhone(ev);
                    formMethods.setValue("phone", ev.currentTarget.value);
                  }}
                  required={true}
                  errors={errors.phone}
                />
              </div>
            </div>
          </div>
          <div className="form-btn flex justify-end pt-2 lg:pt-4 border-t-2 border-secondary">
            <div>
              <Button
                className="border-secondary border-2 px-4 w-1/2"
                text={i18n("Words.cancel")}
                onClick={() => onModal(false)}
              />
            </div>
            <div className="w-1/2 md:w-[35%] ml-5">
              <Button
                type="submit"
                className="bg-red text-white "
                text={i18n("Words.save")}
                isLoading={isLoading}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}
