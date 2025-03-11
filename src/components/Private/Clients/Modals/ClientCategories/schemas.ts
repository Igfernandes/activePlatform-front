import i18n from "@configs/i18n";
import { z } from "zod";

export const ClientCategoryModalSchema = z.object({
  category: z.string({ required_error: i18n("errors.fields.required") }),
});

export type ClientCategoryPayload = z.infer<typeof ClientCategoryModalSchema>;
