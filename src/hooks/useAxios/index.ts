import { Axios } from "axios";
import { useSnackbar } from "../useSnackbar";
import { env } from "@configs/variables";
import { useTranslation } from "next-i18next";
import { CustomAxiosError, ShapeError } from "./type";

export function useAxios() {
  const { dispatchSnackbar } = useSnackbar();
  const { t } = useTranslation();

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
      title: t("errors.default.title"),
      message: t("errors.default.message"),
    };
    const typedError = error as CustomAxiosError;
    const responseData = typedError.response?.data;

    const responseError = (!!responseData && responseData.error) as string;
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
