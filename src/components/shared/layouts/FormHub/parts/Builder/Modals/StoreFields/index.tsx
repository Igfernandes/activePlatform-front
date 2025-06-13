import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { Checkbox } from "@components/shared/layouts/Checkbox";
import { Modal } from "@components/shared/layouts/Modal";
import { useStoreFieldsModal } from "./hooks/useStoreFieldsModal";
import { Select } from "@components/shared/forms/Select";
import { StoreFieldsModalProps } from "./type";
import { useEffect, useState } from "react";
import { When } from "@components/utilities/When";

export function StoreFieldsModal({
  isShowModal,
  onModal,
  groups,
}: StoreFieldsModalProps) {
  const { formMethods, register, errors, handleSubmit, submit } =
    useStoreFieldsModal({ handleModal: onModal });
  const [isFileField, setIsFileField] = useState<boolean>(false);
  const { watch } = formMethods;

  useEffect(() => {
    setIsFileField(watch("type") === "FILE");
  }, [watch("type")]);

  return (
    <Modal
      title={i18n("Words.new_data")}
      isShowModal={isShowModal}
      handleModal={onModal}
    >
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)} className="md:w-[424px]">
          <div className="my-6">
            <div className="form-title mt-6 mb-4">
              <h4 className="text-xs md:text-lg">
                <strong>
                  {i18n("Components.form_hub.text_field_fill_information")}
                </strong>
              </h4>
            </div>
            <div className="overflow-y-auto h-[45vh]">
              <div className="form-group">
                <Select
                  {...register("group")}
                  options={groups.map((group) => {
                    return {
                      text: i18n(`Words.${group.name.toLowerCase()}`) as string,
                      value: group.id,
                    };
                  })}
                  label={i18n("Words.group")}
                  dataTestId="group"
                  required={true}
                  errors={errors.group}
                />
              </div>
              <div className="form-group my-4">
                <Input
                  {...register("name")}
                  label={i18n("Words.name")}
                  dataTestId="name"
                  required={true}
                  errors={errors.name}
                />
              </div>
              <div className="form-group my-4">
                <div className="form-group">
                  <Select
                    {...register("type")}
                    options={[
                      "TEXT",
                      "COLOR",
                      "NUMBER",
                      "DATE",
                      "FILE",
                      "DATETIME-LOCAL",
                    ].map((type) => ({
                      text: i18n(`Words.${type.toLowerCase()}`),
                      value: type,
                    }))}
                    label={i18n("Words.field_type")}
                    dataTestId="type"
                    errors={errors.type}
                  />
                </div>
                <When value={!isFileField}>
                  <div className="form-group my-4">
                    <Input
                      {...register("value")}
                      label={i18n("Words.value")}
                      dataTestId="identify"
                      errors={errors.value}
                    />
                  </div>
                </When>
                <div className="form-group my-4">
                  <Select
                    {...register("is_sensitive")}
                    options={["YES", "NOT"].map((type) => ({
                      text: i18n(`Words.${type.toLowerCase()}`),
                      value: type,
                    }))}
                    defaultValue={"NOT"}
                    label={i18n("Words.is_sensitive")}
                    dataTestId="is_sensitive"
                    errors={errors.group}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-btn flex justify-between pt-4 border-t-2 border-secondary">
            <div className="flex items-center">
              <Checkbox
                {...register("hasContinueRegister")}
                dataTestId="continue_register"
                label={i18n(`Texts.continue_register`)}
              />
            </div>
            <div className="w-1/2">
              <div className="md:w-[60%] ml-auto">
                <Button
                  type="submit"
                  className="bg-red text-white"
                  text={i18n("Words.save")}
                />
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}
