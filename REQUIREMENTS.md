# Requirements – SportGo

## 1. Mục tiêu dự án

Xây dựng website giúp người chơi tìm sân thể thao phù hợp, xem giá và lịch trống, đặt sân và theo dõi đơn trên cùng một nền tảng. Dự án hướng đến giảm thời gian tìm kiếm và hạn chế sai sót khi xác nhận lịch.

## 2. Phạm vi

### Trong phạm vi

- Đăng ký, đăng nhập và quản lý hồ sơ cơ bản.
- Danh mục sân theo môn thể thao.
- Tìm kiếm và lọc theo môn thể thao, khu vực, khoảng giá và ngày giờ.
- Xem chi tiết sân, bảng giá, tiện ích, lịch trống và chính sách hủy.
- Đặt sân theo ngày, giờ và thời lượng.
- Kiểm tra xung đột và giữ chỗ tạm thời theo quy tắc được thống nhất.
- Chọn dịch vụ bổ trợ có sẵn như thuê vợt, mua cầu/bóng và nước uống.
- Thanh toán mô phỏng hoặc QR thủ công.
- Xem và hủy đơn theo điều kiện đã công bố.
- Sử dụng dữ liệu sân, bảng giá và lịch trống mẫu.

### Ngoài phạm vi

- Phần mềm quản lý đầy đủ dành riêng cho chủ sân.
- Tích hợp cổng thanh toán thật.
- Chatbot AI và gợi ý sân thông minh.
- Ghép kèo, tìm đồng đội và mạng xã hội thể thao.
- Đặt lịch định kỳ và chia tiền nhóm.
- Quản lý tồn kho dịch vụ bổ trợ.
- Các chức năng mở rộng chưa được nhóm thống nhất.

## 3. Người dùng

- **Khách vãng lai:** Xem danh mục, tìm kiếm, lọc và xem chi tiết sân.
- **Người chơi đã đăng nhập:** Đặt sân, thanh toán theo phương thức được triển khai, xem và hủy đơn của mình, quản lý hồ sơ.
- **Quản trị viên:** Chỉ thực hiện các quyền tối thiểu phục vụ dữ liệu mẫu hoặc kiểm thử nếu nhóm thống nhất; không mặc định triển khai hệ thống quản lý chủ sân.

## 4. Yêu cầu chức năng

| Mã | Chức năng | Ưu tiên |
|---|---|---|
| FR-01 | Đăng ký, đăng nhập và quản lý hồ sơ | Bắt buộc |
| FR-02 | Hiển thị danh mục sân | Bắt buộc |
| FR-03 | Tìm kiếm và lọc sân | Bắt buộc |
| FR-04 | Xem chi tiết sân | Bắt buộc |
| FR-05 | Hiển thị và kiểm tra lịch trống | Bắt buộc |
| FR-06 | Đặt sân và kiểm soát khung giờ | Bắt buộc |
| FR-07 | Chọn dịch vụ bổ trợ | Bắt buộc |
| FR-08 | Thanh toán mô phỏng hoặc QR thủ công | Bắt buộc, có giới hạn |
| FR-09 | Xem và hủy đơn đặt | Bắt buộc |
| FR-10 | Thông báo email | Hoãn |
| FR-11 | Viết đánh giá sân | Hoãn |
| FR-12 | Đặt định kỳ, chia tiền nhóm, ghép kèo, gợi ý thông minh, chatbot và thanh toán thật | Ngoài MVP |

### Tiêu chí nghiệm thu chung

- Dữ liệu hiển thị chính xác theo dữ liệu mẫu.
- Bộ lọc có thể kết hợp nhiều tiêu chí; trường hợp không có kết quả phải có thông báo.
- Hệ thống kiểm tra lại trạng thái khung giờ trước khi xác nhận đơn.
- Không cho phép hai đơn hợp lệ chiếm cùng một khung giờ.
- Tổng tiền phải phản ánh đúng giá sân và dịch vụ bổ trợ.
- Trạng thái thanh toán phải phân biệt rõ chờ thanh toán, chờ xác minh, thành công hoặc thất bại tùy phương thức triển khai.
- Người chơi chỉ xem được đơn của chính mình.
- Hủy đơn hợp lệ phải cập nhật trạng thái và giải phóng khung giờ phù hợp.

## 5. Yêu cầu phi chức năng

- Giao diện responsive, ưu tiên sử dụng trên điện thoại.
- Kiểm tra dữ liệu đầu vào và thông báo lỗi rõ ràng.
- Bảo vệ tài khoản và giới hạn quyền truy cập dữ liệu.
- Không lưu thông tin thẻ hoặc thông tin xác thực ví điện tử.
- Mã nguồn dễ đọc, dễ bảo trì.
- Không công khai mật khẩu, API key, token hoặc dữ liệu cá nhân thật.
- Mục tiêu tải trang dưới 3 giây cần được đo kiểm trước khi kết luận đạt.

## 6. Giới hạn và giả định

- Thời gian thực hiện dự kiến khoảng 10–12 tuần.
- Dữ liệu sân được cung cấp dưới dạng dữ liệu mẫu.
- Không tích hợp trực tiếp với phần mềm quản lý chủ sân trong MVP.
- Thời hạn giữ chỗ, chẳng hạn 10 phút, cần được nhóm kiểm chứng trước khi chốt.
- Danh sách môn thể thao và dữ liệu mẫu cần được nhóm thống nhất.
