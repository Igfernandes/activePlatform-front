import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PutSchedulePayload } from "./type";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { usePutScheduleService } from ".";

export default function usePutCreateSchedule() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { putSchedule } = usePutScheduleService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PutSchedulePayload) => {
    const { data } = await putSchedule(payload);

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
        queryKey: ["schedules"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
