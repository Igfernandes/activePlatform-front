import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PatchClientsCategoryPayload } from "./type";
import i18n from "@configs/i18n";
import { usePatchClientsCategoryService } from ".";

export default function usePatchClientCategory() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { patchClientsCategory } = usePatchClientsCategoryService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PatchClientsCategoryPayload) => {
    const { data } = await patchClientsCategory(payload);

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
        queryKey: ["clients"],
        refetchType: "active",
      });
    },
    onError: (err) => {
      handleAxiosError(err);
    },
  });
}
