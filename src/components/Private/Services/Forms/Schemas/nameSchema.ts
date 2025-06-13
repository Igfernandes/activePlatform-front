import i18n from "@configs/i18n";
import { z } from "zod";

export const nameSchema = z
  .string({ required_error: i18n("Validations.required") })
  .min(3, {
    message: (i18n("Validations.min_length") as string)
      .replace("${field}", i18n("Words.name"))
      .replace("${length}", "3"),
  })
  .max(200, {
    message: (i18n("Validations.max_length") as string)
      .replace("${field}", i18n("Words.name"))
      .replace("${length}", "200"),
  });
