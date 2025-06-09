import { Axios } from "axios";
import { useSnackbar } from "../useSnackbar";
import { CustomAxiosError, ShapeError } from "./type";
import i18n from "@configs/i18n";
import { STATUS_SERVICE } from "@constants/http";
import { isValidJSON } from "@helpers/json";
import { AuthenticationsInterceptor } from "./interceptores/Authentication";
import { axiosConfig } from "@configs/axios";

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

  /**
   * @function handleAxiosError
   * - Irá analisar o erro e tratar baseado no modelo de resposta do axios.
   *
   * @param { AxiosError} error O objeto de erro retornado pelo axios.
   *
   * @returns {ShapeError} error
   */
  function handleAxiosError(error: unknown, title?: string): ShapeError {
    const shapeError = {
      title: i18n("errors.service.default.title") as string,
      message: i18n("errors.service.default.message") as string,
    };
    const typedError = error as CustomAxiosError;

    const status = typedError.response?.status ?? STATUS_SERVICE.INTERNAL_ERROR;
    const jsonResponseData = typedError.response?.data ?? "";
    const responseData = isValidJSON(jsonResponseData)
      ? JSON.parse(jsonResponseData)
      : null;

    const responseError = !!responseData && responseData.errors;
    if (responseError) {
      shapeError["message"] = responseError as string;
    }

    if (title) {
      shapeError["title"] = title;
    }

    if (status === 401) shapeError["title"] = i18n("words.feedback_auth");

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
