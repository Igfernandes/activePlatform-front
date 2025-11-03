import { useMutation } from "@tanstack/react-query";
import { useAxios } from "@hooks/useAxios";
import { AxiosError } from "axios";
import { usePostConfirmationService } from ".";
import { PostConfirmationsPayload } from "./type";

export default function usePostConfirmations() {
  const { handleAxiosError } = useAxios();
  const { postConfirmations } = usePostConfirmationService();

  const handleMutate = async (payload: PostConfirmationsPayload) => {
    const { data } = await postConfirmations(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: () => {},
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
