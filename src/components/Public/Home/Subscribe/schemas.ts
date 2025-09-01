import i18n from "@configs/i18n";
import { z } from "zod";

export const SubscribeSchema = z.object({
  name: z.string({ required_error: i18n("Validations.required") }),
  phone: z.string({ required_error: i18n("Validations.required") }),
});

export type SubscribePayload = z.infer<typeof SubscribeSchema>;
