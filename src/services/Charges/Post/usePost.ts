import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { usePostChargeService } from ".";
import { PostCreateChargePayload } from "./type";

export default function usePostCreateCharge() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCreateCharge } = usePostChargeService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostCreateChargePayload) => {
    const { data } = await postCreateCharge(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({success}) => {
      dispatchSnackbar({
        message: i18n(success),
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["charges"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
