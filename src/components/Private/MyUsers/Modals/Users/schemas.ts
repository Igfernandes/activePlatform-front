import i18n from "@configs/i18n";
import { z } from "zod";

export const UserCreateSchema = z.object({
  category: z.string({ required_error: i18n("errors.fields.required") }),
  name: z.string({ required_error: i18n("errors.fields.required") }).min(3, {
    message: (i18n("errors.fields.min_length") as string)
      .replace("${field}", i18n("words.name"))
      .replace("${length}", "3"),
  }),
  identify: z.string({ required_error: i18n("errors.fields.required") }),
  email: z
    .string({ required_error: i18n("errors.fields.required") })
    .email({ message: i18n("errors.fields.invalid_email") }),
  phone: z.string({ required_error: i18n("errors.fields.required") }),
});

export type UserCreatePayload = z.infer<typeof UserCreateSchema>;
