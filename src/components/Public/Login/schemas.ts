import i18n from "@configs/i18n";
import { z } from "zod";

export const loginFormSchema = z.object({
  login: z
    .string({ required_error: i18n("Validations.required") })
    .email({ message: i18n("Validations.email") }),
  password: z.string({ required_error: i18n("Validations.email") }),
  rememberMe: z
    .boolean({ required_error: i18n("Validations.boolean") })
    .nullable(),
});
