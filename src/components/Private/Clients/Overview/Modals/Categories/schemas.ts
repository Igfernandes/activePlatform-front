import i18n from "@configs/i18n";
import { z } from "zod";

export const CategoryModalSchema = z.object({
  categories: z.array(
    z.string({ required_error: i18n("Validations.required") }).min(3, {
      message: (i18n("Validations.min_length") as string)
        .replace("${field}", i18n("Words.category"))
        .replace("${length}", "3"),
    })
  ),
});

export type CategoryPayload = z.infer<typeof CategoryModalSchema>;
