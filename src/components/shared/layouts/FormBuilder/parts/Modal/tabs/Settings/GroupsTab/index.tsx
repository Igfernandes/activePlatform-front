import { FormGroup } from "../../../fieldsGroup/FormGroup";
import { When } from "@components/utilities/When";
import { FormSelect } from "../../../fieldsGroup/FormSelect";
import i18n from "@configs/i18n";
import { Options } from "./Options";
import { OptionShape } from "./type";
import { TabProps } from "../../type";
import { useMemo } from "react";

export function SettingsGroupsTab({
  field,
  oChangeField,
  handleUpdateField,
  tabActive,
}: TabProps) {
  const parsedOptions = useMemo(() => {
    try {
      return JSON.parse(field?.options ?? "[]") as Array<OptionShape>;
    } catch {
      return [];
    }
  }, [field]);
  
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
        <Options
          currentOptions={parsedOptions}
          onChange={handleUpdateField}
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
            },
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
