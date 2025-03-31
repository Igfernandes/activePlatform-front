import i18n from "@configs/i18n";
import { z } from "zod";

export const descriptionSchema = z
  .string({ required_error: i18n("errors.fields.required") })
  .optional();
