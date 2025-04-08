import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";

import i18n from "@configs/i18n";
import { DeleteFieldPayload } from "./type";
import { useDeleteFieldService } from ".";

export default function useDeleteFields() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { deleteFields } = useDeleteFieldService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: DeleteFieldPayload) => {
    try {
      const { data } = await deleteFields(payload);

      return data;
    } catch (error) {
      throw error;
    }
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: (resp, payload) => {
      dispatchSnackbar({
        title: i18n("fields.delete.success_title"),
        message: i18n("fields.delete.success_text"),
        type: "success",
      });

      queryClient.invalidateQueries({
        queryKey: [`${payload.scope.toLocaleLowerCase()}s/fields`],
        refetchType: "active",
      });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
