import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { PostOperationsFailuresPayload } from "./type";
import { usePostOperationsFailuresService } from ".";

export default function usePostOperationsFailures() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postOperationsFailures } = usePostOperationsFailuresService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostOperationsFailuresPayload) => {
    const { data } = await postOperationsFailures(payload);

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
        queryKey: ["operationsFailures"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
