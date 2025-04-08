import { useAxios } from "@hooks/useAxios";
import { PostClientsFieldsPayload } from "./type";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useRoutes } from "@hooks/useRoutes";
import { isFileList } from "@helpers/file";

export function usePostServicesService() {
  const { axios } = useAxios();
  const { clientsFields } = API_ROUTES;
  const { setParams } = useRoutes();

  async function postCreateServices({
    client,
    ...payload
  }: PostClientsFieldsPayload) {
    const formData = new FormData();

    payload.fields.forEach(({ id, value }, index) => {
      if (isFileList(value)) {
        formData.append(`fields[${index}][value]`, value[0]);
      } else {
        formData.append(`fields[${index}][value]`, String(value));
      }

      formData.append(`fields[${index}][id]`, String(id));
    });
    return axios.post(
      setParams({
        url: clientsFields,
        data: {
          id: client ?? "",
          fieldId: "",
        },
      }),
      formData
    );
  }

  return {
    postCreateServices,
  };
}
