import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";
import { LockCog } from "@assets/Icons/colorful/LockCog";
import { AlterPasswordForm } from "@components/Public/AlterPassword/Form";
import i18n from "@configs/i18n";
import { AlterPasswordPageProps } from "@components/Public/AlterPassword/type";
import { GetServerSideProps } from "next";
import { publicRoutes } from "@configs/routes/Web/navigation";

export default function AlterPassword() {
  return (
    <ExternalContainer className={"my-2 sm:my-0"}>
      <div className="row">
        <div className="column text-center">
          <div className="mb-4">
            <LockCog className="mx-auto" />
          </div>
          <div className="mb-1">
            <h2 className="text-2xl">
              <strong>{i18n("alter_password.title")}</strong>
            </h2>
          </div>
          <div className="mb-6">
            <p className="text-sm">{i18n("alter_password.text")}</p>
          </div>
          <AlterPasswordForm />
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
