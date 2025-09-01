import { CSRFShape } from "@services/Authentications/CSRF/types";
import { FormsShape } from "@type/Forms";
import { ServicePreviewShape } from "@type/Services";

export type FormPageProps = {
  form: FormsShape;
  csrf: CSRFShape;
};

export type FormSuccessfulPageProps = {
  form: FormsShape;
};

export type Form404PageProps = {
  service: ServicePreviewShape | null;
  formSlug: string;
};
