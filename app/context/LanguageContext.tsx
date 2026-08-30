import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type Language = "en" | "fr";

const AVAILABLE_LANGUAGES: Language[] = ["en", "fr"];

type LanguageContextValue = {
  currentLang: Language;
  setLanguage: (lang: Language) => void;
  availableLanguages: Language[];
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

function getBrowserLanguage(): Language {
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("fr")) return "fr";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null;

    if (saved && AVAILABLE_LANGUAGES.includes(saved)) {
      setCurrentLang(saved);
    } else {
      setCurrentLang(getBrowserLanguage());
    }
  }, []);

  function setLanguage(lang: Language) {
    if (AVAILABLE_LANGUAGES.includes(lang)) {
      setCurrentLang(lang);
      localStorage.setItem("language", lang);
    }
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        setLanguage,
        availableLanguages: AVAILABLE_LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
