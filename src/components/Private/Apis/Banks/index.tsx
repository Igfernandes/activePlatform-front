import { InfoBoard } from "@components/shared/forms/InfoBoard";
import { TInput } from "@components/shared/forms/InfoBoard/fields/Input";
import { useBanks } from "./hooks/useBanks";
import i18n from "@configs/i18n";
import { IntegrationBanksShape } from "@type/integrations";

type Props = Pick<IntegrationBanksShape, "type"> & {
  key: string;
};

export function Banks({ type }: Props) {
  const { formMethods, submit, register, credentials, isLoading } = useBanks({
    type,
  });

  return (
    <div className="bg-white p-4">
      <div>
        <div>
          <h3 className="text-2xl mx-2 mb-4 mt-2">
            <strong>
              <u>{i18n(`words.${type.toLowerCase()}`)}</u>
            </strong>
          </h3>
        </div>
      </div>
      <InfoBoard
        formMethods={formMethods}
        submit={submit}
        isLoading={isLoading}
      >
        <TInput
          {...register("type")}
          label={""}
          defaultValue={type}
          dataTestId="id"
          type="hidden"
          disabled
        />
        <TInput
          label={i18n("words.public_token")}
          name={"public_token"}
          dataTestId="public_token"
          placeholder={i18n("texts.insert_public_token")}
          defaultValue={credentials?.public_token}
        />
        <TInput
          label={i18n("words.private_token")}
          name={"private_token"}
          dataTestId="private_token"
          placeholder={i18n("texts.insert_private_token")}
          defaultValue={credentials?.private_token}
        />
        <TInput
          label={i18n("words.username")}
          name={"username"}
          dataTestId="username"
          placeholder={i18n("texts.insert_username")}
          defaultValue={credentials?.username}
        />
        <TInput
          label={i18n("words.login")}
          name={"login"}
          dataTestId="login"
          placeholder={i18n("texts.insert_login")}
          defaultValue={credentials?.login}
        />
        <TInput
          label={i18n("words.password")}
          name={"password"}
          dataTestId="password"
          placeholder={i18n("texts.insert_password")}
          defaultValue={credentials?.password}
        />
      </InfoBoard>
    </div>
  );
}
