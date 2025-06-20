import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostPayload } from "./type";
import i18n from "@configs/i18n";
import { usePostService } from ".";
import { AxiosError } from "axios";

export default function usePostInscribesServices() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { post } = usePostService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostPayload) => {
    const { data } = await post(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({ success, errors }) => {
      dispatchSnackbar({
        message: i18n(success ? success : errors),
        type: success ? "success" : "notice",
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
