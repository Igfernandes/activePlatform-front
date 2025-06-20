import { Axios, AxiosRequestConfig } from "axios";
import { env } from "./envs";
import { DataInterceptor } from "@hooks/useAxios/interceptores/Data";
import { hasErrorAuthentication } from "@hooks/useAxios/interceptores/hasErrorAuthentication";

export const axiosConfig: AxiosRequestConfig = {
  baseURL: env.API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
};

const axios = new Axios(axiosConfig);
axios.interceptors.response.use(DataInterceptor, hasErrorAuthentication);
export { axios };
