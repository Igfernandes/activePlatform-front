import { i18n } from "next-i18next";
import { z } from "zod";

export const loginFormSchema = z.object({
  login: z.string().email({ message: i18n?.t("errors.fields.invalid_email") }),
  password: z.string({ required_error: i18n?.t("errors.required") }),
  rememberMe: z.boolean().nullable(),
});
