import i18n from "@configs/i18n";
import { z } from "zod";

export const formsSchema = z
  .object({
    title: z.string({ required_error: i18n("Validations.required") }).min(3, {
      message: (i18n("Validations.min_length") as string)
        .replace("${field}", i18n("Words.name"))
        .replace("${length}", "3"),
    }),
    weekday: z
      .array(
        z
          .enum([
            "SUNDAY",
            "MONDAY",
            "TUESDAY",
            "WEDNESDAY",
            "THURSDAY",
            "FRIDAY",
            "SATURDAY",
          ])
          .or(z.boolean())
      )
      .optional(),
    period: z.enum(["DAILY", "WEEKLY", "MONTHLY"]).or(z.string()).optional(),
    content: z
      .string({ required_error: i18n("Validations.required") })
      .optional(),
    platforms: z.array(
      z
        .enum(["FACEBOOK", "INSTAGRAM", "WHATSAPP", "EMAIL", "SMS"])
        .or(z.boolean())
        .or(z.null())
    ),
    scheduled_day: z
      .string()
      .min(1, {
        message: (i18n("Validations.min_length") as string)
          .replace("${field}", i18n("Words.scheduled_day"))
          .replace("${length}", "3"),
      })
      .max(31)
      .optional(),
    started_at: z.string().optional(),
    service_id: z.string().optional(),
    charge_id: z.string().optional(),
    isLoading: z.boolean().optional(),
    all_clients: z.boolean().optional(),
    has_file: z.enum(["SIM", "NÃO"]).default("NÃO").optional(),
    has_image: z.enum(["SIM", "NÃO"]).default("NÃO").optional(),
  })
  .superRefine((data, ctx) => {
    const availablePlatforms = data.platforms.filter((platform) => !!platform);
    if (availablePlatforms.length == 0)
      return ctx.addIssue({
        path: ["platforms"],
        message: "É obrigatório escolher uma plataforma",
        code: z.ZodIssueCode.custom,
      });
  });

export type FormsPayload = z.infer<typeof formsSchema>;
