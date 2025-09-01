import { ClientShape } from "../../../types/Clients";

export type PostSubscribeClientPayload = Pick<
  ClientShape,
  "name" | "phone"
>;
