import { FormsShape } from "../../../types/Forms";

export type PostCreateFormPayload = Pick<
  FormsShape,
  "name" | "status" | "type" | "components" | "description"
>;
