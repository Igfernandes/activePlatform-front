import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PutServicesPayload } from "./type";
import i18n from "@configs/i18n";
import { usePutServicesService } from ".";
import { AxiosError } from "axios";

export default function usePutService() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { putServices } = usePutServicesService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PutServicesPayload) => {
    const { data } = await putServices(payload);

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
        queryKey: ["services"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
