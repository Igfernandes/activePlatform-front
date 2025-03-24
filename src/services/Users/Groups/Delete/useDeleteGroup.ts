import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";

import i18n from "@configs/i18n";
import { DeleteGroupPayload } from "./type";
import { useDeleteGroupService } from ".";

export default function useDeleteGroup() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { deleteGroup } = useDeleteGroupService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: DeleteGroupPayload) => {
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
        title: i18n("users.modal.groups.success_delete_title"),
        message: i18n("users.modal.groups.success_delete_text"),
        type: "success",
      });

      queryClient.invalidateQueries({
        queryKey: ["users_groups"],
        refetchType: "active",
      });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
