import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAxios } from "@hooks/useAxios";
import { AxiosError } from "axios";

import { PostFilesResponse } from "@services/Files/Post/type";

type Props = {
  key: string;
  url: string;
};

export default function useDelete({ key, url }: Props) {
  const { handleAxiosError } = useAxios();
  const queryClient = useQueryClient();
  const { axios } = useAxios();

  async function handleMutate(id: number) {
    const { data } = await axios.delete<PostFilesResponse>(`${url}/${id}`);
    return data;
  }

  return useMutation({
    mutationFn: handleMutate,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [key],
        refetchType: "active",
      });
    },
    onError: (err: AxiosError) => {
      handleAxiosError(err);
    },
  });
}
