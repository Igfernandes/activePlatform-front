import { z } from "zod";

export const DispatcherUpdateSchema = z.object({
  status: z.enum(["ACTIVE", "INACTIVE"]),
});

export type DispatcherUpdatePayload = z.infer<typeof DispatcherUpdateSchema>;
