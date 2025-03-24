import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type GroupCheckItemShape = {
  label: string;
  value: string | number;
};

export type GroupChecksProps<Payload extends FieldValues> = {
  items: Array<GroupCheckItemShape>;
  register: UseFormRegister<Payload>;
  name: Path<Payload>;
};
