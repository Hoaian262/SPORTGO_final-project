
(() => {
    // ========================================
    // 1. LẤY CÁC PHẦN TỬ HTML
    // ========================================

    const searchParams = new URLSearchParams(window.location.search);

    const keywordInput = document.querySelector("#site-search-keyword");
    const dateInput = document.querySelector("#site-search-date");

    const categoryButtons = Array.from(
        document.querySelectorAll(".sport-category")
    );

    // ========================================
    // 2. ÁNH XẠ MÃ MÔN THỂ THAO
    // ========================================

    const sportSlugs = {
        "bong-da": "Bóng đá",
        "bong-ro": "Bóng rổ",
        "cau-long": "Cầu lông",
        "pickleball": "Pickleball",
        "tennis": "Tennis"
    };

    // ========================================
    // 3. CHUẨN HÓA CHỮ
    // ========================================

    function normalizeSearchText(value) {
        return String(value || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D")
            .toLowerCase()
            .trim();
    }

    // ========================================
    // 4. LẤY THÔNG TIN TÌM KIẾM TỪ URL
    // ========================================

    const keyword = searchParams.get("keyword") || "";
    const bookingDate = searchParams.get("date") || "";
    const requestedSport = searchParams.get("sport") || "";

    // Điền lại từ khóa và ngày đặt vào ô tìm kiếm
    if (keywordInput) {
        keywordInput.value = keyword;
    }

    if (dateInput) {
        dateInput.value = bookingDate;
    }

    // Xác định danh mục đang được chọn
    const categoryFromUrl =
        sportSlugs[requestedSport] ||
        categoryButtons.find(button =>
            normalizeSearchText(button.dataset.category) ===
            normalizeSearchText(requestedSport)
        )?.dataset.category;

    let selectedCategory =
        categoryFromUrl ||
        categoryButtons.find(button =>
            button.classList.contains("sport-category--active")
        )?.dataset.category ||
        "all";

    // ========================================
    // 5. CHUYỂN TÊN MÔN THỂ THAO THÀNH SLUG
    // ========================================

    function getSportSlug(category) {
        return Object.keys(sportSlugs).find(slug =>
            normalizeSearchText(sportSlugs[slug]) ===
            normalizeSearchText(category)
        ) || "";
    }

    // ========================================
    // 6. CẬP NHẬT DANH MỤC ĐANG ĐƯỢC CHỌN
    // ========================================

    function updateActiveCategory() {
        categoryButtons.forEach(button => {
            const isActive =
                normalizeSearchText(button.dataset.category) ===
                normalizeSearchText(selectedCategory);

            button.classList.toggle(
                "sport-category--active",
                isActive
            );

            button.setAttribute(
                "aria-pressed",
                String(isActive)
            );
        });
    }

    // ========================================
    // 7. CHUYỂN NGÀY ĐẶT VÀO LINK CHI TIẾT SÂN
    // ========================================

    function updateBookingDateLinks() {
        if (!bookingDate) return;

        document.querySelectorAll(".court-card-button").forEach(link => {
            const detailUrl = new URL(
                link.href,
                window.location.href
            );

            detailUrl.searchParams.set("date", bookingDate);

            link.href = detailUrl.href;
        });
    }

    // ========================================
    // 8. ÁP DỤNG TÌM KIẾM VÀ BỘ LỌC
    // ========================================

    function applySearchAndFilters() {
        if (typeof window.applyCourtFilters === "function") {
            window.applyCourtFilters();
        } else {
            console.error(
                "Không tìm thấy applyCourtFilters(). Hãy kiểm tra thứ tự tải script."
            );
        }
    }

    // ========================================
    // 9. XỬ LÝ KHI CHỌN DANH MỤC THỂ THAO
    // ========================================

    categoryButtons.forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();

            selectedCategory =
                button.dataset.category || "all";

            // Cập nhật URL
            const nextUrl = new URL(window.location.href);
            const sportSlug = getSportSlug(selectedCategory);

            if (sportSlug) {
                nextUrl.searchParams.set("sport", sportSlug);
            } else {
                nextUrl.searchParams.delete("sport");
            }

            window.history.replaceState({}, "", nextUrl);

            // Cập nhật giao diện danh mục
            updateActiveCategory();

            // Gọi bộ lọc xử lý kết quả
            applySearchAndFilters();
        });
    });

    // ========================================
    // 10. GIỮ DANH MỤC KHI GỬI FORM TÌM KIẾM
    // ========================================

    document.querySelectorAll(".home-search-form").forEach(form => {
        form.addEventListener("submit", () => {
            let sportInput = form.querySelector(
                'input[name="sport"]'
            );

            if (!sportInput) {
                sportInput = document.createElement("input");
                sportInput.type = "hidden";
                sportInput.name = "sport";
                form.append(sportInput);
            }

            sportInput.value = getSportSlug(selectedCategory);
        });
    });

    // ========================================
    // 11. KHỞI TẠO
    // ========================================

    updateActiveCategory();

    updateBookingDateLinks();

    // Áp dụng tìm kiếm và bộ lọc khi tải trang
    applySearchAndFilters();

    // Cuộn đến danh sách sân khi có điều kiện tìm kiếm
    if (keyword || bookingDate || requestedSport) {
        document.querySelector(".courts-content")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

})();
