import { z } from "zod";
import { nameSchema } from "./nameSchema";
import { descriptionSchema } from "./descriptionSchema";
import { TFunction } from "@contexts/I18n";
import { optionalNumber } from "@helpers/numbers";

export const EventsModalSchema = (t: TFunction) =>
  z
    .object({
      name: nameSchema,
      description: descriptionSchema,
      alerts: descriptionSchema,
      stock: z.number(),
      confirmation_expired_time: optionalNumber(),
      completed_at: z.string().optional(),
      realized_at: z.string().optional(),
      address: z.string().optional(),
      status: z.enum(["ACTIVE", "INACTIVE"]),
      feedback_id: optionalNumber(),
      form_id: z.number({
        message: t("Validations.required"),
      }),
      banner: z.string().nullable().optional(),
    })
    .superRefine((data, ctx) => {
      const stock = data.stock;

      if (stock && Number.isNaN(stock))
        return ctx.addIssue({
          path: ["stock"],
          message: "O limite não pode ser indefinido",
          code: z.ZodIssueCode.custom,
        });
    });

export type EventsPayload = z.infer<ReturnType<typeof EventsModalSchema>>;
