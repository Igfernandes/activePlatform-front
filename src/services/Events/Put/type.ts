import { EventShape } from "@type/Events";

export type PutEventsPayload = Omit<
  EventShape,
  "banner" | "created_at" | "updated_at"
> & {
  banner?: string | null;
};
