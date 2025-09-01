// i18n.ts
import { I18n } from "i18n-js";
import { LANGUAGE_I18N } from "@configs/envs";
import dayjs from "dayjs";
import { translatePT_BR } from "./locales/pt-br";
import { translateEN } from "./locales/en";
import { translateES } from "./locales/es";
import { setCookie } from "cookies-next";

const languages = {
  "pt-br": translatePT_BR,
  en: translateEN,
  es: translateES,
};

export const i18nConfig = new I18n(languages);

export const setLanguageToI18n = (code: string = "pt-br") => {
  i18nConfig.defaultLocale = code;
  i18nConfig.locale = code;
  dayjs.locale(code);
  setCookie("language", code);
};

export const configureI18n = (lang: string = "pt-br") => {
  const defaultLocale = lang ?? (LANGUAGE_I18N as string);
  setLanguageToI18n(defaultLocale);
};

configureI18n("pt-br");

export type I18nProps<T> = { [key: string]: T };
const i18n = (key: string) => i18nConfig.t(key) as string;

export default i18n;
