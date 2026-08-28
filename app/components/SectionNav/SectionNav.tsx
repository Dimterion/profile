import { useState } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "work", label: "Work" },
  { id: "blog", label: "Blog" },
  { id: "about", label: "About" },
];

export default function SectionNav() {
  const [activeId, setActiveId] = useState("hero");

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }

  function goToPrevious() {
    const currentIndex = sections.findIndex((s) => s.id === activeId);
    if (currentIndex > 0) {
      scrollToSection(sections[currentIndex - 1].id);
    }
  }

  function goToNext() {
    const currentIndex = sections.findIndex((s) => s.id === activeId);
    if (currentIndex < sections.length - 1) {
      scrollToSection(sections[currentIndex + 1].id);
    }
  }

  return (
    <nav
      aria-label="Section navigation"
      className="fixed top-1/2 left-4 z-40 -translate-y-1/2"
    >
      <div className="flex flex-col gap-4">
        <button
          type="button"
          aria-label="Scroll to previous section"
          onClick={goToPrevious}
          disabled={activeId === sections[0].id}
          className={`cursor-pointer transition-colors ${
            activeId === sections[0].id
              ? "cursor-not-allowed text-gray-400"
              : "hover:text-gold text-white"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Scroll to next section"
          onClick={goToNext}
          disabled={activeId === sections[sections.length - 1].id}
          className={`cursor-pointer transition-colors ${
            activeId === sections[sections.length - 1].id
              ? "cursor-not-allowed text-gray-400"
              : "hover:text-gold text-white"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
