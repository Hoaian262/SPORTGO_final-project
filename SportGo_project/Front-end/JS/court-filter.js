
// ========================================
// BỘ LỌC VÀ PHÂN TRANG DANH SÁCH SÂN
// ========================================

(() => {
    const grid = document.querySelector(".court-grid");

    if (!grid) return;

    const countText = document.getElementById("court-count");
    const sortSelect = document.getElementById("sort-courts");

    const citySelect = document.getElementById("filter-city");
    const districtSelect = document.getElementById("filter-district");

    const minInput = document.querySelector('input[name="min-price"]');
    const maxInput = document.querySelector('input[name="max-price"]');

    const submitBtn = document.querySelector(".filter-submit");
    const emptyMessage = document.getElementById("empty-message");
    const pagination = document.querySelector(".courts-pagination");

    // Số sân tối đa trên mỗi trang
    const courtsPerPage = 9;

    // Lấy toàn bộ dữ liệu sân
    const courtData = Array.isArray(window.courts)
        ? window.courts
        : [];

    if (courtData.length === 0) {
        console.error("Không tìm thấy dữ liệu sân!");
        return;
    }

    // Trang hiện tại
    let currentPage = Number(
        new URLSearchParams(location.search).get("page")
    ) || 1;

    // Mã quận/huyện tương ứng với từng sân
    const districtByCourtId = {
        1: "tan-phu",
        2: "quan-5",
        3: "quan-8",
        4: "thu-duc",
        5: "nha-be",
        6: "quan-10",
        7: "binh-thanh",
        8: "tan-binh",
        9: "thu-duc"
    };

    // Chuẩn hóa chữ, bỏ dấu tiếng Việt
    function normalize(value) {
        return String(value || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D")
            .toLowerCase()
            .trim();
    }

    // Đọc giá từ ô nhập
    function readPrice(input) {
        if (!input || input.value.trim() === "") {
            return null;
        }

        const value = Number(input.value);

        return Number.isFinite(value) && value >= 0
            ? value
            : null;
    }

    // Kiểm tra tiện ích
    function hasAmenity(court, selectedAmenity) {
        const amenities = (court.amenities || [])
            .map(item => normalize(item));

        const amenityMap = {
            wifi: ["wifi"],
            parking: ["bai giu xe"],
            "changing-room": ["phong thay do"],
            toilet: ["nha ve sinh"]
        };

        const keywords = amenityMap[selectedAmenity] || [];

        return amenities.some(item =>
            keywords.some(keyword => item.includes(keyword))
        );
    }

    // Kiểm tra đánh giá
    function matchesRating(rating, selectedRatings) {
        if (selectedRatings.length === 0) return true;

        return selectedRatings.some(value => {
            if (value === "5") return rating >= 5;
            if (value === "4") return rating >= 4 && rating < 5;
            if (value === "3") return rating < 4;

            return false;
        });
    }

    // Cập nhật URL khi chuyển trang
    function updatePageUrl(page) {
        const url = new URL(window.location.href);

        url.searchParams.set("page", page);

        window.history.replaceState({}, "", url);
    }

    // Cập nhật thanh phân trang
    function renderPagination(totalPages) {
        if (!pagination) return;

        pagination.innerHTML = "";

        if (totalPages <= 1) {
            pagination.style.display = "none";
            return;
        }

        pagination.style.display = "flex";

        // Nút Trước
        const previous = document.createElement("a");

        previous.href = "#";
        previous.className = "pagination-link";
        previous.textContent = "Trước";

        if (currentPage === 1) {
            previous.classList.add("pagination-link--disabled");
        }

        previous.addEventListener("click", event => {
            event.preventDefault();

            if (currentPage > 1) {
                currentPage--;
                displayCurrentPage();
            }
        });

        pagination.appendChild(previous);

        // Các nút số trang
        for (let page = 1; page <= totalPages; page++) {
            const link = document.createElement("a");

            link.href = "#";
            link.className = "pagination-link";
            link.textContent = page;

            if (page === currentPage) {
                link.classList.add("pagination-link--active");
            }

            link.addEventListener("click", event => {
                event.preventDefault();

                currentPage = page;
                displayCurrentPage();
            });

            pagination.appendChild(link);
        }

        // Nút Tiếp
        const next = document.createElement("a");

        next.href = "#";
        next.className = "pagination-link";
        next.textContent = "Tiếp";

        if (currentPage === totalPages) {
            next.classList.add("pagination-link--disabled");
        }

        next.addEventListener("click", event => {
            event.preventDefault();

            if (currentPage < totalPages) {
                currentPage++;
                displayCurrentPage();
            }
        });

        pagination.appendChild(next);
    }

    // Lưu kết quả sau khi lọc và sắp xếp
    let filteredCourts = [];

    // Hiển thị sân theo trang hiện tại
    function displayCurrentPage() {
        const totalPages = Math.ceil(
            filteredCourts.length / courtsPerPage
        );

        // Đảm bảo trang hiện tại hợp lệ
        if (totalPages === 0) {
            currentPage = 1;
        } else if (currentPage > totalPages) {
            currentPage = totalPages;
        }

        // Xác định vị trí sân đầu và cuối
        const startIndex = (currentPage - 1) * courtsPerPage;

        const endIndex = startIndex + courtsPerPage;

        // Lấy tối đa 9 sân của trang hiện tại
        const currentCourts = filteredCourts.slice(
            startIndex,
            endIndex
        );

        // Hiển thị danh sách sân
        window.renderCourts(currentCourts);

        // Cập nhật số lượng sân
        if (countText) {
            countText.textContent =
                `Hiển thị ${currentCourts.length}/${filteredCourts.length} sân thể thao`;
        }

        // Cập nhật thanh phân trang
        renderPagination(totalPages);

        // Cập nhật URL
        updatePageUrl(currentPage);

        // Giữ ngày đặt sân trong đường dẫn chi tiết
        const bookingDate = new URLSearchParams(
            location.search
        ).get("date");

        if (bookingDate) {
            document.querySelectorAll(".court-card-button")
                .forEach(link => {
                    const url = new URL(link.href);

                    url.searchParams.set("date", bookingDate);

                    link.href = url.href;
                });
        }
    }

    // ========================================
    // LỌC TOÀN BỘ DANH SÁCH SÂN
    // ========================================

    function applyFilters(resetPage = true) {
        const min = readPrice(minInput);
        const max = readPrice(maxInput);

        if (min !== null && max !== null && min > max) {
            alert("Giá thấp nhất không được lớn hơn giá cao nhất.");
            return;
        }

        const selectedCity = citySelect?.value || "";
        const selectedDistrict = districtSelect?.value || "";

        const selectedAmenities = Array.from(
            document.querySelectorAll(
                'input[name="amenities"]:checked'
            )
        ).map(input => input.value);

        const selectedRatings = Array.from(
            document.querySelectorAll(
                'input[name="rating"]:checked'
            )
        ).map(input => input.value);

        const params = new URLSearchParams(location.search);

        const keyword = normalize(params.get("keyword") || "");

        const sportSlugs = {
            "bong-da": "Bóng đá",
            "bong-ro": "Bóng rổ",
            "cau-long": "Cầu lông",
            "pickleball": "Pickleball",
            "tennis": "Tennis"
        };

        const activeCategory = document.querySelector(
            ".sport-category--active"
        );

        const selectedSport =
            sportSlugs[params.get("sport")] ||
            activeCategory?.dataset.category ||
            "all";

        // Lọc trên toàn bộ dữ liệu sân
        filteredCourts = courtData.filter(court => {
            const title = normalize(court.name);
            const address = normalize(court.address);

            const matchesCity =
                !selectedCity || selectedCity === "hcm";

            const matchesDistrict =
                !selectedDistrict ||
                districtByCourtId[court.id] === selectedDistrict;

            const matchesPrice =
                (min === null || court.price >= min) &&
                (max === null || court.price <= max);

            const matchesAmenities =
                selectedAmenities.every(amenity =>
                    hasAmenity(court, amenity)
                );

            const matchesSelectedRating =
                matchesRating(
                    Number(court.rating || 0),
                    selectedRatings
                );

            const matchesKeyword =
                !keyword ||
                (title + " " + address).includes(keyword);

            const matchesSport =
                selectedSport === "all" ||
                normalize(court.sport).includes(
                    normalize(selectedSport)
                );

            return matchesCity &&
                matchesDistrict &&
                matchesPrice &&
                matchesAmenities &&
                matchesSelectedRating &&
                matchesKeyword &&
                matchesSport;
        });

        // Sắp xếp kết quả
        const sortType = sortSelect?.value || "default";

        if (sortType === "price-low") {
            filteredCourts.sort((a, b) => a.price - b.price);
        }

        if (sortType === "price-high") {
            filteredCourts.sort((a, b) => b.price - a.price);
        }

        if (sortType === "rating") {
            filteredCourts.sort(
                (a, b) => b.rating - a.rating
            );
        }

        // Khi lọc hoặc tìm kiếm mới, quay về trang 1
        if (resetPage) {
            currentPage = 1;
        }

        displayCurrentPage();
    }

    // Cho phép các file JS khác gọi bộ lọc
    window.applyCourtFilters = applyFilters;

    // Nhấn nút tìm kiếm bộ lọc
    submitBtn?.addEventListener("click", () => {
        applyFilters(true);
    });

    // Thay đổi sắp xếp
    sortSelect?.addEventListener("change", () => {
        applyFilters(true);
    });

    // Nhấn Enter trong ô giá
    [minInput, maxInput].forEach(input => {
        input?.addEventListener("keydown", event => {
            if (event.key === "Enter") {
                applyFilters(true);
            }
        });
    });

    // Khởi tạo danh sách sân
    applyFilters(false);

})();
