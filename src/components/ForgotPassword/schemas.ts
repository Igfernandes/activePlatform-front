import { i18n } from "next-i18next";
import { z } from "zod";

export const RecoverPasswordRequestFormSchema = z.object({
  email: z.string().email(i18n?.t("errors.fields.invalid_email")),
});
