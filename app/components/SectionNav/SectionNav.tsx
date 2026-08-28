import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "work", label: "Work" },
  { id: "blog", label: "Blog" },
  { id: "about", label: "About" },
];

export default function SectionNav() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
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
    if (currentIndex < sections.length - 1 && currentIndex !== -1) {
      scrollToSection(sections[currentIndex + 1].id);
    }
  }

  const currentIndex = sections.findIndex((s) => s.id === activeId);
  const isFirst = currentIndex <= 0;
  const isLast = currentIndex === sections.length - 1;

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
          disabled={isFirst}
          className={`cursor-pointer transition-colors ${
            isFirst
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
          disabled={isLast}
          className={`cursor-pointer transition-colors ${
            isLast
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
