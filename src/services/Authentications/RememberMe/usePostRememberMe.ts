import { useMutation } from "react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { usePostRememberMeService } from ".";
import { PostRememberMePayload } from "./type";
import i18n from "@configs/i18n";

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
        message: i18n("success.already_conecte_redirect"),
        title: i18n("words.await"),
        type: "notice",
      });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
