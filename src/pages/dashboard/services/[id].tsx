import { GetServerSideProps } from "next";
import { privateRoutes } from "@configs/routes/Web/navigation";
import i18n from "@configs/i18n";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { ServicePageProps } from "@components/Private/ServicesForm/type";
import { ServicesForm } from "@components/Private/ServicesForm";
import { getServices } from "../../../services/Services/Get/SSR";

export default function UserProfile({ targetService }: ServicePageProps) {
  return (
    <DashboardContainer>
      <ServicesForm service={targetService} />
    </DashboardContainer>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<ServicePageProps> = async ({
  params,
  req,
}) => {
  const tokenNavigation = req.cookies["token_navigation"] ?? "";
  const { id } = params as { id: string }; // Tipando o params
  const services = await getServices(tokenNavigation, { id: parseInt(id) });
  const currentService = Array.isArray(services) ? services[0] : services;

  if (!currentService || Object.hasOwn(currentService, "errors")) {
    return {
      redirect: {
        destination: `${privateRoutes.services}?alert=${i18n(
          "errors.system.not_found_service"
        )}`, // Redireciona para a página principal
        permanent: true, // Define como redirecionamento temporário (status 307)
      },
    };
  }

  return {
    props: {
      targetService: currentService, // Passa o ID para o componente
    },
  };
};
