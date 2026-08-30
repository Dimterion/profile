import { useState } from "react";
import { useLanguage } from "~/context/LanguageContext";

type Language = "en" | "fr";

export default function LanguageToggle() {
  const { currentLang, setLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const otherLang = availableLanguages.find(
    (lang) => lang !== currentLang,
  ) as Language;

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  function handleSelect(lang: Language) {
    setLanguage(lang);
    setIsOpen(false);
  }

  function handleBlur() {
    setTimeout(() => setIsOpen(false), 150);
  }

  return (
    <div
      className="fixed top-0 right-0 z-50 mt-1 mr-2.5 md:top-1"
      onBlur={handleBlur}
      tabIndex={0}
    >
      <ul>
        <li>
          <button
            type="button"
            onClick={handleToggle}
            aria-label={`Switch language, currently ${currentLang.toUpperCase()}`}
            className="bg-blue hover:border-gold hover:text-gold inline-flex h-5 w-5 rotate-45 cursor-pointer items-center justify-center border text-[10px] font-bold uppercase transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 md:h-7 md:w-7 md:text-xs"
          >
            <span className="-rotate-45">{currentLang}</span>
          </button>
        </li>

        {isOpen && (
          <li className="mt-1 md:mt-3">
            <button
              type="button"
              onClick={() => handleSelect(otherLang)}
              aria-label={`Switch to ${otherLang.toUpperCase()}`}
              className="bg-blue hover:border-gold hover:text-gold inline-flex h-5 w-5 rotate-45 cursor-pointer items-center justify-center border text-[10px] font-bold uppercase transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 md:h-7 md:w-7 md:text-xs"
            >
              <span className="-rotate-45">{otherLang}</span>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
