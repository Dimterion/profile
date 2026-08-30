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
    <div className="fixed top-4 right-4 z-50" onBlur={handleBlur} tabIndex={0}>
      <button
        type="button"
        onClick={handleToggle}
        aria-label={`Switch language, currently ${currentLang.toUpperCase()}`}
        className="bg-dark-blue hover:border-gold hover:text-gold flex h-10 w-10 items-center justify-center border text-sm font-bold uppercase transition"
        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
      >
        {currentLang}
      </button>

      {isOpen && (
        <button
          type="button"
          onClick={() => handleSelect(otherLang)}
          aria-label={`Switch to ${otherLang.toUpperCase()}`}
          className="bg-dark-blue hover:border-gold hover:text-gold absolute top-14 left-0 flex h-10 w-10 items-center justify-center border text-sm font-bold uppercase transition"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        >
          {otherLang}
        </button>
      )}
    </div>
  );
}
