import { useMutation } from "react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostRecoverPasswordPayload } from "./type";
import { usePostRecoverPasswordRequestService } from ".";
import { useTranslation } from "next-i18next";

export default function usePostRecoverPasswordRequest() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { t } = useTranslation("recover-password");
  const { postRecoverPasswordRequest } = usePostRecoverPasswordRequestService();

  const handleMutate = async (payload: PostRecoverPasswordPayload) => {
    const { data } = await postRecoverPasswordRequest(payload);

    return data;
  };

  return useMutation(handleMutate, {
    onSuccess: () => {
      dispatchSnackbar({
        message: t("forgot-password.success.text"),
        title: t("forgot-password.success.title"),
        type: "notice",
      });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
