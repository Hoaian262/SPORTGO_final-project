
# Vai trò người dùng và phân công nhóm – SportGo

## 1. Vai trò người dùng hệ thống

### 1.1. Người đặt sân

Người đặt sân là đối tượng sử dụng chính của website SportGo.

Các hoạt động chính:
- Tìm kiếm và lọc sân.
- Xem thông tin chi tiết của sân.
- Kiểm tra khung giờ còn trống.
- Đặt sân.
- Theo dõi trạng thái và lịch sử đặt sân.
- Hủy đơn theo điều kiện quy định.

### 1.2. Chủ sân

Chủ sân là đối tượng liên quan trong bối cảnh kinh doanh, có nhu cầu quản lý thông tin sân, giá thuê và lịch đặt.

Tuy nhiên, theo phạm vi đồ án được mô tả trong tài liệu, phần mềm quản lý riêng dành cho chủ sân nằm ngoài phạm vi MVP của SportGo.

## 2. Phân công thành viên

| Thành viên | Vai trò | Trách nhiệm |
|---|---|---|
| Lê Hoài An | Business Analyst | Xác định User Stories, ưu tiên phạm vi, quản lý GitHub Issues, điều phối nhóm và rà soát Pull Request. |
| Nguyễn Lê Vân Khánh | UI/UX Designer | Nghiên cứu đối thủ, xây dựng wireframe/mockup trên Figma và Design System; tập trung vào trải nghiệm chọn khung giờ. |
| Nguyễn Đặng Ngọc Minh | Front-end (User) | Phát triển trang chủ, tìm kiếm/lọc, chi tiết sân, chọn khung giờ, đặt sân, thanh toán mô phỏng, hồ sơ và lịch sử đặt sân. |
| Lê Diễm Quỳnh | Front-end (Admin) | Vai trò được ghi trong phân công ban đầu; cần thống nhất lại nhiệm vụ vì giao diện quản trị chủ sân nằm ngoài phạm vi MVP. |
| Ngô Quốc Hùng | Back-end (1) | Thiết kế ERD/cơ sở dữ liệu và API cho sân, khung giờ, đơn đặt sân; xử lý kiểm tra trùng lịch. |
| Ngô Khánh Linh | Back-end (2) | Hỗ trợ đăng nhập, phân quyền tài khoản và các chức năng được nhóm thống nhất trong phạm vi MVP. |
| Trần Nữ Huyền My | QA | Viết test case, kiểm thử tích hợp, theo dõi lỗi và cập nhật tài liệu tiến độ, README và kiểm thử. |

## 3. Lưu ý về phân công

Phân công ban đầu có vai trò Front-end (Admin), trong khi tài liệu xác định phần mềm quản lý dành cho chủ sân là sản phẩm riêng, nằm ngoài phạm vi đồ án.

Nhóm cần thống nhất lại nhiệm vụ này để tránh mâu thuẫn giữa phân công thành viên và phạm vi MVP.
