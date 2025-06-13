import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";

import i18n from "@configs/i18n";
import { PatchStatusFormPayload } from "./type";
import { usePatchStatusFormService } from ".";

export default function usePatchStatusForms() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { patchStatus } = usePatchStatusFormService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PatchStatusFormPayload) => {
    try {
      const { data } = await patchStatus(payload);

      return data;
    } catch (error) {
      throw error;
    }
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({ success }) => {
      dispatchSnackbar({
        message: i18n(success),
        type: "success",
      });

      queryClient.invalidateQueries({
        queryKey: ["forms"],
        refetchType: "active",
      });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
