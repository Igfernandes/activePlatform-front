import i18n from "@configs/i18n";
import { z } from "zod";

export const photoSchema = z.custom(
  (val) => {
    return val instanceof FileList || !val;
  },
  {
    message: i18n("Validations.image_valid"),
  }
);
