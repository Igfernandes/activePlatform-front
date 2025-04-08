import i18n from "@configs/i18n";
import { z } from "zod";

export const UserSharedModalSchema = z.object({
  sectors: z.array(
    z.number({ required_error: i18n("errors.fields.required") })
  ),
  email: z
    .string({ required_error: i18n("errors.fields.required") })
    .email({ message: i18n("errors.fields.invalid_email") }),
});

export type UserSharedPayload = z.infer<typeof UserSharedModalSchema>;
