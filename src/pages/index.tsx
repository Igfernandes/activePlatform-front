import { UserShare } from "@assets/Icons/colorful/UserShare";
import { LoginForm } from "@components/Public/Login/Form";
import { useRememberMe } from "@hooks/useRememberMe";
import { useEffect } from "react";
import usePostRememberMe from "../services/Authentications/RememberMe/usePostRememberMe";
import { PostRememberMePayload } from "../services/Authentications/RememberMe/type";
import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";
import i18n from "@configs/i18n";

export default function Home() {
  const { getReferenceToken } = useRememberMe();
  const { mutateAsync } = usePostRememberMe();

  useEffect(() => {
    const referenceToken = getReferenceToken([
      "referenceToken",
    ]) as PostRememberMePayload;

    if (Object.values(referenceToken).length > 0)
      mutateAsync(referenceToken).then((data) => {
        console.log(data);
      });
  }, []);

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
