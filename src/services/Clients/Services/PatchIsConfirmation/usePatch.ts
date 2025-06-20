import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PatchServiceIsConfirmationPayload } from "./type";
import i18n from "@configs/i18n";
import { usePatchIsConfirmationService } from ".";

export default function usePatchServiceIsConfirm() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { patch } = usePatchIsConfirmationService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PatchServiceIsConfirmationPayload) => {
    const { data } = await patch(payload);

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
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
