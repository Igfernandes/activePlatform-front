export type GetEventsRequest = {
  id?: number;
  in_ids?: Array<number>;
  name?: string;
  name_contains?: string;
  description_contains?: string;
  type?: "APPELLANT" | "PUNCTUAL";
  status?: "ACTIVE" | "INACTIVE";
  created_at?: string;
  updated_at?: string;
};
