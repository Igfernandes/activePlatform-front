import { Checks } from "@assets/Icons/colorful/Checks";
import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";
import i18n from "@configs/i18n";
import { publicRoutes } from "@configs/routes/Web/navigation";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Successful() {
  const { login } = publicRoutes;
  const { query } = useRouter();

  return (
    <ExternalContainer>
      <div className="row">
        <div className="column text-center">
          <div className="mb-6 mt-3">
            <Checks className="mx-auto" />
          </div>
          <div className="mb-1">
            <h2 className="text-2xl">
              <strong>
                {i18n(`Texts.${query?.title ?? "unknown_operation"}`)}
              </strong>
            </h2>
          </div>
          <div className="mb-6">
            <p className="text-sm">{i18n("Screens.successful.need_go_back_login")}</p>
          </div>
          <div className="px-8 mt-4">
            <Link
              className="border-2 px-3 h-[48px] bg-red text-white rounded-xl flex items-center justify-center"
              href={login}
            >
              <strong>{i18n("Texts.go_back_login")}</strong>
            </Link>
          </div>
        </div>
      </div>
    </ExternalContainer>
  );
}
