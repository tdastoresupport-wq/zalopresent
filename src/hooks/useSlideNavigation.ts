import { useCallback, useEffect, useState } from "react";
import { SLIDES } from "../data/slides";

export function useActiveSlide(rootId: string): number {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const root = document.getElementById(rootId);
    if (!root) return;
    const sections = SLIDES.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = sections.findIndex((s) => s === e.target);
            if (i >= 0) setActive(i);
          }
        }
      },
      { root, threshold: 0.55 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [rootId]);
  return active;
}

export function useSlideKeys(_rootId: string, active: number): void {
  const go = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(SLIDES.length - 1, index));
      document
        .getElementById(SLIDES[clamped].id)
        ?.scrollIntoView({ behavior: "smooth" });
    },
    [],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && ["INPUT", "TEXTAREA", "BUTTON"].includes(t.tagName)) return;
      if (["ArrowDown", "ArrowRight", " ", "PageDown"].includes(e.key)) {
        e.preventDefault();
        go(active + 1);
      } else if (["ArrowUp", "ArrowLeft", "PageUp"].includes(e.key)) {
        e.preventDefault();
        go(active - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        go(0);
      } else if (e.key === "End") {
        e.preventDefault();
        go(SLIDES.length - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, go]);
}

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}
