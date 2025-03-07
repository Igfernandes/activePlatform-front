import { Axios } from "axios";
import { useSnackbar } from "../useSnackbar";
import { CustomAxiosError, ShapeError } from "./type";
import { env } from "@configs/envs";
import i18n from "@configs/i18n";
import { STATUS_SERVICE } from "@constants/services";
import { isValidJSON } from "@helpers/json";

const axiosConfig = {
  baseURL: env.API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
};

export const axios = new Axios(axiosConfig);

export function useAxios() {
  const { dispatchSnackbar } = useSnackbar();
  const axios = new Axios({
    ...axiosConfig,
    validateStatus: (status: number) =>
      status >= STATUS_SERVICE.OK && status < STATUS_SERVICE.REDIRECT,
  });
  /**
   * @function handleAxiosError
   * - Irá analisar o erro e tratar baseado no modelo de resposta do axios.
   *
   * @param { AxiosError} error O objeto de erro retornado pelo axios.
   *
   * @returns {ShapeError} error
   */
  function handleAxiosError(error: unknown): ShapeError {
    const shapeError = {
      title: i18n("errors.service.default.title") as string,
      message: i18n("errors.service.default.message") as string,
    };
    const typedError = error as CustomAxiosError;
    const jsonResponseData = typedError.response?.data ?? "";
    const responseData = isValidJSON(jsonResponseData)
      ? JSON.parse(jsonResponseData)
      : null;

    const responseError = !!responseData && responseData.errors;
    if (responseError) {
      shapeError["message"] = responseError as string;
    }

    dispatchSnackbar({ ...shapeError, type: "error" });

    return shapeError;
  }
  return {
    axios,
    handleAxiosError,
  };
}
