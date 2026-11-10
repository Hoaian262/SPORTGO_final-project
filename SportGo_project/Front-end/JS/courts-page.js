// ========================================
// TRANG DANH SÁCH SÂN
// ========================================

// Lấy khu vực hiển thị danh sách sân
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
// ========================================
// 2. HÀM ĐỊNH DẠNG GIÁ TIỀN
// ========================================

function formatPrice(price) {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ/giờ";
}

// Hiển thị toàn bộ sân khi mở trang
if (courtGrid && emptyMessage) {
    renderCourts(window.courts);
}




