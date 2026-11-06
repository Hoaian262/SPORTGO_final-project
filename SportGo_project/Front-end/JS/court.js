
const courts = [
    {
        id: 1,
        name: "Sân cầu lông Phong Vũ",
        sport: "Cầu lông",
        image: "images/phong vũ.jpg",
        address: "2 Lê Quát, Quận Tân Phú, TP. Hồ Chí Minh",
        price: 34000,
        rating: "4.8",
        reviews: "120",
        phone: "0775 267 069",
        hours: "05:00–24:00 hằng ngày",
        number: "4 sân thể thao",
        description: "Sân cầu lông Phong Vũ phục vụ nhu cầu luyện tập và giao lưu cầu lông.",
        amenities: ["Wifi", "Bãi giữ xe", "Phòng thay đồ", "Nhà vệ sinh"],
        gallery: [
            "images/phong vũ 1.jpg",
            "images/phong vũ 2.jpg",
            "images/phong vũ 3.jpg"
        ],
        prices: [
            { name: "Sáng", time: "05:00–12:00", price: 34000 },
            { name: "Chiều", time: "12:00–17:00", price: 60000 },
            { name: "Tối", time: "17:00–24:00", price: 89000 }
        ]
    },

    {
        id: 2,
        name: "Sân bóng rổ Lam Sơn",
        sport: "Bóng rổ",
        image: "images/bongro.jpg",
        address: "320/1 Trần Bình Trọng, Phường Chợ Quán, TP.HCM",
        price: 100000,
        rating: "4.7",
        reviews: "98",
        phone: "0909 222 958",
        hours: "Mở cửa 24 giờ hằng ngày",
        number: "Đang cập nhật",
        description: "Sân Lam Sơn thuộc hệ thống thể thao Phong Sơn, cung cấp không gian luyện tập nhiều môn thể thao, trong đó có bóng rổ.",
        amenities: [
            "Bãi giữ xe",
            "Nhà vệ sinh",
            "Khu vực ngồi nghỉ"
        ],
        gallery: [],
        prices: []
    },

    {
        id: 3,
        name: "Sân cầu lông Vy Phong",
        sport: "Cầu lông",
        image: "images/caulong.webp",
        address: "47 Phú Định, Phường 16, Quận 8, TP.HCM",
        price: 60000,
        rating: "4.9",
        reviews: "156",
        phone: "0398 690 986",
        hours: "05:00–23:00 hằng ngày",
        number: "Khoảng 9 sân (theo thông tin tổng hợp)",
        description: "Sân cầu lông Vy Phong phục vụ người chơi phong trào và nhu cầu tập luyện. Sân được nhận xét tích cực về mặt thảm, ánh sáng và không gian.",
        amenities: [
            "Bãi giữ xe",
            "Khu vực ngồi nghỉ",
            "Quầy nước",
            "Nhà vệ sinh",
            "Wifi"
        ],
        gallery: [],
      prices: []
    },

    {
        id: 4,
        name: "Sân PPS Pickleball Phong Phú",
        sport: "Pickleball",
        image: "images/pickleball.webp",
        address: "261/9 Đình Phong Phú, Phường Tăng Nhơn Phú B, TP. Thủ Đức, TP.HCM",
        price: 220000,
        rating: "4.8",
        reviews: "85",
        phone: "0943 017 275",
        hours: "05:00–23:00 hằng ngày",
        number: "3 sân",
        description: "PPS Pickleball Phong Phú là địa điểm cho thuê sân pickleball, phù hợp với nhu cầu luyện tập và giao lưu. Sân có hệ thống chiếu sáng phục vụ hoạt động buổi tối.",
        amenities: [
            "Bãi giữ xe",
            "Phòng thay đồ",
            "Nhà vệ sinh",
            "Quầy nước",
            "Hệ thống chiếu sáng"
        ],
        gallery: [],
        prices: []
    },

    {
        id: 5,
        name: "Sân cầu lông Hàng Dương",
        sport: "Cầu lông",
        image: "images/caulong1.webp",
        address: "146 ĐH34, Phước Kiển, Nhà Bè, TP.HCM",
        price: 50000,
        rating: "4.7",
        reviews: "92",
        phone: "Đang cập nhật",
        hours: "Đang cập nhật",
        number: "Đang cập nhật",
        description: "Sân cầu lông Hàng Dương phục vụ nhu cầu luyện tập và giao lưu cầu lông tại khu vực Nhà Bè.",
        amenities: [],
        gallery: [],
        prices: []
    },

    {
        id: 6,
        name: "Sân Tennis Kỳ Hòa",
        sport: "Tennis",
        image: "images/tennis.jpg",
        address: "138A Sư Vạn Hạnh, Phường 12, Quận 10, TP.HCM",
        price: 200000,
        rating: "4.7",
        reviews: "110",
        phone: "Đang cập nhật",
        hours: "05:00–23:00 hằng ngày",
        number: "Đang cập nhật",
        description: "Sân Tennis Kỳ Hòa phục vụ nhu cầu tập luyện và thi đấu tennis. Một số khu vực sân có mái che, hỗ trợ người chơi trong điều kiện thời tiết không thuận lợi.",
        amenities: [
            "Bãi giữ xe",
            "Căng tin"
        ],
        gallery: [],
        prices: []
    },

    {
        id: 7,
        name: "Sân cầu lông Chu Văn An",
        sport: "Cầu lông",
        image: "images/caulong2.jpg",
        address: "Sân trong trường tiểu học Chu Văn An, Quận Bình Thạnh, TP.HCM",
        price: 45000,
        rating: "4.8",
        reviews: "134",
        phone: "0975 336 878",
        hours: "05:30–07:00 và 18:00–21:00",
        number: "4 sân",
        description: "Sân cầu lông Chu Văn An nằm trong khuôn viên trường tiểu học Chu Văn An, phục vụ nhu cầu luyện tập và giao lưu cầu lông ngoài giờ học.",
        amenities: [
            "Quạt",
            "Ghế ngồi",
            "Nhà vệ sinh",
            "Bãi giữ xe"
        ],
        gallery: [],
       prices: []
    },

    {
        id: 8,
        name: "Sân tennis Cộng Hòa",
        sport: "Tennis",
        image: "images/tennis2.jpg",
        address: "18D Cộng Hòa, Phường 4, Quận Tân Bình, TP.HCM",
        price: 220000,
        rating: "4.9",
        reviews: "76",
        phone: "Đang cập nhật",
        hours: "Đang cập nhật",
        number: "Đang cập nhật",
        description: "Sân tennis Cộng Hòa phục vụ nhu cầu luyện tập và giao lưu tennis tại khu vực Tân Bình.",
        amenities: [],
        gallery: [],
        prices: []
    },

    {
        id: 9,
        name: "Sân POC Pickleball Kiến Thiết",
        sport: "Pickleball",
        image: "images/pickleball2.webp",
        address: "25 Tú Xương, Phường Tăng Nhơn Phú B, TP. Thủ Đức, TP.HCM",
        price: 250000,
        rating: "4.7",
        reviews: "105",
        phone: "0926 666 357",
        hours: "05:00–23:00 hằng ngày",
        number: "4 sân",
        description: "POC Pickleball Kiến Thiết là cụm sân pickleball có mái che, hệ thống đèn LED và khu vực đỗ xe, phục vụ nhu cầu tập luyện và giao lưu.",
        amenities: [
            "Bãi giữ xe ô tô",
            "Bãi giữ xe máy",
            "Wifi",
            "Hệ thống đèn LED",
            "Căng tin",
            "Phòng tắm",
            "Phòng thay đồ"
        ],
        gallery: [],
       prices: []
    }
];

// Chia sẻ dữ liệu sân để các file JavaScript khác sử dụng
window.courts = courts;
// Lấy khu vực hiển thị danh sách sân và thông báo
const courtGrid = document.getElementById("court-grid");
const emptyMessage = document.getElementById("empty-message");

// Hàm hiển thị danh sách sân
function renderCourts(list) {
    if (!courtGrid || !emptyMessage) return;

    // Xóa danh sách cũ trước khi hiển thị
    courtGrid.innerHTML = "";

    // Kiểm tra danh sách có sân hay không
    if (list.length === 0) {
        emptyMessage.hidden = false;
        return;
    }

    emptyMessage.hidden = true;

    // Tạo thẻ sân từ dữ liệu
    list.forEach(court => {
        courtGrid.innerHTML += `
            <article class="court-card">
                <div class="court-card-image">
                    <img src="${court.image}" alt="${court.name}">
                </div>

                <div class="court-card-content">
                    <h3 class="court-card-title">${court.name}</h3>
                    <p class="court-card-address">${court.address}</p>
                    <p class="court-card-rating">
                        ★ ${court.rating} (${court.reviews} đánh giá)
                    </p>

                    <div class="court-card-bottom">
                        <p class="court-card-price">
                            ${court.price.toLocaleString("vi-VN")}đ/giờ
                        </p>
                        <a href="courts-details.html?id=${court.id}"
                           class="court-card-button">
                            Xem chi tiết
                        </a>
                    </div>
                </div>
            </article>
        `;
    });
}

// Hiển thị toàn bộ sân khi mở trang
if (courtGrid && emptyMessage) {
    renderCourts(courts);
}