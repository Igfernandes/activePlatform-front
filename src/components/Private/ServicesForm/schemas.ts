import i18n from "@configs/i18n";
import { z } from "zod";

const photoSchema = z.custom(
  (val) => val instanceof FileList && val.length > 0,
  {
    message: i18n("errors.fields.image_valid"),
  }
);

export const ServicesModalSchema = z
  .object({
    name: z
      .string({ required_error: i18n("errors.fields.required") })
      .min(3, {
        message: (i18n("errors.fields.min_length") as string)
          .replace("${field}", i18n("words.name"))
          .replace("${length}", "3"),
      })
      .max(200, {
        message: (i18n("errors.fields.max_length") as string)
          .replace("${field}", i18n("words.name"))
          .replace("${length}", "200"),
      }),
    type: z.enum(["APPELLANT", "PUNCTUAL"]),
    status: z.enum(["ACTIVE", "INACTIVE"]),
    description: z
      .string({ required_error: i18n("errors.fields.required") })
      .optional(),
    privacy: z.enum(["PUBLIC", "PRIVATE"]),
    stock: z.string(),
    disabledLimitVacancies: z.enum(["Sim", "Não"]),
    reservations: z.string(),
    disabledReservationVacancies: z.enum(["Sim", "Não"]),
    photo: photoSchema,
  })
  .superRefine((data, ctx) => {
    if (data.reservations > data.stock)
      return ctx.addIssue({
        path: ["limit"],
        message:
          "O valor de limit não pode ser maior que o valor de reservation.",
        code: z.ZodIssueCode.custom,
      });

    const stock = parseInt(data.stock);
    const reservationVacancies = parseInt(data.reservations);
    if (data.stock && Number.isNaN(stock))
      return ctx.addIssue({
        path: ["limit"],
        message:
          "O valor de limit não pode ser maior que o valor de reservation.",
        code: z.ZodIssueCode.custom,
      });

    if (data.reservations && Number.isNaN(reservationVacancies))
      return ctx.addIssue({
        path: ["reservationVacancies"],
        message:
          "O valor de limit não pode ser maior que o valor de reservation.",
        code: z.ZodIssueCode.custom,
      });

    // Valida se 'reservation' é maior que 1 quando não está desabilitado
    if (!data.disabledLimitVacancies && stock <= 1) {
      ctx.addIssue({
        path: ["limitVacancies"],
        message:
          "Reservation deve ser maior que 1 quando não está desabilitado.",
        code: z.ZodIssueCode.custom,
      });
    }
    if (!data.disabledReservationVacancies && reservationVacancies <= 1) {
      ctx.addIssue({
        path: ["reservationVacancies"],
        message:
          "Reservation deve ser maior que 1 quando não está desabilitado.",
        code: z.ZodIssueCode.custom,
      });
    }
  });

export type ServicesPayload = z.infer<typeof ServicesModalSchema> & {
  photo: FileList;
};
