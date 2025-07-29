import { useMutation } from "@tanstack/react-query";
import { PostAuthPayload } from "./type";
import { usePostAuthService } from ".";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { useRememberMe } from "@hooks/useRememberMe";
import i18n from "@configs/i18n";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { useCookies } from "@hooks/useCookies";

export default function usePostAuth() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postAuth } = usePostAuthService();
  const { saveReferenceToken } = useRememberMe();
  const { saveCookies } = useCookies();

  const handleMutate = async (payload: PostAuthPayload) => {
    const { data } = await postAuth(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: (res) => {
      const data = res;

      dispatchSnackbar({
        message: i18n(data.success),
        type: "success",
      });

      if (data["reference_token"]) {
        saveReferenceToken({
          referenceToken: data["reference_token"],
        });
      }

      if (!data.token_navigation)
        return dispatchSnackbar({
          message: i18n("Api.default.internal_error"),
          type: "error",
        });

      saveCookies({
        token_navigation: data.token_navigation,
      });

      window.location.href = privateRoutes.dashboard;
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
