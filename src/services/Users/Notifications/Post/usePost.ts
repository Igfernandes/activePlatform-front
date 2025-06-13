import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAxios } from "@hooks/useAxios";
import { AxiosError } from "axios";
import { usePostUserNotificationsService } from ".";

export default function usePostUserNotifications() {
  const { handleAxiosError } = useAxios();
  const { postUserNotifications } = usePostUserNotificationsService();
  const queryClient = useQueryClient();

  const handleMutate = async () => {
    const { data } = await postUserNotifications();

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notifications/users"],
        refetchType: "active",
      });
      queryClient.invalidateQueries({
        queryKey: ["notifications"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
