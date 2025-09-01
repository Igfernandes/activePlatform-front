import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostSubscribeClientPayload } from "./type";
import i18n from "@configs/i18n";
import { usePostSubscribeClientsService } from ".";
import { AxiosError } from "axios";

export default function usePostSubscribeClient() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postSubscribeClient } = usePostSubscribeClientsService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostSubscribeClientPayload) => {
    const { data } = await postSubscribeClient(payload);

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
        queryKey: ["clients"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
