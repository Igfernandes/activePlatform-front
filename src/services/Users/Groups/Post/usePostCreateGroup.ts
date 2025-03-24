import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";

import i18n from "@configs/i18n";
import { usePostCreateGroupService } from ".";
import { PostCreateGroupPayload } from "./type";

export default function usePutCreateGroup() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCreateGroup } = usePostCreateGroupService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostCreateGroupPayload) => {
    try {
      const { data } = await postCreateGroup(payload);

      return data;
    } catch (error) {
      throw error;
    }
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: () => {
      dispatchSnackbar({
        title: i18n("users.modal.groups.title_success"),
        message: i18n("users.modal.groups.text_success"),
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
