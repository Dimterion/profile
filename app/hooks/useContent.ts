import { en } from "~/data/content/en";
import { fr } from "~/data/content/fr";
import { useLanguage } from "~/context/LanguageContext";

export function useContent() {
  const { currentLang } = useLanguage();
  const content = currentLang === "fr" ? fr : en;
  return { t: content, currentLang };
}
