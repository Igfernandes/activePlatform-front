import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostImportClientPayload } from "./type";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { useImportClientsService } from ".";

export default function usePostImportClient() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postImportClient } = useImportClientsService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostImportClientPayload) => {
    const { data } = await postImportClient(payload);

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
