import { FormsShape } from "@type/Forms";

export type GetFormsRequest = {
  id?: number;
  name?: string;
  slug?: string;
  description_contains?: string;
  service_id?: number;
  status?: "PUBLISHED" | "DRAFT";
};
export type FormsResponse<T extends GetFormsRequest> = T["id"] extends number
  ? FormsShape
  : FormsShape[];
