import { Sparkles } from "lucide-react";
import {
  BENEFITS,
  CHECKLIST,
  ECOSYSTEM,
  FEATURES,
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

export function Slide01() {
  const m = SLIDES[0];
  return (
    <Shell id={m.id} theme={m.theme} source={m.source} label="Cover">
      <img
        src="/home-banner.20ff632e.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F9FC]/60 via-transparent to-[#F7F9FC]" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p data-reveal className="text-xl font-bold tabular-nums text-[#0068FF] md:text-2xl">
          2012 <span className="mx-2 text-[#667085]">→</span> 2026
        </p>
        <h1 data-reveal className="mt-4 text-[72px] font-extrabold leading-none tracking-tight md:text-[120px]">
          ZALO
        </h1>
        <p data-reveal className="mt-4 text-lg text-[#667085] md:text-2xl">
          Nhắn tin, gọi điện và hơn thế nữa
        </p>
        <p data-reveal className="mx-auto mt-4 max-w-2xl text-base text-[#667085] md:text-lg">
          Zalo bắt đầu là ứng dụng liên lạc trên điện thoại và dần mở rộng thành một nền tảng
          được dùng trong giao tiếp, học tập, công việc và dịch vụ số.
        </p>
        <div data-reveal className="mt-10 flex justify-center">
          <div className="animate-[floaty_6s_ease-in-out_infinite]">
            <PhoneMockup />
          </div>
        </div>
      </div>
      <style>{`@keyframes floaty { 0%,100% { transform: translateY(-8px);} 50% { transform: translateY(8px);} }`}</style>
    </Shell>
  );
}

export function Slide02() {
  const m = SLIDES[1];
  return (
    <Shell id={m.id} theme={m.theme} source={m.source} label="Zalo ra đời">
      <p className="text-sm font-bold uppercase tracking-widest text-[#0068FF]">02 · Lịch sử</p>
      <h2 data-reveal className="mt-2 text-5xl font-extrabold tracking-tight md:text-[64px]">
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

export function Slide03() {
  const m = SLIDES[2];
  return (
    <Shell id={m.id} theme={m.theme} source={m.source} label="Zalo dùng để làm gì">
      <p className="text-sm font-bold uppercase tracking-widest text-[#0068FF]">03 · Mục đích</p>
      <h2 data-reveal className="mt-2 text-5xl font-extrabold tracking-tight md:text-[64px]">
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
      <figure data-reveal className="mx-auto mt-8 max-w-2xl">
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

export function Slide04() {
  const m = SLIDES[3];
  return (
    <Shell id={m.id} theme={m.theme} source={m.source} label="Vì sao phổ biến">
      <NetworkBg />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-[#0068FF]">04 · Số liệu</p>
        <p data-reveal className="mt-4 text-[84px] font-extrabold leading-none tracking-tight tabular-nums md:text-[160px]">
          <span data-counter="81.3" data-format="vi-1">81,3</span>M
        </p>
        <p data-reveal className="mt-2 text-xl font-semibold">Người dùng hoạt động hàng tháng · H1/2026</p>
        <p data-reveal className="mx-auto mt-4 max-w-2xl text-lg text-[#667085]">
          Quy mô người dùng và tần suất nhắn tin cho thấy Zalo đã trở thành một công cụ
          liên lạc quen thuộc với người dùng tại Việt Nam.
        </p>
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

export function Slide05() {
  const m = SLIDES[4];
  return (
    <Shell id={m.id} theme={m.theme} source={m.source} label="Đặc điểm nổi bật">
      <p className="text-sm font-bold uppercase tracking-widest text-[#0068FF]">05 · Tính năng</p>
      <h2 data-reveal className="mt-2 text-5xl font-extrabold tracking-tight md:text-[64px]">
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

export function Slide06() {
  const m = SLIDES[5];
  return (
    <Shell id={m.id} theme={m.theme} source={m.source} label="Hệ sinh thái">
      <p className="text-sm font-bold uppercase tracking-widest text-[#0068FF]">06 · Hệ sinh thái</p>
      <h2 data-reveal className="mt-2 text-5xl font-extrabold tracking-tight md:text-[64px]">
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
        <div data-reveal className="mx-auto grid h-48 w-48 place-items-center overflow-hidden rounded-full border-4 border-white bg-white shadow-xl md:h-56 md:w-56">
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
      <p data-reveal className="mt-8 text-center text-xl">
        <span className="font-extrabold tabular-nums text-[#0068FF]">~30.000</span>{" "}
        <span className="text-[#667085]">OA đang hoạt động · 6/2026</span>
      </p>
      <figure data-reveal className="mx-auto mt-8 max-w-4xl">
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

export function Slide07() {
  const m = SLIDES[6];
  return (
    <Shell id={m.id} theme={m.theme} label="Lợi ích">
      <p className="text-sm font-bold uppercase tracking-widest text-[#0068FF]">07 · Lợi ích</p>
      <h2 data-reveal className="mt-2 text-5xl font-extrabold tracking-tight md:text-[64px]">
        Được gì khi dùng?
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {BENEFITS.map((b) => (
          <article key={b.no} data-reveal className="card overflow-hidden">
            <figure>
              <img src={b.img} alt={b.alt} loading="lazy" className="aspect-video w-full object-cover" />
            </figure>
            <div className="flex items-start gap-3 p-5">
              <span className="text-4xl font-extralight tabular-nums text-[#0068FF]/40">{b.no}</span>
              <div>
                <h3 className="text-xl font-extrabold">{b.title}</h3>
                <p className="mt-1 text-[#667085]">{b.desc}</p>
              </div>
            </div>
            <p className="px-5 pb-3 text-xs text-[#667085]/70">Ảnh: Pexels</p>
          </article>
        ))}
      </div>
    </Shell>
  );
}

export function Slide08() {
  const m = SLIDES[7];
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
            <article key={r.title} data-reveal className="card-dark p-6 last:sm:col-span-2 lg:last:col-span-1">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#F59E0B]/15 text-[#F59E0B]">
                <Icon name={r.icon} size={24} />
              </span>
              <h3 className="mt-4 text-xl font-extrabold text-white">{r.title}</h3>
              <p className="mt-1 text-white/70">{r.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </Shell>
  );
}

export function Slide09() {
  const m = SLIDES[8];
  return (
    <Shell id={m.id} theme={m.theme} source={m.source} dark label="Sử dụng thông minh">
      <div className="grid items-center gap-10 lg:grid-cols-[45%_55%]">
        <div data-reveal className="flex flex-col items-center gap-6">
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
          <p className="text-sm font-bold uppercase tracking-widest text-[#0068FF]">09 · An toàn</p>
          <h2 data-reveal className="mt-2 text-5xl font-extrabold tracking-tight text-white md:text-[56px]">
            Checklist 6 điều
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

export function Slide10() {
  const m = SLIDES[9];
  return (
    <Shell id={m.id} theme={m.theme} label="Kết thúc">
      <div className="mx-auto max-w-2xl text-center">
        <img data-reveal src="/zalo-1-logo-png-transparent.png" alt="Logo Zalo" loading="lazy" className="mx-auto h-16 object-contain md:h-20" />
        <h2 data-reveal className="mt-4 text-[64px] font-extrabold leading-none tracking-tight md:text-[96px]">
          ZALO
        </h2>
        <p data-reveal className="mt-4 text-xl text-[#667085]">
          Kết nối con người. Kết nối cuộc sống.
        </p>
        <p data-reveal className="mx-auto mt-6 max-w-xl text-lg text-[#667085]">
          Zalo đem lại nhiều tiện ích trong giao tiếp, học tập và công việc,
          nhưng hiệu quả phụ thuộc vào cách người dùng sử dụng.
        </p>
        <div data-reveal className="mt-12 space-y-1 text-sm text-[#667085]">
          <p className="font-semibold text-[#111827]">Bài thuyết trình của Tổ 6</p>
          <p>WEB SLIDE</p>
          <p>Designed by Đức Anh</p>
        </div>
      </div>
    </Shell>
  );
}
