import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";

import i18n from "@configs/i18n";
import { DeleteUserPayload } from "./type";
import { useDeleteUserService } from ".";

export default function useDeleteUsers() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { deleteGroup } = useDeleteUserService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: DeleteUserPayload) => {
    try {
      const { data } = await deleteGroup(payload);

      return data;
    } catch (error) {
      throw error;
    }
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: () => {
      dispatchSnackbar({
        title: i18n("users.modal.delete.success_title"),
        message: i18n("users.modal.delete.success_text"),
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
