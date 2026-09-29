import { useEffect, useRef, useState } from "react";
import { initDarkFlash, initHeroParallax, initMotion } from "./animations/motion";
import { Cursor, Nav, ProgressDots } from "./components/chrome";
import { SLIDES } from "./data/slides";
import { useActiveSlide, useReducedMotion, useSlideKeys } from "./hooks/useSlideNavigation";
import {
  SlideBenefits,
  SlideCover,
  SlideData,
  SlideEcosystem,
  SlideEnding,
  SlideFeatures,
  SlideIntro,
  SlideLife,
  SlideOpening,
  SlidePurpose,
  SlideRisks,
  SlideSafety,
  SlideTimeline,
} from "./sections/slides";

function useViewport(): { w: number; h: number } {
  const [vp, setVp] = useState({ w: window.innerWidth, h: window.innerHeight });
  useEffect(() => {
    const onResize = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return vp;
}

function breakpoint(w: number): string {
  if (w < 768) return "MOBILE";
  if (w < 1280) return "TABLET";
  return "DESKTOP";
}

export default function App() {
  const deckRef = useRef<HTMLDivElement>(null);
  const active = useActiveSlide("deck");
  const reduced = useReducedMotion();
  const vp = useViewport();
  useSlideKeys("deck", active);

  useEffect(() => {
    const cleanups = [initMotion(deckRef.current), initHeroParallax(deckRef.current), initDarkFlash(deckRef.current)];
    return () => cleanups.forEach((fn) => fn());
  }, []);

  useEffect(() => {
    const onError = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (t && t.tagName === "IMG") {
        console.warn("[ASSET MISSING]", (t as HTMLImageElement).src);
      }
    };
    window.addEventListener("error", onError, true);
    return () => window.removeEventListener("error", onError, true);
  }, []);

  const debug = new URLSearchParams(window.location.search).get("debug") === "1";
  const missingAssets =
    typeof document !== "undefined"
      ? document.querySelectorAll("[data-asset-placeholder]").length
      : 0;

  return (
    <main>
      <Cursor />
      <Nav active={active} />
      <ProgressDots active={active} />
      <div id="theme-flash" aria-hidden="true" className="pointer-events-none fixed inset-0 z-40 bg-[#07111F] opacity-0" />
      {debug && (
        <p className="fixed bottom-4 left-4 z-50 rounded bg-black px-3 py-1 font-mono text-xs text-white">
          VIEW: {vp.w}×{vp.h} · MODE: {breakpoint(vp.w)}
          {vp.h < 800 ? "+COMPACT" : ""} · SLIDE: {active + 1}/{SLIDES.length} ·
          THEME: {SLIDES[active]?.theme} · REDUCED: {reduced ? "ON" : "OFF"} ·
          MISSING: {missingAssets}
        </p>
      )}
      <div id="deck" ref={deckRef} className={`deck${debug ? " deck-debug" : ""}`}>
        <SlideOpening />
        <SlideCover />
        <SlideIntro />
        <SlideTimeline />
        <SlidePurpose />
        <SlideFeatures />
        <SlideData />
        <SlideLife />
        <SlideEcosystem />
        <SlideBenefits />
        <SlideRisks />
        <SlideSafety />
        <SlideEnding />
      </div>
    </main>
  );
}
