import { z } from "zod";
import { bannerSchema } from "./bannerSchema";
import { nameSchema } from "./nameSchema";
import { descriptionSchema } from "./descriptionSchema";

export const EventsModalSchema = z
  .object({
    name: nameSchema,
    description: descriptionSchema,
    alerts: descriptionSchema,
    stock: z.string(),
    confirmation_expired_time: z.string().optional().nullable(),
    completed_at: z.string().optional().nullable(),
    realized_at: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    status: z.enum(["ACTIVE", "INACTIVE"]),
    form_id:  z.string().optional().nullable(),
    disabledLimitVacancies: z.enum(["Sim", "Não"]),
    banner: bannerSchema.optional(),
  })
  .superRefine((data, ctx) => {
    const stock = parseInt(data.stock);

    if (stock && Number.isNaN(stock))
      return ctx.addIssue({
        path: ["stock"],
        message: "O limite não pode ser indefinido",
        code: z.ZodIssueCode.custom,
      });

    // Valida se 'reservation' é maior que 1 quando não está desabilitado
    if (!data.disabledLimitVacancies && stock <= 1) {
      ctx.addIssue({
        path: ["stock"],
        message:
          "Reservation deve ser maior que 1 quando não está desabilitado.",
        code: z.ZodIssueCode.custom,
      });
    }
  });

export type EventsPayload = z.infer<typeof EventsModalSchema> & {
  banner: FileList;
};
