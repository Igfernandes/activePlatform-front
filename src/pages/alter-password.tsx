import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";
import { AlterPasswordPageProps } from "@components/Public/AlterPassword/type";
import { GetServerSideProps } from "next";
import { publicRoutes } from "@configs/routes/Web/navigation";
import { AlterPasswordContent } from "@components/Public/AlterPassword";

export default function AlterPassword() {
  return (
    <ExternalContainer className={"my-2 sm:my-0"}>
      <div className="row">
        <div className="column text-center">
          <AlterPasswordContent />
        </div>
      </div>
    </ExternalContainer>
  );
}

// Tipagem para getServerSideProps
export const getServerSideProps: GetServerSideProps<
  AlterPasswordPageProps
> = async (context) => {
  const { recover_token } = context.query as { recover_token: string }; // Tipando o params

  if (!recover_token) {
    return {
      redirect: {
        destination: `${publicRoutes.login}`,
        permanent: true,
      },
    };
  }

  return {
    props: {
      recoverToken: recover_token, // Passa o ID para o componente
    },
  };
};
