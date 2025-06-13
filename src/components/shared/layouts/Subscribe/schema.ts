import i18n from "@configs/i18n";
import { z } from "zod";

export const subscribeSchema = z.object({
  phone: z
    .string({ required_error: i18n("Validations.required") })
    .nonempty(),
});

export type SubscribePayload = z.infer<typeof subscribeSchema>;
