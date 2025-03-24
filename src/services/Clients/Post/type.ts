import { ClientShape } from "../../../types/Clients/client";

export type PostCreateClientPayload = Pick<
  ClientShape,
  "name" | "email" | "phone" | "birthdate"
>;
