import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams, setQueries } from "@helpers/routes";
import { GetFormsRequest } from "./types";
import { FormsShape } from "../../../types/Forms";

export async function getForms(
  tokenNavigation: string,
  request?: GetFormsRequest
): Promise<FormsShape[] | FormsShape> {
  const { id, ...query } = request ?? {};

  const { forms } = API_ROUTES;
  const { data } = await axios.get<FormsShape[] | FormsShape>(
    setQueries({
      url: setParams({
        url: forms,
        data: {
          id,
        },
      }),
      query,
    }),
    {
      headers: {
        Authorization: `Bearer ${tokenNavigation}`,
      },
    }
  );

  return data;
}

export async function getForm({
  id,
  ...query
}: GetFormsRequest): Promise<FormsShape> {
  const { formPreview } = API_ROUTES;
  const { data } = await axios.get<FormsShape>(
    setQueries({
      url: setParams({
        url: formPreview,
        data: {
          id: id ?? "",
        },
      }),
      query,
    })
  );

  return data;
}
