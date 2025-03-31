import { ServicesShape } from "../../../types/Services";

export type PutServicesPayload = Omit<
  ServicesShape,
  "photo" | "created_at" | "updated_at"
> & {
  photo?: FileList;
};
