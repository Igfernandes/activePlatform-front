import i18n from "@configs/i18n";
import { REGEXES } from "@constants/regexes";
import { isDayValid, isMonthValid } from "@helpers/date";
import { z } from "zod";

export const SettingsSchema = z.object({
  name: z.string({ required_error: i18n("errors.fields.required") }).min(3, {
    message: (i18n("errors.fields.min_length") as string)
      .replace("${field}", i18n("words.name"))
      .replace("${length}", "3"),
  }),
  cpf: z.string({ required_error: i18n("errors.fields.required") }).nonempty(i18n("errors.fields.required")),
  birthdate: z
    .string({ required_error: i18n("errors.fields.required") })
    .or(z.literal("")) // Permite string vazia ("")
    .refine((date) => date === "" || REGEXES.DATE_BR.test(`${date}`), {
      message: `Formato inválido (${i18n("configs.formats.date")})`,
    })
    .refine((date) => {
      if (!date) return true;
      const [day, month] = date.split("/").map(Number);

      return isMonthValid(month) && isDayValid(day);
    }, "Data inválida"),
  phone: z.string({ required_error: i18n("errors.fields.required") }),
});

export type SettingsPayload = z.infer<typeof SettingsSchema>;
