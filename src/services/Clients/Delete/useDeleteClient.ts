import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { DeleteClientPayload } from "./type";
import { useDeleteClientsService } from ".";

export default function useDeleteClient() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { deleteClient } = useDeleteClientsService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: DeleteClientPayload) => {
    const { data } = await deleteClient(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: () => {
      dispatchSnackbar({
        message: i18n("clients.modal.delete.success_text"),
        title: i18n("clients.modal.delete.success_title"),
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["clients"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
