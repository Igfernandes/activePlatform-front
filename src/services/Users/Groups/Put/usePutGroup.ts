import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";

import i18n from "@configs/i18n";
import { usePutCreateGroupService } from ".";
import { PutCreateGroupPayload } from "./type";

export default function usePutGroup() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { putCreateGroup } = usePutCreateGroupService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PutCreateGroupPayload) => {
    try {
      const { data } = await putCreateGroup(payload);

      return data;
    } catch (error) {
      throw error;
    }
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: () => {
      dispatchSnackbar({
        title: i18n("users.modal.groups.success_update_title"),
        message: i18n("users.modal.groups.success_update_text"),
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
