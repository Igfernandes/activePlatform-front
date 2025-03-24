import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostCreateClientPayload } from "./type";
import i18n from "@configs/i18n";
import { usePostClientsService } from ".";
import { AxiosError } from "axios";

export default function usePostCreateClient() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCreateClient } = usePostClientsService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostCreateClientPayload) => {
    const { data } = await postCreateClient(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: () => {
      dispatchSnackbar({
        message: i18n("clients.modal.create.success_text"),
        title: i18n("clients.modal.create.success_title"),
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
