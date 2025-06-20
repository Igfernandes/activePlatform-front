import { ForgotPasswordContent } from "@components/Public/ForgotPassword";
import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";

export default function ForgotPassword() {
  return (
    <ExternalContainer>
      <div className="row">
        <div className="column text-center">
          <ForgotPasswordContent />
        </div>
      </div>
    </ExternalContainer>
  );
}
