import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PatchClientsStatusPayload } from "./type";
import i18n from "@configs/i18n";
import { usePatchClientsStatusService } from ".";

export default function usePatchClientStatus() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { patchClientsStatus } = usePatchClientsStatusService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PatchClientsStatusPayload) => {
    const { data } = await patchClientsStatus(payload);

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
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
