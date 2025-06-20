import { API_ROUTES } from "@configs/routes/Api/api";
import { axios } from "@configs/axios";
import { setParams } from "@helpers/routes";
import { GetFillFieldsRequest } from "./types";
import { FormFillField } from "@type/Forms/FormsFill";

export async function getFillFields(
  tokenNavigation: string,
  request?: GetFillFieldsRequest
): Promise<Array<FormFillField>[] | FormFillField[]> {
  const { formId, ref } = request ?? {};

  const { formsFillsFields } = API_ROUTES;
  const { data } = await axios.get<Array<FormFillField>[] | FormFillField[]>(
    setParams({
      url: formsFillsFields,
      data: {
        id: formId,
        package: ref,
      },
    }),
    {
      headers: {
        Authorization: `Bearer ${tokenNavigation}`,
      },
    }
  );

  return data;
}
