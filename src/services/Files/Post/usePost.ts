import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAxios } from "@hooks/useAxios";
import { usePostFilesService } from ".";
import { AxiosError } from "axios";
import { PostFilesPayload } from "./type";

export default function usePostFiles() {
  const { handleAxiosError } = useAxios();
  const { postFiles } = usePostFilesService();
  const queryClient = useQueryClient();

  const handleMutate = async (payload: PostFilesPayload) => {
    const { data } = await postFiles(payload);

    return data;
  };

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["files"],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
