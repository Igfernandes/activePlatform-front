import { Checks } from "@assets/Icons/colorful/Checks";
import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";
import { userRoutes } from "@configs/routes/Web/navigation";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function Successful({ title }: Record<string, unknown>) {
  const { t } = useTranslation("common");
  const { login } = userRoutes;

  return (
    <ExternalContainer>
      <div className="row">
        <div className="column text-center">
          <div className="mb-6 mt-3">
            <Checks className="mx-auto" />
          </div>
          <div className="mb-1">
            <h2 className="text-2xl">
              <strong>{t(`words.${title ?? "unknown_operation"}`)}</strong>
            </h2>
          </div>
          <div className="mb-6">
            <p className="text-sm">{t("texts.need_go_back_login")}</p>
          </div>
          <div className="px-8 mt-4">
            <Link
              className="border-2 px-3 h-[48px] bg-red text-white rounded-xl flex items-center justify-center"
              href={login}
            >
              <strong>{t("texts.go_back_login")}</strong>
            </Link>
          </div>
        </div>
      </div>
    </ExternalContainer>
  );
}

export async function getServerSideProps({
  locale,
  query,
}: Record<string, unknown>) {
  const { type } = query as Record<string, string>;

  return {
    props: {
      ...(await serverSideTranslations(locale as string)),
      title: type ?? "",
    },
  };
}
