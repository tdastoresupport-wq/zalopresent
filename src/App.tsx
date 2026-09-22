import { useEffect, useRef } from "react";
import { initMotion } from "./animations/motion";
import { Nav, ProgressDots } from "./components/chrome";
import { useActiveSlide, useSlideKeys } from "./hooks/useSlideNavigation";
import {
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
  Slide09,
  Slide10,
} from "./sections/slides";

export default function App() {
  const deckRef = useRef<HTMLDivElement>(null);
  const active = useActiveSlide("deck");
  useSlideKeys("deck", active);

  useEffect(() => {
    const cleanup = initMotion(deckRef.current);
    return cleanup;
  }, []);

  const debug = new URLSearchParams(window.location.search).get("debug") === "1";

  return (
    <main>
      <Nav active={active} />
      <ProgressDots active={active} />
      {debug && (
        <p className="fixed bottom-4 left-4 z-50 rounded bg-black px-3 py-1 font-mono text-xs text-white">
          slide {active + 1}/10
        </p>
      )}
      <div id="deck" ref={deckRef} className="deck">
        <Slide01 />
        <Slide02 />
        <Slide03 />
        <Slide04 />
        <Slide05 />
        <Slide06 />
        <Slide07 />
        <Slide08 />
        <Slide09 />
        <Slide10 />
      </div>
    </main>
  );
}
