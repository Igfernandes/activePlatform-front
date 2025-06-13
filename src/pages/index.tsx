import { UserShare } from "@assets/Icons/colorful/UserShare";
import { LoginForm } from "@components/Public/Login/Form";
import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";
import i18n from "@configs/i18n";
import { GetServerSideProps } from "next";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { handleRememberMe } from "../server/handleRememberMe";

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
              <strong>{i18n("Screens.login.title")}</strong>
            </h2>
          </div>
          <div className="mb-6">
            <p className="text-sm">{i18n("Screens.login.text")}</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </ExternalContainer>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const tokenNavigation = req.cookies["token_navigation"] ?? "";

  if (tokenNavigation)
    return {
      redirect: {
        destination: privateRoutes.dashboard,
        permanent: false,
      },
    };

  const referenceToken = req.cookies["remember_referenceToken"] ?? "";

  if (referenceToken) return handleRememberMe({ referenceToken });

  return {
    props: {},
  };
};
