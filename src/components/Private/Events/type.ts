import { JSX } from "react";
import { EventShape } from "@type/Events";

export type HookEventsProps<EventType> = {
  filter: string;
  handleFilter: (data: EventType) => boolean;
};

export type TDataEvents = Omit<
  EventShape,
  "created_at" | "updated_at" | "description" | "banner" | "inscribes" | "stock"
> & {
  last_updated: string;
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
