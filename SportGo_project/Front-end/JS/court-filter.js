// ========================================
// Sắp xếp giá 
// Lọc giá theo khoảng
// ========================================

document.addEventListener("DOMContentLoaded", function () {
    const grid = document.querySelector(".court-grid");
    if (!grid) return;

    const countText = document.getElementById("court-count");
    const sortSelect = document.getElementById("sort-courts");
    const minInput = document.querySelector('input[name="min-price"]');
    const maxInput = document.querySelector('input[name="max-price"]');
    const submitBtn = document.querySelector(".filter-submit");

    // Tạo thông báo rỗng nếu HTML chưa có
    let emptyMsg = document.getElementById("empty-message");
    if (!emptyMsg) {
        emptyMsg = document.createElement("p");
        emptyMsg.id = "empty-message";
        emptyMsg.textContent = "Không tìm thấy sân phù hợp.";
        emptyMsg.hidden = true;
        grid.after(emptyMsg);
    }

    // Đọc dữ liệu từ từng thẻ sân; lưu thứ tự ban đầu
    const cards = Array.from(grid.querySelectorAll(".court-card")).map(card => {
        const priceText = card.querySelector(".court-card-price").textContent;
        const ratingText = card.querySelector(".court-card-rating").textContent;
        return {
            element: card,
            price: Number(priceText.replace(/\D/g, "")),        // "Từ 34.000/giờ" -> 34000
            rating: parseFloat(ratingText.match(/[\d.]+/)[0])   // "4.8 (120...)" -> 4.8
        };
    });

    function readPrice(input) {
        if (!input || input.value.trim() === "") return null;
        const v = Number(input.value);
        return Number.isNaN(v) ? null : v;
    }

    function applyFilters() {
        const min = readPrice(minInput);
        const max = readPrice(maxInput);

        if (min !== null && max !== null && min > max) {
            alert("Giá thấp nhất không được lớn hơn giá cao nhất.");
            return;
        }

        // 1. Sắp xếp: tạo bản sao của cards rồi sort (không đụng mảng gốc)
        const type = sortSelect ? sortSelect.value : "default";
        const sorted = [...cards];
        if (type === "price-low")  sorted.sort((a, b) => a.price - b.price);
        if (type === "price-high") sorted.sort((a, b) => b.price - a.price);
        if (type === "rating")     sorted.sort((a, b) => b.rating - a.rating);

        // 2. Lọc giá: lọc trên danh sách đã sắp xếp
        const result = sorted.filter(c =>
            (min === null || c.price >= min) &&
            (max === null || c.price <= max)
        );

        // 3. Hiển thị: ẩn tất cả, rồi đưa các thẻ phù hợp vào đúng thứ tự
        cards.forEach(c => (c.element.style.display = "none"));
        result.forEach(c => {
            c.element.style.display = "";
            grid.appendChild(c.element);
        });

        emptyMsg.style.display = result.length > 0 ? "none" : "block";
        if (countText) countText.textContent = `Hiển thị ${result.length} sân thể thao`;
    }

    if (sortSelect) sortSelect.addEventListener("change", applyFilters);
    if (submitBtn) submitBtn.addEventListener("click", applyFilters);
    [minInput, maxInput].forEach(input => {
        if (input) input.addEventListener("keydown", e => {
            if (e.key === "Enter") applyFilters();
        });
    });
});