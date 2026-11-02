# Nhật ký sử dụng AI

## Ngày 03 tháng 11 năm 2026 — Sửa responsive

- Công cụ: Codex.
- Yêu cầu: Sửa mã nguồn trực tiếp theo kết quả rà soát responsive; chưa chỉnh báo cáo Word.
- Thay đổi: Chuyển bố cục tài khoản về một cột ở độ rộng không quá 900 px; điều chỉnh thông tin cá nhân và kích thước nút lọc trên điện thoại; bỏ quy tắc khoảng đệm dành cho avatar cũ ở trang chi tiết sân; cho menu xuống hàng ở 900 px; chia footer thành hai cột ở tablet và cho thông tin liên hệ xuống dòng.
- Xác minh tự động: Chrome qua Playwright, 7 trang tại các độ rộng 1366, 900, 820, 768, 600 và 390 px (42 trường hợp). Không phát hiện tràn ngang toàn trang hoặc giao nhau giữa các liên kết header sau sửa. Thanh danh mục môn thể thao vẫn cuộn ngang trong vùng riêng theo thiết kế hiện có.
- Xem ảnh: Đã kiểm tra ảnh trang tài khoản ở 390 px, lịch sử đặt sân ở 390 px và chi tiết sân ở 600 px. Các ảnh và kết quả đo được lưu tại thư mục review-responsive bên ngoài repository trên máy thực hiện.
- Giới hạn: Kiểm tra giao diện tĩnh, chưa xác minh nghiệp vụ đặt sân hay backend. Font và biểu tượng từ CDN có thể không tải được trong môi trường kiểm tra; cần kiểm tra lại khi máy có kết nối CDN.
- Thành viên nhóm xác nhận: Chưa ghi nhận; cần thành viên phụ trách kiểm tra lại trước khi gộp.
