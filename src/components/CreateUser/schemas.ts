import {
  hasSomeLetterLowercase,
  hasSomeLetterUppercase,
  hasSomeNumber,
  hasSomeSpecialCharacter,
} from "@helpers/string";
import { i18n } from "next-i18next";
import { z } from "zod";

export const createUserFormSchema = z
  .object({
    name: z.string({ required_error: i18n?.t("errors.required") }),
    password: z
      .string({ required_error: i18n?.t("errors.required") })
      .min(8)
      .refine(hasSomeLetterUppercase)
      .refine(hasSomeLetterLowercase)
      .refine(hasSomeNumber)
      .refine(hasSomeSpecialCharacter),
    passwordConfirm: z.string({ required_error: i18n?.t("errors.required") }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: i18n?.t("errors.required"),
    path: ["passwordConfirm"],
  });
