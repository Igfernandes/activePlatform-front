import { EventShape } from "@type/Events";

export type PostEventsPayload = Omit<
  EventShape,
  "id" | "banner" | "created_at" | "updated_at"
> & {
  banner?: string;
};
