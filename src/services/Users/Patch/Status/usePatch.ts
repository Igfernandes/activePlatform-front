import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";

import i18n from "@configs/i18n";
import { PatchStatusUserPayload } from "./type";
import { usePatchStatusUserService } from ".";

export default function usePatchStatusUsers() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { patchStatus } = usePatchStatusUserService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PatchStatusUserPayload) => {
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
        queryKey: ["users"],
        refetchType: "active",
      });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
