import { Checks } from "@assets/Icons/colorful/Checks";
import { FormSuccessfulPageProps } from "@components/Public/Forms/types";
import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";
import i18n from "@configs/i18n";
import { getForm } from "@services/CustomForms/Get/SSR";
import { GetServerSideProps } from "next";

export default function Successful({ form }: FormSuccessfulPageProps) {
  return (
    <ExternalContainer>
      <div className="row">
        <div className="column ">
          <div className="mb-6 mt-3">
            <Checks className="mx-auto" />
          </div>
          <div className="text-center mb-6">
            <h2 className="text-2xl">
              <strong>{i18n("Screens.forms.successful.form_received")}</strong>
            </h2>
          </div>
          <div className="text-justify mb-6">
            <p className="text-sm">
              {form?.thanks_message ??
                i18n("Screens.forms.successful.form_message")}
             
            </p>
          </div>
        </div>
      </div>
    </ExternalContainer>
  );
}
// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<
  FormSuccessfulPageProps
> = async (request) => {
  const { slug } = request?.params as { slug: string } ?? {} ; // Tipando o params
  const form = await getForm({ slug });

  return {
    props: {
      form, // Passa o ID para o componente
    },
  };
};
