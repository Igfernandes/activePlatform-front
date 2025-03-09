import { Axios, AxiosRequestConfig } from "axios";
import { env } from "./envs";

export const axiosConfig: AxiosRequestConfig = {
  baseURL: env.API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
};

export const axios = new Axios(axiosConfig);
