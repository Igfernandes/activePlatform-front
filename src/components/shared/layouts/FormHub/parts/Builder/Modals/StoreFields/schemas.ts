import i18n from "@configs/i18n";
import { z } from "zod";

export const StoreFieldsSchema = z.object({
  group: z.string({ required_error: i18n("Validations.required") }),
  name: z.string({ required_error: i18n("Validations.required") }).min(3, {
    message: (i18n("Validations.min_length") as string)
      .replace("${field}", i18n("Words.name"))
      .replace("${length}", "3"),
  }),
  component: z.enum(["INPUT", "SELECT", "TEXTAREA"]).default("INPUT"),
  is_required: z.enum(["YES", "NOT"]).default("NOT"),
  is_sensitive: z.enum(["YES", "NOT"]).default("NOT"),
  type: z
    .enum(["TEXT", "COLOR", "NUMBER", "DATE", "DATETIME-LOCAL", "FILE"])
    .default("TEXT"),
  hasContinueRegister: z.boolean(),
  value: z
    .string({ required_error: i18n("Validations.required") })
    .optional(),
});

export type StoreFieldsPayload = z.infer<typeof StoreFieldsSchema>;
