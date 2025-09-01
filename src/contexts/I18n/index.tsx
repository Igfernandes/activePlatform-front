import { createContext, useContext, useState, useMemo } from "react";
import { i18nConfig, setLanguageToI18n } from "@configs/i18n";
import { getCookie } from "cookies-next";

type I18nContextType = {
  t: typeof i18nConfig.t;
  locale: string;
  setLocale: (lang: string) => void;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const initialLocale = (getCookie("language") as string) || "pt-br";

  // já configura no load inicial
  setLanguageToI18n(initialLocale);

  const [locale, setLocaleState] = useState<string>(initialLocale);

  const setLocale = (lang: string) => {
    setLanguageToI18n(lang); // aplica imediatamente
    setLocaleState(lang); // força re-render
  };

  const t = useMemo(() => {
    return (...args: Parameters<typeof i18nConfig.t>) => i18nConfig.t(...args);
  }, [locale]);

  return (
    <I18nContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
