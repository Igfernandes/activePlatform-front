import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostCreateSchedulePayload } from "./type";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { usePostScheduleService } from ".";

export default function usePostCreateSchedule() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCreateSchedule } = usePostScheduleService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostCreateSchedulePayload) => {
    const { data } = await postCreateSchedule(payload);

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
