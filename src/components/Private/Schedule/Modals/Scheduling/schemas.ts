import i18n from "@configs/i18n";
import { z } from "zod";

export const ScheduleSchema = z.object({
  title: z.string({ required_error: i18n("Validations.required") }).min(3, {
    message: (i18n("Validations.min_length") as string)
      .replace("${field}", i18n("Words.name"))
      .replace("${length}", "3"),
  }),
  date: z.string({ required_error: i18n("Validations.required") }),
  end_date: z
    .string({ required_error: i18n("Validations.required") })
    .optional().nullable(),
  describe: z.string({ required_error: i18n("Validations.required") }),
  color: z.string({ required_error: i18n("Validations.required") }),
  linked: z.array(z.string().or(z.boolean())),
});

export type ScheduleUpdatePayload = z.infer<typeof ScheduleSchema>;
