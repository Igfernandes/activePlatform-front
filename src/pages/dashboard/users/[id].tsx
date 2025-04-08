import { UserPageProps } from "@components/Private/Users/type";
import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { GetServerSideProps } from "next";
import { MOCK_USERS } from "../../../data/users/__mocks__";
import { privateRoutes } from "@configs/routes/Web/navigation";
import i18n from "@configs/i18n";

export default function UserProfile({  }: UserPageProps) {
  return (
    <DashboardContainer>
      <></>
    </DashboardContainer>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<UserPageProps> = async (
  context
) => {
  const { id } = context.params as { id: string }; // Tipando o params
  const foundCurrentUser = MOCK_USERS.find((user) => user.id === parseInt(id));

  if (!foundCurrentUser) {
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
      targetUser: foundCurrentUser, // Passa o ID para o componente
    },
  };
};
