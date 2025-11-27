import { EventShape } from "@type/Events";

export type GetEventsRequest = {
  id?: number;
  in_ids?: Array<number>;
  name?: string;
  name_contains?: string;
  form_id?: number;
  description_contains?: string;
  type?: "APPELLANT" | "PUNCTUAL";
  status?: "ACTIVE" | "INACTIVE";
  created_at?: string;
  updated_at?: string;
};

export type EventsResponse<T extends GetEventsRequest> = T["id"] extends number
  ? EventShape
  : EventShape[];
