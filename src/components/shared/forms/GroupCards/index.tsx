import { FieldValues, Path } from "react-hook-form";
import { GroupCardsProps } from "./type";
import { Card } from "./Card";

export function GroupCards<Payload extends FieldValues>({
  items = [],
  name,
  register,
}: GroupCardsProps<Payload>) {
  return (
    <div className="relative">
      <div className="flex flex-wrap ">
        {items.map((item, index) => (
          <Card
            {...register(`${name}.${index}` as Path<Payload>)}
            {...item}
            key={`${name}.${index}` as Path<Payload>}
            index={`${name}.${index}` as Path<Payload>}
          />
        ))}
      </div>
    </div>
  );
}
