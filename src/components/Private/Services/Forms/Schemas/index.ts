import { z } from "zod";
import { photoSchema } from "./photoSchema";
import { nameSchema } from "./nameSchema";
import { descriptionSchema } from "./descriptionSchema";

export const ServicesModalSchema = z
  .object({
    name: nameSchema,
    description: descriptionSchema,
    alerts: descriptionSchema,
    stock: z.string(),
    snippet: z.string(),
    confirmation_expired_time: z.string().optional().nullable(),
    expired_at: z.string().optional().nullable(),
    realized_at: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    status: z.enum(["ACTIVE", "INACTIVE"]),
    disabledLimitVacancies: z.enum(["Sim", "Não"]),
    photo: photoSchema.optional(),
    gratuity: z.string().optional(),
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

export type ServicesPayload = z.infer<typeof ServicesModalSchema> & {
  photo: FileList;
};
