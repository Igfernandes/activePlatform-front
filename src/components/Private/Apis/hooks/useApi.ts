import { useModalContext } from "@contexts/Modal";
import useGetIntegrations from "@services/Integrations/Get/useGet";
import { IntegrationShape } from "@type/Integrations";
import { useEffect, useState } from "react";

type Props = {
  filterObjects: <ObjectShape extends Record<string, unknown>>(
    object: ObjectShape
  ) => boolean;
  search: string;
};

export function useApi({}: Props) {
  const { handleToggleModal, modal } = useModalContext();
  const { data } = useGetIntegrations();
  const [integrations, setIntegrations] = useState<Array<IntegrationShape>>([]);

  useEffect(() => {
    setIntegrations(data ?? []);
  }, [data]);

  return {
    integrations,
    handleToggleModal,
    modal,
  };
}
