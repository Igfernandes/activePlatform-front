import i18n from "@configs/i18n";
import { REGEXES } from "@constants/regexes";
import { z } from "zod";

export const ChatsSchema = z.object({
  type: z.enum(['FACEBOOK', 'INSTAGRAM', 'WHATSAPP']),
  public_token: z.string(),
  private_token: z.string(),
  username: z.string(),
  password: z.string(),
  login: z
    .string({ required_error: i18n("errors.fields.required") })
    .optional() // Permite que o campo seja omitido ou vazio
    .or(z.literal("")) // Permite string vazia ("")
    .refine((email) => email === "" || REGEXES.EMAIL.test(`${email}`), {
      message: i18n("errors.fields.invalid_email"),
    }),
});

export type ChatsPayload = z.infer<typeof ChatsSchema>;
