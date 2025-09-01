import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";
import { GetServerSideProps } from "next";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { handleRememberMe } from "../server/handleRememberMe";
import { getCSRF } from "@services/Authentications/CSRF/SSR";
import { LoginPageProps } from "@components/Public/Login/types";
import { LoginContent } from "@components/Public/Login/Index";

export default function Login({ csrf }: LoginPageProps) {
  return (
    <ExternalContainer>
      <div className="row">
        <div className="column text-center">
          <LoginContent csrf={csrf} />
        </div>
      </div>
    </ExternalContainer>
  );
}
export const getServerSideProps: GetServerSideProps<LoginPageProps> = async ({
  req,
  res,
}) => {
  const tokenNavigation = req.cookies["token_navigation"] ?? "";
  const csrf = await getCSRF();

  if (tokenNavigation)
    return {
      redirect: {
        destination: privateRoutes.dashboard,
        permanent: false,
      },
    };

  const referenceToken = req.cookies["remember_referenceToken"] ?? "";

  if (referenceToken)
    return handleRememberMe({ referenceToken, csrf, req, res });

  return {
    props: {
      csrf: csrf,
    },
  };
};
