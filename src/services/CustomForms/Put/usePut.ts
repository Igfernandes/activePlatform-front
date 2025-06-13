import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PutFormPayload } from "./type";
import i18n from "@configs/i18n";
import { usePutFormService } from ".";
import { AxiosError } from "axios";

export default function usePutForm() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { putForm } = usePutFormService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PutFormPayload) => {
    const { data } = await putForm(payload);

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
        queryKey: ["forms"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
