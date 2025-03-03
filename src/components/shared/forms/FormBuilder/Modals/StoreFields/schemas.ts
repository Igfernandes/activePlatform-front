import i18n from "@configs/i18n";
import { z } from "zod";

export const StoreFieldsSchema = z.object({
  group: z.string({ required_error: i18n("errors.fields.required") }),
  name: z.string({ required_error: i18n("errors.fields.required") }).min(3, {
    message: (i18n("errors.fields.min_length") as string)
      .replace("${field}", i18n("words.name"))
      .replace("${length}", "3"),
  }),
  value: z.string({ required_error: i18n("errors.fields.required") }),
});

export type StoreFieldsPayload = z.infer<typeof StoreFieldsSchema>;
