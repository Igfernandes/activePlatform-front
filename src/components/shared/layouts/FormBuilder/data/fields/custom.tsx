import { Gallery } from "../../fields/Gallery";
import { List } from "../../fields/List";
import { Option } from "../../fields/Option";
import { FieldShape } from "../../type";

export const classNameDefault = "h-7 py-1 px-2 ";

export const fieldsCustom = {
  gallery: ({ className, required, ...props }: FieldShape) => (
    <Gallery
      required={required ?? ""}
      className={`${classNameDefault} w-full ${className}`}
      {...props}
    />
  ),
  option: ({ className, required, ...props }: FieldShape) => (
    <Option
      required={required ?? ""}
      className={`${classNameDefault} w-full ${className}`}
      {...props}
    />
  ),
  list: ({ className, ...props }: FieldShape) => (
    <List
      className={`${classNameDefault} w-full ${className}`}
      {...props}
    />
  ),
};
