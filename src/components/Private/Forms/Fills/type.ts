import { FormsShape } from "@type/Forms";
import { FormFillField } from "@type/Forms/FormsFill";

export type FillFieldData = {
  component: string;
  text: string;
  value: string;
};

type Props = {
  form: FormsShape;
  fields: Array<FormFillField>;
};
export type FieldsPageProps = Props;

export type HookFillFieldsProps = Props;
