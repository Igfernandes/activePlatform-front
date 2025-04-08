import { FieldsShape } from "@type/Fields";

export type PostCreateFieldsPayload = Omit<
  FieldsShape,
  "id" | "created_at" | "updated_at"
> & {
  relation_id?: number;
};
