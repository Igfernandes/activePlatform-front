import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";

import i18n from "@configs/i18n";
import { useResendInviteUserService } from ".";
import { ResendInviteUserPayload } from "./type";

export default function useInviteUserResend() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { resendInvite } = useResendInviteUserService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: ResendInviteUserPayload) => {
    try {
      const { data } = await resendInvite(payload);

      return data;
    } catch (error) {
      throw error;
    }
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: () => {
      dispatchSnackbar({
        title: i18n("manager_user.modal.invites.success_title_resend"),
        message: i18n("manager_user.modal.invites.success_text_resend"),
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
