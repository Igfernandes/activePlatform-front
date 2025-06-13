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
  const { formMethods, handleSubmit, submit, errors, isLoading } =
    useModalAlterPassword({ handleModal });
  const { register } = formMethods;

  return (
    <Modal
      title={i18n("Words.password_alter")}
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
            label={i18n("Words.current_password")}
            dataTestId="password"
            errors={errors.current_password}
          />
          <PasswordValidation
            className="mt-4"
            dataTestId="new_password"
            label={i18n("Texts.new_password")}
          />
          <Button
            type="submit"
            text={i18n(`Words.alter`)}
            isLoading={isLoading}
            className="mt-6"
          />
        </form>
      </FormProvider>
    </Modal>
  );
}
