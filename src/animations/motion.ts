import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Motion tập trung: reveal + line draw + counter. Cleanup khi unmount. */
export function initMotion(deck: HTMLElement | null): () => void {
  if (!deck) return () => undefined;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => undefined;
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
      const variant = el.dataset.motion ?? "rise";
      if (variant === "clip") {
        gsap.from(el, {
          clipPath: "inset(12% 8% 12% 8% round 20px)",
          opacity: 0,
          scale: 0.97,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: el, scroller: deck, start: "top 88%" },
        });
      } else if (variant === "scale") {
        gsap.from(el, {
          opacity: 0,
          scale: 0.85,
          duration: 0.6,
          ease: "back.out(1.4)",
          scrollTrigger: { trigger: el, scroller: deck, start: "top 88%" },
        });
      } else {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: { trigger: el, scroller: deck, start: "top 88%" },
        });
      }
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
            duration: 1.4,
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

/** Parallax hero slide 02: chỉ chuột desktop, tắt khi reduced-motion. */
export function initHeroParallax(deck: HTMLElement | null): () => void {
  if (!deck) return () => undefined;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => undefined;
  if (window.matchMedia("(pointer: coarse)").matches) return () => undefined;
  const cover = deck.querySelector<HTMLElement>("#slide-02");
  if (!cover) return () => undefined;

  let raf = 0;
  const onMove = (e: MouseEvent) => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const r = (cover as HTMLElement).getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      cover.querySelectorAll<HTMLElement>("[data-depth]").forEach((el) => {
        const d = Number.parseFloat(el.dataset.depth ?? "0");
        gsap.to(el, { x: nx * d, y: ny * d, duration: 0.6, ease: "power2.out", overwrite: "auto" });
      });
    });
  };
  cover.addEventListener("mousemove", onMove);
  return () => {
    cancelAnimationFrame(raf);
    cover.removeEventListener("mousemove", onMove);
  };
}

/** Flash signature light→dark khi vào slide 11 (pointer-events-none, không chặn nội dung). */
export function initDarkFlash(deck: HTMLElement | null): () => void {
  if (!deck) return () => undefined;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => undefined;
  gsap.registerPlugin(ScrollTrigger);
  const flash = deck.parentElement?.querySelector("#theme-flash");
  const target = deck.querySelector("#slide-11");
  if (!flash || !target) return () => undefined;
  const play = () => gsap.fromTo(flash, { opacity: 0.85 }, { opacity: 0, duration: 0.9, ease: "power2.out", overwrite: "auto" });
  const st = ScrollTrigger.create({
    trigger: target,
    scroller: deck,
    start: "top 70%",
    onEnter: play,
    onLeaveBack: play,
  });
  return () => st.kill();
}
