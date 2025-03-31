import { fieldsLayout } from "./layout";
import { fieldsSimple } from "./simples";
import { fieldsUser } from "./users";

export const fields = {
  ...fieldsSimple,
  ...fieldsUser,
  ...fieldsLayout,
};
