import { Over, UniqueIdentifier } from "@dnd-kit/core";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

export type GroupFieldsProps<Payload extends FieldValues> = {
  name: Path<Payload>;
  data: Array<GroupFieldsDataShape>;
};

export type GroupFieldsDataShape = {
  value: string;
  position: number;
};

export type ItemProps<Payload extends FieldValues> = {
  id: UniqueIdentifier;
  value: string;
  name: string;
  errors: FieldErrors<Payload>;
  register: UseFormRegister<Payload>;
  onChange: (id: UniqueIdentifier, action: "EDIT" | "DELETE") => void;
  target: UniqueIdentifier | undefined;
  position: number;
};

export type ItemShape = {
  id: UniqueIdentifier;
  value?: string;
};

export type EventDragProps = {
  active: ItemShape;
  over: Over | null;
};
