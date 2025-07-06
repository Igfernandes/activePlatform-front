import { Gallery } from "../../fields/Gallery";
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
};
