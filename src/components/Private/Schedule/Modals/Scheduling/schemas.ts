import i18n from "@configs/i18n";
import dayjs from "dayjs";
import { z } from "zod";

export const ScheduleSchema = z
  .object({
    title: z
      .string({ required_error: i18n("Validations.required") })
      .min(3, {
        message: (i18n("Validations.min_length") as string)
          .replace("${field}", i18n("Words.name"))
          .replace("${length}", "3"),
      })
      .max(200, {
        message: (i18n("Validations.min_length") as string)
          .replace("${field}", i18n("Words.name"))
          .replace("${length}", "3"),
      }),
    date: z
      .string({ required_error: i18n("Validations.required") })
      .nonempty({ message: i18n("Validations.required") })
      .refine(
        (value) => {
          const inputDate = dayjs(value, "YYYY-MM-DDTHH:mm", true); // true = parsing estrito
          const today = dayjs().startOf("day");
          return (
            (inputDate.isValid() && inputDate.isSame(today)) ||
            inputDate.isAfter(today)
          );
        },
        {
          message: i18n("Validations.invalid_date"),
        }
      ),
    end_date: z
      .string({ required_error: i18n("Validations.required") })
      .optional()
      .nullable(),
    describe: z.string({ required_error: i18n("Validations.required") }),
    color: z.string({ required_error: i18n("Validations.required") }),
    linked: z
      .array(z.string().or(z.boolean()))
      .refine((arr) => arr.some((item) => typeof item === "string"), {
        message: i18n("Validations.invalid_schedule_linked") ,
      }),
  })
  .refine(
    (data) => {
      if (!data.end_date) return true; // se end_date for null ou undefined, ignora
      const start = dayjs(data.date, "YYYY-MM-DDTHH:mm", true);
      const end = dayjs(data.end_date, "YYYY-MM-DDTHH:mm", true);
      return start.isValid() && end.isValid() && end.isAfter(start);
    },
    {
      message: i18n("Validations.invalid_end_date"),
      path: ["end_date"], // atribui o erro ao campo específico
    }
  );

export type ScheduleUpdatePayload = z.infer<typeof ScheduleSchema>;
