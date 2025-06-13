import i18n from "@configs/i18n";
import { z } from "zod";

export const UserSharedModalSchema = z.object({
  sectors: z.array(
    z.number({ required_error: i18n("Validations.required") })
  ),
  email: z
    .string({ required_error: i18n("Validations.required") })
    .email({ message: i18n("Validations.email") }),
});

export type UserSharedPayload = z.infer<typeof UserSharedModalSchema>;
