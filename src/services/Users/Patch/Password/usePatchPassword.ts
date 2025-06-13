import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";

import { PatchPasswordUserPayload } from "./type";
import { usePatchPasswordUserService } from ".";

export default function usePatchPasswordUsers() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { patchPassword } = usePatchPasswordUserService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PatchPasswordUserPayload) => {
    try {
      const { data } = await patchPassword(payload);

      return data;
    } catch (error) {
      throw error;
    }
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({ success }) => {
      dispatchSnackbar({
        message: success,
        type: "success",
      });

      queryClient.invalidateQueries({
        queryKey: ["userAuth"],
        refetchType: "active",
      });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
