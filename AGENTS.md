
# AGENTS.md – Quy ước làm việc của dự án SportGo

## 1. Bối cảnh dự án

SportGo là website đặt sân thể thao dành cho người dùng có nhu cầu tìm kiếm và đặt sân trực tuyến.

Phiên bản MVP tập trung vào người đặt sân. Phần mềm quản lý riêng dành cho chủ sân nằm ngoài phạm vi đồ án hiện tại.

## 2. Nguyên tắc phát triển

- Đọc README.md và REQUIREMENTS.md trước khi thực hiện công việc.
- Chỉ triển khai chức năng nằm trong phạm vi đã được nhóm thống nhất.
- Không tự ý bổ sung chức năng lớn khi chưa có sự đồng ý của nhóm.
- Không tự quyết định các quy tắc nghiệp vụ còn chưa rõ.
- Ghi nhận câu hỏi và vấn đề chưa thống nhất trong GitHub Issues.
- Không đưa mật khẩu, API key hoặc token vào repository.

## 3. Quy ước sử dụng GitHub

- Mỗi nhiệm vụ nên được mô tả bằng một GitHub Issue.
- Mỗi chức năng hoặc lỗi nên được phát triển trên nhánh riêng khi phù hợp.
- Tạo Pull Request để mô tả và rà soát thay đổi.
- Kiểm tra mã nguồn trước khi gộp vào nhánh chính.
- Ghi rõ nội dung thay đổi và kết quả kiểm thử trong Pull Request.

## 4. Quy tắc chất lượng

- Viết mã nguồn rõ ràng, nhất quán và dễ bảo trì.
- Kiểm tra dữ liệu đầu vào và các trường hợp lỗi.
- Ưu tiên kiểm thử các luồng tìm sân, chọn giờ, đặt sân và hủy đơn.
- Đặc biệt kiểm thử trường hợp hai yêu cầu cùng chọn một khung giờ.
- Cập nhật tài liệu khi chức năng hoặc cách sử dụng thay đổi.

## 5. Nguyên tắc sử dụng AI

- AI chỉ đóng vai trò công cụ hỗ trợ phân tích, thiết kế, lập trình và kiểm thử.
- Thành viên phải kiểm tra tính chính xác của kết quả do AI tạo ra.
- Không sử dụng mã nguồn hoặc kết luận do AI đề xuất khi chưa hiểu và kiểm chứng.
- Ghi lại các lần sử dụng AI trong AI_USAGE_LOG.md.
- Nhóm chịu trách nhiệm cuối cùng đối với sản phẩm và nội dung nộp.
