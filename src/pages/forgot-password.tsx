
import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";
import { EmailForward } from "@assets/Icons/colorful/EmailForward";
import Link from "next/link";
import { userRoutes } from "@configs/routes/Web/navigation";
import { SquareRoundedChevronLeft } from "@assets/Icons/black/SquareRoundedChevronLeft";
import { RecoverPasswordForm } from "@components/Public/ForgotPassword/Form";
import i18n from "@configs/i18n";

export default function ForgotPassword() {
  const { login } = userRoutes;

  return (
    <ExternalContainer>
      <div className="row">
        <div className="column text-center">
          <div className="mb-5 sm:mt-2">
            <EmailForward className="mx-auto" />
          </div>
          <div className="mb-1">
            <h2 className="text-2xl">
              <strong>{i18n("forgot_password.title")}</strong>
            </h2>
          </div>
          <div className="mb-6">
            <p className="text-sm">{i18n("forgot_password.text")}</p>
          </div>
          <RecoverPasswordForm />
          <div className="sm:px-8 mt-4">
            <Link
              className="border-2 px-3 h-[48px] text-sm sm:text-md rounded-xl flex items-center justify-center"
              href={login}
            >
              <SquareRoundedChevronLeft className="mr-2" />
              <strong>{i18n("forgot_password.back_page")}</strong>
            </Link>
          </div>
        </div>
      </div>
    </ExternalContainer>
  );
}
