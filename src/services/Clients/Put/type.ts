import { ClientShape } from "../../../types/Clients";

export type PutClientPayload = Pick<
  ClientShape,
  "id" | "name" | "email" | "phone" | "cpf" | "birthdate"
>;
