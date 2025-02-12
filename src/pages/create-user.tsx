import { UserCog } from "@assets/Icons/colorful/UserCog";
import { CreateUserForm } from "@components/CreateUser/Form";
import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function CreateUser() {
  const { t } = useTranslation("common");
  const { t: tUser } = useTranslation("user");

  return (
    <ExternalContainer>
      <div className="row">
        <div className="column text-center">
          <div className="mb-5">
            <UserCog className="mx-auto" />
          </div>
          <div className="mb-1">
            <h2 className="text-2xl">
              <strong>{t("common.first_access")}</strong>
            </h2>
          </div>
          <div className="mb-4">
            <p className="text-sm">{tUser("texts.first_access")}</p>
          </div>
          <CreateUserForm />
        </div>
      </div>
    </ExternalContainer>
  );
}

export async function getStaticProps({ locale }: Record<string, string>) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "user"])),
      // Will be passed to the page component as props
    },
  };
}
