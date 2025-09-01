import { FormsPageProps } from "@components/Private/Forms/type";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import i18n from "@configs/i18n";
import { GetServerSideProps } from "next";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { FillFieldsUpdate } from "@components/Private/Forms/Update";
import { getForms } from "@services/CustomForms/Get/SSR";

export default function Update({ targetForm }: FormsPageProps) {
  return (
    <DashboardContainer>
      <FillFieldsUpdate targetForm={targetForm} />
    </DashboardContainer>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<FormsPageProps> = async ({
  params,
  req,
}) => {
  const tokenNavigation = req.cookies["token_navigation"] ?? "";
  const { id } = params as { id: string } ?? {}; // Tipando o params
  const services = await getForms(tokenNavigation, { id: parseInt(id) });
  const currentForm = Array.isArray(services) ? services[0] : services;

  if (!currentForm || Object.hasOwn(currentForm, "errors")) {
    return {
      redirect: {
        destination: `${privateRoutes.forms}?alert=${i18n(
          "errors.system.not_found_form"
        )}`, // Redireciona para a página principal
        permanent: true, // Define como redirecionamento temporário (status 307)
      },
    };
  }

  return {
    props: {
      targetForm: currentForm, // Passa o ID para o componente
    },
  };
};
