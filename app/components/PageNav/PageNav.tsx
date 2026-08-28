import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "blog", label: "Blog" },
  { id: "about", label: "About" },
];

export default function PageNav() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <nav
      aria-label="Page sections"
      className="fixed top-1/2 right-4 z-40 -translate-y-1/2"
    >
      <div className="flex flex-col gap-1">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            aria-label={`Scroll to ${section.label}`}
            aria-current={activeId === section.id ? "true" : undefined}
            onClick={() => scrollToSection(section.id)}
            className={`h-5 w-2 cursor-pointer transition-colors ${
              activeId === section.id ? "bg-gold" : "hover:bg-gold bg-white"
            }`}
          />
        ))}
      </div>
    </nav>
  );
}
