import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Motion tập trung: reveal + line draw + counter. Cleanup khi unmount. */
export function initMotion(deck: HTMLElement | null): () => void {
  if (!deck) return () => undefined;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => undefined;
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 24,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: { trigger: el, scroller: deck, start: "top 88%" },
      });
    });

    const line = deck.querySelector("[data-timeline-line]");
    if (line) {
      gsap.from(line, {
        scaleX: 0,
        duration: 1.6,
        ease: "power3.out",
        scrollTrigger: { trigger: line, scroller: deck, start: "top 82%" },
      });
    }

    gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
      const target = Number.parseFloat(el.dataset.counter ?? "0");
      const format = el.dataset.format ?? "vi-1";
      const state = { v: 0 };
      ScrollTrigger.create({
        trigger: el,
        scroller: deck,
        start: "top 88%",
        once: true,
        onEnter: () =>
          gsap.to(state, {
            v: target,
            duration: 1.8,
            ease: "power3.out",
            onUpdate: () => {
              el.textContent =
                format === "int"
                  ? String(Math.round(state.v))
                  : state.v.toFixed(1).replace(".", ",");
            },
          }),
      });
    });
  }, deck);

  return () => {
    ctx.revert();
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}
