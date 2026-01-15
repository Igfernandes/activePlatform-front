import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAxios } from "@hooks/useAxios";
import { AxiosError } from "axios";

import { PostFilesResponse } from "@services/Files/Post/type";

type Props = {
  key: string;
  url: string;
};

export default function usePost({ key, url }: Props) {
  const { handleAxiosError } = useAxios();
  const queryClient = useQueryClient();
  const { axios } = useAxios();

  async function handleMutate({ files }: { files: File[] }) {
    const formData = new FormData();

    files.forEach((element, index) =>
      formData.append(`images[${index}]`, element)
    );

    const { data } = await axios.post<PostFilesResponse>(url, formData);
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
