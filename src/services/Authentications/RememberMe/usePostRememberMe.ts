import { useMutation } from "react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { usePostRememberMeService } from ".";
import { PostRememberMePayload } from "./type";

export default function usePostRememberMe() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postRememberMe } = usePostRememberMeService();

  const handleMutate = async (payload: PostRememberMePayload) => {
    const { data } = await postRememberMe(payload);

    return data;
  };

  return useMutation(handleMutate, {
    onSuccess: () => {
      dispatchSnackbar({
        message: "Você está conectado e será redirecionado",
        title: "Aguarde",
        type: "success",
      });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
