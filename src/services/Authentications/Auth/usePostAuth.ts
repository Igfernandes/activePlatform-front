import { useMutation } from "react-query";
import { PostAuthPayload } from "./type";
import { usePostAuthService } from ".";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { useRememberMe } from "@hooks/useRememberMe";
import { useTranslation } from "next-i18next";

export default function usePostAuth() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postAuth } = usePostAuthService();
  const { saveReferenceToken } = useRememberMe();
  const { t } = useTranslation();

  const handleMutate = async (payload: PostAuthPayload) => {
    const { data } = await postAuth(payload);

    return data;
  };

  return useMutation(handleMutate, {
    onSuccess: (res) => {
      const data = JSON.parse(res);

      dispatchSnackbar({
        message: t("success.will_redirect"),
        title: t("success.already_conecte"),
        type: "success",
      });

      if (!data["reference-token"]) return;

      saveReferenceToken({
        referenceToken: data["reference-token"],
      });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
