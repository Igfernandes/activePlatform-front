import { FieldsShape } from "@type/Fields";
import { FieldError } from "react-hook-form";

export type InputProps = FieldsShape & {
  dataTestId?: string;
  isLoading?: boolean;
  label?: string;
  errors?: FieldError;
  required?: string;
  handledChange?: (ev: React.ChangeEvent<HTMLInputElement> | undefined) => void;
};

export type GalleryFileShape = {
  name: string;
  url: string;
  type: string;
  ref: File;
  status: "AWAITING" | "UPLOADED" | "INVALIDED";
  handleDelete: (name: number) => void;
};
