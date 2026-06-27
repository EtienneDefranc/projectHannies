"use client";

/**
 * useReveal — Hook para animaciones de entrada con IntersectionObserver.
 * Añade la clase "visible" a los elementos con clase "reveal"
 * cuando entran en el viewport.
 */

import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Una vez visible, dejamos de observar (one-shot animation)
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Observar todos los elementos con clase "reveal"
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
