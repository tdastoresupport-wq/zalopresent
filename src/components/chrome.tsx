import { Maximize, Minimize } from "lucide-react";
import { useEffect, useState } from "react";
import { SLIDES } from "../data/slides";

export function Nav({ active }: { active: number }) {
  const dark = SLIDES[active]?.theme !== "light";
  const [isFs, setIsFs] = useState(false);

  useEffect(() => {
    const onChange = () => setIsFs(document.fullscreenElement !== null);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggleFs = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
    } else {
      document.documentElement.requestFullscreen?.().catch(() => {});
    }
  };
  return (
    <header
      className={`chrome pointer-events-none fixed inset-x-0 top-0 z-50 transition-colors ${
        dark ? "text-white" : "text-[#111827]"
      }`}
    >
      <nav
        aria-label="Trình bày"
        className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-5 md:px-12"
      >
        <span className="text-lg font-extrabold tracking-tight">ZALO</span>
        <div className="pointer-events-auto flex items-center gap-4">
          <span className="text-sm font-semibold tabular-nums opacity-70" aria-live="polite">
            {SLIDES[active]?.no ?? "01 / 10"}
          </span>
          <button
            type="button"
            aria-label={isFs ? "Thoát toàn màn hình" : "Toàn màn hình"}
            onClick={toggleFs}
            className={`rounded-full border p-2 transition-transform hover:scale-105 ${
              dark ? "border-white/20" : "border-[#E5E7EB]"
            }`}
          >
            {isFs ? <Minimize size={16} /> : <Maximize size={16} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export function ProgressDots({ active }: { active: number }) {
  const dark = SLIDES[active]?.theme !== "light";
  return (
    <nav
      aria-label="Các slide"
      className="chrome fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2 md:flex"
    >
      {SLIDES.map((s, i) => (
        <button
          key={s.id}
          type="button"
          aria-label={`Đến ${s.id}`}
          aria-current={i === active}
          onClick={() =>
            document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })
          }
          className={`h-2 rounded-full transition-all ${
            i === active
              ? "w-6 bg-[#0068FF]"
              : dark
                ? "w-2 bg-white/30 hover:bg-white/60"
                : "w-2 bg-[#111827]/20 hover:bg-[#111827]/40"
          }`}
        />
      ))}
    </nav>
  );
}

export function SourceNote({ text, dark }: { text?: string; dark?: boolean }) {
  if (!text) return null;
  return (
    <p
      className={`absolute bottom-5 right-5 text-[12px] md:bottom-6 md:right-12 md:text-[13px] ${
        dark ? "text-white/60" : "text-[#667085]/70"
      }`}
    >
      {text}
    </p>
  );
}
