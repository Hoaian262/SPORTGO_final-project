
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
        const scheduleGrid = document.querySelector("#booking-schedule-grid");
        const scheduleMessage = document.querySelector("#booking-schedule-message");
        const selectionSummary = document.querySelector("#booking-selection-summary");
        const bookingMessage = document.querySelector("#booking-message");
        const openingTime = 5 * 60;
        const closingTime = 24 * 60;
        const bookingsStorageKey = "sportgoBookings";
        const selectedSlots = new Map();
        const courtCount = Math.max(
            1,
            Number(String(court.number || "").match(/\d+/)?.[0]) || 1
        );
        const subCourts = Array.from({ length: courtCount }, (_, index) => ({
            id: `${court.id}-${index + 1}`,
            name: `Sân ${index + 1}`
        }));

        if (requestedDate && bookingDateInput) {
            bookingDateInput.value = requestedDate;
        }

        function showBookingMessage(message, isError = false) {
            bookingMessage.textContent = message;
            bookingMessage.classList.toggle("booking-message--error", isError);
        }

        function readBookings() {
            const storedBookings = localStorage.getItem(bookingsStorageKey);

            if (!storedBookings) {
                return [];
            }

            const bookings = JSON.parse(storedBookings);
            if (!Array.isArray(bookings)) {
                throw new Error("Dữ liệu đặt sân không đúng định dạng.");
            }

            return bookings;
        }

        function timeToMinutes(value) {
            if (typeof value !== "string" || !/^\d{2}:\d{2}$/.test(value)) {
                return null;
            }

            const [hours, minutes] = value.split(":").map(Number);
            if (hours > 24 || minutes > 59 || (hours === 24 && minutes !== 0)) {
                return null;
            }

            return hours * 60 + minutes;
        }

        function getBookingInterval(booking) {
            const start = timeToMinutes(booking.startTime || booking.start);
            const end = timeToMinutes(booking.endTime || booking.end);

            if (start !== null && end !== null && end > start) {
                return { start, end };
            }

            const legacyTime = timeToMinutes(booking.time);
            return legacyTime !== null
                ? { start: legacyTime, end: legacyTime + 60 }
                : null;
        }

        function getSlotPrice(start, end) {
            const pricePeriod = court.prices?.find((period) => {
                const match = period.time.match(/^(\d{2}:\d{2})[–-](\d{2}:\d{2})$/);
                if (!match) {
                    return false;
                }

                const periodStart = timeToMinutes(match[1]);
                const periodEnd = timeToMinutes(match[2]);
                return periodStart !== null && periodEnd !== null
                    && start >= periodStart && end <= periodEnd;
            });

            return pricePeriod?.price ?? court.price;
        }

        function getDateBookings(date) {
            return readBookings().filter((booking) =>
                Number(booking.courtId) === court.id && booking.date === date
            );
        }

        function formatTime(minutes) {
            return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
        }

        function formatPrice(price) {
            return `${price.toLocaleString("vi-VN")}đ`;
        }

        function renderSelectionSummary() {
            if (!selectionSummary) {
                return;
            }

            const selected = Array.from(selectedSlots.values())
                .sort((first, second) =>
                    first.subCourtName.localeCompare(second.subCourtName, "vi")
                    || first.start - second.start
                );
            const total = selected.reduce((sum, slot) => sum + slot.price, 0);

            if (selected.length === 0) {
                selectionSummary.innerHTML = `
                    <h4>Chi phí dự kiến</h4>
                    <p>Chưa chọn khung giờ.</p>
                `;
                return;
            }

            const selectedRows = selected.map((slot) => `
                <li>
                    <span>${slot.subCourtName} · ${formatTime(slot.start)}</span>
                    <strong>${formatPrice(slot.price)}</strong>
                </li>
            `).join("");

            selectionSummary.innerHTML = `
                <h4>Chi phí dự kiến</h4>
                <ul>${selectedRows}</ul>
                <p class="booking-total">
                    <span>${selected.length} khung giờ · Tổng cộng</span>
                    <strong>${formatPrice(total)}</strong>
                </p>
            `;
        }

        function renderSchedule() {
            if (!scheduleGrid || !bookingDateInput.value) {
                if (scheduleGrid) {
                    scheduleGrid.innerHTML =
                        '<p class="booking-schedule-empty">Vui lòng chọn ngày để xem lịch sân.</p>';
                }
                selectedSlots.clear();
                renderSelectionSummary();
                return;
            }

            let dateBookings;
            try {
                dateBookings = getDateBookings(bookingDateInput.value);
            } catch (error) {
                scheduleGrid.innerHTML =
                    '<p class="booking-schedule-empty">Không thể đọc dữ liệu lịch đặt sân.</p>';
                scheduleMessage.textContent = error.message;
                return;
            }

            scheduleMessage.textContent = "";
            const timeSlots = [];

            for (let start = openingTime; start < closingTime; start += 60) {
                const end = Math.min(start + 60, closingTime);
                timeSlots.push({ start, end });
            }

            const headerCells = timeSlots.map(({ start, end }) => `
                <th scope="col">${formatTime(start)}</th>
            `).join("");
            const courtRows = subCourts.map((subCourt) => {
                const slotCells = timeSlots.map(({ start, end }) => {
                    const bookingForSlot = dateBookings.find((booking) => {
                        const belongsToSubCourt = !booking.subCourtId
                            || String(booking.subCourtId) === subCourt.id;
                        const interval = getBookingInterval(booking);
                        return belongsToSubCourt && interval
                            && start < interval.end && end > interval.start;
                    });
                    const isBooked = Boolean(bookingForSlot);
                    const selectionKey = `${subCourt.id}:${start}`;
                    const isSelected = selectedSlots.has(selectionKey);
                    const status = isBooked ? "Đã đặt" : isSelected ? "Đang chọn" : "Còn trống";
                    const classes = [
                        "booking-slot",
                        isBooked ? "booking-slot--booked" : "booking-slot--available",
                        isSelected && !isBooked ? "booking-slot--selected" : ""
                    ].filter(Boolean).join(" ");

                    return `
                        <td>
                            <button
                                type="button"
                                class="${classes}"
                                data-sub-court-id="${subCourt.id}"
                                data-sub-court-name="${subCourt.name}"
                                data-start="${formatTime(start)}"
                                data-end="${formatTime(end)}"
                                aria-label="${subCourt.name}, ${formatTime(start)} đến ${formatTime(end)}: ${status}"
                                ${isBooked ? "disabled" : ""}
                            >
                                <span class="visually-hidden">${status}</span>
                            </button>
                        </td>
                    `;
                }).join("");

                return `
                    <tr>
                        <th scope="row">${subCourt.name}</th>
                        ${slotCells}
                    </tr>
                `;
            }).join("");

            scheduleGrid.innerHTML = `
                <table class="booking-schedule-table">
                    <thead>
                        <tr>
                            <th scope="col">Sân / Giờ</th>
                            ${headerCells}
                        </tr>
                    </thead>
                    <tbody>${courtRows}</tbody>
                </table>
            `;

            scheduleGrid.querySelectorAll(".booking-slot").forEach((slot) => {
                slot.addEventListener("click", () => {
                    const start = timeToMinutes(slot.dataset.start);
                    const end = timeToMinutes(slot.dataset.end);
                    if (start === null || end === null || slot.disabled) {
                        return;
                    }

                    const selectionKey = `${slot.dataset.subCourtId}:${start}`;
                    if (selectedSlots.has(selectionKey)) {
                        selectedSlots.delete(selectionKey);
                    } else {
                        selectedSlots.set(selectionKey, {
                            subCourtId: slot.dataset.subCourtId,
                            subCourtName: slot.dataset.subCourtName,
                            start,
                            end,
                            price: getSlotPrice(start, end)
                        });
                    }

                    scheduleMessage.textContent = "";
                    renderSchedule();
                });
            });

            renderSelectionSummary();
        }

        bookingDateInput.addEventListener("change", () => {
            selectedSlots.clear();
            renderSchedule();
        });
        renderSchedule();

        bookingForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const bookingDate = bookingDateInput.value;
            const requestedSlots = Array.from(selectedSlots.values());

            if (!bookingDate || requestedSlots.length === 0) {
                showBookingMessage("Vui lòng chọn ngày và ít nhất một khung giờ còn trống.", true);
                return;
            }

            let bookingList;
            try {
                bookingList = readBookings();
            } catch (error) {
                showBookingMessage(error.message, true);
                return;
            }

            const conflictingSlot = requestedSlots.find((slot) =>
                bookingList.some((booking) => {
                    if (Number(booking.courtId) !== court.id || booking.date !== bookingDate) {
                        return false;
                    }

                    if (booking.subCourtId
                        && String(booking.subCourtId) !== slot.subCourtId) {
                        return false;
                    }

                    const interval = getBookingInterval(booking);
                    return interval && slot.start < interval.end && slot.end > interval.start;
                })
            );

            if (conflictingSlot) {
                showBookingMessage(
                    `${conflictingSlot.subCourtName}, khung ${formatTime(conflictingSlot.start)}–${formatTime(conflictingSlot.end)} vừa được đặt. Vui lòng chọn lại.`,
                    true
                );
                selectedSlots.delete(`${conflictingSlot.subCourtId}:${conflictingSlot.start}`);
                renderSchedule();
                return;
            }

            const newBookings = requestedSlots.map((slot) => ({
                courtId: court.id,
                courtName: court.name,
                subCourtId: slot.subCourtId,
                subCourtName: slot.subCourtName,
                date: bookingDate,
                startTime: formatTime(slot.start),
                endTime: formatTime(slot.end),
                price: slot.price
            }));

            try {
                localStorage.setItem(
                    bookingsStorageKey,
                    JSON.stringify([...bookingList, ...newBookings])
                );
            } catch (error) {
                showBookingMessage("Không thể lưu lịch đặt trên trình duyệt. Vui lòng kiểm tra bộ nhớ trình duyệt.", true);
                return;
            }

            const total = requestedSlots.reduce((sum, slot) => sum + slot.price, 0);
            showBookingMessage(
                `Đặt thành công ${requestedSlots.length} khung giờ ngày ${bookingDate}. Tổng tiền: ${formatPrice(total)}.`
            );
            selectedSlots.clear();
            renderSchedule();
        });
    }
}
