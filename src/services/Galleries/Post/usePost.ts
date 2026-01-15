import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostGalleryPayload } from "./type";
import i18n from "@configs/i18n";
import { usePostGalleryPayload } from ".";
import { AxiosError } from "axios";

export default function usePostGallery() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCreateGallery } = usePostGalleryPayload();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostGalleryPayload) => {
    const { data } = await postCreateGallery(payload);
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
        queryKey: ["galleries"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
