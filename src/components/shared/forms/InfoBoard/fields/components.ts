import { JSX } from "react";
import { TInput } from "./Input";
import { FieldsShape } from "@type/Fields";
import { TEmail } from "./Email";
import { TPhone } from "./Phone";
import { TDate } from "./Date";
import { TDependents } from "./Dependents";
import { TCpf } from "./Cpf";
import { TGallery } from "./Gallery";
import { TFile } from "./File";

export const components = {
  text: TInput,
  email: TEmail,
  password: TInput,
  phone: TPhone,
  name: TInput,
  date: TDate,
  time: TInput,
  dependents: TDependents,
  birthdate: TDate,
  cpf: TCpf,
  gallery: TGallery,
  file: TFile,
} as Record<string, (props: FieldsShape) => JSX.Element>;
