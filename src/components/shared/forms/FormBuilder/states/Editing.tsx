import { When } from "@components/utilities/When";
import { FormBuildProps } from "../type";
import { Input } from "../../Input";
import { translateOrFallback } from "@helpers/i18nHelper";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import i18n from "@configs/i18n";

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
  const methodsForm = useForm();
  const { register } = methodsForm;

  return (
    <When value={isEditing}>
      <FormProvider {...methodsForm}>
        <form>
          <div className="form-content flex flex-wrap justify-between">
            {fields.map((field, index) => (
              <div
                className="w-full lg:w-[30%] mb-6"
                key={`form_group_field_${index}`}
              >
                <Input
                  {...register(field.name)}
                  label={translateOrFallback(field.name)}
                  dataTestId={`field_${field.name}_${field.id}`}
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
                  text={i18n("words.save")}
                  className="bg-red text-white px-4"
                />
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </When>
  );
}
