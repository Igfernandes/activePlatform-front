import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { Checkbox } from "../Checkbox";

type Props<Payload extends FieldValues> = {
  values: Array<string>;
  register: UseFormRegister<Payload>;
  name: Path<Payload>;
};

export function GroupChecks<Payload extends FieldValues>({
  values = [],
  name,
  register,
}: Props<Payload>) {
  return (
    <div className="relative ">
      <div className="h-[32vh] overflow-x-hidden overflow-y-auto pb-[12%]">
        {values.map((value, index) => (
          <div key={`key_group_checks_${index}`} className="mb-4">
            <Checkbox
              {...register(`${name}.${index}` as Path<Payload>)}
              label={value}
              defaultValue={value}
              dataTestId={`key_group_checks_${index}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-[95%] h-20" style={{
        background: "linear-gradient(357deg, #ffffff, transparent)"
      }}></div>
    </div>
  );
}
