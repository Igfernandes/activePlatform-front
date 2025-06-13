import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";

import i18n from "@configs/i18n";
import { DeleteServicePayload } from "./type";
import { useDeleteServicesService } from ".";

export default function useDeleteServices() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { deleteService } = useDeleteServicesService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: DeleteServicePayload) => {
    try {
      const { data } = await deleteService(payload);

      return data;
    } catch (error) {
      throw error;
    }
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
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
