import { Button } from "../../fields/Button";
import { Checkbox } from "../../fields/Checkbox";
import { Date } from "../../fields/Date";
import { Datetime } from "../../fields/Datetime";
import { File } from "../../fields/File";
import { Input } from "../../fields/Input";
import { Radio } from "../../fields/Radio";
import { Time } from "../../fields/Time";
import { FieldShape } from "../../type";

export const classNameDefault = "h-7 py-1 px-2 ";

export const fieldsSimple = {
  text: ({ className, ...props }: FieldShape) => (
    <Input
      type="text"
      className={`${classNameDefault} w-full ${className}`}
      {...props}
    />
  ),
  radio: ({ className, ...props }: FieldShape) => (
    <Radio className={`${classNameDefault} ml-2 ${className}`} {...props} />
  ),
  checkbox: ({ className, ...props }: FieldShape) => (
    <Checkbox className={`${classNameDefault} ml-2 ${className}`} {...props} />
  ),
  select: ({ className, required, ...props }: FieldShape) => (
    <select
      required={required === "true"}
      className={`${classNameDefault} w-full m-2 ${className}`}
      {...props}
    />
  ),
  date: ({ className, ...props }: FieldShape) => (
    <Date
      type="date"
      className={`${classNameDefault} w-full ${className}`}
      {...props}
    />
  ),
  "datetime-local": ({ className, ...props }: FieldShape) => (
    <Datetime
      type="datetime-local"
      className={`${classNameDefault} w-full ${className}`}
      {...props}
    />
  ),
  "time": ({ className, ...props }: FieldShape) => (
    <Time
      className={`${classNameDefault} w-full ${className}`}
      {...props}
    />
  ),
  color: ({ className, ...props }: FieldShape) => (
    <Input
      type="color"
      className={`${classNameDefault} w-full ${className}`}
      {...props}
    />
  ),
  file: ({ required, ...props }: FieldShape) => (
    <File
      required={required === "true"}
      className={`${classNameDefault} w-full h-[3.5rem]`}
      {...props}
    />
  ),
  hidden: ({ className, ...props }: FieldShape) => (
    <Input
      type="hidden"
      className={`${classNameDefault} w-full ${className}`}
      {...props}
    />
  ),
  number: ({ className, ...props }: FieldShape) => (
    <Input
      type="number"
      className={`${classNameDefault} w-full ${className}`}
      {...props}
    />
  ),
  url: ({ className, ...props }: FieldShape) => (
    <Input
      type="url"
      className={`${classNameDefault} ${className}`}
      {...props}
    />
  ),
  button: ({ className, ...props }: FieldShape) => (
    <Button className={`${classNameDefault} ${className}`} {...props} />
  ),
};
