import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PutClientPayload } from "./type";
import i18n from "@configs/i18n";
import { usePutClientsService } from ".";
import { AxiosError } from "axios";

export default function usePutClient() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { putClient } = usePutClientsService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PutClientPayload) => {
    const { data } = await putClient(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({success}) => {
      dispatchSnackbar({
        message: i18n(success),
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
