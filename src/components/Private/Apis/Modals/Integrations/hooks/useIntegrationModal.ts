import { useFormRules } from "@hooks/Forms/useFormRules";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { IntegrationsPayload, integrationsSchema } from "../schemas";
import usePostIntegrations from "@services/Integrations/Post/usePost";
import { useEffect, useState } from "react";
import { useModalContext } from "@contexts/Modal";
import { IntegrationShape } from "@type/Integrations";

dayjs.extend(customParseFormat);

type Props = {
  integrations: Array<IntegrationShape>;
};

export function useIntegrationModal({ integrations }: Props) {
  const { formMethods, handleSubmit , errors, register } = useFormRules<IntegrationsPayload>({
    schema: integrationsSchema,
  });
  const { modal, handleToggleModal } = useModalContext();
  const { mutateAsync: postIntegrations, isPending } = usePostIntegrations();
  const [integration, setIntegration] = useState<IntegrationShape>();

  const submit = async (payload: IntegrationsPayload) => {
    if (!integration?.type || !integration.provider) return;

    await postIntegrations({
      ...payload,
      provider: integration.provider,
      type: integration?.type,
    });

    handleToggleModal(null);
  };

  useEffect(() => {
    const integrationTarget = integrations.find(
      (integration) => modal.id === integration.id
    );

    if (!integrationTarget) return;

    setIntegration(integrationTarget);
  }, [integrations, modal.id]);

  return {
    formMethods,
    handleSubmit,
    submit,
    isLoading: isPending,
    integration,
    errors,
    register
  };
}
