import { Password } from "@components/shared/forms/Password";
import { PasswordValidation } from "@components/shared/forms/PasswordValidation";
import { Modal } from "@components/shared/layouts/Modal";
import { ModalProps } from "@components/shared/layouts/Modal/type";
import i18n from "@configs/i18n";
import { FormProvider } from "react-hook-form";
import { useModalAlterPassword } from "./hooks/useModalAlterPassword";
import { Button } from "@components/shared/forms/Button";

type Props = Pick<ModalProps, "handleModal" | "isShowModal"> & {};

export function ModalAlterPassword({ handleModal, isShowModal }: Props) {
  const { formMethods, handleSubmit, submit, errors } = useModalAlterPassword({handleModal});
  const { register } = formMethods;

  return (
    <Modal
      title={i18n("words.password_alter")}
      handleModal={handleModal}
      isShowModal={isShowModal}
    >
      <FormProvider {...formMethods}>
        <form
          onSubmit={handleSubmit(submit)}
          className="w-full md:min-w-[400px]"
        >
          <Password
            {...register("current_password")}
            label={i18n("words.current_password")}
            dataTestId="password"
            errors={errors.current_password}
            className="mb-4"
          />
          <PasswordValidation
            className="mt-1"
            dataTestId="new_password"
            label={i18n("words.new_password")}
          />
          <Button type="submit" text={i18n(`words.alter`)} className="mt-6" />
        </form>
      </FormProvider>
    </Modal>
  );
}
