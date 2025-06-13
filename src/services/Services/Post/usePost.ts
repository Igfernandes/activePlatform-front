import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostCreateServicesPayload } from "./type";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { usePostServicesService } from ".";

export default function usePostCreateService() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCreateServices } = usePostServicesService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostCreateServicesPayload) => {
    const { data } = await postCreateServices(payload);

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
        queryKey: ["services"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
