import { useEffect, useState } from "react";
import useGetClientsFields from "../../../../../services/Clients/Fields/Get/useGetClients";
import { ClientShape } from "../../../../../types/Clients/client";
import { FieldsShape } from "../../../../../types/Fields";

type Props = {
  client: ClientShape;
};

export function useClientsUpdate({ client }: Props) {
  const { data } = useGetClientsFields({ id: client.id });
  const [fields, setFields] = useState<FieldsShape[]>([]);

  useEffect(() => {
    if (!data) return;

    setFields(data);
  }, [data]);

  return {
    fields,
  };
}
