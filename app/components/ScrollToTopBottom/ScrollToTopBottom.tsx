import { useEffect, useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "~/components/icons";

export default function ScrollToTopBottom({ gap }: { gap: string }) {
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    function updatePosition() {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setAtTop(scrollY <= 1);

      setAtBottom(scrollY + viewportHeight >= docHeight - 1);
    }

    updatePosition();

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          updatePosition();
          ticking = false;
        });
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function scrollToBottom() {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    window.scrollTo({
      top: maxScroll,
      behavior: "smooth",
    });
  }

  return (
    <nav
      aria-label="Scroll to top and bottom"
      className="fixed top-1/2 right-2.5 z-40 -translate-y-1/2"
    >
      <div className="flex flex-col items-center gap-4">
        <button
          type="button"
          aria-label="Scroll to top"
          onClick={scrollToTop}
          disabled={atTop}
          className={`cursor-pointer transition-colors ${
            atTop
              ? "text-grey cursor-not-allowed"
              : "hover:text-gold text-white"
          }`}
        >
          <ChevronUpIcon className="h-5 w-5" />
        </button>

        <div className={gap} />

        <button
          type="button"
          aria-label="Scroll to bottom"
          onClick={scrollToBottom}
          disabled={atBottom}
          className={`cursor-pointer transition-colors ${
            atBottom
              ? "text-grey cursor-not-allowed"
              : "hover:text-gold text-white"
          }`}
        >
          <ChevronDownIcon className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
}
