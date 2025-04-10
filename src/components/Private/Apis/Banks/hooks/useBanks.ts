import { useFormRules } from "@hooks/Forms/useFormRules";
import { BanksPayload, BanksSchema } from "../schemas";
import usePostIntegrationBanks from "@services/Integrations/Banks/Post/usePostIntegrationBanks";
import { IntegrationBanksShape } from "@type/integrations";
import useGetIntegrationBanks from "@services/Integrations/Banks/Get/useGetIntegrationBanks";
import { useEffect, useState } from "react";

type Props = Pick<IntegrationBanksShape, "type"> & {};

export function useBanks({ type }: Props) {
  const { formMethods, register } = useFormRules<BanksPayload>({
    schema: BanksSchema,
  });
  const { mutateAsync: postIntegrationBank, isPending: isLoading } =
    usePostIntegrationBanks();
  const { data: banksCredentials } = useGetIntegrationBanks({ type });
  const [credentials, setCredentials] = useState<IntegrationBanksShape>();

  const submit = (payload: BanksPayload) => {
    postIntegrationBank(payload);
  };

  useEffect(() => {
    if (!banksCredentials) return;

    setCredentials(banksCredentials[0]);
  }, [banksCredentials]);
  return {
    submit,
    formMethods,
    register,
    credentials,
    isLoading
  };
}
