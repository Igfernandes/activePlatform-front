import { ServicesShape } from "@type/Services";

export type GetServicesRequest = {
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
export type ServicesResponse<T extends GetServicesRequest> =
  T["id"] extends number ? ServicesShape : ServicesShape[];