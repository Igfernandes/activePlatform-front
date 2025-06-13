import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { usePostUsersService } from ".";
import { PostCreateUsersPayload } from "./type";
import { useRouter } from "next/navigation";
import { publicRoutes } from "@configs/routes/Web/navigation";

export default function usePostCreateUsers() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCreateUsers } = usePostUsersService();
  const queryClient = useQueryClient();
  const router = useRouter();
  const { successful } = publicRoutes;

  const handleMutate = async (payload: PostCreateUsersPayload) => {
    const { data } = await postCreateUsers(payload);

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
        queryKey: ["users"],
        refetchType: "active",
      });

      router.push(`${successful}?title=created_account`);
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
