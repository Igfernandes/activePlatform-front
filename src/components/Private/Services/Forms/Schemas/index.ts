import { z } from "zod";
import { nameSchema } from "./nameSchema";
import { descriptionSchema } from "./descriptionSchema";

export const ServicesModalSchema = z.object({
  name: nameSchema,
  description: descriptionSchema,
  alerts: descriptionSchema,
  snippet: z.string(),
  expired_at: z.string().optional().nullable(),
  realized_at: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  status: z.enum(["ACTIVE", "INACTIVE"]),
  photo: z.string().optional(),
});

export type ServicesPayload = z.infer<typeof ServicesModalSchema>;
