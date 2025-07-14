export type GetFormsRequest = {
  id?: number;
  name?: string;
  slug?: string;
  description_contains?: string;
  service_id?: number;
  status?: "ACTIVE" | "INACTIVE";
};
