import i18n from "@configs/i18n";
import { z } from "zod";

export function useRecoverPasswordRequestSchema() {
  const schema = z.object({
    email: z.string().email({ message: i18n("Validations.email") }),
  });

  return {
    schema,
  };
}
