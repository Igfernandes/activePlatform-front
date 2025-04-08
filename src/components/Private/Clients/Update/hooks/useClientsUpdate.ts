import { useEffect, useState } from "react";
import useGetClientsFields from "@services/Clients/Fields/Get/useGetClients";
import { ClientShape } from "@type/Clients/client";
import { FieldsShape } from "@type/Fields";
import useGetFieldsGroups from "@services/Fields/Groups/Get/useGetFieldsGroups";
import { FieldsGroupsShape } from "@type/Fields/fieldsGroups";
import usePostClientsFields from "@services/Clients/Fields/Post/usePostClientsFields";
import { PayloadFieldValues } from "@components/shared/layouts/FormHub/context/types";

type Props = {
  client: ClientShape;
};

export function useClientsUpdate({ client }: Props) {
  const { data: clientsFields } = useGetClientsFields({ id: client.id });
  const { data: fieldsGroupsData } = useGetFieldsGroups({
    scope: "CLIENT",
  });
  const [fields, setFields] = useState<FieldsShape[]>([]);
  const [fieldsGroups, setFieldsGroups] = useState<FieldsGroupsShape[]>([]);
  const { mutateAsync: postClientsFields } = usePostClientsFields();

  const handleSubmitFields = (
    clientId: number,
    payload: PayloadFieldValues
  ) => {
    postClientsFields({
      client: clientId,
      ...payload,
    });
  };

  useEffect(() => {
    if (!clientsFields) return;

    setFields(clientsFields);
  }, [clientsFields]);

  useEffect(() => {
    if (!fieldsGroupsData) return;

    setFieldsGroups(fieldsGroupsData);
  }, [fieldsGroupsData]);

  return {
    fields,
    fieldsGroups,
    handleSubmitFields,
  };
}
