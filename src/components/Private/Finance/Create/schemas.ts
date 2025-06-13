import i18n from "@configs/i18n";
import { z } from "zod";

export const ChargeSchema = z.object({
  title: z.string({ required_error: i18n("Validations.required") }),
  service_id: z.string({ required_error: i18n("Validations.required") }),
  type: z.enum(["APPELLANT", "PUNCTUAL"]),
  privacy: z.enum(["PUBLIC", "PRIVATE"]),
  period: z
    .string({ required_error: i18n("Validations.required") })
    .optional(),
  amount: z
    .string({ required_error: i18n("Validations.required") })
    .optional(),
  price: z.string({ required_error: i18n("Validations.required") }),
  started_at: z
    .string({ required_error: i18n("Validations.required") })
    .optional(),
  expired_days: z
    .string({ required_error: i18n("Validations.required") })
    .optional(),
  promotional_price: z.string({
    required_error: i18n("Validations.required"),
  }),
});

export type ChargesPayload = z.infer<typeof ChargeSchema>;
