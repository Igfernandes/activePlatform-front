import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";

import i18n from "@configs/i18n";
import { DeleteEventPayload } from "./type";
import { useDeleteService } from ".";

export default function useDeleteEvents() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { deleteEvents } = useDeleteService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: DeleteEventPayload) => {
    try {
      const { data } = await deleteEvents(payload);

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
        queryKey: ["events"],
        refetchType: "active",
      });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
