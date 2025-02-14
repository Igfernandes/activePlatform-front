import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";
import { LockCog } from "@assets/Icons/colorful/LockCog";
import { AlterPasswordForm } from "@components/Public/AlterPassword/Form";
import i18n from "@configs/i18n";

export default function ForgotPassword() {
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
