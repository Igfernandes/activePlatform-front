import { FieldShape } from "../../type";
import { ArrowDownSimple } from "@assets/Icons/black/ArrowDownSimple";
import { useState } from "react";

type Props = {
  id: number;
  fields: FieldShape[];
  field: FieldShape;
  handleChange: (
    currentPosition: number,
    newPosition: number | "DOWN" | "UP"
  ) => void;
};

export function FieldSorter({ field, fields, id, handleChange }: Props) {
  const [tempValue, setTempValue] = useState(id);

  return (
    <div className="flex items-center">
      <div>
        <div
          onClick={() => {
            handleChange(tempValue, "UP");
          }}
          className="h-5 w-5 bg-cross-white-secondary border-[1px] border-cross-black-secondary rounded-full pt-1 pl-1"
        >
          <ArrowDownSimple className="rotate-180" width={10}  />
        </div>
        <div
          onClick={() => handleChange(tempValue, "DOWN")}
          className="h-5 w-5 bg-cross-white-secondary border-[1px] border-cross-black-secondary rounded-full pt-[6px] pl-1"
        >
          <ArrowDownSimple width={10} />
        </div>
      </div>
      <div>
        <input
          className="w-8 text-center border-[1px] border-cross-white-primary px-1  rounded-md"
          type="text"
          name={`${field.id}_${id}`}
          min={0}
          max={fields.length - 1}
          value={tempValue}
          onChange={(ev) => setTempValue(+ev.currentTarget.value)}
          onBlur={() => {
            if (tempValue !== id) {
              handleChange(id, tempValue);
            }
          }}
        />
      </div>
    </div>
  );
}
