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

</div>
# README BUỔI 3
## 1. Tên dự án và Mục tiêu
* **Tên dự án:** SportGo – Nền tảng tìm kiếm và đặt lịch thuê sân thể thao trực tuyến tại TP.HCM[cite: 1, 31].
* **Mục tiêu:**
  * Chuyển đổi giao diện tĩnh (HTML5/CSS3 từ Buổi 1 & Buổi 2) thành ứng dụng web thương mại điện tử có khả năng tương tác hoàn chỉnh bằng JavaScript[cite: 18, 31].
  * Xây dựng luồng nghiệp vụ đặt sân thể thao thực tế (thay thế mô hình giỏ hàng vật lý truyền thống bằng mô hình đặt lịch dịch vụ): Tìm kiếm/Lọc sân $\rightarrow$ Xem chi tiết & Kiểm tra lịch trống $\rightarrow$ Chọn khung giờ & Giữ chỗ tạm thời (10 phút) $\rightarrow$ Thanh toán hóa đơn $\rightarrow$ Quản lý lịch sử đặt sân (Xem, Sửa khung giờ/thời lượng, Xóa lịch)[cite: 2, 3, 4, 6, 18].
  * Ứng dụng `localStorage` và `sessionStorage` để lưu trữ, khôi phục dữ liệu đặt sân và kiểm soát xung đột trùng lịch giữa các phiên người dùng[cite: 9, 10, 17, 18].

---

## 2. Thành viên và Nhiệm vụ được phân công

| STT | Họ và tên | MSSV | Phân công nhiệm vụ cụ thể | Mức độ hoàn thành |
| :-- | :--- | :--- | :--- | :---: |
| 1 | **Lê Hoài An**[cite: 36] | 31241027129[cite: 36] | • Nhiệm vụ 1: Phân công nhiệm vụ<br>• Nhiệm vụ 4: Tích hợp trang chi tiết sân<br>• Nhiệm vụ 6: Tích hợp localStorage lưu nội dung sân đặt<br>• Nhiệm vụ 8: Quản lý GitHub, hoàn thiện báo cáo & trình bày<br>• Nhiệm vụ 9: Hoàn thành các câu hỏi kiểm tra[cite: 36] | 100%[cite: 36] |
| 2 | **Nguyễn Lê Vân Khánh**[cite: 36] | 31241024087[cite: 36] | • Nhiệm vụ 3: Tích hợp tìm kiếm, lọc và sắp xếp sản phẩm<br>• Nhiệm vụ 5: Xây dựng trang đặt sân có giao diện & chức năng<br>• Nhiệm vụ 8: Quản lý GitHub, hoàn thiện báo cáo & trình bày<br>• Nhiệm vụ 9: Hoàn thành các câu hỏi kiểm tra[cite: 36] | 100%[cite: 36] |
| 3 | **Ngô Quốc Hùng**[cite: 36] | 31241027772[cite: 36] | • Nhiệm vụ 3: Tích hợp tìm kiếm, lọc và sắp xếp sản phẩm<br>• Nhiệm vụ 5: Xây dựng trang đặt sân có giao diện & chức năng<br>• Nhiệm vụ 7: Tích hợp, kiểm thử và tối ưu giao diện<br>• Nhiệm vụ 9: Hoàn thành các câu hỏi kiểm tra[cite: 36] | 100%[cite: 36] |
| 4 | **Ngô Khánh Linh**[cite: 36] | 31241027738[cite: 36] | • Nhiệm vụ 4: Tích hợp trang chi tiết sân<br>• Nhiệm vụ 5: Xây dựng trang đặt sân có giao diện & chức năng<br>• Nhiệm vụ 9: Hoàn thành các câu hỏi kiểm tra[cite: 36] | 100%[cite: 36] |
| 5 | **Nguyễn Đặng Ngọc Minh**[cite: 36] | 31241020263[cite: 36] | • Nhiệm vụ 2: Chuẩn hóa dữ liệu và hiển thị danh sách<br>• Nhiệm vụ 7: Tích hợp, kiểm thử và tối ưu giao diện<br>• Nhiệm vụ 9: Hoàn thành các câu hỏi kiểm tra[cite: 36] | 100%[cite: 36] |
| 6 | **Trần Nữ Huyền My**[cite: 36] | 31241027201[cite: 36] | • Nhiệm vụ 2: Chuẩn hóa dữ liệu và hiển thị danh sách<br>• Nhiệm vụ 4: Tích hợp trang chi tiết sân<br>• Nhiệm vụ 8: Quản lý GitHub, hoàn thiện báo cáo & trình bày<br>• Nhiệm vụ 9: Hoàn thành các câu hỏi kiểm tra[cite: 36] | 100%[cite: 36] |
| 7 | **Lê Diễm Quỳnh**[cite: 36] | 31241025045[cite: 36] | • Nhiệm vụ 3: Tích hợp tìm kiếm, lọc và sắp xếp sản phẩm<br>• Nhiệm vụ 6: Tích hợp localStorage lưu nội dung sân đặt<br>• Nhiệm vụ 7: Tích hợp, kiểm thử và tối ưu giao diện<br>• Nhiệm vụ 9: Hoàn thành các câu hỏi kiểm tra[cite: 36] | 100%[cite: 36] |

*(Chi tiết kế hoạch và phân công công việc chi tiết được lưu tại [`PROJECT_PLAN.md`](./PROJECT_PLAN.md) và tài liệu đặc tả tại [`REQUIREMENTS.md`](./REQUIREMENTS.md)).*

---

## 3. Công nghệ sử dụng
* **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)[cite: 1, 9, 31].
* **Lưu trữ trình duyệt (Web Storage API):**
  * `localStorage`: Lưu danh sách lịch đặt sân chính thức (`sportgoBookings`) và trạng thái giữ chỗ tạm thời (`sportgoHolds`).
  * `sessionStorage`: Lưu hóa đơn chờ thanh toán (`sportgoPendingBooking`) và mã định danh phiên giữ chỗ (`sportgoHoldOwner`).
* **Thư viện giao diện bổ trợ:** Google Fonts (*Be Vietnam Pro*), Font Awesome 6.5.2 (Icons)[cite: 1, 3].
* **Quản lý mã nguồn & Tài liệu:** Git, GitHub, Markdown[cite: 18, 35].

---

## 4. Cấu trúc thư mục
Dự án được tổ chức tách biệt giữa thư mục tài liệu (`docs`), các tệp quản lý dự án (`.md`) và mã nguồn giao diện (`Front-end`):

```text
SPORTGO_final-project/
└── SportGo_project/
    ├── docs/                            # Thư mục lưu trữ tài liệu, báo cáo của dự án
    ├── Front-end/                       # Thư mục chứa toàn bộ mã nguồn Website
    │   ├── CSS/
    │   │   └── style.css                # Tệp định dạng giao diện chung cho toàn bộ website
    │   ├── images/                      # Thư mục chứa hình ảnh logo và ảnh các sân thể thao
    │   ├── JS/
    │   │   ├── booking-history.js       # Hiển thị lịch đã đặt, gộp khung giờ, sửa & xóa lịch
    │   │   ├── checkout.js              # Đếm ngược giữ sân 10 phút, validate form & lưu đơn
    │   │   ├── court-detail.js          # Hiển thị chi tiết sân theo ID, tạo lưới chọn giờ & giữ sân
    │   │   ├── court-filter.js          # Xử lý lọc (Địa điểm, Giá, Tiện ích, Đánh giá) & Sắp xếp
    │   │   ├── court-search.js          # Xử lý tìm kiếm từ khóa, lọc danh mục môn & URL params
    │   │   ├── courts-data.js           # Nguồn dữ liệu 9 sân thể thao dùng chung (window.courts)
    │   │   └── courts-page.js           # Render danh sách thẻ sân ra giao diện courts.html
    │   ├── about.html                   # Trang giới thiệu về SportGo
    │   ├── booking-history.html         # Trang quản lý lịch sử đặt sân (Xem, Sửa khung giờ, Xóa)
    │   ├── change-password.html         # Trang đổi mật khẩu (Giao diện tĩnh)
    │   ├── checkout.html                # Trang hóa đơn, đếm ngược giữ sân và thanh toán
    │   ├── courts-details.html          # Trang chi tiết sân và bảng chọn khung giờ đặt sân
    │   ├── courts.html                  # Trang danh sách sân, bộ lọc đa tiêu chí và sắp xếp
    │   ├── index.html                   # Trang chủ (Tìm kiếm nhanh, danh mục môn, sân nổi bật)
    │   └── profile.html                 # Trang thông tin tài khoản (Giao diện tĩnh)
    ├── .gitignore                       # Cấu hình các tệp/thư mục bỏ qua khi đẩy lên Git
    ├── AGENTS.md                        # Tài liệu cấu hình quy tắc làm việc cho AI Agent
    ├── AI_USAGE.md                      # Nhật ký & minh chứng các phần sử dụng AI hỗ trợ
    ├── PROJECT_PLAN.md                  # Kế hoạch thực hiện và phân công công việc của nhóm
    ├── README.md                        # Tài liệu tổng quan và hướng dẫn sử dụng dự án
    └── REQUIREMENTS.md                  # Tài liệu đặc tả yêu cầu chức năng của hệ thống
---

## 5. Các chức năng đã hoàn thành (Và giới hạn thực tế)

### 5.1. Các chức năng đã hoàn thành (Có mã nguồn hoạt động)
1. **Hiển thị danh sách sân từ dữ liệu dùng chung (`courts-data.js`, `courts-page.js`):**
   * Xây dựng mảng `window.courts` gồm 9 sân thể thao tại TP.HCM (Cầu lông, Bóng rổ, Pickleball, Tennis) với đầy đủ thuộc tính (`id`, `name`, `sport`, `image`, `address`, `price`, `prices`, `rating`, `reviews`, `amenities`, `description`)[cite: 14].
   * Tự động render danh sách thẻ sân ra `#court-grid`, định dạng giá tiền theo chuẩn Việt Nam (`toLocaleString("vi-VN")`) và gắn đường dẫn động `courts-details.html?id=${court.id}`[cite: 16].
   * Hiển thị thông báo `#empty-message` khi không có sân phù hợp[cite: 3, 16].
2. **Tìm kiếm, Lọc đa tiêu chí và Sắp xếp (`court-search.js`, `court-filter.js`):**
   * Tìm kiếm từ khóa theo tên sân hoặc địa chỉ, hỗ trợ chuẩn hóa tiếng Việt không dấu (`normalize()`)[cite: 13, 15].
   * Lọc theo danh mục môn thể thao, đồng bộ trạng thái nút active và tham số `?sport=` trên thanh địa chỉ URL[cite: 15].
   * Kết hợp đồng thời nhiều bộ lọc: Tỉnh/Thành phố, Quận/Huyện, Khoảng giá (Min – Max, có kiểm tra lỗi `min > max`), Tiện ích (Wifi, Bãi giữ xe, Phòng thay đồ, Nhà vệ sinh) và Mức sao đánh giá[cite: 3, 13].
   * Sắp xếp danh sách theo: Mặc định, Giá thấp đến cao, Giá cao đến thấp, Đánh giá cao nhất mà không làm thay đổi mảng dữ liệu gốc[cite: 3, 13].
   * Cập nhật bộ đếm số lượng kết quả trực tiếp (`Hiển thị X/9 sân thể thao`)[cite: 3, 13].
3. **Trang chi tiết sân & Đặt khung giờ (`court-detail.js`):**
   * Đọc `id` và `date` từ URL bằng `URLSearchParams`[cite: 10]. Hiển thị thông báo lỗi và đường dẫn quay lại nếu `id` sân không tồn tại[cite: 10].
   * Hiển thị động thông tin chi tiết sân, danh sách tiện ích, bảng giá theo ca (Sáng/Chiều/Tối) và album ảnh (tự động ẩn khu vực album nếu sân chưa có ảnh phụ)[cite: 4, 10].
   * Tự động tạo lưới lịch sân trong ngày từ `05:00` đến `24:00` (mỗi khung 1 giờ) chia theo từng sân con (`Sân 1`, `Sân 2`...) dựa vào số lượng sân thực tế[cite: 4, 10].
   * Cho phép chọn/bỏ chọn nhiều khung giờ trống, tự động tính tổng số khung giờ và tổng chi phí dự kiến[cite: 10].
   * Kiểm tra xung đột lịch đặt và kích hoạt cơ chế **giữ chỗ tạm thời 10 phút** (`sportgoHolds`) trước khi chuyển sang trang thanh toán[cite: 10].
4. **Thanh toán hóa đơn & Đếm ngược giữ sân (`checkout.js`):**
   * Đọc hóa đơn tạm từ `sessionStorage` (`sportgoPendingBooking`), hiển thị bảng chi tiết từng sân con, khung giờ và tổng cộng tiền[cite: 6, 17].
   * Đồng hồ đếm ngược 10 phút (`#hold-countdown`)[cite: 6, 17]. Tự động đổi màu cảnh báo khi còn dưới 60 giây; nếu hết thời gian sẽ tự động giải phóng lượt giữ sân và chuyển hướng về lại trang chi tiết kèm thông báo hết hạn[cite: 10, 17].
   * Kiểm tra hợp lệ (Validation) thông tin khách hàng: Họ tên ($\ge 2$ ký tự), Số điện thoại (10 chữ số, bắt đầu bằng số 0), Email đúng định dạng chuẩn[cite: 17].
   * Kiểm tra trùng lịch lần cuối trước khi sinh mã đơn hàng (`orderId`) và lưu chính thức vào `localStorage` (`sportgoBookings`)[cite: 17].
5. **Quản lý lịch sử đặt sân – Tương đương nghiệp vụ Giỏ hàng (`booking-history.js`):**
   * Khôi phục dữ liệu từ `localStorage`, tự động **gộp các khung giờ liên tiếp** thuộc cùng một đơn hàng (`orderId`), cùng sân và cùng ngày thành một dòng hiển thị duy nhất (cộng dồn thời lượng và thành tiền)[cite: 9].
   * **Chỉnh sửa lịch đặt (Thay đổi ngày/khung giờ/thời lượng):** Cho phép mở form sửa trực tiếp trên dòng lịch đặt, tự động cập nhật danh sách giờ kết thúc hợp lệ, kiểm tra không trùng với lịch khác (`hasConflict`), tính lại thành tiền theo đơn giá từng khung giờ và lưu lại vào `localStorage`[cite: 9].
   * **Xóa lịch đặt:** Hiển thị hộp thoại xác nhận tùy chỉnh (`sgConfirm`), xóa các khung giờ thuộc nhóm đó khỏi `localStorage` và tính lại dòng **Tổng cộng** toàn bộ lịch đặt[cite: 9].

### 5.2. Các phần mới dừng ở giao diện tĩnh (Chưa tích hợp xử lý JS)
* Các liên kết Đăng nhập (`login.html`), Đăng ký (`signup.html`), Chỉnh sửa thông tin cá nhân (`edit-profile.html`) hiện mới đặt liên kết chờ trên giao diện[cite: 1, 8].
* Trang Thông tin tài khoản (`profile.html`) và Đổi mật khẩu (`change-password.html`) hiện là giao diện HTML/CSS tĩnh[cite: 5, 8].
* Thanh phân trang (`.courts-pagination`) tại `courts.html` và mục chọn phương thức thanh toán trên `checkout.html` hiện hiển thị ở mức giao diện tĩnh[cite: 3, 6].

---

## 6. Hướng dẫn chạy Website
Dự án sử dụng HTML5, CSS3 và Vanilla JavaScript thuần nên không cần cài đặt môi trường Backend hay cơ sở dữ liệu.
1. Tải mã nguồn về máy hoặc clone từ GitHub:
   ```bash
   git clone [Đường_dẫn_GitHub_của_nhóm]
   ```
2. Mở thư mục `SPORTGO_final-project` bằng **Visual Studio Code**[cite: 34].
3. Truy cập vào thư mục chứa mã nguồn giao diện: `SportGo_project/Front-end/`[cite: 34].
4. **Cách chạy khuyến nghị:** Nhấn chuột phải vào tệp `SportGo_project/Front-end/index.html` $\rightarrow$ chọn **Open with Live Server** (hoặc mở trực tiếp tệp `index.html` bằng trình duyệt Chrome, Edge, Firefox)[cite: 34, 35].

---

## 7. Hướng dẫn kiểm thử các chức năng chính

| STT | Chức năng kiểm thử | Các bước thực hiện | Kết quả mong đợi |
| :-- | :--- | :--- | :--- |
| 1 | **Tìm kiếm từ Trang chủ** | Mở `index.html`, nhập từ khóa `"Phong Vũ"` hoặc `"Thủ Đức"`, chọn ngày đặt $\rightarrow$ Nhấn **Tìm kiếm**[cite: 7, 14]. | Chuyển sang `courts.html` kèm URL params, hiển thị đúng các sân khớp từ khóa và tự động gắn tham số `date` vào nút *Xem chi tiết*[cite: 15]. |
| 2 | **Lọc kết hợp & Sắp xếp** | Tại `courts.html`, chọn danh mục **Cầu lông**, chọn Quận **Tân Phú**, nhập giá từ `30000` đến `50000` $\rightarrow$ Nhấn **Tìm kiếm**[cite: 3]. Thử đổi mục *Sắp xếp*[cite: 3]. | Hiển thị đúng *Sân cầu lông Phong Vũ* (34.000đ/giờ), bộ đếm cập nhật `Hiển thị 1/9 sân thể thao`[cite: 13, 14]. Nếu nhập giá `min > max` sẽ bật cảnh báo[cite: 13]. |
| 3 | **Xem chi tiết & Chọn giờ** | Nhấn **Xem chi tiết** vào *Sân cầu lông Phong Vũ* (`courts-details.html?id=1`)[cite: 14, 16]. Chọn ngày đặt sân, click chọn 2 ô giờ liên tiếp (VD: `Sân 1` lúc `06:00` và `07:00`)[cite: 10]. | Các ô đổi sang màu *Đang chọn*, mục *Chi phí dự kiến* cập nhật `2 khung giờ · Tổng cộng 68.000đ`[cite: 4, 10, 14]. |
| 4 | **Kiểm tra ID sân không hợp lệ** | Sửa tham số trên thanh địa chỉ thành `courts-details.html?id=999`[cite: 10]. | Trang hiển thị thông báo *"Không tìm thấy sân thể thao!"* kèm liên kết quay lại danh sách sân[cite: 10]. |
| 5 | **Thanh toán & Kiểm tra lỗi nhập liệu** | Từ bước 3, nhấn **Xác nhận đặt sân** để sang `checkout.html`[cite: 4, 10]. Thử bấm *Thanh toán ngay* khi bỏ trống hoặc nhập sai SĐT/Email[cite: 6, 17]. Sau đó nhập đúng (VD: SĐT `0901234567`) và bấm thanh toán[cite: 6, 17]. | Đồng hồ đếm ngược từ `10:00`[cite: 6, 17]. Báo lỗi nếu nhập thiếu hoặc sai định dạng[cite: 17]. Khi hợp lệ, lưu đơn và chuyển sang `booking-history.html?success=1`[cite: 17]. |
| 6 | **Gộp giờ, Sửa & Xóa lịch đặt** | Tại `booking-history.html`, kiểm tra dòng lịch vừa đặt[cite: 2, 9]. Nhấn **Sửa**, đổi giờ kết thúc tăng thêm 1 tiếng $\rightarrow$ **Lưu thay đổi**[cite: 9]. Sau đó nhấn **Xóa**[cite: 9]. | 2 ca `06:00` và `07:00` được gộp thành `06:00 – 08:00` (`2 giờ`)[cite: 9]. Khi sửa giờ kết thúc thành `09:00`, thời lượng cập nhật thành `3 giờ`, tiền tăng lên `102.000đ`[cite: 9, 14]. Khi bấm Xóa sẽ hiện modal xác nhận `sgConfirm`[cite: 9]. |
| 7 | **Kiểm tra lưu trữ `localStorage`** | Mở Chrome DevTools (`F12` $\rightarrow$ *Application* $\rightarrow$ *Local Storage*), tải lại trang `booking-history.html` và quay lại trang `courts-details.html` (chọn đúng ngày vừa đặt)[cite: 9, 10, 27]. | Khóa `sportgoBookings` giữ nguyên dữ liệu sau khi tải lại trang[cite: 9, 27]. Trên trang chi tiết sân, các khung giờ đã đặt bị vô hiệu hóa (`disabled`, trạng thái *Đã đặt*)[cite: 10]. |

---

## 8. Những vấn đề đã gặp và Cách khắc phục
1. **Tìm kiếm tiếng Việt có dấu và không dấu không khớp nhau:**
   * *Nguyên nhân:* Người dùng có thể nhập `"tan phu"` hoặc `"Tân Phú"`, nếu chỉ so sánh chuỗi thông thường sẽ bỏ sót kết quả.
   * *Cách khắc phục:* Xây dựng hàm `normalize()` sử dụng `.normalize("NFD").replace(/[\u0300-\u036f]/g, "")` kết hợp chuyển đổi `đ/Đ` thành `d/D` trong cả `court-filter.js` và `court-search.js`[cite: 13, 15].
2. **Đặt nhiều khung giờ liên tiếp bị tách thành nhiều dòng rời rạc trong Lịch sử đặt sân:**
   * *Nguyên nhân:* Mỗi ô chọn trên bảng lịch tương ứng với từng ca 1 giờ riêng biệt khi lưu vào `localStorage`[cite: 9, 10, 17].
   * *Cách khắc phục:* Xây dựng hàm `groupBookings()` trong `booking-history.js` để tự động gộp các bản ghi có cùng `orderId`, `courtId`, `subCourtId`, `date` và có giờ kết thúc của ca trước trùng với giờ bắt đầu của ca sau (`previous.end === booking.start`), đồng thời lưu lại mảng `originalIndexes` để khi người dùng Sửa hoặc Xóa vẫn thao tác chính xác trên các bản ghi gốc[cite: 9].
3. **Kiểm soát xung đột trùng lịch đặt sân:**
   * *Nguyên nhân:* Người dùng có thể chỉnh sửa lại khung giờ trong lịch sử trùng vào khung giờ đã có đơn đặt khác, hoặc mở nhiều tab cùng lúc[cite: 9, 10].
   * *Cách khắc phục:* Kiểm tra giao thoa khoảng thời gian (`start < interval.end && end > interval.start`) tại cả 3 bước: khi hiển thị bảng lịch (`court-detail.js`), trước khi xác nhận thanh toán (`checkout.js`), và khi lưu chỉnh sửa lịch đặt (`hasConflict` trong `booking-history.js`)[cite: 9, 10, 17].

---

## 9. Đường dẫn Repository GitHub
* **GitHub Repository:** [Dán link GitHub Repository của nhóm vào đây]
* **GitHub Pages (Nếu có):** [Dán link GitHub Pages vào đây]

---

## 10. Các phần đã sử dụng AI hỗ trợ
Nhóm sử dụng AI làm công cụ hỗ trợ kỹ thuật và đã chủ động kiểm tra, điều chỉnh mã nguồn để đồng bộ với cấu trúc HTML/CSS của dự án (chi tiết được ghi nhận tại tệp [`AI_USAGE.md`](./AI_USAGE.md))[cite: 31, 32, 33, 35]:
1. **Xử lý thời gian và gộp khung giờ:** Tham khảo thuật toán quy đổi chuỗi giờ `"HH:MM"` sang số phút (`toMinutes`) và hàm `groupBookings()` để gộp các khung giờ liên tiếp trong `booking-history.js`[cite: 9].
2. **Cơ chế giữ chỗ tạm thời 10 phút (Hold Timer):** Hỗ trợ thiết kế luồng kết hợp `sessionStorage` (`sportgoPendingBooking`) và `localStorage` (`sportgoHolds`) cùng bộ đếm ngược tại `checkout.js` và `court-detail.js`[cite: 10, 17].
3. **Hộp thoại xác nhận tùy chỉnh (`sgConfirm`):** Hỗ trợ viết hàm `Promise` tạo modal xác nhận xóa lịch đặt sân trong `booking-history.js` thay cho hộp thoại `confirm()` mặc định của trình duyệt[cite: 9].
4. **Rà soát dự án và chuẩn hóa tài liệu:** Hỗ trợ kiểm tra chéo các tệp mã nguồn, xây dựng kịch bản kiểm thử và trình bày tệp `README.md`[cite: 31, 32].


