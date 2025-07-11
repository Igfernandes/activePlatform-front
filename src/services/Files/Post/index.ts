import { useAxios } from "@hooks/useAxios";
import { API_ROUTES } from "@configs/routes/Api/api";
import { PostFilesPayload, PostFilesResponse } from "./type";

export function usePostFilesService() {
  const { axios } = useAxios();
  const { files: filesRoute } = API_ROUTES;

  async function postFiles({ files, packageRef }: PostFilesPayload) {
    const formData = new FormData();

    formData.append("package", packageRef);
    files.forEach((element, key) => formData.append(`files[${key}]`, element));

    return axios.post<PostFilesResponse>(filesRoute, formData);
  }

  return {
    postFiles,
  };
}
