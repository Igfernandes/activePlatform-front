import { JSX } from "react";
import { EventShape } from "@type/Events";

export type HookEventsProps<EventType> = {
  filter: string;
  handleFilter: (data: EventType) => boolean;
};

export type TDataEvents = Omit<
  EventShape,
  "updated_at" | "description" | "banner" | "inscribes" | "stock"
> & {
  inscribes: number;
  actions: JSX.Element;
};

export type EventsProps = {
  filterObjects: <ObjectShape extends Record<string, unknown>>(
    object: ObjectShape
  ) => boolean;
  search: string;
};

export type ModalEventsOperationType = "DELETE" | boolean;
