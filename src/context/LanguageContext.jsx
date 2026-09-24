import { createContext, useContext, useEffect, useState } from "react";

import en from "../locales/en";
import ar from "../locales/ar";

const translations = {
  en,
  ar,
};

const LanguageContext = createContext(null);

function getNestedValue(object, path) {
  return path.split(".").reduce((current, key) => {
    return current?.[key];
  }, object);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((current) => (current === "en" ? "ar" : "en"));
  };

  const t = (key) => {
    return getNestedValue(translations[language], key) ?? key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isArabic: language === "ar",
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
