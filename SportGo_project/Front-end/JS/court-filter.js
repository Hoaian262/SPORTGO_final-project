(() => {
    const form = document.querySelector(".home-search-form");
    const keywordInput = document.getElementById("site-search-keyword");
    const dateInput = document.getElementById("site-search-date");
    const count = document.getElementById("court-count");
    const sort = document.getElementById("sort-courts");
    const minPrice = document.querySelector('[name="min-price"]');
    const maxPrice = document.querySelector('[name="max-price"]');
    const priceError = document.getElementById("court-price-error");
    const categories = [...document.querySelectorAll(".sport-category")];
    const pagination = document.querySelector(".courts-pagination");
    const url = new URL(location.href);

    function normalize(value) {
        return value.trim().toLowerCase().normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
    }

    function categorySlug(value) {
        return normalize(value).replace(/\s+/g, "-");
    }

    const requestedSport = categorySlug(url.searchParams.get("sport") || "");
    let category = categories.find(button =>
        categorySlug(button.dataset.category) === requestedSport
    )?.dataset.category || "all";
    keywordInput.value = url.searchParams.get("keyword") || "";
    dateInput.value = url.searchParams.get("date") || "";

    function updateResults() {
        const keyword = normalize(keywordInput.value);
        const min = minPrice.valueAsNumber;
        const max = maxPrice.valueAsNumber;
        const invalidPrice = minPrice.validity.badInput || maxPrice.validity.badInput
            || min < 0 || max < 0 || min > max;

        priceError.hidden = !invalidPrice;
        if (invalidPrice) return;

        categories.forEach(button => {
            const active = button.dataset.category === category;
            button.classList.toggle("sport-category--active", active);
            button.setAttribute("aria-pressed", String(active));
        });

        const matches = window.courts.filter(court => {
            const nameOrAddress = normalize(court.name + " " + court.address);
            return nameOrAddress.includes(keyword)
                && (category === "all" || normalize(court.sport) === normalize(category))
                && (Number.isNaN(min) || court.price >= min)
                && (Number.isNaN(max) || court.price <= max);
        });

        if (sort.value === "price-low") matches.sort((a, b) => a.price - b.price);
        if (sort.value === "price-high") matches.sort((a, b) => b.price - a.price);
        if (sort.value === "rating") matches.sort((a, b) => Number(b.rating) - Number(a.rating));

        renderCourts(matches, dateInput.value);
        const activeFilters = keyword || category !== "all"
            || !Number.isNaN(min) || !Number.isNaN(max);
        const total = activeFilters ? matches.length + "/" + window.courts.length : matches.length;
        const dateLabel = dateInput.value
            ? " · Ngày muốn đặt: " + new Date(dateInput.value + "T00:00:00").toLocaleDateString("vi-VN")
            : "";
        count.textContent = "Hiển thị " + total + " sân thể thao" + dateLabel;
        pagination.hidden = Boolean(activeFilters);
    }

    keywordInput.addEventListener("input", updateResults);
    dateInput.addEventListener("change", updateResults);
    sort.addEventListener("change", updateResults);
    [minPrice, maxPrice].forEach(input => {
        input.addEventListener("input", updateResults);
        input.addEventListener("keydown", event => {
            if (event.key === "Enter") updateResults();
        });
    });
    document.querySelector(".filter-submit").addEventListener("click", updateResults);
    form.addEventListener("submit", event => {
        event.preventDefault();
        updateResults();
        document.querySelector(".courts-content").scrollIntoView({ block: "start" });
    });
    categories.forEach(button => button.addEventListener("click", () => {
        category = button.dataset.category;
        updateResults();
    }));

    updateResults();
    if (keywordInput.value || dateInput.value || requestedSport) {
        document.querySelector(".courts-content").scrollIntoView({ block: "start" });
    }
})();
