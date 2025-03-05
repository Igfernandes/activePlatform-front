import i18n from "@configs/i18n";
import { z } from "zod";

export const ServicesModalSchema = z
  .object({
    name: z.string({ required_error: i18n("errors.fields.required") }).min(3, {
      message: (i18n("errors.fields.min_length") as string)
        .replace("${field}", i18n("words.category"))
        .replace("${length}", "3"),
    }),
    type: z.string({ required_error: i18n("errors.fields.required") }),
    describe: z.string({ required_error: i18n("errors.fields.required") }),
    access: z.enum(["PUBLIC", "PRIVATE"]),
    limitVacancies: z.number(),
    disabledLimitVacancies: z.boolean(),
    reservationVacancies: z.number(),
    disabledReservationVacancies: z.boolean(),
    image: z.instanceof(File).refine((file) => file.type.startsWith("image/"), {
      message: "Only image files are allowed.",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.reservationVacancies > data.limitVacancies) {
      ctx.addIssue({
        path: ["limit"],
        message:
          "O valor de limit não pode ser maior que o valor de reservation.",
        code: z.ZodIssueCode.custom,
      });
    }
    // Valida se 'reservation' é maior que 1 quando não está desabilitado
    if (!data.disabledLimitVacancies && data.limitVacancies <= 1) {
      ctx.addIssue({
        path: ["limitVacancies"],
        message:
          "Reservation deve ser maior que 1 quando não está desabilitado.",
        code: z.ZodIssueCode.custom,
      });
    }
    if (!data.disabledReservationVacancies && data.reservationVacancies <= 1) {
      ctx.addIssue({
        path: ["reservationVacancies"],
        message:
          "Reservation deve ser maior que 1 quando não está desabilitado.",
        code: z.ZodIssueCode.custom,
      });
    }
  });

export type ServicesPayload = z.infer<typeof ServicesModalSchema>;
