import { useState, useEffect } from "react";

type Language = "en" | "fr";

const AVAILABLE_LANGUAGES: Language[] = ["en", "fr"];

function getBrowserLanguage(): Language {
  const browserLang = navigator.language.toLowerCase();

  if (browserLang.startsWith("fr")) {
    return "fr";
  }

  return "en";
}

export function useLanguage() {
  const [currentLang, setCurrentLang] = useState<Language>("en");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null;

    if (saved && AVAILABLE_LANGUAGES.includes(saved)) {
      setCurrentLang(saved);
    } else {
      const browserLang = getBrowserLanguage();
      setCurrentLang(browserLang);
    }

    setIsInitialized(true);
  }, []);

  function setLanguage(lang: Language) {
    if (AVAILABLE_LANGUAGES.includes(lang)) {
      setCurrentLang(lang);
      localStorage.setItem("language", lang);
    }
  }

  return {
    currentLang: isInitialized ? currentLang : "en",
    setLanguage,
    availableLanguages: AVAILABLE_LANGUAGES,
  };
}
