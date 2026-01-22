import { ServicesShape } from "../../../types/Services";

export type PostCreateServicesPayload = Omit<
  ServicesShape,
  "id" | "photo" | "created_at" | "updated_at"
> & {
  photo?: string;
};
