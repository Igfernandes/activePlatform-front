import { useMutation } from "react-query";
import { PostAuthPayload } from "./type";
import { usePostAuthService } from ".";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { useRememberMe } from "@hooks/useRememberMe";
import i18n from "@configs/i18n";
import { isValidJSON } from "@helpers/json";
import { useRouter } from "next/router";
import { privateRoutes } from "@configs/routes/Web/navigation";

export default function usePostAuth() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postAuth } = usePostAuthService();
  const { saveReferenceToken } = useRememberMe();
  const router = useRouter();

  const handleMutate = async (payload: PostAuthPayload) => {
    const { data } = await postAuth(payload);

    return data;
  };

  return useMutation(handleMutate, {
    onSuccess: (res) => {
      const data = isValidJSON(res) ? JSON.parse(res) : {};

      dispatchSnackbar({
        message: i18n("success.login.will_redirect"),
        title: i18n("success.login.already_conecte"),
        type: "success",
      });

      if (data["reference_token"]) {
        saveReferenceToken({
          referenceToken: data["reference_token"],
        });
      }

      router.push(privateRoutes.dashboard);
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
