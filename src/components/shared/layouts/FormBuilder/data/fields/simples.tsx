import { Color } from "../../fields/Color";
import { Date } from "../../fields/Date";
import { Datetime } from "../../fields/Datetime";
import { File } from "../../fields/File";
import { Hidden } from "../../fields/Hidden";
import { Input } from "../../fields/Input";
import { Textarea } from "../../fields/Textarea";
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
      className={`${classNameDefault} w-full ${className}`}
      {...props}
    />
  ),
  time: ({ className, ...props }: FieldShape) => (
    <Time className={`${classNameDefault} w-full ${className}`} {...props} />
  ),
  color: ({ className, ...props }: FieldShape) => (
    <Color className={` w-full ${className}`} {...props} />
  ),
  file: ({ required, ...props }: FieldShape) => (
    <File
      required={required}
      className={`${classNameDefault} w-full h-[3.5rem]`}
      {...props}
    />
  ),
  hidden: (props: FieldShape) => <Hidden {...props} />,
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
  textarea: ({ className, ...props }: FieldShape) => (
    <Textarea className={`${classNameDefault} ${className}`} {...props} />
  ),
};
