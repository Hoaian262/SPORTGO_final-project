# AI Usage Log – SportGo

## Lần sử dụng 1 – Phân tích yêu cầu

### Công cụ
Claude (Anthropic), theo tài liệu dự án.

### Mục đích
Hỗ trợ phân tích nghiệp vụ và đề xuất bộ yêu cầu ban đầu cho website SportGo.

### Prompt
Yêu cầu AI đề xuất mục tiêu và phạm vi, nhóm người dùng, chức năng, quy trình nghiệp vụ, yêu cầu phi chức năng, MVP, chức năng mở rộng và rủi ro triển khai.

### Kết quả đề xuất
AI đề xuất các chức năng tài khoản, danh mục sân, tìm kiếm/lọc, chi tiết sân, lịch trống, đặt sân, dịch vụ bổ trợ, thanh toán, quản lý đơn và các chức năng mở rộng.

### Phản biện
Nhóm sử dụng ChatGPT để phản biện tính hợp lý, yêu cầu trùng lặp, quy trình còn thiếu, rủi ro bảo mật và khả năng kiểm thử.

### Quyết định của nhóm
- Tập trung vào phần mềm dành cho người đặt sân.
- Ưu tiên chức năng cốt lõi của MVP.
- Sử dụng dữ liệu mẫu.
- Chỉ triển khai thanh toán mô phỏng hoặc QR thủ công.
- Hoãn hoặc loại khỏi MVP các chức năng vượt phạm vi như chatbot AI, gợi ý thông minh, ghép kèo, đặt định kỳ, chia tiền nhóm và thanh toán thật.

### Người kiểm tra
Nhóm dự án. Cần cập nhật tên thành viên kiểm tra cho từng lần sử dụng AI thực tế.

## Mẫu ghi nhận các lần tiếp theo

### Công cụ
Tên công cụ AI.

### Mục đích
Phân tích, thiết kế, lập trình, kiểm thử hoặc viết tài liệu.

### Prompt chính
Ghi prompt đã sử dụng, không chứa thông tin bí mật.

### Kết quả đề xuất
Tóm tắt kết quả AI.

### Phản biện và xác minh
Ghi rõ người kiểm tra và kết quả kiểm tra.

### Quyết định của nhóm
Nội dung giữ lại, điều chỉnh hoặc loại bỏ, kèm lý do.

### Người kiểm tra
Tên thành viên chịu trách nhiệm xác minh.

# Nhật ký sử dụng AI

## Ngày 03 tháng 11 năm 2026 — Sửa responsive

- Công cụ: Codex.
- Yêu cầu: Sửa mã nguồn trực tiếp theo kết quả rà soát responsive; chưa chỉnh báo cáo Word.
- Thay đổi: Chuyển bố cục tài khoản về một cột ở độ rộng không quá 900 px; điều chỉnh thông tin cá nhân và kích thước nút lọc trên điện thoại; bỏ quy tắc khoảng đệm dành cho avatar cũ ở trang chi tiết sân; cho menu xuống hàng ở 900 px; chia footer thành hai cột ở tablet và cho thông tin liên hệ xuống dòng.
- Xác minh tự động: Chrome qua Playwright, 7 trang tại các độ rộng 1366, 900, 820, 768, 600 và 390 px (42 trường hợp). Không phát hiện tràn ngang toàn trang hoặc giao nhau giữa các liên kết header sau sửa. Thanh danh mục môn thể thao vẫn cuộn ngang trong vùng riêng theo thiết kế hiện có.
- Xem ảnh: Đã kiểm tra ảnh trang tài khoản ở 390 px, lịch sử đặt sân ở 390 px và chi tiết sân ở 600 px. Các ảnh và kết quả đo được lưu tại thư mục review-responsive bên ngoài repository trên máy thực hiện.
- Giới hạn: Kiểm tra giao diện tĩnh, chưa xác minh nghiệp vụ đặt sân hay backend. Font và biểu tượng từ CDN có thể không tải được trong môi trường kiểm tra; cần kiểm tra lại khi máy có kết nối CDN.
- Thành viên nhóm xác nhận: Chưa ghi nhận; cần thành viên phụ trách kiểm tra lại trước khi gộp.

## 03/11/2026 - Tinh chỉnh giao diện mobile
- Yêu cầu: xem ảnh demo trước khi chỉnh Header, Banner và Footer trên điện thoại.
- Thay đổi: logo và tài khoản cùng hàng, menu ba ô, khoảng cách Banner rõ ràng, Footer hai cột với thông tin liên hệ riêng; chỉ áp dụng tối đa 600 px.
- Công cụ: Codex và ảnh chụp Chrome từ mã nguồn thực tế.

- Kiểm tra: 42 trường hợp (7 trang tại 320, 360, 390, 600, 768 và 1366 px), không tràn ngang toàn trang hoặc chồng liên kết Header; đã xem ảnh thực tế trang chủ 320/390 px và tài khoản 390 px.

### Đồng bộ và kiểm tra bản cuối
- Đã kết hợp mã main tại e949f8b, giữ phần trang chủ và các thay đổi mới của nhóm.
- Điều chỉnh khoảng dịch chuyển ô tìm kiếm trang chủ trên mobile để không che mô tả Banner.
- Kiểm tra lại 56 trường hợp: 7 trang ở 320, 360, 390, 600, 768, 820, 900 và 1366 px; không tràn ngang toàn trang, không chồng liên kết Header hoặc ô tìm kiếm lên mô tả Banner.
- Chụp lại ảnh minh chứng 7.4–7.9 từ bản đã đồng bộ để cập nhật Buổi 2 và NV7.


