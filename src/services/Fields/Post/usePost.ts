import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PostCreateFieldsPayload } from "./type";
import i18n from "@configs/i18n";
import { usePostFieldsService } from ".";
import { AxiosError } from "axios";

export default function usePostCreateFields() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { postCreateFields } = usePostFieldsService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostCreateFieldsPayload) => {
    const { data } = await postCreateFields(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({success}, payload) => {
      dispatchSnackbar({
        message: i18n(success),
        type: "success",
      });
      
      queryClient.invalidateQueries({
        queryKey: [`${payload.scope.toLocaleLowerCase()}s/fields`],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
