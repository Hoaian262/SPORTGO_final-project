
// ========================================
// BỘ LỌC TÌM KIẾM SÂN SPORTGO
// Địa điểm - Giá - Tiện ích - Đánh giá
// Kết hợp tìm kiếm và danh mục thể thao
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

    // Lấy dữ liệu sân từ court.js
  const courtData = Array.isArray(window.courts)
    ? window.courts
    : [];

if (courtData.length === 0) {
    console.error("Không tìm thấy dữ liệu sân trong window.courts!");
    return;
}

    const courtMap = new Map(
        courtData.map(court => [String(court.id), court])
    );

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

    // Chuẩn hóa chữ để so sánh không phân biệt dấu
    function normalize(value) {
        return String(value || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D")
            .toLowerCase()
            .trim();
    }

    // Lấy mã ID của sân từ đường dẫn chi tiết
    function getCourtId(card) {
        const link = card.querySelector(".court-card-button");

        if (!link) return null;

        const url = new URL(link.getAttribute("href"), location.href);

        return url.searchParams.get("id");
    }

    // Lấy dữ liệu từng thẻ sân
   const cards = Array.from(
    grid.querySelectorAll(".court-card")
).map(card => {
    const id = getCourtId(card);
    const data = courtMap.get(String(id));

    if (!data) {
        console.warn("Không tìm thấy dữ liệu cho thẻ sân:", id);
    }

    const priceText =
        card.querySelector(".court-card-price")?.textContent || "";

    const ratingText =
        card.querySelector(".court-card-rating")?.textContent || "";

    return {
        element: card,
        data: data,
        id: Number(id),
        price: data?.price ??
            Number(priceText.replace(/\D/g, "")),
        rating: Number(data?.rating ??
            ratingText.match(/[\d.]+/)?.[0] ?? 0),
        district: districtByCourtId[id] || ""
    };
}).filter(court => court.data);

    // Kiểm tra giá nhập vào
    function readPrice(input) {
        if (!input || input.value.trim() === "") return null;

        const value = Number(input.value);

        return Number.isFinite(value) && value >= 0
            ? value
            : null;
    }

    // Kiểm tra tiện ích của sân
    function hasAmenity(court, selectedAmenity) {
        const amenities = (court.data?.amenities || [])
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

    // Lọc theo mức đánh giá
    function matchesRating(rating, selectedRatings) {
        if (selectedRatings.length === 0) return true;

        return selectedRatings.some(value => {
            if (value === "5") return rating >= 5;
            if (value === "4") return rating >= 4 && rating < 5;
            if (value === "3") return rating < 4;

            return false;
        });
    }

    // Hàm lọc tổng hợp
    function applyFilters() {
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

        // Lấy từ khóa tìm kiếm và môn thể thao
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

        // Lọc từng sân
        let result = cards.filter(court => {
            const data = court.data;

            const title = court.element.querySelector(
                ".court-card-title"
            )?.textContent || "";

            const address = court.element.querySelector(
                ".court-card-address"
            )?.textContent || "";

            // Lọc địa điểm
            const matchesCity =
                !selectedCity || selectedCity === "hcm";

            const matchesDistrict =
                !selectedDistrict ||
                court.district === selectedDistrict;

            // Lọc giá
            const matchesPrice =
                (min === null || court.price >= min) &&
                (max === null || court.price <= max);

            // Lọc tiện ích: phải có tất cả tiện ích đã chọn
            const matchesAmenities =
                selectedAmenities.every(amenity =>
                    hasAmenity(court, amenity)
                );

            // Lọc đánh giá
            const matchesSelectedRating =
                matchesRating(court.rating, selectedRatings);

            // Giữ kết quả tìm kiếm theo tên và địa chỉ
            const matchesKeyword =
                !keyword ||
                normalize(title + " " + address).includes(keyword);

            // Lọc theo môn thể thao
            const matchesSport =
                selectedSport === "all" ||
                normalize(data?.sport || "").includes(
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

        // Sắp xếp danh sách sân
        const sortType = sortSelect?.value || "default";

        if (sortType === "price-low") {
            result.sort((a, b) => a.price - b.price);
        }

        if (sortType === "price-high") {
            result.sort((a, b) => b.price - a.price);
        }

        if (sortType === "rating") {
            result.sort((a, b) => b.rating - a.rating);
        }

        // Ẩn tất cả sân trước khi hiển thị kết quả
      // Ẩn tất cả sân trước khi hiển thị kết quả
cards.forEach(court => {
    court.element.style.display = "none";
});

// Chỉ hiển thị các sân thỏa mãn điều kiện lọc
result.forEach(court => {
    court.element.style.display = "";
});
        // Cập nhật số lượng sân
        const hasFilter =
            keyword ||
            selectedSport !== "all" ||
            selectedCity ||
            selectedDistrict ||
            min !== null ||
            max !== null ||
            selectedAmenities.length ||
            selectedRatings.length;

        if (countText) {
            countText.textContent = hasFilter
                ? `Hiển thị ${result.length}/${cards.length} sân thể thao`
                : `Hiển thị ${cards.length} sân thể thao`;
        }

        // Hiển thị thông báo khi không tìm thấy sân
      const emptyMessage = document.getElementById("empty-message");

if (emptyMessage) {
    emptyMessage.hidden = result.length > 0;
}

    }

    // Cho phép các file JS khác gọi bộ lọc
    window.applyCourtFilters = applyCourtFilters;

    // Nhấn nút tìm kiếm để áp dụng tất cả tiêu chí
    submitBtn?.addEventListener("click", applyFilters);

    // Thay đổi cách sắp xếp thì cập nhật ngay
    sortSelect?.addEventListener("change", applyFilters);

    // Nhấn Enter trong ô giá để lọc
    [minInput, maxInput].forEach(input => {
        input?.addEventListener("keydown", event => {
            if (event.key === "Enter") {
                applyFilters();
            }
        });
    });

    // Lọc ban đầu khi mở trang
    applyFilters();
})();
