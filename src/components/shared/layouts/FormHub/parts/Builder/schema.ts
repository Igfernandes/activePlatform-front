import { z } from "zod";

export const formBuilderSchema = z.object({
  field: z.array(
    z.object({
      id: z.string(),
      value: z.any(),
    })
  ),
});

export type FormBuilderPayload = z.infer<typeof formBuilderSchema>;
