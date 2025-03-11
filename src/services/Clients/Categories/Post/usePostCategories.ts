import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostCreateUserPayload } from "./type";
import i18n from "@configs/i18n";
import { usePostCategoriesService } from ".";

export default function usePostCategories() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCreateUser } = usePostCategoriesService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostCreateUserPayload) => {
    const { data } = await postCreateUser(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,

    onSuccess: () => {
      dispatchSnackbar({
        message: i18n("clients.modal.category.success_text"),
        title: i18n("clients.modal.category.success_title"),
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["categories"],
        refetchType: "active",
      });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
