import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "@hooks/useSnackbar";
import { useAxios } from "@hooks/useAxios";
import { PutFillsPayload } from "./type";
import i18n from "@configs/i18n";
import { usePutFillsService } from ".";
import { AxiosError } from "axios";

export default function usePutFills() {
  const { handleAxiosError } = useAxios();
  const { dispatchSnackbar } = useSnackbar();
  const { putFills } = usePutFillsService();

  const handleMutate = async (payload: PutFillsPayload) => {
    const { data } = await putFills(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: ({ success }) => {
      dispatchSnackbar({
        message: i18n(success),
        type: "success",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
