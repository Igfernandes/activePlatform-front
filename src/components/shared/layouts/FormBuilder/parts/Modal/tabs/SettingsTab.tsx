import { ChangeEvent } from "react";
import { FieldShape } from "../../../type";
import { FormGroup } from "../fieldsGroup/FormGroup";
import { When } from "@components/utilities/When";

type Props = {
  field?: FieldShape;
  oChangeField: (ev: ChangeEvent<HTMLInputElement>) => void;
  tabActive: string;
};

export function SettingsTab({ field, oChangeField, tabActive }: Props) {
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
          label="label"
          name="label"
          key={"label"}
          onChange={oChangeField}
        />
        <FormGroup
          defaultValue={field?.defaultValue}
          label="default_value"
          name="defaultValue"
          key={"defaultValue"}
          onChange={oChangeField}
        />
        <FormGroup
          defaultValue={field?.placeholder}
          label="placeholder"
          name="placeholder"
          key={"placeholder"}
          onChange={oChangeField}
        />
        {/* <FormTable
        label="attributes"
        name="attributes"
        key={"attributes"}
      /> */}
      </div>
    </When>
  );
}
