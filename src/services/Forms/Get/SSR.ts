import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams, setQueries } from "@helpers/routes";
import { GetFormsRequest } from "./types";
import { FormsShape } from "../../../types/Forms";
import { FieldShape } from "@components/shared/layouts/FormBuilder/type";

export async function getForms(
  tokenNavigation: string,
  request?: GetFormsRequest
): Promise<FormsShape[] | FormsShape> {
  const { id, ...query } = request ?? {};

  const { forms } = API_ROUTES;
  const { data } = await axios.get<string>(
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

  return JSON.parse(data);
}

export async function getFormFields({
  id,
}: GetFormsRequest): Promise<FieldShape[]> {
  const { formFields } = API_ROUTES;
  const { data } = await axios.get<string>(
    setParams({
      url: formFields,
      data: {
        id,
      },
    })
  );

  return JSON.parse(data);
}
