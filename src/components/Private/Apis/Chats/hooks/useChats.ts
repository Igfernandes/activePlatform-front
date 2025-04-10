import { useFormRules } from "@hooks/Forms/useFormRules";
import { ChatsPayload, ChatsSchema } from "../schemas";
import usePostIntegrationChats from "@services/Integrations/Chats/Post/usePostIntegrationChats";
import useGetIntegrationChats from "@services/Integrations/Chats/Get/useGetIntegrationChats";
import { IntegrationChatsShape } from "@type/integrations";
import { useEffect, useState } from "react";

type Props = Pick<IntegrationChatsShape, "type"> & {};

export function useChats({ type }: Props) {
  const { formMethods, register } = useFormRules<ChatsPayload>({
    schema: ChatsSchema,
  });
  const { mutateAsync: postIntegrationChat } = usePostIntegrationChats();
  const { data: chatsCredentials, isPending: isLoading} = useGetIntegrationChats({
    type,
  });
  const [credentials, setCredentials] = useState<IntegrationChatsShape>();

  const submit = (payload: ChatsPayload) => {
    postIntegrationChat(payload);
  };

  useEffect(() => {
    if (!chatsCredentials) return;

    setCredentials(chatsCredentials[0]);
  }, [chatsCredentials]);

  return {
    submit,
    formMethods,
    register,
    credentials,
    isLoading
  };
}
