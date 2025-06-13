import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { AxiosError } from "axios";
import { usePuttUsersService } from ".";
import { PutUsersPayload } from "./type";
import i18n from "@configs/i18n";

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
    onSuccess: ({ success }) => {
      dispatchSnackbar({
        message: i18n(success),
        type: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["userAuth"],
        refetchType: "active",
      });
      queryClient.invalidateQueries({
        queryKey: ["users"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
