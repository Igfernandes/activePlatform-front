import { When } from "@components/utilities/When";
import { FormBuildProps } from "../type";
import { translateOrFallback } from "@helpers/i18nHelper";

type Props = Pick<FormBuildProps, "isEditing" | "fields">;

export function FormBuilderViewed({ isEditing, fields }: Props) {
  return (
    <When value={!isEditing}>
      <div className="border-t-[1px] border-secondary">
        <ul>
          {fields.map((field) => (
            <li
              key={field.id} // Melhor usar o ID do campo como chave
              className="flex border-b-[1px] border-secondary py-3 px-4"
            >
              <div className="w-full lg:w-[30%]">
                <label htmlFor={`field_${field.id}`} className="font-semibold">
                  {translateOrFallback(field.name)}
                </label>
              </div>
              <div className="w-full lg:w-[70%]">
                <input
                  id={`field_${field.id}`}
                  type={field.type ?? "text"}
                  defaultValue={
                    field.value ?? (field.type != "file" ? "-" : "")
                  }
                  disabled={true}
                  className="w-full border-none text-secondary"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </When>
  );
}
