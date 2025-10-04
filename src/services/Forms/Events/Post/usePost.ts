import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { PostPayload } from "./type";
import { usePostEvent } from ".";

export default function usePostInscribesEvents() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { post } = usePostEvent();
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
        queryKey: ["clients/events"],
        refetchType: "active",
      });

      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === "clients/events",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
