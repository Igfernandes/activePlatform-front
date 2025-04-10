import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { usePostIntegrationBanksService } from ".";
import { PostIntegrationBankPayload } from "./type";

export default function usePostIntegrationBanks() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postIntegrationBank } = usePostIntegrationBanksService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostIntegrationBankPayload) => {
    const { data } = await postIntegrationBank(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: (resp, payload) => {
      dispatchSnackbar({
        message: i18n("integrations.banks.post.success_text"),
        title: i18n("integrations.banks.post.success_title"),
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["integration/banks", payload.type],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
