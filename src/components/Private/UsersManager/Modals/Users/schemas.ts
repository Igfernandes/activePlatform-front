import i18n from "@configs/i18n";
import { z } from "zod";

export const UsersModalSchema = z.object({
  id: z.number().nullable().optional(),
  group: z.array(z.string({ required_error: i18n("Validations.required") })),
  name: z.string({ required_error: i18n("Validations.required") }).min(3, {
    message: (i18n("Validations.min_length") as string)
      .replace("${field}", i18n("Words.name"))
      .replace("${length}", "3"),
  }),
  email: z
    .string({ required_error: i18n("Validations.required") })
    .email({ message: i18n("Validations.email") }),
  phone: z.string({ required_error: i18n("Validations.required") }),
});

export type UsersPayload = z.infer<typeof UsersModalSchema>;
