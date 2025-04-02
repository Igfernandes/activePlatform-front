import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { GetServerSideProps } from "next";
import { privateRoutes } from "@configs/routes/Web/navigation";
import i18n from "@configs/i18n";
import { ClientPageProps } from "@components/Private/Clients/type";
import { FormHub } from "@components/shared/layouts/FormHub";
import { useClientsUpdate } from "@components/Private/Clients/Update/hooks/useClientsUpdate";
import { getClients } from "../../../services/Clients/Get/SSR";

export default function ClientPerfil({ targetClient }: ClientPageProps) {
  const { fields, fieldsGroups } = useClientsUpdate({ client: targetClient });

  return (
    <DashboardContainer>
      <FormHub
        entityType="CLIENT"
        entity={targetClient}
        groups={fieldsGroups}
        fields={fields ?? []}
        handleShared={() => ""}
      />
    </DashboardContainer>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<ClientPageProps> = async ({
  req,
  params,
}) => {
  const tokenNavigation = req.cookies["token_navigation"] ?? "";
  const { id } = params as { id: string }; // Tipando o params
  const clients = await getClients(tokenNavigation, { id: +id });
  const currentClient = Array.isArray(clients) ? clients[0] : clients;

  if (!currentClient || Object.hasOwn(currentClient, "errors")) {
    return {
      redirect: {
        destination: `${privateRoutes.dashboard}?alert=${i18n(
          "errors.system.not_found_user"
        )}`, // Redireciona para a página principal
        permanent: false, // Define como redirecionamento temporário (status 307)
      },
    };
  }

  return {
    props: {
      targetClient: currentClient, // Passa o ID para o componente
    },
  };
};
