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
    <div className="flex">
      <div className="">
        <span>{i18n("Texts.first_column")}:</span>
        <select
          onChange={(ev) => handleChangeColumn(ev.currentTarget.value)}
          className="min-w-20 p-1 shadow-md rounded-md ml-2"
        >
          {components.map((component) => (
            <option key={`option_${component.id}`} value={component.id}>
              {component.label}
            </option>
          ))}
        </select>
      </div>
      <div className="ml-4">
        <Shared entity={"FORMS"} in_ids={[formId ?? 0]} />
      </div>
    </div>
  );
}
