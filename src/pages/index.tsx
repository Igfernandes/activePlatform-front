import { UserShare } from "@assets/Icons/colorful/UserShare";
import { LoginForm } from "@components/Public/Login/Form";
import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";
import i18n from "@configs/i18n";
import { GetServerSideProps } from "next";
import { postRememberMe } from "../services/Authentications/RememberMe";
import { privateRoutes } from "@configs/routes/Web/navigation";

export default function Home() {
  return (
    <ExternalContainer>
      <div className="row">
        <div className="column text-center">
          <div className="my-6">
            <UserShare className="mx-auto" />
          </div>
          <div className="mb-1">
            <h2 className="text-2xl">
              <strong>{i18n("login.welcome")}</strong>
            </h2>
          </div>
          <div className="mb-6">
            <p className="text-sm">{i18n("login.text_presentation")}</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </ExternalContainer>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const referenceToken = req.cookies["remember_referenceToken"] ?? "";
  const resp = await postRememberMe({
    referenceToken,
  });

  if (!resp)
    return {
      props: {},
    };

  return {
    redirect: {
      destination: privateRoutes.dashboard,
      permanent: false,
    },
  };
};
