import { I18n } from "i18n-js";
import ptBR from "./locales/pt-br.json";
import en from "./locales/en.json";
import { LANGUAGE_I18N } from "@configs/envs";

const languages = {
  "pt-br": ptBR,
  en,
};

export const i18nConfig = new I18n(languages);

const configureI18n = (lang?: string) => {
  const defaultLocale = lang ?? (LANGUAGE_I18N as string);

  setLanguageToI18n(defaultLocale);
};

export const setLanguageToI18n = (code: string) => {
  i18nConfig.defaultLocale = code;
  i18nConfig.locale = code;
};

configureI18n();

export type I18nProps<T> = { [key: string]: T };
const i18n = <T = string, I18N = I18nProps<T>>(key: string) =>
  i18nConfig.t(key) as I18N;

export default i18n;
