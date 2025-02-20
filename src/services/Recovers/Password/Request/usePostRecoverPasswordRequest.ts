import { useMutation } from "react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostRecoverPasswordPayload } from "./type";
import { usePostRecoverPasswordRequestService } from ".";
import i18n from "@configs/i18n";

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
        message: i18n("success.forgot_password.text"),
        title: i18n("success.forgot_password.title"),
        type: "notice",
      });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
