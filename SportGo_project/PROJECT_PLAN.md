# Project Plan – SportGo

## 1. Thành viên và vai trò

| Thành viên | Vai trò |
|---|---|
| Lê Hoài An | Business Analyst |
| Nguyễn Lê Vân Khánh | UI/UX Designer |
| Nguyễn Đặng Ngọc Minh | Front-end (User) |
| Lê Diễm Quỳnh | Front-end (Admin) |
| Ngô Quốc Hùng | Back-end (1) |
| Ngô Khánh Linh | Back-end (2) |
| Trần Nữ Huyền My | QA |

## 2. Các giai đoạn

1. Khảo sát website đối thủ và xác định yêu cầu.
2. Thiết kế giao diện, quy trình nghiệp vụ và dữ liệu.
3. Phát triển giao diện người đặt sân.
4. Phát triển backend và cơ sở dữ liệu.
5. Tích hợp và kiểm thử.
6. Hoàn thiện tài liệu và chuẩn bị demo.

## 3. Danh sách công việc

| Mã | Công việc | Người phụ trách | Kết quả cần đạt | Trạng thái |
|---|---|---|---|---|
| SG-01 | Khảo sát website đối thủ | UI/UX Designer + BA | `docs/competitor-analysis.md` | Chưa cập nhật |
| SG-02 | Thống nhất yêu cầu chức năng | BA | `REQUIREMENTS.md` | Cần rà soát |
| SG-03 | Mô tả quy trình nghiệp vụ | BA + QA | `docs/business-workflow.md` | Chưa cập nhật |
| SG-04 | Thiết kế wireframe và Design System | UI/UX Designer | Bản thiết kế giao diện | Chưa cập nhật |
| SG-05 | Thống nhất công nghệ | Cả nhóm | Công nghệ được ghi trong README | Cần thống nhất |
| SG-06 | Thiết kế dữ liệu và API | Back-end (1) | ERD và đặc tả API | Chưa cập nhật |
| SG-07 | Phát triển giao diện người đặt sân | Front-end (User) | Các màn hình theo yêu cầu | Chưa cập nhật |
| SG-08 | Phát triển nghiệp vụ backend | Back-end (1) + Back-end (2) | API và nghiệp vụ cốt lõi | Chưa cập nhật |
| SG-09 | Kiểm thử | QA | Test case và danh sách lỗi | Chưa cập nhật |
| SG-10 | Hoàn thiện và demo | Cả nhóm | Sản phẩm và tài liệu bàn giao | Chưa cập nhật |

Nhóm cần bổ sung thời hạn cụ thể và cập nhật trạng thái thực tế cho từng công việc.

## 4. Rủi ro

- **Phạm vi quá lớn:** Ưu tiên MVP; chỉ làm chức năng mở rộng khi các luồng cốt lõi ổn định.
- **Đặt trùng lịch:** Kiểm tra trạng thái trước khi xác nhận và kiểm thử các trường hợp đặt đồng thời.
- **Thiếu dữ liệu chủ sân:** Sử dụng dữ liệu mẫu và ghi rõ giả định.
- **Thanh toán thật vượt nguồn lực:** Dùng thanh toán mô phỏng hoặc QR thủ công.
- **Hủy sân và hoàn tiền gây hiểu nhầm:** Công bố điều kiện hủy, phân biệt trạng thái hủy đơn và hoàn tiền.
- **Xung đột mã nguồn:** Sử dụng Issue, nhánh, Pull Request và review.
- **Lộ thông tin bí mật:** Không đưa thông tin đăng nhập, token hoặc dữ liệu cá nhân thật vào repository công khai.
