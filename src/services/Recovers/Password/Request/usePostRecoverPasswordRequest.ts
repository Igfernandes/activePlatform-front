import { useMutation } from "react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostRecoverPasswordPayload } from "./type";
import { usePostRecoverPasswordRequestService } from ".";

export default function usePostRecoverPasswordRequest() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postRecoverPasswordRequest } = usePostRecoverPasswordRequestService();

  const handleMutate = async (payload: PostRecoverPasswordPayload) => {
    const { data } = await postRecoverPasswordRequest(payload);

    return data;
  };

  return useMutation(handleMutate, {
    onSuccess: () => {
      dispatchSnackbar({
        message: "Você será redirecionado",
        title: "Conectado com Sucesso",
        type: "success",
      });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
