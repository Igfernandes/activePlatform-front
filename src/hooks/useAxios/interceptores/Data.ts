import { isValidJSON } from "@helpers/json";
import { AxiosResponse } from "axios";

export function DataInterceptor(response: AxiosResponse) {
  response.data = isValidJSON(response.data)
    ? JSON.parse(response.data)
    : response.data;
  return response; // Certifique-se de retornar response.data
}
