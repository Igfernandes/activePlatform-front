import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { usePostMessagesDispatcherService } from ".";
import { PostMessagesDispatcherPayload } from "./type";

export default function usePostMessagesDispatcher() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postMessagesDispatcher } = usePostMessagesDispatcherService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostMessagesDispatcherPayload) => {
    const { data } = await postMessagesDispatcher(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({ success }) => {
      dispatchSnackbar({
        message: i18n(success),
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["messages-dispatcher"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
