import { useMutation } from "@tanstack/react-query";
import { PostAuthPayload } from "./type";
import { usePostAuthService } from ".";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { useRememberMe } from "@hooks/useRememberMe";
import i18n from "@configs/i18n";
import { useRouter } from "next/router";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { useCookies } from "@hooks/useCookies";

export default function usePostAuth() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postAuth } = usePostAuthService();
  const { saveReferenceToken } = useRememberMe();
  const { saveCookies } = useCookies();
  const router = useRouter();

  const handleMutate = async (payload: PostAuthPayload) => {
    const { data } = await postAuth(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: (res) => {
      const data = res;

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

      saveCookies({
        token_navigation: data.token_navigation,
      });

      setTimeout(() => {
        router.push(privateRoutes.dashboard)
      }, 500);
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
