import { useEffect, useRef } from "react";

/**
 * useScrollReveal — attaches an IntersectionObserver to a ref.
 * When the element enters the viewport, the `data-revealed` attribute is set to "true",
 * which CSS transitions key off of.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-revealed", "true");
          observer.unobserve(el); // fire once
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px", ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
