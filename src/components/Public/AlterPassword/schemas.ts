import i18n from "@configs/i18n";
import {
  hasSomeLetterLowercase,
  hasSomeLetterUppercase,
  hasSomeNumber,
  hasSomeSpecialCharacter,
} from "@helpers/string";
import { z } from "zod";

export const alterPasswordFormSchema = z
  .object({
    password: z
      .string({ required_error: i18n("Validations.required") })
      .min(8)
      .refine(hasSomeLetterUppercase)
      .refine(hasSomeLetterLowercase)
      .refine(hasSomeNumber)
      .refine(hasSomeSpecialCharacter),
    passwordConfirm: z.string({
      required_error: i18n("Validations.required"),
    }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: i18n("Validations.required"),
    path: ["passwordConfirm"],
  });
