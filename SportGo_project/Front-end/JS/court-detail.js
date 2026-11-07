
// =====================================
// 1. DỮ LIỆU 9 SÂN THỂ THAO
// =====================================

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
        description: "Sân cầu lông Phong Vũ phù hợp cho nhu cầu luyện tập và giao lưu cầu lông.",
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
        address: "320/1 Trần Bình Trọng, Phường 4, Quận 5, TP.HCM",
        price: 100000,
        rating: "4.7",
        reviews: "98"
    },
    {
        id: 3,
        name: "Sân cầu lông Vy Phong",
        sport: "Cầu lông",
        image: "images/caulong.webp",
        address: "47 Phú Định, Phường 16, Quận 8, TP.HCM",
        price: 60000,
        rating: "4.9",
        reviews: "156"
    },
    {
        id: 4,
        name: "Sân PPS Pickleball Phong Phú",
        sport: "Pickleball",
        image: "images/pickleball.webp",
        address: "261/9 Đình Phong Phú, Phường Tăng Nhơn Phú B, TP. Thủ Đức, TP.HCM",
        price: 220000,
        rating: "4.8",
        reviews: "85"
    },
    {
        id: 5,
        name: "Sân cầu lông Hàng Dương",
        sport: "Cầu lông",
        image: "images/caulong1.webp",
        address: "146 ĐH34, Phước Kiển, Nhà Bè, TP.HCM",
        price: 50000,
        rating: "4.7",
        reviews: "92"
    },
    {
        id: 6,
        name: "Sân Tennis Kỳ Hòa",
        sport: "Tennis",
        image: "images/tennis.jpg",
        address: "138A Sư Vạn Hạnh, Phường 12, Quận 10, TP.HCM",
        price: 200000,
        rating: "4.7",
        reviews: "110"
    },
    {
        id: 7,
        name: "Sân cầu lông Chu Văn An",
        sport: "Cầu lông",
        image: "images/caulong2.jpg",
        address: "Sân trong trường tiểu học Chu Văn An, Quận Bình Thạnh, TP.HCM",
        price: 45000,
        rating: "4.8",
        reviews: "134"
    },
    {
        id: 8,
        name: "Sân tennis Cộng Hòa",
        sport: "Tennis",
        image: "images/tennis2.jpg",
        address: "18D Cộng Hòa, P. 4, Q. Tân Bình, TP.HCM",
        price: 220000,
        rating: "4.9",
        reviews: "76"
    },
    {
        id: 9,
        name: "Sân POC Pickleball Kiến Thiết",
        sport: "Pickleball",
        image: "images/pickleball2.webp",
        address: "25 Tú Xương, Phường Tăng Nhơn Phú B, TP. Thủ Đức, TP.HCM",
        price: 250000,
        rating: "4.7",
        reviews: "105"
    }
];


// =====================================
// 2. LẤY MÃ SÂN TỪ URL
// =====================================

const params = new URLSearchParams(window.location.search);
const courtId = Number(params.get("id"));

const selectedCourt = courts.find(court => court.id === courtId);


// =====================================
// 3. XỬ LÝ MÃ SÂN KHÔNG HỢP LỆ
// =====================================

if (!selectedCourt) {
    document.querySelector(".court-detail-page").innerHTML = `
        <div style="text-align:center; padding:80px 20px;">
            <h2>Không tìm thấy sân thể thao!</h2>
            <p>Mã sân không hợp lệ hoặc sân không tồn tại.</p>
            <a href="courts.html">Quay lại danh sách sân</a>
        </div>
    `;
} else {

    // =====================================
    // 4. HIỂN THỊ THÔNG TIN SÂN
    // =====================================

    const court = selectedCourt;

    document.querySelector(".court-feature-image img").src = court.image;
    document.querySelector(".court-feature-image img").alt = court.name;

    document.querySelector(".court-sport-tag").textContent = court.sport;
    document.querySelector(".court-profile-info h1").textContent = court.name;

    document.querySelector(".court-profile-address span").textContent =
        court.address;

    document.querySelector(".court-profile-description").textContent =
        court.description || "Thông tin giới thiệu sân đang được cập nhật.";

    // Cập nhật đánh giá
    const quickInfo = document.querySelectorAll(".court-quick-info > div strong");

    if (quickInfo.length >= 2) {
        quickInfo[1].innerHTML = `
            <i class="fa-solid fa-star"></i> ${court.rating}
            <small>(${court.reviews})</small>
        `;
    }

    // =====================================
    // 5. HIỂN THỊ THÔNG TIN CHI TIẾT
    // =====================================

    const informationValues =
        document.querySelectorAll(".information-item .information-value");

    if (informationValues.length >= 4) {
        informationValues[0].textContent = court.address;

        informationValues[1].textContent =
            court.phone || "Đang cập nhật";

        informationValues[2].textContent =
            court.hours || "Đang cập nhật";

        informationValues[3].textContent =
            court.number || "Đang cập nhật";
    }

    // Tiện ích
    const amenitiesList = document.querySelector(".amenities-list");

    if (amenitiesList) {
        amenitiesList.innerHTML = court.amenities
            ? court.amenities.map(item => `<span>${item}</span>`).join("")
            : "<span>Đang cập nhật</span>";
    }

    // Giới thiệu sân
    const description = document.querySelector(".court-description p");

    if (description) {
        description.textContent =
            court.description || "Thông tin giới thiệu sân đang được cập nhật.";
    }

    // =====================================
    // 6. HIỂN THỊ BẢNG GIÁ
    // =====================================

    const priceTable = document.querySelector(".price-table tbody");

    if (court.prices) {
        priceTable.innerHTML = court.prices.map(item => `
            <tr>
                <td>${item.name}</td>
                <td>${item.time}</td>
                <td>${item.price.toLocaleString("vi-VN")}đ</td>
            </tr>
        `).join("");
    } else {
        priceTable.innerHTML = `
            <tr>
                <td>Giá thuê</td>
                <td>Đang cập nhật</td>
                <td>${court.price.toLocaleString("vi-VN")}đ/giờ</td>
            </tr>
        `;
    }

    // =====================================
    // 7. HIỂN THỊ ALBUM ẢNH
    // =====================================

    const gallerySection = document.querySelector(".court-gallery")
        ?.closest(".detail-section");

    if (court.gallery) {
        const galleryImages =
            document.querySelectorAll(".court-gallery img");

        galleryImages.forEach((img, index) => {
            img.src = court.gallery[index];
            img.alt = court.name;
        });
    } else if (gallerySection) {
        gallerySection.style.display = "none";
    }

    // =====================================
    // 8. XỬ LÝ ĐẶT SÂN
    // =====================================

    const bookingForm = document.querySelector("#booking-form");

    if (bookingForm) {
        const requestedDate = params.get("date");
        const bookingDateInput = document.querySelector("#booking-date");

        if (requestedDate && bookingDateInput) {
            bookingDateInput.value = requestedDate;
        }

        bookingForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const bookingDate =
                document.querySelector("#booking-date").value;

            const bookingTime =
                document.querySelector("#booking-time").value;

            if (!bookingDate || !bookingTime) {
                alert("Vui lòng chọn ngày và khung giờ đặt sân.");
                return;
            }

            const booking = {
                courtId: court.id,
                courtName: court.name,
                date: bookingDate,
                time: bookingTime,
                price: court.price
            };

            const bookingList =
                JSON.parse(localStorage.getItem("sportgoBookings")) || [];

            bookingList.push(booking);

            localStorage.setItem(
                "sportgoBookings",
                JSON.stringify(bookingList)
            );

            alert("Đặt sân thành công! Thông tin đã được thêm vào danh sách đặt sân.");

            bookingForm.reset();
        });
    }
}
