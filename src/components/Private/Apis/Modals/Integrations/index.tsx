import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { ModalFormProps } from "./type";
import { Modal } from "@components/shared/layouts/Modal";
import { useIntegrationModal } from "./hooks/useIntegrationModal";
import { Select } from "@components/shared/forms/Select";
import { useEffect, useRef } from "react";

export function IntegrationsModal({
  isShowModal,
  onModal,
  integrations,
}: ModalFormProps) {
  const {
    formMethods,
    handleSubmit,
    submit,
    isLoading,
    integration,
    errors,
    register,
  } = useIntegrationModal({
    integrations,
  });
  const formMethodsRef = useRef(formMethods);

  useEffect(() => {
    formMethodsRef.current.setValue(
      "private_token",
      integration?.private_token
    );
    formMethodsRef.current.setValue("public_token", integration?.public_token);
  }, [integration]);

  return (
    <Modal
      title={`${i18n("Words.integration")} - ${integration?.provider}`}
      isShowModal={isShowModal}
      handleModal={onModal}
    >
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)}>
          <div className="my-6">
            <div className="form-title mt-6 mb-4">
              <h4 className="text-lg">
                <strong>
                  {i18n("Screens.dashboard.apis.text_fill_information")}
                </strong>
              </h4>
            </div>
            <div
              className="overflow-y-auto scrollbar"
            >
              <div className="form-group">
                <Select
                  {...register("status")}
                  options={["ACTIVE", "INACTIVE"].map((status) => {
                    return {
                      text: i18n(`Words.${status.toLowerCase()}`) as string,
                      value: status,
                      selected: integration?.status === status,
                    };
                  })}
                  label={i18n("Words.status")}
                  dataTestId="status"
                  errors={errors.status}
                />
              </div>

              <div className="form-group my-4">
                <Input
                  {...register("public_token")}
                  label={i18n("Words.public_token")}
                  dataTestId="public_token"
                  defaultValue={integration?.public_token}
                  errors={errors.public_token}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("private_token")}
                  label={i18n("Words.private_token")}
                  dataTestId="private_token"
                  defaultValue={integration?.private_token}
                  errors={errors.private_token}
                />
              </div>
            </div>
          </div>
          <div className="form-btn flex justify-between pt-4 border-t-2 border-secondary">
            <div className="w-1/2 mx-auto">
              <div className=" ml-auto">
                <Button
                  type="submit"
                  className="bg-red text-white"
                  text={i18n("Words.save")}
                  isLoading={isLoading}
                />
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}
