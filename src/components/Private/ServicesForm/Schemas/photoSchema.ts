import i18n from "@configs/i18n";
import { z } from "zod";

export const photoSchema = z.custom(
  (val) => val instanceof FileList && val.length == 0,
  {
    message: i18n("errors.fields.image_valid"),
  }
);
