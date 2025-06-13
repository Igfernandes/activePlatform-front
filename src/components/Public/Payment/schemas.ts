import i18n from "@configs/i18n";
import { z } from "zod";

export const paymentFormSchema = z.object({
  amounts: z.array(
    z.string({ required_error: i18n("Validations.required") })
  ),
  email: z
    .string({ required_error: i18n("Validations.required") })
    .email({ message: i18n("Validations.email") }),
  cpf: z.string({ required_error: i18n("Validations.required") }),
  phone: z.string({ required_error: i18n("Validations.required") }),
  name: z.string({ required_error: i18n("Validations.required") }),
});

export type PaymentPayload = z.infer<typeof paymentFormSchema>;
