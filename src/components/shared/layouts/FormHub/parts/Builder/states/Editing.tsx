import { When } from "@components/utilities/When";
import { FormBuildProps } from "../type";
import { Input } from "../../../../../forms/Input";
import { translateOrFallback } from "@helpers/i18nHelper";
import { FieldError, FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import i18n from "@configs/i18n";
import { useFormBuilder } from "../hooks/useFormBuilder";
import { File } from "@components/shared/forms/File";
import { DotsOptions } from "@components/shared/others/DotsOptions";
import useWindow from "@hooks/useWindow";

type Props = Pick<
  FormBuildProps,
  "isEditing" | "fields" | "handleEdit" | "onModal"
>;

export function FormBuilderEditing({
  fields,
  isEditing,
  handleEdit,
  onModal,
}: Props) {
  const {
    register,
    formMethods,
    submit,
    handleSubmit,
    errors,
    deleteField,
    entityType,
  } = useFormBuilder();
  const { screenType } = useWindow();

  return (
    <When value={isEditing}>
      <>
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(submit)}>
            <div className="form-content flex flex-wrap ">
              {fields.map((field, index) => (
                <div
                  className="relative w-full lg:w-[30%] mb-6 mx-2"
                  key={`form_group_field_${index}`}
                >
                  <div className="w-full">
                    <Input
                      {...register(`fields.${index}.id`)}
                      label=""
                      dataTestId="field_id"
                      type="hidden"
                      value={field.id}
                    />
                    <When value={field.type != "FILE"}>
                      <Input
                        {...register(`fields.${index}.value`)}
                        defaultValue={field.value}
                        className="min-h-14"
                        label={translateOrFallback(field.name)}
                        dataTestId={`field_${field.name}_${field.id}`}
                        type={field.type ?? "text"}
                        errors={
                          errors.fields && errors.fields[index]
                            ? (errors.fields[index].value as FieldError)
                            : undefined
                        }
                      />
                    </When>
                    <When value={field.type == "FILE"}>
                      <File
                        label={translateOrFallback(field.name)}
                        {...register(`fields.${index}.value`)}
                        dataTestId={`field_${field.name}_${field.id}`}
                      />
                    </When>
                    <div className="absolute right-[-1rem] top-4 h-full">
                      <DotsOptions
                        actions={[
                          {
                            handle: () =>
                              deleteField({ id: field.id, scope: entityType }),
                            text: i18n("words.exclude"),
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <When value={screenType === "DESKTOP"}>
                <div>
                  <Button
                    onClick={() => onModal(true)}
                    type="button"
                    text={i18n("words.new_data")}
                    className="text-red font-bold"
                  />
                </div>
              </When>
              <div className="flex lg:justify-end w-full lg:w-auto justify-between">
                <div className="mr-2 w-[43%] lg:w-auto">
                  <Button
                    onClick={() => handleEdit("")}
                    type="button"
                    text={i18n("words.cancel")}
                    className="border-secondary border-2 px-4"
                  />
                </div>
                <div className="w-[43%] lg:w-auto">
                  <Button
                    type="submit"
                    text={i18n("words.save")}
                    className="bg-red text-white px-4"
                  />
                </div>
              </div>
            </div>
          </form>
        </FormProvider>
      </>
    </When>
  );
}
