import { FieldShape } from "../../type";

export const classNameDefault = "h-7 py-1 px-2 ";

export const fieldsSimple = {
  text: ({ className, ...props }: FieldShape) => (
    <input
      type="text"
      className={`${classNameDefault} w-full ${className}`}
      {...props}
    />
  ),
  radio: ({ className, ...props }: FieldShape) => (
    <input
      type="radio"
      className={`${classNameDefault} ml-2 ${className}`}
      {...props}
    />
  ),
  checkbox: ({ className, ...props }: FieldShape) => (
    <input
      type="checkbox"
      className={`${classNameDefault} ml-2 ${className}`}
      {...props}
    />
  ),
  select: ({ className, ...props }: FieldShape) => (
    <select
      className={`${classNameDefault} w-full m-2 ${className}`}
      {...props}
    />
  ),
  date: ({ className, ...props }: FieldShape) => (
    <input
      type="date"
      className={`${classNameDefault} w-full ${className}`}
      {...props}
    />
  ),
  "datetime-local": ({ className, ...props }: FieldShape) => (
    <input
      type="datetime-local"
      className={`${classNameDefault} w-full ${className}`}
      {...props}
    />
  ),
  color: ({ className, ...props }: FieldShape) => (
    <input
      type="color"
      className={`${classNameDefault} w-full ${className}`}
      {...props}
    />
  ),
  file: ({ className, ...props }: FieldShape) => (
    <input
      type="file"
      className={`${classNameDefault} w-full h-auto ${className}`}
      {...props}
    />
  ),
  hidden: ({ className, ...props }: FieldShape) => (
    <input
      type="hidden"
      className={`${classNameDefault} w-full ${className}`}
      {...props}
    />
  ),
  number: ({ className, ...props }: FieldShape) => (
    <input
      type="number"
      className={`${classNameDefault} w-full ${className}`}
      {...props}
    />
  ),
  url: ({ className, ...props }: FieldShape) => (
    <input
      type="url"
      className={`${classNameDefault} ${className}`}
      {...props}
    />
  ),
  button: ({ className, ...props }: FieldShape) => (
    <input
      type="button"
      className={`${classNameDefault} ${className}`}
      {...props}
    />
  ),
};
