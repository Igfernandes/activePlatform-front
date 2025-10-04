import { z } from "zod";
import { photoSchema } from "./photoSchema";
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
  photo: photoSchema.optional(),
});

export type ServicesPayload = z.infer<typeof ServicesModalSchema> & {
  photo: FileList;
};
