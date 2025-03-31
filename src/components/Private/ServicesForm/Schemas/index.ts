import { z } from "zod";
import { photoSchema } from "./photoSchema";
import { nameSchema } from "./nameSchema";
import { descriptionSchema } from "./descriptionSchema";

export const ServicesModalSchema = z
  .object({
    name: nameSchema,
    type: z.enum(["APPELLANT", "PUNCTUAL"]),
    description: descriptionSchema,
    privacy: z.enum(["PUBLIC", "PRIVATE"]),
    stock: z.string(),
    status: z.enum(["ACTIVE", "INACTIVE"]),
    disabledLimitVacancies: z.enum(["Sim", "Não"]),
    reservations: z.string(),
    disabledReservationVacancies: z.enum(["Sim", "Não"]),
    photo: photoSchema.optional(),
  })
  .superRefine((data, ctx) => {
    if (data.reservations > data.stock)
      return ctx.addIssue({
        path: ["stock"],
        message:
          "O valor de limit não pode ser maior que o valor de reservation.",
        code: z.ZodIssueCode.custom,
      });

    const stock = parseInt(data.stock);
    const reservationVacancies = parseInt(data.reservations);
    if (data.stock && Number.isNaN(stock))
      return ctx.addIssue({
        path: ["stock"],
        message:
          "O valor de limit não pode ser maior que o valor de reservation.",
        code: z.ZodIssueCode.custom,
      });

    if (data.reservations && Number.isNaN(reservationVacancies))
      return ctx.addIssue({
        path: ["reservations"],
        message:
          "O valor de limit não pode ser maior que o valor de reservation.",
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
    if (!data.disabledReservationVacancies && reservationVacancies <= 1) {
      ctx.addIssue({
        path: ["reservations"],
        message:
          "Reservation deve ser maior que 1 quando não está desabilitado.",
        code: z.ZodIssueCode.custom,
      });
    }
  });

export type ServicesPayload = z.infer<typeof ServicesModalSchema> & {
  photo: FileList;
};
