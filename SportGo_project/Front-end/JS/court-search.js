(() => {
const searchParams = new URLSearchParams(window.location.search);
const keywordInput = document.querySelector("#site-search-keyword");
const dateInput = document.querySelector("#site-search-date");
const courtGrid = document.querySelector(".court-grid");
const resultSummary = document.querySelector(".courts-toolbar p");
const courtCards = Array.from(document.querySelectorAll(".court-card"));
const categoryButtons = Array.from(document.querySelectorAll(".sport-category"));
const sportSlugs = {
    "bong-da": "Bóng đá",
    "bong-ro": "Bóng rổ",
    "cau-long": "Cầu lông",
    pickleball: "Pickleball",
    tennis: "Tennis"
};

function normalizeSearchText(value) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .toLocaleLowerCase("vi");
}

const keyword = searchParams.get("keyword") || "";
const bookingDate = searchParams.get("date") || "";

if (keywordInput) {
    keywordInput.value = keyword;
}

if (dateInput) {
    dateInput.value = bookingDate;
}

const normalizedKeyword = normalizeSearchText(keyword).trim();
const requestedSport = searchParams.get("sport") || "";
let selectedCategory = sportSlugs[requestedSport]
    || categoryButtons.find((button) =>
        normalizeSearchText(button.dataset.category || "")
            === normalizeSearchText(requestedSport)
    )?.dataset.category
    || "all";

let visibleCourtCount = 0;

function getSportSlug(category) {
    return Object.keys(sportSlugs).find((slug) =>
        sportSlugs[slug] === category
    ) || "";
}

function updateActiveCategory() {
    categoryButtons.forEach((button) => {
        const isActive = normalizeSearchText(button.dataset.category || "")
            === normalizeSearchText(selectedCategory);
        button.classList.toggle("sport-category--active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

function updateResults() {
    visibleCourtCount = 0;

    courtCards.forEach((card) => {
        const searchableText = normalizeSearchText([
            card.querySelector(".court-card-title")?.textContent || "",
            card.querySelector(".court-card-address")?.textContent || ""
        ].join(" "));
        const categoryText = normalizeSearchText(
            card.dataset.category
                || card.querySelector(".court-card-title")?.textContent
                || ""
        );
        const matchesKeyword = !normalizedKeyword
            || searchableText.includes(normalizedKeyword);
        const matchesCategory = selectedCategory === "all"
            || categoryText.includes(normalizeSearchText(selectedCategory));
        const isVisible = matchesKeyword && matchesCategory;

        card.style.display = isVisible ? "" : "none";

        if (isVisible) {
            visibleCourtCount += 1;
        }

        if (bookingDate) {
            card.querySelectorAll(".court-card-button").forEach((link) => {
                const detailUrl = new URL(link.href, window.location.href);
                detailUrl.searchParams.set("date", bookingDate);
                link.href = detailUrl.href;
            });
        }
    });

    if (resultSummary) {
        const filtersApplied = normalizedKeyword || selectedCategory !== "all";
        const resultText = filtersApplied
            ? `Hiển thị ${visibleCourtCount}/${courtCards.length} sân thể thao`
            : `Hiển thị ${courtCards.length} sân thể thao`;
        const formattedDate = bookingDate
            ? new Date(`${bookingDate}T00:00:00`).toLocaleDateString("vi-VN")
            : "";

        resultSummary.textContent = formattedDate
            ? `${resultText} · Ngày muốn đặt: ${formattedDate}`
            : resultText;
    }

    if (courtGrid) {
        let emptyState = courtGrid.querySelector(".court-search-empty");

        if (!emptyState) {
            emptyState = document.createElement("p");
            emptyState.className = "court-search-empty";
            emptyState.setAttribute("role", "status");
            emptyState.textContent = "Không tìm thấy sân phù hợp. Hãy thử từ khóa khác.";
            courtGrid.append(emptyState);
        }

        emptyState.hidden = visibleCourtCount > 0;
    }
}

categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        selectedCategory = button.dataset.category || "all";
        const nextUrl = new URL(window.location.href);
        const sportSlug = getSportSlug(selectedCategory);
        if (sportSlug) {
            nextUrl.searchParams.set("sport", sportSlug);
        } else {
            nextUrl.searchParams.delete("sport");
        }
        window.history.replaceState({}, "", nextUrl);

        updateActiveCategory();
        updateResults();
    });
});

document.querySelectorAll(".home-search-form").forEach((form) => {
    form.addEventListener("submit", () => {
        let sportInput = form.querySelector('input[name="sport"]');

        if (!sportInput) {
            sportInput = document.createElement("input");
            sportInput.type = "hidden";
            sportInput.name = "sport";
            form.append(sportInput);
        }

        sportInput.value = getSportSlug(selectedCategory);
    });
});

updateActiveCategory();
updateResults();

if (keyword || bookingDate || requestedSport) {
    document.querySelector(".courts-content")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
})();
