import { EnvironmentProprieties, EnvironmentTypes } from "./type";

export const LANGUAGE_I18N = process.env.NEXT_PUBLIC_LANGUAGE ?? "pt-br";

export const COMPANY_PROFILE = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME,
  cnpj: process.env.NEXT_PUBLIC_COMPANY_CNPJ,
  tell: process.env.NEXT_PUBLIC_COMPANY_TELL,
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL,
};
export const env: EnvironmentProprieties = {
  PROD: {
    API_URL: process.env.NEXT_PUBLIC_PROD_API_URL,
  },
  DEV: {
    API_URL: process.env.NEXT_PUBLIC_DEV_API_URL,
  },
}[(process.env.NEXT_PUBLIC_ENVIRONMENT as EnvironmentTypes) ?? "DEV"];
