import { FormGroup } from "../../fieldsGroup/FormGroup";
import { When } from "@components/utilities/When";
import { FormSelect } from "../../fieldsGroup/FormSelect";
import i18n from "@configs/i18n";
import { TabProps } from "../type";


export function SettingsFieldsTab({ field, oChangeField, tabActive }: TabProps) {

  return (
    <When value={tabActive === "settings"}>
      <div
        className="bg-white p-4 rounded-xl overflow-y-auto h-[55vh]"
        style={{
          scrollbarWidth: "thin", // Remove a barra de rolagem no Firefox
          msOverflowStyle: "none",
        }}
      >
        <FormGroup
          defaultValue={field?.label}
          label="title"
          name="label"
          key={"label"}
          onChange={oChangeField}
        />
        <FormGroup
          defaultValue={field?.defaultValue}
          label="filled_value"
          name="defaultValue"
          key={"defaultValue"}
          onChange={oChangeField}
        />
        <FormGroup
          defaultValue={field?.placeholder}
          label="value_example"
          name="placeholder"
          key={"placeholder"}
          onChange={oChangeField}
        />
        <FormSelect
          options={[
            {
              text: i18n("Words.not"),
              value: "",
            },
            {
              text: i18n("Words.yes"),
              value: "true",
            }
          ]}
          label="is_required"
          name="required"
          key={"required"}
          onChange={oChangeField}
        />
      </div>
    </When>
  );
}
