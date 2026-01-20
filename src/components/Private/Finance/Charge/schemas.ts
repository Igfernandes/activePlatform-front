import { TFunction } from "@contexts/I18n";
import { z } from "zod";

export const ChargeProfileSchema = (t: TFunction) =>
  z.object({
    title: z.string({ required_error: t("Validations.required") }).min(3, {
      message: t("Validations.min_length", {
        field: t("Words.name"),
        length: "3",
      }),
    }),
    service_id: z
      .string({ required_error: t("Validations.required") })
      .optional(),
    status: z.enum(["ACTIVE", "INACTIVE"], {
      message: t("Validations.enum", {
        field: t("Words.status"),
        list: '"ACTIVE", "INACTIVE"',
      }),
    }),
    type: z.enum(["APPELLANT", "PUNCTUAL"], {
      message: t("Validations.enum", {
        field: t("Words.type"),
        list: '"APPELLANT", "PUNCTUAL"',
      }),
    }),
    period: z.string({ required_error: t("Validations.required") }),
    expired_days: z.string({ required_error: t("Validations.required") }),
    started_at: z.string({ required_error: t("Validations.required") }),
    amount: z.string({ required_error: t("Validations.required") }),
    price: z.string({ required_error: t("Validations.required") }),
    promotional_price: z.string({
      required_error: t("Validations.required"),
    }),
  });

export type ChargeUpdatePayload = z.infer<
  ReturnType<typeof ChargeProfileSchema>
>;
