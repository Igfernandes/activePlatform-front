import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";

import i18n from "@configs/i18n";
import { PatchGroupPayload } from "./type";
import { usePatchGroupService } from ".";

export default function useDPatchGroup() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { patchGroup } = usePatchGroupService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PatchGroupPayload) => {
    try {
      const { data } = await patchGroup(payload);

      return data;
    } catch (error) {
      throw error;
    }
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: () => {
      dispatchSnackbar({
        title: i18n("users.modal.groups.success_patch_title"),
        message: i18n("users.modal.groups.success_patch_text"),
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
