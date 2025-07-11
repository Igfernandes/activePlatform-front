import { FieldShape } from "@components/shared/layouts/FormBuilder/type";
import { Shared } from "@components/shared/others/Shared";
import i18n from "@configs/i18n";

type Props = {
  components: FieldShape[];
  formId: number;
  handleChangeColumn: (fieldId: string) => void;
};

export function FilledFormsActions({
  formId,
  components,
  handleChangeColumn,
}: Props) {
 
  return (
    <div className="flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row  relative">
      <div className="flex flex-wrap md:flex-nowrap line-clamp-1 items-center mt-5 md:mt-auto">
        <span className="w-[9rem] font-bold ">{i18n("Texts.first_column")}:</span>
        <select
          id="first_column"
          onChange={(ev) => handleChangeColumn(ev.currentTarget.value)}
          className="w-full max-w-40 md:w-auto min-w-20 p-1 shadow-md rounded-md md:ml-2"
        >
          {components.filter((component) => !['layout'].includes(component.group ?? "") ).map((component) => (
            <option key={`option_${component.id}`} value={component.id}>
              {component.label}
            </option>
          ))}
        </select>
      </div>
      <div className="w-10 ml-2 shadow-md rounded-md">
        <Shared entity={"FORMS"} in_ids={[formId ?? 0]} />
      </div>
    </div>
  );
}
