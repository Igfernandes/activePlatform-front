import { Axios } from "axios";
import { useSnackbar } from "../useSnackbar";
import { CustomAxiosError, ShapeError } from "./type";
import i18n from "@configs/i18n";
import { STATUS_SERVICE } from "@constants/http";
import { isValidJSON } from "@helpers/json";
import { AuthenticationsInterceptor } from "./interceptores/Authentication";
import { DataInterceptor } from "./interceptores/Data";
import { axiosConfig } from "@configs/axios";
import { hasErrorAuthentication } from "./interceptores/hasErrorAuthentication";

export function useAxios() {
  const { dispatchSnackbar } = useSnackbar();
  const axios = new Axios({
    ...axiosConfig,
    validateStatus: (status: number) =>
      status >= STATUS_SERVICE.OK && status < STATUS_SERVICE.REDIRECT,
  });

  axios.interceptors.request.use(AuthenticationsInterceptor, (error) => {
    // Trata erros na requisição
    return Promise.reject(error);
  });
  axios.interceptors.response.use(DataInterceptor, hasErrorAuthentication);

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
      message: i18n("Api.default.error") as string,
    };
    const typedError = error as CustomAxiosError;

    const status = typedError.response?.status ?? STATUS_SERVICE.INTERNAL_ERROR;
    const jsonResponseData = typedError.response?.data ?? "";
    const responseData = isValidJSON(jsonResponseData)
      ? JSON.parse(jsonResponseData)
      : null;

    let responseError = "";
    if (responseData && Array.isArray(responseData.errors))
      responseError = !!responseData && responseData.errors[0];
    else responseError = !!responseData && responseData.errors;

    if (responseError) {
      shapeError["message"] = i18n(responseError) as string;
    } else if (status === STATUS_SERVICE.NOT_FOUND)
      shapeError["message"] = i18n("Api.default.not_auth") as string;

    dispatchSnackbar({
      ...shapeError,
      type: status === 401 ? "notice" : "error",
    });

    return shapeError;
  }

  return {
    axios,
    handleAxiosError,
  };
}
