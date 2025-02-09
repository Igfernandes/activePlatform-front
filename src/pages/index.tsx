import { UserShare } from "@assets/Icons/colorful/UserShare";
import { LoginForm } from "@components/Login/form";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRememberMe } from "@hooks/useRememberMe";
import { useEffect } from "react";
import usePostRememberMe from "../services/Authentications/RememberMe/usePostRememberMe";
import { PostRememberMePayload } from "../services/Authentications/RememberMe/type";

export default function Home() {
  const { t } = useTranslation("login");
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
  }, [mutateAsync, getReferenceToken]);

  return (
    <main className="bg-[url(/imgs/backgrounds/3d-wave.png)] bg-cover bg-no-repeat h-[90vh] flex items-center font-poppins">
      <div className="container w-[424px] mx-auto shadow-sm border-secondary border-2 px-6 py-10 rounded-[1.5rem]">
        <div className="row">
          <div className="column text-center">
            <div className="my-6">
              <UserShare className="mx-auto" />
            </div>
            <div className="mb-1">
              <h2 className="text-2xl">
                <strong>{t("welcome")}</strong>
              </h2>
            </div>
            <div className="mb-6">
              <p className="text-sm">{t("text_presentation")}</p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps({ locale }: Record<string, string>) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "login"])),
      // Will be passed to the page component as props
    },
  };
}
