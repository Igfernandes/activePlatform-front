import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostClientsServicesPayload } from "./type";
import i18n from "@configs/i18n";
import { usePostClientsServicesService } from ".";
import { AxiosError } from "axios";

export default function usePostClientsService() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { post } = usePostClientsServicesService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostClientsServicesPayload) => {
    const { data } = await post(payload);

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
        queryKey: ["clients/services"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
