export type Theme = "light" | "dark" | "security";

export interface SlideMeta {
  id: string;
  no: string;
  theme: Theme;
  source?: string;
}

export const SLIDES: SlideMeta[] = [
  { id: "slide-01", no: "01 / 10", theme: "light", source: "Nguồn: VNG · H1/2026" },
  { id: "slide-02", no: "02 / 10", theme: "light", source: "Nguồn: VNG" },
  { id: "slide-03", no: "03 / 10", theme: "light", source: "Nguồn: Zalo Help · oa.zalo.me" },
  { id: "slide-04", no: "04 / 10", theme: "light", source: "Nguồn: VNG H1/2026 · Decision Lab Q4/2025" },
  { id: "slide-05", no: "05 / 10", theme: "light", source: "Nguồn: VNG H1/2026" },
  { id: "slide-06", no: "06 / 10", theme: "light", source: "Nguồn: VNG 6/2026" },
  { id: "slide-07", no: "07 / 10", theme: "light" },
  { id: "slide-08", no: "08 / 10", theme: "dark", source: "Nguồn: Công an Lâm Đồng 5/2026 · Zalo Safety" },
  { id: "slide-09", no: "09 / 10", theme: "security", source: "Nguồn: Zalo Safety · Công an" },
  { id: "slide-10", no: "10 / 10", theme: "light" },
];

export const TIMELINE = [
  { date: "08/2012", title: "PHIÊN BẢN THỬ NGHIỆM", desc: "Zalo xuất hiện dưới dạng phiên bản thử nghiệm đầu tiên.", icon: "flask" },
  { date: "12/2012", title: "RA MẮT CHÍNH THỨC", desc: "Phiên bản chính thức được phát hành theo hướng mobile-first.", icon: "phone" },
  { date: "08/01/2013", title: "TOP 1 APP STORE VIỆT NAM", desc: "Zalo vươn lên vị trí dẫn đầu tại App Store Việt Nam.", icon: "trophy" },
] as const;

export const PURPOSES = [
  { no: "01", title: "CÁ NHÂN", desc: "Nhắn tin, gọi thoại, video call và chia sẻ hình ảnh, video.", icon: "user" },
  { no: "02", title: "NHÓM", desc: "Tạo nhóm để trao đổi với bạn bè, gia đình, lớp học hoặc đồng nghiệp.", icon: "users" },
  { no: "03", title: "HỌC TẬP / CÔNG VIỆC", desc: "Gửi tài liệu, file, hình ảnh và trao đổi trong cùng một nhóm.", icon: "briefcase" },
  { no: "04", title: "DỊCH VỤ", desc: "Official Account và Mini App giúp doanh nghiệp cung cấp thông tin và một số dịch vụ trên Zalo.", icon: "store" },
] as const;

export const FEATURES = [
  { title: "CHAT", desc: "Nhắn tin nhanh với cá nhân hoặc nhóm.", icon: "message" },
  { title: "CALL", desc: "Gọi thoại trực tiếp qua Internet.", icon: "phone" },
  { title: "VIDEO", desc: "Gọi video cá nhân hoặc nhóm.", icon: "video" },
  { title: "GROUP", desc: "Tạo nhóm cho gia đình, lớp học hoặc công việc.", icon: "users" },
  { title: "FILE", desc: "Gửi ảnh, video và tài liệu.", icon: "file" },
  { title: "OA", desc: "Kênh chính thức để doanh nghiệp và tổ chức giao tiếp với người dùng.", icon: "building" },
] as const;

export const ECOSYSTEM = [
  { title: "GIA ĐÌNH", desc: "Liên lạc và chia sẻ thông tin.", icon: "home" },
  { title: "NHÓM LỚP", desc: "Trao đổi bài học và tài liệu.", icon: "school" },
  { title: "DOANH NGHIỆP", desc: "Official Account hỗ trợ giao tiếp với khách hàng.", icon: "building" },
  { title: "DỊCH VỤ", desc: "Mini App và các dịch vụ số hoạt động ngay trong hệ sinh thái.", icon: "store" },
] as const;

export const BENEFITS = [
  { no: "01", title: "KẾT NỐI", desc: "Giúp liên lạc nhanh với gia đình, bạn bè, lớp học và nhóm làm việc.", icon: "heart", img: "/images/slide07-benefit-family.jpg", alt: "Hai bố con cùng xem điện thoại trong nhà" },
  { no: "02", title: "HỌC TẬP", desc: "Hỗ trợ trao đổi trong nhóm, gửi tài liệu và thông tin học tập.", icon: "book", img: "/images/slide07-benefit-student.jpg", alt: "Nhóm học sinh cùng học với laptop trên bàn gỗ" },
  { no: "03", title: "CÔNG VIỆC", desc: "Cho phép nhắn tin, gọi và chia sẻ file mà không cần chuyển sang nhiều ứng dụng khác.", icon: "briefcase", img: "/images/slide07-benefit-office.jpg", alt: "Nhóm đồng nghiệp họp với laptop trong văn phòng" },
  { no: "04", title: "DỊCH VỤ", desc: "Người dùng có thể nhận thông tin hoặc sử dụng một số dịch vụ thông qua Official Account và Mini App.", icon: "bell", img: "/images/slide07-benefit-service.jpg", alt: "Khách hàng thanh toán bằng điện thoại tại quầy" },
] as const;

export const RISKS = [
  { title: "LỪA ĐẢO", desc: "Kẻ xấu có thể gửi link giả, giả danh người quen hoặc yêu cầu chuyển tiền.", icon: "alert", img: "/images/slide08-scam.jpg", alt: "Người đàn ông lo lắng khi phát hiện dấu hiệu lừa đảo trên điện thoại" },
  { title: "GIẢ MẠO", desc: "Tài khoản hoặc danh tính có thể bị sử dụng để tạo lòng tin và lừa người nhận.", icon: "mask", img: "/images/slide08-fake.jpg", alt: "Người đeo mặt nạ ẩn danh cầm laptop trên phố" },
  { title: "TIN GIẢ", desc: "Nội dung chưa được kiểm chứng có thể được chuyển tiếp nhanh trong các nhóm.", icon: "megaphone", img: "/images/slide08-news.jpg", alt: "Loa minh họa khái niệm tin giả" },
  { title: "QUYỀN RIÊNG TƯ", desc: "Thông tin cá nhân, hình ảnh hoặc nội dung trò chuyện cần được kiểm soát và chia sẻ có chọn lọc.", icon: "lock", img: "/images/slide08-privacy.jpg", alt: "Bàn tay che ống kính, biểu tượng quyền riêng tư" },
  { title: "SỬ DỤNG QUÁ MỨC", desc: "Dùng mạng xã hội quá lâu có thể chiếm nhiều thời gian học tập, nghỉ ngơi và sinh hoạt.", icon: "phone", img: "/images/slide08-overuse.jpg", alt: "Thiếu niên nằm dán mắt vào điện thoại" },
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
