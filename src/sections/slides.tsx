import { Sparkles } from "lucide-react";
import {
  ASSIGNMENTS,
  BENEFITS,
  CHECKLIST,
  ECOSYSTEM,
  FEATURES,
  LIFE_SCENES,
  PURPOSES,
  RISKS,
  SLIDES,
  TIMELINE,
} from "../data/slides";
import { SourceNote } from "../components/chrome";
import { Icon, NetworkBg, PhoneMockup, Shield } from "../components/ui";

function Shell({
  id,
  theme,
  source,
  dark,
  children,
  label,
}: {
  id: string;
  theme: string;
  source?: string;
  dark?: boolean;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <section
      id={id}
      data-theme={theme}
      aria-label={label}
      className={`slide ${theme === "light" ? "bg-[#F7F9FC]" : theme === "dark" ? "bg-[#07111F]" : "bg-[#0E1B2A]"}`}
    >
      <div className="wrap">{children}</div>
      <SourceNote text={source} dark={dark} />
    </section>
  );
}

/** 01 — OPENING: Bài thuyết trình của Tổ 6 */
export function SlideOpening() {
  const m = SLIDES[0];
  return (
    <Shell id={m.id} theme={m.theme} label="Mở đầu">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {["Xin chào", "Ổn nhé", "Gửi file", "OK"].map((t, i) => (
          <span
            key={t}
            className="absolute rounded-2xl border border-[#0068FF]/10 bg-white/60 px-4 py-2 text-sm text-[#0068FF]/30"
            style={{
              left: `${8 + i * 24}%`,
              top: `${12 + ((i * 29) % 70)}%`,
              transform: `rotate(${-6 + i * 4}deg)`,
            }}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="relative mx-auto max-w-4xl text-center">
        <p data-reveal className="text-xl font-extrabold tabular-nums text-[#0068FF] md:text-2xl">
          TỔ 6
        </p>
        <h1
          data-reveal
          className="mt-6 text-[clamp(42px,6vw,96px)] font-extrabold leading-[1.05] tracking-tight"
        >
          BÀI THUYẾT TRÌNH
        </h1>
        <p data-reveal className="mt-4 text-[clamp(20px,2.4vw,32px)] font-bold tracking-[0.35em] text-[#667085]">
          TIN HỌC
        </p>
        <p data-reveal className="mt-10 text-[clamp(64px,7vw,120px)] font-extrabold leading-none tracking-tight text-[#0068FF]">
          ZALO
        </p>
        <p data-reveal className="mt-6 text-lg text-[#667085]">
          WEB SLIDE · Designed by Đức Anh · 2026
        </p>
        <div data-reveal aria-hidden="true" className="mx-auto mt-10 h-1 w-40 origin-left overflow-hidden rounded-full bg-[#0068FF]/15">
          <div className="h-full w-full origin-left animate-[linegrow_1.2s_ease-out_both] bg-[#0068FF]" />
        </div>
      </div>
      <style>{`@keyframes linegrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }`}</style>
    </Shell>
  );
}

/** 02 — ZALO hero */
export function SlideCover() {
  const m = SLIDES[1];
  return (
    <Shell id={m.id} theme={m.theme} source={m.source} label="Cover">
      <img
        src="/home-banner.20ff632e.webp"
        alt=""
        aria-hidden="true"
        data-depth="-8"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F9FC]/60 via-transparent to-[#F7F9FC]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl text-center">
        <h2 data-reveal className="text-[clamp(64px,7vw,120px)] font-extrabold leading-none tracking-tight">
          ZALO
        </h2>
        <p data-reveal className="mt-4 text-[clamp(16px,1.6vw,24px)] text-[#667085]">
          Nhắn tin, gọi điện và hơn thế nữa
        </p>
        <p data-reveal className="mx-auto mt-4 max-w-2xl text-base text-[#667085] md:text-lg">
          Zalo bắt đầu là ứng dụng liên lạc trên điện thoại và dần mở rộng thành một nền tảng
          được dùng trong giao tiếp, học tập, công việc và dịch vụ số.
        </p>
        <div className="mt-8 flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-12">
          <p data-reveal className="text-2xl font-extrabold tabular-nums text-[#0068FF] md:order-1">
            2012
          </p>
          <div data-reveal className="md:order-2">
            <div data-depth="5">
              <div className="animate-[floaty_6s_ease-in-out_infinite]">
                <PhoneMockup rich />
              </div>
            </div>
          </div>
          <p data-reveal className="text-2xl font-extrabold tabular-nums text-[#0068FF] md:order-3">
            2026
          </p>
        </div>
      </div>
      <style>{`@keyframes floaty { 0%,100% { transform: translateY(-8px);} 50% { transform: translateY(8px);} }`}</style>
    </Shell>
  );
}

/** 03 — ZALO LÀ GÌ? */
export function SlideIntro() {
  const m = SLIDES[2];
  return (
    <Shell id={m.id} theme={m.theme} source={m.source} label="Zalo là gì">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-[#0068FF]">03 · Định nghĩa</p>
          <h2 data-reveal className="mt-2 text-[clamp(42px,4vw,72px)] font-extrabold tracking-tight">
            Zalo là gì?
          </h2>
          <p data-reveal className="mt-4 max-w-xl text-[clamp(16px,1.2vw,20px)] text-[#667085]">
            Zalo là nền tảng liên lạc do VNG phát triển tại Việt Nam.
          </p>
          <p data-reveal className="mt-3 max-w-xl text-[clamp(16px,1.2vw,20px)] text-[#667085]">
            Ứng dụng bắt đầu từ nhu cầu nhắn tin, gọi điện trên điện thoại và sau đó
            mở rộng thêm nhiều tính năng phục vụ nhóm, công việc, doanh nghiệp và dịch vụ số.
          </p>
          <div data-reveal className="mt-6 flex flex-wrap gap-3">
            {["LIÊN LẠC", "NHÓM", "DOANH NGHIỆP", "DỊCH VỤ"].map((k) => (
              <span key={k} className="rounded-full bg-[#0068FF]/10 px-5 py-2 font-bold tracking-wide text-[#0068FF]">
                {k}
              </span>
            ))}
          </div>
        </div>
        <div data-reveal className="flex justify-center">
          <PhoneMockup />
        </div>
      </div>
    </Shell>
  );
}

/** 04 — LỊCH SỬ */
export function SlideTimeline() {
  const m = SLIDES[3];
  return (
    <Shell id={m.id} theme={m.theme} source={m.source} label="Zalo ra đời">
      <p className="text-sm font-bold uppercase tracking-widest text-[#0068FF]">04 · Lịch sử</p>
      <h2 data-reveal className="mt-2 text-[clamp(42px,4vw,72px)] font-extrabold tracking-tight">
        Từ thử nghiệm đến số 1
      </h2>
      <p className="mt-3 max-w-2xl text-lg text-[#667085]">VNG phát triển, làm cho người Việt dùng di động.</p>
      <div className="relative mt-12">
        <div data-timeline-line className="absolute left-0 right-0 top-7 hidden h-0.5 origin-left bg-[#0068FF] md:block" />
        <div className="absolute bottom-0 left-7 top-0 w-0.5 bg-[#0068FF] md:hidden" />
        <ol className="grid gap-8 md:grid-cols-3">
          {TIMELINE.map((t) => (
            <li key={t.date} data-reveal className="relative pl-16 md:pl-0 md:pt-16 md:text-left">
              <span className="absolute left-4 top-4 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full border border-[#E5E7EB] bg-white text-[#0068FF] md:left-0 md:top-0 md:translate-x-0">
                <Icon name={t.icon} size={26} />
              </span>
              <p className="text-4xl font-extrabold tabular-nums">{t.date}</p>
              <p className="mt-2 text-lg font-bold">{t.title}</p>
              <p className="mt-1 text-lg text-[#667085]">{t.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </Shell>
  );
}

/** 05 — MỤC ĐÍCH */
export function SlidePurpose() {
  const m = SLIDES[4];
  return (
    <Shell id={m.id} theme={m.theme} source={m.source} label="Zalo dùng để làm gì">
      <p className="text-sm font-bold uppercase tracking-widest text-[#0068FF]">05 · Mục đích</p>
      <h2 data-reveal className="mt-2 text-[clamp(42px,4vw,72px)] font-extrabold tracking-tight">
        Zalo dùng để làm gì?
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {PURPOSES.map((p) => (
          <article key={p.no} data-reveal className="card p-6 md:p-8">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0068FF]/10 text-[#0068FF]">
                <Icon name={p.icon} size={26} />
              </span>
              <div>
                <p className="text-xs font-bold tabular-nums text-[#667085]">{p.no}</p>
                <h3 className="text-2xl font-bold">{p.title}</h3>
              </div>
            </div>
            <p className="mt-3 text-lg text-[#667085]">{p.desc}</p>
          </article>
        ))}
      </div>
      <figure data-reveal data-motion="clip" className="mx-auto mt-8 max-w-2xl">
        <img
          src="/tinh-nang-hay-tren-zalo-18_1280x720-800-resize.jpg"
          alt="Ảnh tham khảo giao diện hộp thư Zalo"
          loading="lazy"
          className="aspect-video w-full rounded-[20px] border border-[#E5E7EB] object-cover"
        />
        <figcaption className="mt-2 text-center text-sm text-[#667085]">
          Ảnh tham khảo giao diện — nguồn: Thế Giới Di Động. Bản public nên tự chụp từ ứng dụng.
        </figcaption>
      </figure>
    </Shell>
  );
}

/** 06 — ĐẶC ĐIỂM NỔI BẬT */
export function SlideFeatures() {
  const m = SLIDES[5];
  return (
    <Shell id={m.id} theme={m.theme} source={m.source} label="Đặc điểm nổi bật">
      <p className="text-sm font-bold uppercase tracking-widest text-[#0068FF]">06 · Tính năng</p>
      <h2 data-reveal className="mt-2 text-[clamp(42px,4vw,72px)] font-extrabold tracking-tight">
        Sáu thứ đáng nhớ
      </h2>
      <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3">
        {FEATURES.map((f) => (
          <article key={f.title} data-reveal className="card p-6 text-center md:p-8">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#0068FF]/10 text-[#0068FF]">
              <Icon name={f.icon} size={30} />
            </span>
            <h3 className="mt-4 text-xl font-extrabold tracking-wide">{f.title}</h3>
            <p className="mt-1 text-[#667085]">{f.desc}</p>
          </article>
        ))}
      </div>
      <p data-reveal className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full bg-[#0068FF]/10 px-5 py-2 text-[#0068FF]">
        <Sparkles size={18} /> 38% người dùng/tháng dùng tính năng AI · H1/2026
      </p>
    </Shell>
  );
}

/** 07 — VÌ SAO PHỔ BIẾN (DATA HERO) */
export function SlideData() {
  const m = SLIDES[6];
  return (
    <Shell id={m.id} theme={m.theme} source={m.source} label="Vì sao phổ biến">
      <NetworkBg />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-[#0068FF]">07 · Số liệu</p>
        <p data-reveal className="mt-4 font-extrabold leading-none tracking-tight tabular-nums text-[clamp(72px,10vw,160px)]">
          <span data-counter="81.3" data-format="vi-1">81,3</span>M
        </p>
        <p data-reveal className="mt-2 text-xl font-semibold">Người dùng hoạt động hàng tháng · H1/2026</p>
        <p data-reveal className="mx-auto mt-4 max-w-2xl text-lg text-[#667085]">
          Quy mô người dùng và tần suất nhắn tin cho thấy Zalo đã trở thành một công cụ
          liên lạc quen thuộc với người dùng tại Việt Nam.
        </p>
        <div data-reveal aria-hidden="true" className="mt-6 flex items-center justify-center">
          {["An", "Bình", "Chi", "Dũng", "Hà"].map((n, i) => (
            <span
              key={n}
              title={n}
              className={`grid h-11 w-11 place-items-center rounded-full border-2 border-white text-sm font-bold text-white shadow ${
                i === 0 ? "bg-[#0068FF]" : i === 1 ? "bg-[#00B2FF]" : i === 2 ? "bg-[#7C3AED]" : i === 3 ? "bg-[#059669]" : "bg-[#F59E0B]"
              } ${i > 0 ? "-ml-3" : ""}`}
            >
              {n[0]}
            </span>
          ))}
          <span className="-ml-3 grid h-11 min-w-11 place-items-center rounded-full border-2 border-white bg-[#111827] px-2 text-xs font-bold text-white shadow">
            81M+
          </span>
        </div>
        <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
          <div data-reveal className="card p-6">
            <p className="text-5xl font-extrabold tabular-nums text-[#0068FF]">
              <span data-counter="2.2" data-format="vi-1">2,2</span> TỶ
            </p>
            <p className="mt-2 text-[#667085]">Tin nhắn được gửi mỗi ngày · H1/2026</p>
          </div>
          <div data-reveal className="card p-6">
            <p className="text-5xl font-extrabold tabular-nums text-[#0068FF]">
              <span data-counter="81" data-format="int">81</span>%
            </p>
            <p className="mt-2 text-[#667085]">Người dùng cho biết sử dụng Zalo để nhắn với bạn bè và gia đình · Decision Lab Q4/2025</p>
          </div>
        </div>
      </div>
    </Shell>
  );
}

/** 08 — ZALO TRONG ĐỜI SỐNG */
export function SlideLife() {
  const m = SLIDES[7];
  return (
    <Shell id={m.id} theme={m.theme} label="Zalo trong đời sống">
      <p className="text-sm font-bold uppercase tracking-widest text-[#0068FF]">08 · Đời sống</p>
      <h2 data-reveal className="mt-2 text-[clamp(42px,4vw,72px)] font-extrabold tracking-tight">
        Zalo xuất hiện ở đâu?
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {LIFE_SCENES.map((s) => (
          <article key={s.title} data-reveal data-motion="clip" className="relative overflow-hidden rounded-[20px] shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
            <img src={s.img} alt={s.alt} loading="lazy" className="life-img aspect-[3/4] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/85 via-[#07111F]/20 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="text-xl font-extrabold text-white">{s.title}</h3>
              <p className="mt-1 text-white/80">{s.desc}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-4 text-sm text-[#667085]/70">Ảnh: Pexels</p>
    </Shell>
  );
}

/** 09 — HỆ SINH THÁI */
export function SlideEcosystem() {
  const m = SLIDES[8];
  return (
    <Shell id={m.id} theme={m.theme} source={m.source} label="Hệ sinh thái">
      <p className="text-sm font-bold uppercase tracking-widest text-[#0068FF]">09 · Hệ sinh thái</p>
      <h2 data-reveal className="mt-2 text-[clamp(42px,4vw,72px)] font-extrabold tracking-tight">
        Không chỉ là chat
      </h2>
      <p data-reveal className="mt-3 max-w-3xl text-lg text-[#667085]">
        Zalo được sử dụng trong nhiều hoàn cảnh khác nhau, từ gia đình và lớp học
        đến doanh nghiệp và dịch vụ số.
      </p>
      <div className="mt-10 grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
        <div className="grid gap-5">
          {ECOSYSTEM.slice(0, 2).map((n) => (
            <div key={n.title} data-reveal className="card flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#0068FF]/10 text-[#0068FF]">
                <Icon name={n.icon} size={24} />
              </span>
              <div>
                <p className="text-lg font-bold">{n.title}</p>
                <p className="text-[#667085]">{n.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div data-reveal data-motion="scale" className="mx-auto grid h-48 w-48 place-items-center overflow-hidden rounded-full border-4 border-white bg-white shadow-xl md:h-56 md:w-56">
          <img src="/zalo-1-logo-png-transparent.png" alt="Logo Zalo" loading="lazy" className="h-2/3 w-2/3 object-contain" />
        </div>
        <div className="grid gap-5">
          {ECOSYSTEM.slice(2).map((n) => (
            <div key={n.title} data-reveal className="card flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#0068FF]/10 text-[#0068FF]">
                <Icon name={n.icon} size={24} />
              </span>
              <div>
                <p className="text-lg font-bold">{n.title}</p>
                <p className="text-[#667085]">{n.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div data-reveal className="mt-8 flex flex-wrap items-center justify-center gap-3 text-center">
        <span className="rounded-full bg-[#0068FF]/10 px-4 py-1 font-bold text-[#0068FF]">OA</span>
        <span className="rounded-full bg-[#0068FF]/10 px-4 py-1 font-bold text-[#0068FF]">MINI APP</span>
        <span className="text-xl">
          <span className="font-extrabold tabular-nums text-[#0068FF]">~30.000</span>{" "}
          <span className="text-[#667085]">OA đang hoạt động · 6/2026</span>
        </span>
      </div>
      <figure data-reveal data-motion="clip" className="mx-auto mt-8 max-w-4xl">
        <img
          src="/people.1648f8db.webp"
          alt="Đời sống số trong hệ sinh thái Zalo"
          loading="lazy"
          className="h-36 w-full rounded-[20px] object-cover md:h-44"
        />
        <figcaption className="mt-2 text-center text-sm text-[#667085]">Ảnh: Zalo official (zalo.me)</figcaption>
      </figure>
    </Shell>
  );
}

/** 10 — LỢI ÍCH (01 lớn + 3 nhỏ) */
export function SlideBenefits() {
  const m = SLIDES[9];
  const [first, ...rest] = BENEFITS;
  return (
    <Shell id={m.id} theme={m.theme} label="Lợi ích">
      <p className="text-sm font-bold uppercase tracking-widest text-[#0068FF]">10 · Lợi ích</p>
      <h2 data-reveal className="mt-2 text-[clamp(42px,4vw,72px)] font-extrabold tracking-tight">
        Được gì khi dùng?
      </h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <article data-reveal className="card overflow-hidden lg:col-span-3 lg:grid lg:grid-cols-[40%_1fr]">
          <img src={first.img} alt={first.alt} loading="lazy" className="aspect-video h-full w-full object-cover" />
          <div className="flex items-center gap-4 p-6 md:p-8">
            <span className="text-6xl font-extralight tabular-nums text-[#0068FF]/40">{first.no}</span>
            <div>
              <h3 className="text-3xl font-extrabold">{first.title}</h3>
              <p className="mt-2 text-lg text-[#667085]">{first.desc}</p>
            </div>
          </div>
        </article>
        {rest.map((b) => (
          <article key={b.no} data-reveal className="card overflow-hidden">
            <img src={b.img} alt={b.alt} loading="lazy" className="aspect-video w-full object-cover" />
            <div className="flex items-start gap-3 p-5">
              <span className="text-4xl font-extralight tabular-nums text-[#0068FF]/40">{b.no}</span>
              <div>
                <h3 className="text-xl font-extrabold">{b.title}</h3>
                <p className="mt-1 text-[#667085]">{b.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-4 text-sm text-[#667085]/70">Ảnh: Pexels</p>
    </Shell>
  );
}

/** 11 — MẶT TRÁI */
export function SlideRisks() {
  const m = SLIDES[10];
  return (
    <Shell id={m.id} theme={m.theme} source={m.source} dark label="Mặt trái">
      <div className="grid items-center gap-10 lg:grid-cols-[40%_60%]">
        <div>
          <h2 data-reveal className="text-6xl font-extrabold tracking-tight text-white md:text-7xl">
            NHƯNG...
          </h2>
          <p data-reveal className="mt-3 text-xl text-white/70">
            Rủi ro khi sử dụng <span className="text-sm">(nguy cơ, không phải kết luận)</span>
          </p>
          <div data-reveal className="mt-8 hidden justify-center lg:flex">
            <PhoneMockup dark warn />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RISKS.map((r) => (
            <article key={r.title} data-reveal className="card-dark overflow-hidden last:sm:col-span-2 lg:last:col-span-1">
              <img src={r.img} alt={r.alt} loading="lazy" className="aspect-video w-full object-cover" />
              <div className="p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#F59E0B]/15 text-[#F59E0B]">
                  <Icon name={r.icon} size={24} />
                </span>
                <h3 className="mt-4 text-xl font-extrabold text-white">{r.title}</h3>
                <p className="mt-1 text-white/70">{r.desc}</p>
                <p className="mt-3 text-xs text-white/40">Ảnh: Pexels</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Shell>
  );
}

/** 12 — DÙNG ZALO THÔNG MINH */
export function SlideSafety() {
  const m = SLIDES[11];
  return (
    <Shell id={m.id} theme={m.theme} source={m.source} dark label="Sử dụng thông minh">
      <div className="grid items-center gap-10 lg:grid-cols-[45%_55%]">
        <div data-reveal className="flex flex-col items-center gap-10">
          <Shield />
          <figure className="w-full max-w-sm">
            <img
              src="/pexels-towfiqu-barbhuiya-3440682-11391947.jpg"
              alt="Điện thoại hiện biểu tượng khóa bảo mật"
              loading="lazy"
              className="aspect-video w-full rounded-[20px] border border-white/10 object-cover"
            />
            <figcaption className="mt-2 text-center text-sm text-white/60">Minh họa bảo mật thiết bị — ảnh: Pexels</figcaption>
          </figure>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-[#8AB4FF]">12 · An toàn</p>
          <h2 data-reveal className="mt-2 text-[clamp(36px,3.4vw,56px)] font-extrabold tracking-tight text-white">
            Dùng Zalo thông minh
          </h2>
          <ol className="mt-8 space-y-4">
            {CHECKLIST.map((c, i) => (
              <li key={c.title} data-reveal className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#0068FF] font-bold tabular-nums text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-bold text-white">{c.title}</p>
                  <p className="text-white/70">{c.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Shell>
  );
}

/** 13 — ENDING */
export function SlideEnding() {
  const m = SLIDES[12];
  return (
    <Shell id={m.id} theme={m.theme} label="Kết thúc">
      <img
        src="/people.1648f8db.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F9FC]/70 via-transparent to-[#F7F9FC]" aria-hidden="true" />
      <div className="relative mx-auto max-w-2xl text-center">
        <img data-reveal src="/zalo-1-logo-png-transparent.png" alt="Logo Zalo" loading="lazy" className="mx-auto h-16 object-contain md:h-20" />
        <h2 data-reveal className="mt-4 text-[clamp(56px,6vw,96px)] font-extrabold leading-none tracking-tight">
          ZALO
        </h2>
        <p data-reveal className="mt-4 text-xl text-[#667085]">
          Kết nối con người. Kết nối cuộc sống.
        </p>
        <p data-reveal className="mx-auto mt-6 max-w-xl text-lg text-[#667085]">
          Zalo mang lại nhiều tiện ích trong giao tiếp, học tập và công việc. Bên cạnh đó,
          người dùng cần chú ý đến bảo mật, thông tin cá nhân và những rủi ro trên môi trường mạng.
        </p>
        <div data-reveal className="card mx-auto mt-10 max-w-2xl p-6 text-left md:p-8">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-[#0068FF]">
            Phân công công việc · Môn Tin học
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {ASSIGNMENTS.map((a) => (
              <div key={a.task} className="flex items-start gap-3 rounded-2xl bg-[#F7F9FC] p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#0068FF]/10 text-[#0068FF]">
                  <Icon name={a.icon} size={22} />
                </span>
                <div>
                  <p className="text-sm font-extrabold tracking-wide">{a.task}</p>
                  <p className="mt-0.5 font-semibold text-[#111827]">{a.names}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div data-reveal className="mt-10 space-y-1 text-sm text-[#667085]">
          <p className="font-semibold text-[#111827]">Bài thuyết trình của Tổ 6</p>
          <p>WEB SLIDE</p>
          <p>Designed by Đức Anh</p>
        </div>
      </div>
    </Shell>
  );
}
