import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostRecoverPasswordAlterPayload } from "./type";
import { usePostRecoverPasswordAlterService } from ".";
import { useRouter } from "next/router";
import { publicRoutes } from "@configs/routes/Web/navigation";
import i18n from "@configs/i18n";

export default function usePostRecoverPasswordAlter() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postRecoverPasswordAlter } = usePostRecoverPasswordAlterService();
  const router = useRouter();
  const { successful } = publicRoutes;

  const handleMutate = async (payload: PostRecoverPasswordAlterPayload) => {
    const { data } = await postRecoverPasswordAlter(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: () => {
      dispatchSnackbar({
        message: i18n("success.alter_password.will_redirect"),
        title: i18n("words.success"),
        type: "success",
      });

      router.push(`${successful}?=type=created_password`);
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
