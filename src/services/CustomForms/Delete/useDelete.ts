import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { DeleteFormPayload } from "./type";
import i18n from "@configs/i18n";
import { useDeleteFormService } from ".";
import { AxiosError } from "axios";

export default function useDeleteForm() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { deleteForm } = useDeleteFormService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: DeleteFormPayload) => {
    const { data } = await deleteForm(payload);

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
