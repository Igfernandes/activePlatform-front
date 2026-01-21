import { GeneralCalendar } from "@components/Private/Dashboard/GeneralCalendar";
import { GraphicsClients } from "@components/Private/Dashboard/GraphicsClients";
import { DashboardHeader } from "@components/Private/Dashboard/Header";
import { useClientsData } from "@components/Private/Dashboard/hooks/useClientsData";
import { useUsersData } from "@components/Private/Dashboard/hooks/useUsersData";
import { DashboardPageProps } from "@components/Private/Dashboard/type";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { publicRoutes } from "@configs/routes/Web/navigation";
import useGetCharges from "@services/Charges/Get/useGetCharges";
import useGetForms from "@services/CustomForms/Get/useGetForms";
import useGetServices from "@services/Services/Get/useGetServices";
import { getUserAuth } from "@services/Users/GetAuth/SSR";
import { GetServerSideProps } from "next";

export default function Dashboard({ user }: DashboardPageProps) {
  const { clients, categories, clientsByDDD } = useClientsData();
  const { data: services  } = useGetServices();
  const { users, invitesValid } = useUsersData();
  const { data: forms } = useGetForms();
  const { data: charges } = useGetCharges();

  return (
    <DashboardContainer user={user}>
      <DashboardHeader
        clients={clients}
        forms={forms}
        users={users}
        services={services}
        charges={charges}
      />
      <GeneralCalendar
        clients={clients}
        forms={forms}
        users={users}
        services={services}
        charges={charges}
      />
      <GraphicsClients
        invites={invitesValid}
        clients={clients ?? []}
        categories={categories.slice(0, 4)}
        clientsByDDD={clientsByDDD}
      />
    </DashboardContainer>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<
  DashboardPageProps
> = async ({ req }) => {
  const tokenNavigation = req.cookies["token_navigation"] ?? "";
  const { data: user } = await getUserAuth(tokenNavigation);

  if (!user) {
    return {
      redirect: {
        destination: `${publicRoutes.login}`, // Redireciona para a página principal
        permanent: true, // Define como redirecionamento temporário (status 307)
      },
    };
  }

  return {
    props: {
      user, // Passa o ID para o componente
    },
  };
};
