import i18n from "@configs/i18n";
import { z } from "zod";

export const ConfirmationFormSchema = z.object({
  cpf: z.string({ required_error: i18n("Validations.required") }).min(11),
  phone: z.string({ required_error: i18n("Validations.required") }).min(11),
});

export type ConfirmationsPayload = z.infer<typeof ConfirmationFormSchema>;