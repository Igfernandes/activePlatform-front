import { CSRFShape } from "@services/Authentications/CSRF/types";
import { FormsShape } from "@type/Forms";

export type FormPageProps = {
  form: FormsShape;
  csrf: CSRFShape;
};

export type FormSuccessfulPageProps = {
  form: FormsShape;
};
