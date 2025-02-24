import i18n from "@configs/i18n";
import { z } from "zod";

export const CategoryModalSchema = z.object({
  category: z.array(
    z.string({ required_error: i18n("errors.fields.required") }).min(3, {
      message: (i18n("errors.fields.min_length") as string)
        .replace("${field}", i18n("words.category"))
        .replace("${length}", "3"),
    })
  ),
});

export type CategoryPayload = z.infer<typeof CategoryModalSchema>;
