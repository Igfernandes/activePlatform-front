import { Axios } from "axios";
import { useSnackbar } from "../useSnackbar";
import { CustomAxiosError, ShapeError } from "./type";
import { env } from "@configs/envs";
import i18n from "@configs/i18n";

export function useAxios() {
  const { dispatchSnackbar } = useSnackbar();

  const axios = new Axios({
    baseURL: env.API_URL,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
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
    const responseData = typedError.response?.data;

    const responseError = !!responseData && responseData.error;
    if (responseError) {
      shapeError["message"] = responseError;
    }

    dispatchSnackbar({ ...shapeError, type: "error" });

    return shapeError;
  }
  return {
    axios,
    handleAxiosError,
  };
}
