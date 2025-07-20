import { When } from "@components/utilities/When";
import { FormBuildProps } from "../type";
import { translateOrFallback } from "@helpers/i18nHelper";
import Link from "next/link";
import i18n from "@configs/i18n";
import { Upload } from "@assets/Icons/black/Upload";

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
                <When value={field.type != "FILE"}>
                  <input
                    id={`field_${field.id}`}
                    type={field.type ?? "text"}
                    value={field.value ?? ""}
                    disabled={true}
                    required={!!field.is_required}
                    className="w-full border-none text-secondary"
                  />
                </When>
                <When value={field.type == "FILE"}>
                  <Link className="flex bg-cross-white-secondary pl-2" href={field.value ?? ""} target="_blank">
                    <Upload />
                    <span className="ml-2">{i18n("Texts.see_more")}</span>
                  </Link>
                </When>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </When>
  );
}
