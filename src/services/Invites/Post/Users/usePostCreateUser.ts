import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { usePostInviteUserService } from ".";
import { PostInviteUserPayload } from "./type";
import i18n from "@configs/i18n";

export default function usePostInviteUser() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postInviteUser } = usePostInviteUserService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostInviteUserPayload) => {
    const { data } = await postInviteUser(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: () => {
      dispatchSnackbar({
        message: i18n("users.modal.create.success_text"),
        title: i18n("users.modal.create.success_title"),
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["invites/users"],
        refetchType: "active",
      });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
