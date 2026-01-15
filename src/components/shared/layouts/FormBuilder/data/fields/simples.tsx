import { Color } from "../../fields/Color";
import { Date } from "../../fields/Date";
import { Datetime } from "../../fields/Datetime";
import { File } from "../../fields/File";
import { Hidden } from "../../fields/Hidden";
import { Input } from "../../fields/Input";
import { Number } from "../../fields/Number";
import { Textarea } from "../../fields/Textarea";
import { Time } from "../../fields/Time";
import { Url } from "../../fields/Url";

export const classNameDefault = "h-7 py-1 px-2 ";

export const fieldsSimple = {
  text: Input,
  date: Date,
  "datetime": Datetime,
  "datetime-local": Datetime,
  number: Number,
  time: Time,
  file: File,
  color: Color,
  url: Url,
  hidden: Hidden,
  textarea: Textarea,
};
