import { CreateUserForm } from "@components/Public/CreateUser/Form";
import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";
import i18n from "@configs/i18n";

export default function CreateUser() {
  return (
    <ExternalContainer className={"my-2 sm:my-0"}>
      <div className="row">
        <div className="column text-center">
          <div className="mb-1">
            <h2 className="text-xl">
              <strong>{i18n("Words.first_access")}</strong>
            </h2>
          </div>
          <div className="mb-4">
            <p className="text-xs">{i18n("create_user.text")}</p>
          </div>
          <CreateUserForm />
        </div>
      </div>
    </ExternalContainer>
  );
}
