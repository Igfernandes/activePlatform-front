import { EnvironmentProprieties, EnvironmentTypes } from "./type";

export const LANGUAGE_I18N = process.env.NEXT_PUBLIC_LANGUAGE;
export const env: EnvironmentProprieties = {
  PROD: {
    API_URL: process.env.NEXT_PUBLIC_PROD_URL,
  },
  DEV: {
    API_URL: process.env.NEXT_PUBLIC_DEV_URL,
  },
}[process.env.NEXT_PUBLIC_ENVIRONMENT as EnvironmentTypes];
