import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostClientsFieldsPayload } from "./type";
import i18n from "@configs/i18n";
import { usePostServicesService } from ".";
import { AxiosError } from "axios";

export default function usePostClientsFields() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCreateServices } = usePostServicesService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostClientsFieldsPayload) => {
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
        queryKey: ["clients/fields"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
