import {
  Bell,
  BookOpen,
  Briefcase,
  Building2,
  Check,
  FileText,
  FlaskConical,
  Heart,
  Home,
  Megaphone,
  MessageCircle,
  Phone,
  School,
  ShieldCheck,
  ShoppingBag,
  Siren,
  Smartphone,
  Store,
  TriangleAlert,
  Trophy,
  User,
  Users,
  Video,
  Lock,
} from "lucide-react";

const ICONS = {
  message: MessageCircle,
  phone: Phone,
  video: Video,
  users: Users,
  user: User,
  file: FileText,
  building: Building2,
  store: Store,
  home: Home,
  school: School,
  briefcase: Briefcase,
  heart: Heart,
  book: BookOpen,
  bell: Bell,
  alert: TriangleAlert,
  mask: Siren,
  megaphone: Megaphone,
  lock: Lock,
  flask: FlaskConical,
  trophy: Trophy,
  shop: ShoppingBag,
  check: Check,
  shield: ShieldCheck,
  smartphone: Smartphone,
} as const;

export type IconName = keyof typeof ICONS;

export function Icon({ name, size = 24, className }: { name: string; size?: number; className?: string }) {
  const Cmp = ICONS[name as IconName] ?? MessageCircle;
  return <Cmp size={size} className={className} aria-hidden="true" />;
}

/** Phone dựng bằng CSS + fragment UI recreate (ASSET LOCK: không screenshot gốc). */
export function PhoneMockup({ dark, warn }: { dark?: boolean; warn?: boolean }) {
  return (
    <div
      role="img"
      aria-label={warn ? "Điện thoại hiện tin nhắn lừa đảo minh họa" : "Điện thoại hiện màn hình chat Zalo minh họa"}
      className={`relative w-[280px] rounded-[28px] border p-2 shadow-[0_8px_24px_rgba(0,0,0,0.06)] md:w-[340px] ${
        dark ? "border-white/15 bg-[#0E1B2A]" : "border-[#E5E7EB] bg-white"
      }`}
    >
      <div className={`rounded-[20px] p-3 ${dark ? "bg-[#07111F]" : "bg-[#F7F9FC]"}`}>
        <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-current opacity-20" />
        {warn ? (
          <div className="space-y-2 text-left text-[13px]">
            <p className="rounded-xl bg-white p-2 text-[#111827]">Bạn trúng quà, bấm link để nhận…</p>
            <p className="flex items-center gap-1 rounded-xl bg-[#F59E0B]/15 p-2 font-semibold text-[#F59E0B]">
              <TriangleAlert size={14} /> Cảnh báo link lạ
            </p>
            <p className={`ml-8 rounded-xl p-2 ${dark ? "bg-[#0068FF] text-white" : "bg-[#0068FF] text-white"}`}>
              Minh họa, không phải tài khoản thật
            </p>
          </div>
        ) : (
          <div className="space-y-2 text-left text-[13px]">
            <p className={`w-fit rounded-xl p-2 ${dark ? "bg-white/10 text-white" : "bg-white text-[#111827] shadow-sm"}`}>
              Xin chào
            </p>
            <p className="w-fit rounded-xl bg-[#0068FF] p-2 text-white">Bạn đến chưa?</p>
            <p className={`w-fit rounded-xl p-2 ${dark ? "bg-white/10 text-white" : "bg-white text-[#111827] shadow-sm"}`}>
              File đây nhé
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function NetworkBg() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.1]"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 800 600"
    >
      {[
        [100, 120, 300, 200], [300, 200, 500, 140], [500, 140, 650, 260],
        [100, 120, 220, 320], [220, 320, 420, 380], [420, 380, 650, 260],
        [300, 200, 420, 380], [220, 320, 300, 480], [420, 380, 560, 500],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0068FF" strokeWidth="1.5" />
      ))}
      {[[100, 120], [300, 200], [500, 140], [650, 260], [220, 320], [420, 380], [300, 480], [560, 500]].map(
        ([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="16" fill="#0068FF" opacity="0.25" />
            <circle cx={cx} cy={cy} r="7" fill="#0068FF" opacity="0.6" />
          </g>
        ),
      )}
    </svg>
  );
}

export function Shield() {
  return (
    <div className="relative grid place-items-center" role="img" aria-label="Khiên bảo mật">
      <span className="absolute h-56 w-56 animate-ping rounded-full bg-[#0068FF]/10 md:h-64 md:w-64" />
      <span className="absolute h-56 w-56 rounded-full border border-[#0068FF]/30 md:h-64 md:w-64" />
      <ShieldCheck size={120} className="relative text-[#0068FF]" strokeWidth={1.5} />
    </div>
  );
}

/** Placeholder đúng kích thước cho ảnh human chưa chốt license (Phase 3: REPLACE). */
export function PhotoPlaceholder({ asset, label }: { asset: string; label: string }) {
  return (
    <div
      data-asset-placeholder={asset}
      className="grid aspect-video w-full place-items-center rounded-[20px] border border-dashed border-[#0068FF]/40 bg-[#0068FF]/5 p-4 text-center"
    >
      <p className="text-sm font-semibold text-[#0068FF]">
        ASSET REQUIRED: {asset}.webp
        <span className="mt-1 block text-xs font-normal text-[#667085]">{label} · 16:9 · Pexels</span>
      </p>
    </div>
  );
}
