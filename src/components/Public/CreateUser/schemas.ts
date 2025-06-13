import i18n from "@configs/i18n";
import {
  hasSomeLetterLowercase,
  hasSomeLetterUppercase,
  hasSomeNumber,
  hasSomeSpecialCharacter,
} from "@helpers/string";
import { z } from "zod";

export const createUserFormSchema = z
  .object({
    keyword: z.string({ required_error: i18n("Validations.required") }).nonempty(i18n("Validations.required")),
    password: z
      .string({ required_error: i18n("Validations.required") }).nonempty(i18n("Validations.required"))
      .min(8)
      .refine(hasSomeLetterUppercase)
      .refine(hasSomeLetterLowercase)
      .refine(hasSomeNumber)
      .refine(hasSomeSpecialCharacter),
    passwordConfirm: z.string({
      required_error: i18n("Validations.required"),
    }).nonempty(i18n("Validations.required")),
    cpf: z.string({ required_error: i18n("Validations.required") }).nonempty(i18n("Validations.required")),
    birthdate: z
      .string({ required_error: i18n("Validations.required") }).nonempty(i18n("Validations.required")),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: i18n("Validations.required"),
    path: ["passwordConfirm"],
  });

export type CreateUserPayload = z.infer<typeof createUserFormSchema>;
