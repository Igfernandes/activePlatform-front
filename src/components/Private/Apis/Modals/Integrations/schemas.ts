import i18n from "@configs/i18n";
import { z } from "zod";

export const integrationsSchema = z.object({
  public_token: z
    .string({ required_error: i18n("Validations.required") }).nullable()
    .optional(),
  private_token: z
    .string({ required_error: i18n("Validations.required") }).nullable()
    .optional(),
  name: z.string({ required_error: i18n("Validations.required") }).optional(),
  status: z.enum(["ACTIVE", "INACTIVE"]).optional(),
});

export type IntegrationsPayload = z.infer<typeof integrationsSchema>;
