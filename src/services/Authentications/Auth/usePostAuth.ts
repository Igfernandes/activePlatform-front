import { useMutation } from "react-query";
import { PostAuthPayload } from "./type";
import { usePostAuthService } from ".";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";

export default function usePostAuth() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postAuth } = usePostAuthService();

  const handleMutate = (payload: PostAuthPayload) => {
    return postAuth(payload);
  };

  return useMutation(handleMutate, {
    onSuccess: (res) => {
      dispatchSnackbar({ message: "Você será redirecionado", title: "Conectado com Sucesso", type: "success" });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
