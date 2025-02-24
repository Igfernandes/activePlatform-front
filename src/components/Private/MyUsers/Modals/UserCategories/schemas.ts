import i18n from "@configs/i18n";
import { z } from "zod";

export const UserCategoryModalSchema = z.object({
  category: z.string({ required_error: i18n("errors.fields.required") }),
});

export type UserCategoryPayload = z.infer<typeof UserCategoryModalSchema>;
