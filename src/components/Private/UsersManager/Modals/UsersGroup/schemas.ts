import i18n from "@configs/i18n";
import { z } from "zod";

export const GroupModalSchema = z.object({
  name: z.string({ required_error: i18n("errors.fields.required") }).min(3, {
    message: (i18n("errors.fields.min_length") as string)
      .replace("${field}", i18n("words.name"))
      .replace("${length}", "3"),
  }),
  permissions: z.array(
    z.string({ required_error: i18n("errors.fields.required") })
  ),
});

export type UsersGroupPayload = z.infer<typeof GroupModalSchema>;
