import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostCreateFormPayload } from "./type";
import i18n from "@configs/i18n";
import { usePostFormService } from ".";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";

export default function usePostCreateForm() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCreateForm } = usePostFormService();
  const queryClient = useQueryClient();
  const router = useRouter();
  const { forms } = privateRoutes;

  const handleMutate = async (payload: PostCreateFormPayload) => {
    const { data } = await postCreateForm(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({ success }) => {
      dispatchSnackbar({
        message: i18n(success),
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["forms"],
        refetchType: "active",
      });

      router.push(forms);
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
