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
# SportGo – Website giới thiệu sân thể thao

## 1. Giới thiệu dự án

**SportGo** là dự án xây dựng giao diện website giới thiệu và cung cấp thông tin về các sân thể thao. Website hỗ trợ người dùng tìm hiểu và tham khảo thông tin cơ bản của các sân, bao gồm: tên sân, địa chỉ, giá thuê, hình ảnh và đánh giá.

Dự án được thực hiện trong khuôn khổ học phần **Phát triển ứng dụng thương mại điện tử**, tập trung vào việc xây dựng giao diện website bằng HTML5 và CSS3, tổ chức bố cục hợp lý và tối ưu khả năng hiển thị trên nhiều kích thước màn hình.

## 2. Cấu trúc thư mục

```text
SportGo_project/
│
├── Front-end/
│   │
│   ├── CSS/
│   │   ├── court-detail.css
│   │   └── style.css
│   │
│   ├── images/
│   │   ├── Logo.png
│   │   ├── Logo (5).png
│   │   ├── acc.jpg
│   │   ├── avt.jpg
│   │   ├── banner-account.avif
│   │   ├── bell.webp
│   │   ├── bongda.jpg
│   │   ├── ... (các hình ảnh khác)
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
├── docs/
│
└── README.md
```

## 3. Danh sách các trang

Website SportGo hiện có các trang giao diện sau:

| Trang | Tệp HTML | Mô tả |
|:---|:---|:---|
| Trang chủ | `index.html` | Giới thiệu website và hiển thị các nội dung chính. |
| Danh sách sân | `courts.html` | Hiển thị danh sách các sân thể thao và thông tin cơ bản. |
| Chi tiết sân | `courts-details.html` | Hiển thị thông tin chi tiết về sân thể thao. |
| Về SportGo | `about.html` | Giới thiệu về SportGo. |
| Hồ sơ cá nhân | `profile.html` | Giao diện thông tin hồ sơ cá nhân. |
| Lịch sử đặt sân | `booking-history.html` | Giao diện lịch sử đặt sân. |
| Đổi mật khẩu | `change-password.html` | Giao diện đổi mật khẩu. |

## 4. Công nghệ sử dụng

Dự án sử dụng các công nghệ và kỹ thuật phát triển giao diện web cơ bản:

| Công nghệ | Vai trò |
|:---|:---|
| **HTML5** | Xây dựng cấu trúc và nội dung các trang web. |
| **CSS3** | Thiết kế giao diện, định dạng màu sắc, font chữ và các thành phần. |
| **CSS Grid** | Tổ chức bố cục và sắp xếp các thành phần giao diện. |
| **CSS Flexbox** | Căn chỉnh và phân bố các thành phần trên trang. |
| **CSS Media Queries** | Điều chỉnh giao diện phù hợp với nhiều kích thước màn hình. |

## 5. Cách mở và chạy website

Website được xây dựng bằng HTML5 và CSS3, vì vậy có thể mở trực tiếp trên trình duyệt mà không cần thiết lập backend hoặc cơ sở dữ liệu.

**Các bước thực hiện:**

1. Tải hoặc giải nén thư mục `SportGo_project` về máy tính.
2. Mở thư mục dự án bằng **Visual Studio Code**.
3. Truy cập thư mục `Front-end`.
4. Mở tệp `index.html` bằng trình duyệt web để xem website.
5. Sử dụng các liên kết điều hướng trên website để chuyển đổi giữa các trang.

**Khuyến nghị:** Nhóm có thể sử dụng tiện ích **Live Server** trên Visual Studio Code để chạy website. Tiện ích hỗ trợ tự động tải lại trang khi mã nguồn được chỉnh sửa.

## 6. Kiểm tra giao diện Responsive

Nhóm sử dụng công cụ **Developer Tools** trên trình duyệt để kiểm tra khả năng hiển thị của website ở nhiều kích thước màn hình.

**Các bước kiểm tra:**

1. Mở website bằng Google Chrome hoặc Microsoft Edge.
2. Nhấn `F12` hoặc `Ctrl + Shift + I` để mở Developer Tools.
3. Chọn biểu tượng **Toggle Device Toolbar** hoặc nhấn `Ctrl + Shift + M`.
4. Chọn thiết bị có sẵn hoặc nhập kích thước màn hình tùy chỉnh.
5. Kiểm tra bố cục, hình ảnh, menu điều hướng, danh sách sân và các thành phần giao diện.

**Các kích thước màn hình được sử dụng trong quá trình kiểm thử:**

| Thiết bị | Kích thước màn hình |
|:---|---:|
| Desktop | 1440px |
| Laptop | 1024px |
| Tablet | 768px |
| Mobile | 600px |

**Tiêu chí kiểm tra:**

- Nội dung hiển thị đầy đủ, không bị tràn hoặc chồng lấn.
- Bố cục tự động điều chỉnh phù hợp với kích thước màn hình.
- Hình ảnh hiển thị đúng tỷ lệ và không bị biến dạng.
- Các thẻ sân và thành phần giao diện được sắp xếp hợp lý.
- Menu điều hướng và các liên kết dễ quan sát, thuận tiện khi sử dụng.

## 7. Những hạn chế hiện tại

Trong phạm vi thực hiện, SportGo tập trung vào xây dựng giao diện website. Một số hạn chế hiện tại bao gồm:

- Website chủ yếu được xây dựng bằng HTML5 và CSS3, chưa triển khai hệ thống backend.
- Chức năng Đăng nhập và Đăng ký chưa được triển khai.
- Chưa tích hợp cơ sở dữ liệu để lưu trữ và quản lý thông tin.
- Chưa triển khai chức năng xử lý đặt sân, quản lý lịch sân hoặc thanh toán trực tuyến.
- Thông tin sân hiện được trình bày trên giao diện, chưa có hệ thống cập nhật dữ liệu tự động.
- Một số liên kết và chức năng điều hướng cần tiếp tục được rà soát, kiểm thử và hoàn thiện.

---

<div align="center">

**SPORTGO – SPORTS COURT WEBSITE**

*E-Commerce Application Development Project*

</div>


