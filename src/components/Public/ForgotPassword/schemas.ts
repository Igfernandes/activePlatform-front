import i18n from "@configs/i18n";
import { z } from "zod";

export const RecoverPasswordRequestFormSchema = z.object({
  email: z.string().email(i18n("Validations.email")),
});
