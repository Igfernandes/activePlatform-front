import { useMutation } from "react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { usePostRememberMeService } from ".";
import { PostRememberMePayload } from "./type";
import { useTranslation } from "next-i18next";

export default function usePostRememberMe() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postRememberMe } = usePostRememberMeService();
  const { t } = useTranslation("common");

  const handleMutate = async (payload: PostRememberMePayload) => {
    const { data } = await postRememberMe(payload);

    return data;
  };

  return useMutation(handleMutate, {
    onSuccess: () => {
      dispatchSnackbar({
        message: t("success.already_conecte_redirect"),
        title: t("words.await"),
        type: "notice",
      });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
