import { ChangeEvent } from "react";
import { FieldShape } from "../../../type";
import { FormGroup } from "../fieldsGroup/FormGroup";
import { When } from "@components/utilities/When";

type Props = {
  field?: FieldShape;
  oChangeField: (ev: ChangeEvent<HTMLInputElement>) => void;
  tabActive: string;
};

export function SizesTab({ field, oChangeField, tabActive }: Props) {
  return (
    <When value={tabActive === "sizes"}>
      <div
        className="bg-white p-4 rounded-xl overflow-y-auto h-[55vh]"
        style={{
          scrollbarWidth: "thin", // Remove a barra de rolagem no Firefox
          msOverflowStyle: "none",
        }}
      >
        <FormGroup
          defaultValue={field?.style?.fontSize as string}
          label="text_size"
          type="number"
          name="style.fontSize"
          key={"fontSize"}
          measure="px"
          onChange={oChangeField}
        />
        <FormGroup
          defaultValue={field?.labelSize}
          label="label_size"
          type="number"
          name="labelSize"
          key={"labelSize"}
          measure="px"
          onChange={oChangeField}
        />
        <FormGroup
          defaultValue={field?.style?.fontWeight as string}
          label="weight"
          type="number"
          name="style.fontWeight"
          min={100}
          max={900}
          step={50}
          key={"weight"}
          onChange={oChangeField}
        />
        <FormGroup
          defaultValue={field?.labelWeight}
          label="label_weight"
          type="number"
          min={100}
          max={900}
          step={50}
          name="labelWeight"
          key={"labelWeight"}
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
