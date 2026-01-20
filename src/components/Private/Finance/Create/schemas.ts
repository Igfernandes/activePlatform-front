import { TFunction } from "@contexts/I18n";
import { z } from "zod";

export const ChargeSchema = (t: TFunction) =>
  z.object({
    title: z.string({ required_error: t("Validations.required") }).max(100, {
      message: t("Validations.max_length", {
        field: t("Words.name"),
        length: "100",
      }),
    }),

    service_id: z.string({ required_error: t("Validations.required") }),
    type: z.enum(["APPELLANT", "PUNCTUAL"], {
      message: t("Validations.enum", {
        field: t("Words.type"),
        list: '"APPELLANT", "PUNCTUAL"',
      }),
    }),
    period: z.string({ required_error: t("Validations.required") }).optional(),
    amount: z.string({ required_error: t("Validations.required") }).optional(),
    price: z.string({ required_error: t("Validations.required") }),
    started_at: z
      .string({ required_error: t("Validations.required") })
      .optional(),
    expired_days: z
      .string({ required_error: t("Validations.required") })
      .optional(),
    promotional_price: z.string({
      required_error: t("Validations.required"),
    }),
  });

export type ChargesPayload = z.infer<ReturnType<typeof ChargeSchema>>;
