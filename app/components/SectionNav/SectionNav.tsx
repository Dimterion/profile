import { useState, useEffect } from "react";
import { ArrowUpIcon, ArrowDownIcon } from "~/components/icons";

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

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    });

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function goToPrevious(event: React.MouseEvent<HTMLButtonElement>) {
    event.currentTarget.blur();
    const currentIndex = sections.findIndex((s) => s.id === activeId);
    if (currentIndex > 0) {
      const targetId = sections[currentIndex - 1].id;
      requestAnimationFrame(() => scrollToSection(targetId));
    }
  }

  function goToNext(event: React.MouseEvent<HTMLButtonElement>) {
    event.currentTarget.blur();
    const currentIndex = sections.findIndex((s) => s.id === activeId);
    if (currentIndex < sections.length - 1 && currentIndex !== -1) {
      const targetId = sections[currentIndex + 1].id;
      requestAnimationFrame(() => scrollToSection(targetId));
    }
  }

  const currentIndex = sections.findIndex((s) => s.id === activeId);
  const isFirst = currentIndex <= 0;
  const isLast = currentIndex === sections.length - 1;

  return (
    <nav
      aria-label="Section navigation"
      className="fixed top-1/2 left-2 z-40 -translate-y-1/2"
    >
      <div className="flex flex-col gap-4">
        <button
          type="button"
          aria-label="Scroll to previous section"
          onClick={goToPrevious}
          disabled={isFirst}
          className={`cursor-pointer transition-colors ${
            isFirst
              ? "text-grey cursor-not-allowed"
              : "hover:text-gold text-white"
          }`}
        >
          <ArrowUpIcon className="h-5 w-5 md:h-10 md:w-10" />
        </button>
        <button
          type="button"
          aria-label="Scroll to next section"
          onClick={goToNext}
          disabled={isLast}
          className={`cursor-pointer transition-colors ${
            isLast
              ? "text-grey cursor-not-allowed"
              : "hover:text-gold text-white"
          }`}
        >
          <ArrowDownIcon className="h-5 w-5 md:h-10 md:w-10" />
        </button>
      </div>
    </nav>
  );
}
