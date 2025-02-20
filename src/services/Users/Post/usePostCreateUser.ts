import { useMutation } from "react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { useRouter } from "next/router";
import { publicRoutes } from "@configs/routes/Web/navigation";
import { usePostCreateUserService } from ".";
import { PostCreateUserPayload } from "./type";
import i18n from "@configs/i18n";

export default function usePostCreateUser() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCreateUser } = usePostCreateUserService();
  const router = useRouter();
  const { successful } = publicRoutes;

  const handleMutate = async (payload: PostCreateUserPayload) => {
    const { data } = await postCreateUser(payload);

    return data;
  };

  return useMutation(handleMutate, {
    onSuccess: () => {
      dispatchSnackbar({
        message: i18n("words.will_redirect"),
        title: i18n("words.success"),
        type: "success",
      });

      router.push(`${successful}?type=created_account`);
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
