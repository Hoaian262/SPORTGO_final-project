# SportGo – Website tìm kiếm và đặt lịch sân thể thao trực tuyến

## 1. Giới thiệu

SportGo là website hỗ trợ người chơi tìm kiếm, so sánh và đặt lịch thuê sân thể thao trực tuyến tại TP.HCM. Dự án giải quyết tình trạng người chơi phải tìm thông tin trên nhiều kênh, liên hệ từng sân để hỏi giá và xác nhận lịch trống.

Website cho phép người dùng tìm sân theo môn thể thao, khu vực, khoảng giá và ngày giờ; xem thông tin chi tiết, kiểm tra lịch trống, đặt sân và lựa chọn dịch vụ bổ trợ trong cùng quy trình.

## 2. Khách hàng mục tiêu

- **Người thuê sân:** Sinh viên, người đi làm, nhóm bạn và đội thể thao tại TP.HCM.
- **Đơn vị cung cấp sân:** Chủ sân hoặc cụm sân cung cấp thông tin sân, bảng giá và lịch trống cho hệ thống.

Phạm vi đồ án hiện tại tập trung phát triển phần mềm dành cho người đặt sân. Phần mềm quản lý riêng cho chủ sân nằm ngoài phạm vi chính.

## 3. Chức năng chính

- Đăng ký, đăng nhập và quản lý hồ sơ người dùng.
- Xem danh mục sân theo môn thể thao.
- Tìm kiếm và lọc sân theo khu vực, giá và ngày giờ.
- Xem chi tiết sân, hình ảnh, bảng giá, tiện ích và chính sách hủy.
- Xem lịch trống và kiểm tra xung đột khung giờ.
- Đặt sân và lựa chọn dịch vụ bổ trợ.
- Thanh toán mô phỏng hoặc QR thủ công.
- Xem và hủy đơn đặt theo điều kiện đã công bố.

## 4. Thành viên

- Lê Hoài An – Business Analyst.
- Nguyễn Lê Vân Khánh – UI/UX Designer.
- Nguyễn Đặng Ngọc Minh – Front-end (User).
- Lê Diễm Quỳnh – Front-end (Admin), theo phân công ban đầu; cần xác nhận lại phạm vi triển khai.
- Ngô Quốc Hùng – Back-end (1).
- Ngô Khánh Linh – Back-end (2).
- Trần Nữ Huyền My – QA.

## 5. Công nghệ dự kiến

Công nghệ cụ thể sẽ được nhóm thống nhất và cập nhật sau khi hoàn tất phân tích yêu cầu và kiến trúc hệ thống.

## 6. Kế hoạch thực hiện

1. Khảo sát website tương tự và xác định yêu cầu.
2. Thiết kế giao diện và quy trình nghiệp vụ.
3. Phát triển các chức năng cốt lõi.
4. Tích hợp frontend, backend và cơ sở dữ liệu.
5. Kiểm thử, sửa lỗi và hoàn thiện sản phẩm.
6. Hoàn thiện tài liệu và chuẩn bị trình bày.

## 7. Liên kết tài liệu

- Yêu cầu dự án: `REQUIREMENTS.md`
- Kế hoạch dự án: `PROJECT_PLAN.md`
- Hướng dẫn sử dụng AI: `AGENTS.md`
- Nhật ký sử dụng AI: `AI_USAGE_LOG.md`
- Phân tích website đối thủ: `docs/competitor-analysis.md`
- Quy trình nghiệp vụ: `docs/business-workflow.md`

## 8. Phạm vi MVP

Phiên bản đầu tiên sử dụng dữ liệu sân mẫu và ưu tiên hoàn thiện quy trình tìm kiếm, xem lịch trống, đặt sân và quản lý đơn. Thanh toán được triển khai ở mức mô phỏng hoặc QR thủ công; không xem đây là tích hợp thanh toán thực tế.

# README BUỔI 2
SportGo – Website giới thiệu sân thể thao
1. Giới thiệu dự án
SportGo là dự án xây dựng giao diện website giới thiệu và cung cấp thông tin về các sân thể thao. Website giúp người dùng xem danh sách sân, tìm hiểu những thông tin cơ bản như tên sân, địa chỉ, giá thuê, hình ảnh và đánh giá.
Dự án được thực hiện trong khuôn khổ học phần Phát triển ứng dụng thương mại điện tử, tập trung vào việc xây dựng giao diện website bằng HTML5 và CSS3, tổ chức bố cục và tối ưu khả năng hiển thị trên nhiều kích thước màn hình.
2. Cấu trúc thư mục
SportGo_project/
│
├── Front-end/
│   │
│   ├── CSS/
│   │   ├── court-detail.css
│   │   └── style.css
│   │
│   ├── images/
│   │   ├── 1729658811196-Sân tennis s...
│   │   ├── Logo (5).png
│   │   ├── Logo.png
│   │   ├── acc.jpg
│   │   ├── avt.jpg
│   │   ├── banner-account.avif
│   │   ├── bell.webp
│   │   ├── bongda.jpg
│   │   ├── ...
│   │   ├── pickleball.webp
│   │   ├── pickleball2.webp
│   │   ├── tennis.jpg
│   │   └── tennis2.jpg
│   │
│   ├── about.html
│   ├── booking-history.html
│   ├── change-password.html
│   ├── courts-details.html
│   ├── courts.html
│   ├── index.html
│   └── profile.html
│
└── docs/
│
└── README.md
3. Danh sách các trang
Trang
Tên tệp
Nội dung
Trang chủ
index.html
Giới thiệu website và hiển thị các nội dung chính.
Danh sách sân
courts.html
Hiển thị danh sách các sân thể thao cùng thông tin cơ bản.
Chi tiết sân
courts-detail.html
Hiển thị thông tin chi tiết của sân thể thao.
Về SportGo
about.html
Giới thiệu về SportGo.

4. Công nghệ sử dụng
HTML5: Xây dựng cấu trúc và nội dung các trang web.
CSS3: Thiết kế giao diện, định dạng màu sắc, font chữ và các thành phần.
CSS Grid: Tổ chức bố cục và sắp xếp các thành phần trên trang.
CSS Flexbox: Căn chỉnh và phân bố các thành phần giao diện.
CSS Media Queries: Điều chỉnh giao diện phù hợp với nhiều kích thước màn hình.
5. Cách mở và chạy website
Website được xây dựng bằng HTML và CSS nên có thể mở trực tiếp trên trình duyệt mà không cần cài đặt máy chủ hoặc cơ sở dữ liệu.
Các bước thực hiện:
Tải hoặc giải nén thư mục dự án SportGo về máy tính.
Mở thư mục dự án bằng Visual Studio Code hoặc trình soạn thảo mã nguồn khác.
Kiểm tra các tệp HTML, CSS và thư mục hình ảnh.
Mở tệp index.html bằng trình duyệt web để xem giao diện website.
Sử dụng các liên kết trên Header, Footer và nút điều hướng để chuyển đổi giữa các trang.
Có thể sử dụng tiện ích Live Server trên Visual Studio Code để mở website và tự động tải lại trang khi mã nguồn được chỉnh sửa.
6. Cách kiểm tra giao diện Responsive
Nhóm có thể kiểm tra khả năng hiển thị trên nhiều kích thước màn hình bằng công cụ Developer Tools của trình duyệt.
Các bước kiểm tra:
Mở website trên trình duyệt Google Chrome hoặc Microsoft Edge.
Nhấn F12 hoặc Ctrl + Shift + I để mở Developer Tools.
Chọn biểu tượng Toggle Device Toolbar hoặc nhấn Ctrl + Shift + M.
Chọn thiết bị có sẵn hoặc nhập kích thước màn hình tùy chỉnh.
Kiểm tra bố cục, hình ảnh, menu điều hướng, danh sách sân và các thành phần giao diện.
Các kích thước màn hình được sử dụng để kiểm thử:
Thiết bị
Kích thước màn hình
Desktop
1440px
Laptop
1024px
Tablet
768px
Mobile
600px

Khi kiểm tra, cần đảm bảo nội dung không bị tràn hoặc chồng lấn, hình ảnh hiển thị đúng tỷ lệ và các thành phần có thể điều chỉnh phù hợp với kích thước màn hình.
7. Những hạn chế hiện tại
Website hiện tập trung vào xây dựng và hoàn thiện giao diện người dùng bằng HTML5 và CSS3.
Chức năng Đăng nhập và Đăng ký chưa được triển khai trong phạm vi dự án.
Website chưa triển khai hệ thống backend và cơ sở dữ liệu.
Chưa có chức năng xử lý đặt sân, quản lý lịch sân hoặc thanh toán trực tuyến.
Thông tin sân hiện được trình bày trên giao diện, chưa có hệ thống quản lý và cập nhật dữ liệu tự động.
Một số liên kết và chức năng điều hướng cần tiếp tục được rà soát, kiểm thử sau khi điều chỉnh.



