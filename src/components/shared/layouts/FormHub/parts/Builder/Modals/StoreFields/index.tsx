import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { Checkbox } from "@components/shared/layouts/Checkbox";
import { Modal } from "@components/shared/layouts/Modal";
import { useStoreFieldsModal } from "./hooks/useStoreFieldsModal";
import { Select } from "@components/shared/forms/Select";
import { StoreFieldsModalProps } from "./type";

export function StoreFieldsModal({
  isShowModal,
  onModal,
  groups,
}: StoreFieldsModalProps) {
  const { formMethods, register, errors, handleSubmit, submit } =
    useStoreFieldsModal({ handleModal: onModal });

  return (
    <Modal
      title={i18n("words.new_data")}
      isShowModal={isShowModal}
      handleModal={onModal}
    >
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)} className="w-[424px]">
          <div className="my-6">
            <div className="form-title mt-6 mb-4">
              <h4 className="text-lg">
                <strong>
                  {i18n("users.modal.create.text_field_fill_information")}
                </strong>
              </h4>
            </div>
            <div className="overflow-y-auto h-[45vh]">
              <div className="form-group">
                <Select
                  {...register("group")}
                  options={groups.map((group) => {
                    return {
                      text: i18n(`words.${group.name.toLowerCase()}`) as string,
                      value: group.id,
                    };
                  })}
                  label={i18n("words.group")}
                  dataTestId="group"
                  required={true}
                  errors={errors.group}
                />
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
                  {...register("value")}
                  label={i18n("words.value")}
                  dataTestId="identify"
                  errors={errors.value}
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
                      text: i18n(`words.${type.toLowerCase()}`),
                      value: type,
                    }))}
                    label={i18n("words.field_type")}
                    dataTestId="type"
                    errors={errors.type}
                  />
                </div>
                <div className="form-group my-4">
                  <Select
                    {...register("is_required")}
                    options={["YES", "NOT"].map((type) => ({
                      text: i18n(`words.${type.toLowerCase()}`),
                      value: type,
                    }))}
                    defaultValue={"NOT"}
                    label={i18n("words.is_required")}
                    dataTestId="is_required"
                    errors={errors.group}
                  />
                </div>
                <div className="form-group my-4">
                  <Select
                    {...register("is_sensitive")}
                    options={["YES", "NOT"].map((type) => ({
                      text: i18n(`words.${type.toLowerCase()}`),
                      value: type,
                    }))}
                    defaultValue={"NOT"}
                    label={i18n("words.is_sensitive")}
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
                dataTestId="continue_register"
                label={i18n(`words.continue_register`)}
              />
            </div>
            <div className="w-1/2">
              <div className="w-[60%] ml-auto">
                <Button
                  type="submit"
                  className="bg-red text-white"
                  text={i18n("words.save")}
                />
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}
