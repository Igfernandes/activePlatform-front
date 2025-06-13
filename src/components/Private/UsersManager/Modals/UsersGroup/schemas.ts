import i18n from "@configs/i18n";
import { z } from "zod";

export const GroupModalSchema = z.object({
  name: z.string({ required_error: i18n("Validations.required") }).min(3, {
    message: (i18n("Validations.min_length") as string)
      .replace("${field}", i18n("Words.name"))
      .replace("${length}", "3"),
  }),
  permissions: z.array(
    z
      .string({ required_error: i18n("Validations.required") })
      .or(z.number())
      .or(z.boolean())
  ),
});

export type UsersGroupPayload = z.infer<typeof GroupModalSchema>;
