import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostSubscribePayload } from "./type";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { usePostSubscribe } from ".";

export default function usePostSubscribeService() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postSubscribe } = usePostSubscribe();

  const handleMutate = async (payload: PostSubscribePayload) => {
    const { data } = await postSubscribe(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({ success }) => {
      dispatchSnackbar({
        message: i18n(success),
        type: "success",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
