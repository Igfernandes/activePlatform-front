import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PutEventsPayload } from "./type";
import i18n from "@configs/i18n";
import { usePutEventsService } from ".";
import { AxiosError } from "axios";

export default function usePutEvents() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { putEvents } = usePutEventsService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PutEventsPayload) => {
    const { data } = await putEvents(payload);

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
        queryKey: ["events"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
