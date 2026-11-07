// ========================================
// court-filter.js
// Sắp xếp giá 
// Lọc giá theo khoảng
// ========================================

// Trả về MẢNG MỚI đã sắp xếp, không làm đổi mảng gốc
function sortCourts(list, type) {
    const sorted = [...list];

    if (type === "price-low") {
        sorted.sort((a, b) => a.price - b.price);
    } else if (type === "price-high") {
        sorted.sort((a, b) => b.price - a.price);
    } else if (type === "rating") {
        sorted.sort((a, b) => Number(b.rating) - Number(a.rating));
    }

    return sorted;
}

// Đọc giá từ ô nhập: để trống thì trả về null (không giới hạn)
function readPriceInput(id) {
    const input = document.getElementById(id);
    if (!input || input.value.trim() === "") return null;

    const value = Number(input.value);
    return Number.isNaN(value) ? null : value;
}

// Trả về MẢNG MỚI các sân nằm trong khoảng giá
function filterByPrice(list, minPrice, maxPrice) {
    return list.filter(court => {
        if (minPrice !== null && court.price < minPrice) return false;
        if (maxPrice !== null && court.price > maxPrice) return false;
        return true;
    });
}

// Hàm điều phối: lọc giá -> sắp xếp -> hiển thị
// Sau này thêm bộ lọc khác (môn, tiện ích, đánh giá) thì thêm bước vào đây
function applyFilters() {
    const minPrice = readPriceInput("min-price");
    const maxPrice = readPriceInput("max-price");

    if (minPrice !== null && maxPrice !== null && minPrice > maxPrice) {
        alert("Giá thấp nhất không được lớn hơn giá cao nhất.");
        return;
    }

    const sortType = document.getElementById("sort-courts").value;

    let result = filterByPrice(courts, minPrice, maxPrice);
    result = sortCourts(result, sortType);

    renderCourts(result);
}

// Gắn sự kiện (chỉ gọi một lần)
function initCourtFilter() {
    const sortSelect = document.getElementById("sort-courts");
    if (sortSelect) sortSelect.addEventListener("change", applyFilters);

    const filterSubmit = document.getElementById("filter-submit");
    if (filterSubmit) filterSubmit.addEventListener("click", applyFilters);

    ["min-price", "max-price"].forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener("keydown", event => {
                if (event.key === "Enter") applyFilters();
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", initCourtFilter);