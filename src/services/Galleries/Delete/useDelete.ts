import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { useDeleteGalleryService } from ".";
import { DeleteGalleryPayload } from "./type";

export default function useDeleteGalleries() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { deleteGallery } = useDeleteGalleryService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: DeleteGalleryPayload) => {
    const { data } = await deleteGallery(payload);
    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({ success }) => {
      dispatchSnackbar({
        message: i18n(success),
        type: "success",
      });
      queryClient.removeQueries({ queryKey: ["galleries"] });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
