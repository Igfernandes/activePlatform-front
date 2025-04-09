import i18n from "@configs/i18n";
import { REGEXES } from "@constants/regexes";
import {
  hasSomeLetterLowercase,
  hasSomeLetterUppercase,
  hasSomeNumber,
  hasSomeSpecialCharacter,
} from "@helpers/string";
import { z } from "zod";

export const createUserFormSchema = z
  .object({
    keyword: z.string({ required_error: i18n("errors.fields.required") }).nonempty(i18n("errors.fields.required")),
    password: z
      .string({ required_error: i18n("errors.fields.required") }).nonempty(i18n("errors.fields.required"))
      .min(8)
      .refine(hasSomeLetterUppercase)
      .refine(hasSomeLetterLowercase)
      .refine(hasSomeNumber)
      .refine(hasSomeSpecialCharacter),
    passwordConfirm: z.string({
      required_error: i18n("errors.fields.required"),
    }).nonempty(i18n("errors.fields.required")),
    cpf: z.string({ required_error: i18n("errors.fields.required") }).nonempty(i18n("errors.fields.required")),
    birthdate: z
      .string({ required_error: i18n("errors.fields.required") }).nonempty(i18n("errors.fields.required"))
      .refine((date) => date === "" || REGEXES.DATE_BR.test(`${date}`), {
        message: `Formato inválido (${i18n("configs.formats.date")})`,
      }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: i18n("errors.fields.required"),
    path: ["passwordConfirm"],
  });

export type CreateUserPayload = z.infer<typeof createUserFormSchema>;
