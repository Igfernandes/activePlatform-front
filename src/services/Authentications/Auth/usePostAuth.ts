import { useMutation } from "react-query";
import { PostAuthPayload } from "./type";
import { usePostAuthService } from ".";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { useRememberMe } from "@hooks/useRememberMe";

export default function usePostAuth() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postAuth } = usePostAuthService();
  const { saveReferenceToken } = useRememberMe();

  const handleMutate = async (payload: PostAuthPayload) => {
    const { data } = await postAuth(payload);

    return data;
  };

  return useMutation(handleMutate, {
    onSuccess: (res) => {
      const data = JSON.parse(res);

      dispatchSnackbar({
        message: "Você será redirecionado",
        title: "Conectado com Sucesso",
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
