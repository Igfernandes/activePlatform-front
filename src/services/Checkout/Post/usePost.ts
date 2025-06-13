import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { usePostCheckoutService } from ".";
import { PostCheckoutPayload } from "./type";

export default function usePostCheckout() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCheckout } = usePostCheckoutService();

  const handleMutate = async (payload: PostCheckoutPayload) => {
    const { data } = await postCheckout(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({success}) => {
      dispatchSnackbar({
        message: i18n(success),
        type: "notice",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
