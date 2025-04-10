import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { PostIntegrationChatPayload } from "./type";
import { usePostIntegrationChatsService } from ".";

export default function usePostIntegrationChats() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postIntegrationChat } = usePostIntegrationChatsService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostIntegrationChatPayload) => {
    const { data } = await postIntegrationChat(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: () => {
      dispatchSnackbar({
        message: i18n("integrations.chats.post.success_text"),
        title: i18n("integrations.chats.post.success_title"),
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["integration/chats"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
