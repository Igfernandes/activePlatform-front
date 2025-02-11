import { useMutation } from "react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostRecoverPasswordAlterPayload } from "./type";
import { usePostRecoverPasswordAlterService } from ".";

export default function usePostRecoverPasswordAlter() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postRecoverPasswordAlter } = usePostRecoverPasswordAlterService();

  const handleMutate = async (payload: PostRecoverPasswordAlterPayload) => {
    const { data } = await postRecoverPasswordAlter(payload);

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
