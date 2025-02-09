import { Axios, AxiosError } from "axios";
import { useSnackbar } from "./useSnackbar";
import { env } from "@configs/variables";
import { useTranslation } from "react-i18next";

type CustomAxiosError = AxiosError<{
  error?: string;
}>;

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

  function handleAxiosError(error: unknown) {
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

    return { shapeError };
  }
  return {
    axios,
    handleAxiosError,
  };
}
