import { useEffect, useRef } from "react";

export default function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const maxOffset = window.innerHeight * 0.4;
    let ticking = false;

    function updatePosition() {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;
      const offset = progress * maxOffset * 2 - maxOffset;

      if (ref.current) {
        ref.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      }

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updatePosition);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    updatePosition();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div ref={ref} className="home-gradient-bg" aria-hidden="true" />;
}
