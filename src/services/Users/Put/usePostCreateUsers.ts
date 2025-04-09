import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import i18n from "@configs/i18n";
import { AxiosError } from "axios";
import { usePuttUsersService } from ".";
import { PutUsersPayload } from "./type";

export default function usePutUsers() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { putUsers } = usePuttUsersService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PutUsersPayload) => {
    const { data } = await putUsers(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: () => {
      dispatchSnackbar({
        message: i18n("users.put.success_text"),
        title: i18n("users.put.success_title"),
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["userAuth"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
