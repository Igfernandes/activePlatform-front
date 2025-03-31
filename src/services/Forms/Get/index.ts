import { API_ROUTES } from "@configs/routes/Api/api";
import { GetFormsRequest } from "./types";
import { useAxios } from "@hooks/useAxios";
import { useRoutes } from "@hooks/useRoutes";
import { FormsShape } from "../../../types/Forms";

export default function useGet() {
  const { forms } = API_ROUTES;
  const { axios } = useAxios();
  const { setParams, setQueries } = useRoutes();

  async function getForms(request?: GetFormsRequest) {
    const { ...query } = request ?? {};

    return await axios.get<FormsShape[]>(
      setQueries({
        url: setParams({ url: forms }),
        query,
      })
    );
  }

  return {
    getForms,
  };
}
