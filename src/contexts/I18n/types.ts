export type I18nContextData = {
  language: TranslateOptions;
  setLanguage: (lang: TranslateOptions) => void;
};

export type TranslateOptions = "pt-br" | "en" | "es"