import { FieldsShape } from "@type/Fields";

export type DeleteFieldPayload = Pick<FieldsShape, "scope"> & {
  id: number;
};
