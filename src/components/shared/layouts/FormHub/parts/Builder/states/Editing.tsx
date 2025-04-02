import { When } from "@components/utilities/When";
import { FormBuildProps } from "../type";
import { Input } from "../../../../../forms/Input";
import { translateOrFallback } from "@helpers/i18nHelper";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import i18n from "@configs/i18n";
import { useFormBuilder } from "../hooks/useFormBuilder";

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
  const { register, formMethods, submit, handleSubmit } =
    useFormBuilder();

  return (
    <When value={isEditing}>
      <>
        <FormProvider {...formMethods}>
          <form onSubmit={handleSubmit(submit)}>
            <div className="form-content flex flex-wrap ">
              {fields.map((field, index) => (
                <div
                  className="w-full lg:w-[30%] mb-6 mx-4"
                  key={`form_group_field_${index}`}
                >
                  <Input
                    {...register(`field.${index}.id`)}
                    label=""
                    dataTestId="field_id"
                    type="hidden"
                    value={field.id}
                  />
                  <Input
                    {...register(`field.${index}.value`)}
                    label={translateOrFallback(field.name)}
                    dataTestId={`field_${field.name}_${field.id}`}
                    type={field.type ?? "text"}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <div>
                <Button
                  onClick={() => onModal(true)}
                  type="button"
                  text={i18n("words.new_data")}
                  className="text-red font-bold"
                />
              </div>
              <div className="flex justify-end">
                <div className="mr-2">
                  <Button
                    onClick={() => handleEdit("")}
                    type="button"
                    text={i18n("words.cancel")}
                    className="border-secondary border-2 px-4"
                  />
                </div>
                <div>
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
