import i18n from "@configs/i18n";
import { REGEXES } from "@constants/regexes";
import { isDayValid, isMonthValid } from "@helpers/date";
import { z } from "zod";

export const ClientSchema = z.object({
  category: z.string({ required_error: i18n("Validations.required") }),
  name: z.string({ required_error: i18n("Validations.required") }).min(3, {
    message: (i18n("Validations.min_length") as string)
      .replace("${field}", i18n("Words.name"))
      .replace("${length}", "3"),
  }),
  birthdate: z
    .string({ required_error: i18n("Validations.required") })
    .optional() // Permite que o campo seja omitido ou vazio
    .or(z.literal("")) // Permite string vazia ("")
    .refine((date) => date === "" || REGEXES.DATE_BR.test(`${date}`), {
      message: `Formato inválido (${i18n("Configs.format.date")})`,
    })
    .refine((date) => {
      if (!date) return true;
      const [day, month] = date.split("/").map(Number);

      return isMonthValid(month) && isDayValid(day);
    }, "Data inválida"),
  email: z
    .string({ required_error: i18n("Validations.required") })
    .optional() // Permite que o campo seja omitido ou vazio
    .or(z.literal("")) // Permite string vazia ("")
    .refine((email) => email === "" || REGEXES.EMAIL.test(`${email}`), {
      message: i18n("Validations.email"),
    }),
  phone: z.string({ required_error: i18n("Validations.required") }),
  cpf: z
    .string({ required_error: i18n("Validations.required") })
    .nonempty(i18n("Validations.required")),
});

export type ClientUpdatePayload = z.infer<typeof ClientSchema>;
