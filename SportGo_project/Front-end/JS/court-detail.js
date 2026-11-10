// =====================================
// 1. LẤY MÃ SÂN TỪ URL
// =====================================

const params = new URLSearchParams(window.location.search);
const courtId = Number(params.get("id"));

// =====================================
// 2. LẤY DỮ LIỆU SÂN TỪ COURTS-DATA.JS
// =====================================

const selectedCourt = window.courts?.find(
    court => court.id === courtId
);
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

   
const quickInfo = document.querySelectorAll(".court-quick-info > div strong");

if (quickInfo.length >= 2) {
    // Cập nhật giờ mở cửa
    quickInfo[0].textContent =
        court.hours?.trim() || "Đang cập nhật";

    // Cập nhật đánh giá
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
        const holdsStorageKey = "sportgoHolds";
        const HOLD_MINUTES = 10;

        // Đọc các lượt giữ chỗ còn hạn (tự bỏ lượt đã hết hạn)
        function readHolds() {
            try {
                const data = JSON.parse(localStorage.getItem(holdsStorageKey));
                if (!Array.isArray(data)) return [];
                return data.filter((hold) => Number(hold.expiresAt) > Date.now());
            } catch (error) {
                return [];
            }
        }

        // Id của phiên hiện tại, để không tự chặn chính mình
        function getHoldOwner() {
            let owner = sessionStorage.getItem("sportgoHoldOwner");
            if (!owner) {
                owner = "h" + Date.now() + Math.random().toString(36).slice(2, 7);
                sessionStorage.setItem("sportgoHoldOwner", owner);
            }
            return owner;
        }
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
                    const heldByOthers = readHolds().some((hold) =>
                        hold.owner !== getHoldOwner()
                        && Number(hold.courtId) === court.id
                        && hold.date === bookingDateInput.value
                        && String(hold.subCourtId) === subCourt.id
                        && formatTime(start) < hold.endTime
                        && formatTime(end) > hold.startTime
                    );
                    const isBooked = Boolean(bookingForSlot) || heldByOthers;
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
            
            if (params.get("expired")) {
            showBookingMessage("Đã hết thời gian giữ sân (10 phút). Vui lòng chọn lại khung giờ.", true);
        }
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

            // Giữ chỗ 10 phút
            const owner = getHoldOwner();
            const expiresAt = Date.now() + HOLD_MINUTES * 60 * 1000;

            const otherHolds = readHolds().filter((hold) => hold.owner !== owner);
            const newHolds = requestedSlots.map((slot) => ({
                owner,
                courtId: court.id,
                date: bookingDate,
                subCourtId: slot.subCourtId,
                startTime: formatTime(slot.start),
                endTime: formatTime(slot.end),
                expiresAt
            }));

            const pendingBooking = {
                courtId: court.id,
                courtName: court.name,
                courtImage: court.image,
                date: bookingDate,
                expiresAt,
                slots: requestedSlots.map((slot) => ({
                    subCourtId: slot.subCourtId,
                    subCourtName: slot.subCourtName,
                    startTime: formatTime(slot.start),
                    endTime: formatTime(slot.end),
                    price: slot.price
                }))
            };

            try {
                localStorage.setItem(holdsStorageKey, JSON.stringify([...otherHolds, ...newHolds]));
                sessionStorage.setItem("sportgoPendingBooking", JSON.stringify(pendingBooking));
            } catch (error) {
                showBookingMessage("Không thể chuyển sang trang hóa đơn. Vui lòng thử lại.", true);
                return;
            }

            window.location.href = "checkout.html";
        });
    }
}
