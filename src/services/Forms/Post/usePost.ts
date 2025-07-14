import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostCreateFormPayload } from "./type";
import i18n from "@configs/i18n";
import { usePostFormService } from ".";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { publicRoutes } from "@configs/routes/Web/navigation";

type Props = {
  slug?: string;
};
export default function usePostSubmitForm({ slug }: Props) {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postForm } = usePostFormService();
  const router = useRouter();
  const { forms } = publicRoutes;

  const handleMutate = async (payload: PostCreateFormPayload) => {
    const { data } = await postForm(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({ success }) => {
      dispatchSnackbar({
        message: i18n(success),
        type: "success",
      });

      router.push(`${forms}/successful?form=${slug}`);
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
