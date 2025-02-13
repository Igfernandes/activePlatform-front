import { EnvironmentProprieties, EnvironmentTypes } from "./type";

export const LANGUAGE_I18N = process.env.NEXT_PUBLIC_LANGUAGE ?? "pt-br";
export const env: EnvironmentProprieties = {
  PROD: {
    API_URL: process.env.NEXT_PROD_URL,
  },
  DEV: {
    API_URL: process.env.NEXT_DEV_URL,
  },
}[process.env.NEXT_ENVIRONMENT as EnvironmentTypes];
