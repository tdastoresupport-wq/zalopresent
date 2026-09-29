export type Theme = "light" | "dark" | "security";

export interface SlideMeta {
  id: string;
  no: string;
  theme: Theme;
  source?: string;
}

export const SLIDES: SlideMeta[] = [
  { id: "slide-01", no: "01 / 13", theme: "light" },
  { id: "slide-02", no: "02 / 13", theme: "light", source: "Nguồn: VNG · H1/2026" },
  { id: "slide-03", no: "03 / 13", theme: "light", source: "Nguồn: VNG" },
  { id: "slide-04", no: "04 / 13", theme: "light", source: "Nguồn: VNG" },
  { id: "slide-05", no: "05 / 13", theme: "light", source: "Nguồn: Zalo Help · oa.zalo.me" },
  { id: "slide-06", no: "06 / 13", theme: "light", source: "Nguồn: VNG H1/2026" },
  { id: "slide-07", no: "07 / 13", theme: "light", source: "Nguồn: VNG H1/2026 · Decision Lab Q4/2025" },
  { id: "slide-08", no: "08 / 13", theme: "light" },
  { id: "slide-09", no: "09 / 13", theme: "light", source: "Nguồn: VNG 6/2026" },
  { id: "slide-10", no: "10 / 13", theme: "light" },
  { id: "slide-11", no: "11 / 13", theme: "dark", source: "Nguồn: Công an Lâm Đồng 5/2026 · Zalo Safety" },
  { id: "slide-12", no: "12 / 13", theme: "security", source: "Nguồn: Zalo Safety · Công an" },
  { id: "slide-13", no: "13 / 13", theme: "light" },
];

export const TIMELINE = [
  { date: "08/2012", title: "THỬ NGHIỆM", desc: "Zalo xuất hiện dưới dạng phiên bản thử nghiệm đầu tiên.", icon: "flask" },
  { date: "12/2012", title: "RA MẮT CHÍNH THỨC", desc: "Phiên bản chính thức được phát hành theo hướng mobile-first.", icon: "phone" },
  { date: "08/01/2013", title: "TOP 1 APP STORE VIỆT NAM", desc: "Zalo vươn lên vị trí dẫn đầu tại App Store Việt Nam.", icon: "trophy" },
] as const;

export const PURPOSES = [
  { no: "01", title: "CÁ NHÂN", desc: "Nhắn tin, gọi thoại, video và chia sẻ nội dung.", icon: "user" },
  { no: "02", title: "NHÓM", desc: "Trao đổi với gia đình, bạn bè, lớp học hoặc đồng nghiệp.", icon: "users" },
  { no: "03", title: "HỌC TẬP / CÔNG VIỆC", desc: "Gửi tài liệu, hình ảnh và trao đổi trong nhóm.", icon: "briefcase" },
  { no: "04", title: "DỊCH VỤ", desc: "Official Account và Mini App mở rộng khả năng tương tác với doanh nghiệp và dịch vụ.", icon: "store" },
] as const;

export const FEATURES = [
  { title: "CHAT", desc: "Nhắn tin trực tiếp hoặc theo nhóm.", icon: "message" },
  { title: "CALL", desc: "Gọi thoại trực tiếp qua Internet.", icon: "phone" },
  { title: "VIDEO", desc: "Gọi video cá nhân hoặc nhóm.", icon: "video" },
  { title: "GROUP", desc: "Tạo nhóm cho gia đình, lớp học hoặc công việc.", icon: "users" },
  { title: "FILE", desc: "Gửi tài liệu, hình ảnh và video.", icon: "file" },
  { title: "OA", desc: "Kênh chính thức để doanh nghiệp giao tiếp với người dùng.", icon: "building" },
] as const;

export const ECOSYSTEM = [
  { title: "GIA ĐÌNH", desc: "Liên lạc và chia sẻ thông tin.", icon: "home" },
  { title: "NHÓM LỚP", desc: "Trao đổi bài học và tài liệu.", icon: "school" },
  { title: "SHOP", desc: "Cửa hàng nhỏ bán hàng và chăm sóc khách.", icon: "store" },
  { title: "CƠ QUAN", desc: "Trao đổi công việc trong tổ chức.", icon: "building" },
] as const;

export const LIFE_SCENES = [
  { title: "GIA ĐÌNH", desc: "Trao đổi và liên lạc hằng ngày.", img: "/images/slide07_benefit-family.webp", alt: "Hai bố con cùng xem điện thoại trong nhà" },
  { title: "TRƯỜNG HỌC", desc: "Nhóm lớp, bài tập, tài liệu.", img: "/images/slide07_benefit-student.webp", alt: "Nhóm học sinh cùng học với laptop" },
  { title: "CÔNG VIỆC", desc: "Trao đổi với đồng nghiệp, gửi file.", img: "/images/slide07_benefit-office.webp", alt: "Nhóm đồng nghiệp họp trong văn phòng" },
  { title: "DOANH NGHIỆP", desc: "Giao tiếp và chăm sóc khách hàng.", img: "/images/slide07_benefit-service.webp", alt: "Thanh toán bằng điện thoại tại quầy dịch vụ" },
] as const;

export const BENEFITS = [
  { no: "01", title: "KẾT NỐI", desc: "Giúp liên lạc nhanh với gia đình, bạn bè, lớp học và nhóm làm việc.", icon: "heart", img: "/images/slide07_benefit-family.webp", alt: "Hai bố con cùng xem điện thoại trong nhà" },
  { no: "02", title: "HỌC TẬP", desc: "Trao đổi nhóm, gửi tài liệu và thông tin học tập.", icon: "book", img: "/images/slide07_benefit-student.webp", alt: "Nhóm học sinh cùng học với laptop trên bàn gỗ" },
  { no: "03", title: "CÔNG VIỆC", desc: "Nhắn tin, gọi và chia sẻ file trong cùng nền tảng.", icon: "briefcase", img: "/images/slide07_benefit-office.webp", alt: "Nhóm đồng nghiệp họp với laptop trong văn phòng" },
  { no: "04", title: "DỊCH VỤ", desc: "Nhận thông tin hoặc sử dụng một số dịch vụ qua OA và Mini App.", icon: "bell", img: "/images/slide07_benefit-service.webp", alt: "Khách hàng thanh toán bằng điện thoại tại quầy" },
] as const;

export const RISKS = [
  { title: "LỪA ĐẢO", desc: "Link giả, tài khoản giả hoặc yêu cầu chuyển tiền gấp.", icon: "alert", img: "/images/slide11_risk-scam.webp", alt: "Người đàn ông lo lắng khi phát hiện dấu hiệu lừa đảo trên điện thoại" },
  { title: "GIẢ MẠO", desc: "Danh tính hoặc tài khoản có thể bị lợi dụng để tạo lòng tin.", icon: "mask", img: "/images/slide11_risk-fake.webp", alt: "Người đeo mặt nạ ẩn danh cầm laptop trên phố" },
  { title: "TIN GIẢ", desc: "Thông tin chưa kiểm chứng có thể được chia sẻ rất nhanh.", icon: "megaphone", img: "/images/slide11_risk-news.webp", alt: "Loa minh họa khái niệm tin giả" },
  { title: "QUYỀN RIÊNG TƯ", desc: "Thông tin cá nhân cần được kiểm soát và chia sẻ có chọn lọc.", icon: "lock", img: "/images/slide11_risk-privacy.webp", alt: "Bàn tay che ống kính, biểu tượng quyền riêng tư" },
  { title: "SỬ DỤNG QUÁ MỨC", desc: "Dùng mạng xã hội quá lâu có thể chiếm nhiều thời gian học tập, nghỉ ngơi và sinh hoạt.", icon: "phone", img: "/images/slide11_risk-overuse.webp", alt: "Thiếu niên nằm dán mắt vào điện thoại" },
] as const;

export const CHECKLIST = [
  { title: "KHÔNG ĐƯA OTP", desc: "Mã OTP chỉ dùng cho chính tài khoản của bạn." },
  { title: "KIỂM TRA LINK", desc: "Không mở link hoặc quét QR không rõ nguồn." },
  { title: "XÁC MINH NGƯỜI GỬI", desc: "Khi có yêu cầu chuyển tiền, hãy gọi lại bằng một kênh khác." },
  { title: "BẢO VỆ THÔNG TIN", desc: "Không chia sẻ thông tin nhạy cảm cho người không đáng tin cậy." },
  { title: "KIỂM CHỨNG", desc: "Đọc nguồn và kiểm tra trước khi chuyển tiếp tin." },
  { title: "BẢO VỆ TÀI KHOẢN", desc: "Bật các lớp bảo mật phù hợp và theo dõi hoạt động tài khoản." },
] as const;

export const ASSIGNMENTS = [
  { task: "TÌM KIẾM THÔNG TIN", names: "Bình Minh, Hưng Thái, Duy Anh", icon: "search" },
  { task: "TÌM KIẾM HÌNH ẢNH", names: "Bảo Hân, Tuấn Quang", icon: "image" },
  { task: "WEB SLIDE", names: "Đức Anh", icon: "pen" },
  { task: "THUYẾT TRÌNH", names: "Minh Nhật B, Thanh Hưng", icon: "mic" },
] as const;
