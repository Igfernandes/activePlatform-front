import i18n from "@configs/i18n";
import { z } from "zod";

export const formsSchema = z.object({
  id: z.number().nullable().optional(),
  name: z.string({ required_error: i18n("Validations.required") }).min(3, {
    message: (i18n("Validations.min_length") as string)
      .replace("${field}", i18n("Words.name"))
      .replace("${length}", "3"),
  }),
  template: z
    .string({ required_error: i18n("Validations.required") })
    .nullable()
    .optional()
    .or(z.number()),
  description: z.string({ required_error: i18n("Validations.required") }).nullable().optional(),
  isLoading: z.boolean().optional(),
});

export type FormsPayload = z.infer<typeof formsSchema>;
