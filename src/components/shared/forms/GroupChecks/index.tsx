import { FieldValues, Path } from "react-hook-form";
import { Checkbox } from "../Checkbox";
import { GroupChecksProps } from "./type";

export function GroupChecks<Payload extends FieldValues>({
  items = [],
  name,
  register,
}: GroupChecksProps<Payload>) {
  return (
    <div className="relative ">
      <div className="h-[32vh] overflow-x-hidden overflow-y-auto pb-[12%]">
        {items.map((item, index) => (
          <div key={`key_group_checks_${index}`} className="mb-4">
            <Checkbox
              {...register(`${name}.${index}` as Path<Payload>)}
              label={item.label}
              defaultValue={item.value}
              groupName="permissions"
              dataTestId={`key_group_checks_${index}`}
            />
          </div>
        ))}
      </div>
      <div
        className="absolute bottom-0 left-0 w-[95%] h-20"
        style={{
          background: "linear-gradient(357deg, #ffffff, transparent)",
        }}
      ></div>
    </div>
  );
}
