
(() => {
    const STORAGE_KEY = "sportgoBookings";

    const bookingList = document.querySelector("#booking-history-list");
    const bookingMessage = document.querySelector("#booking-history-message");

    if (!bookingList || !bookingMessage) return;

    const OPENING_TIME = 5 * 60;
    const CLOSING_TIME = 24 * 60;

    // Ảnh dự phòng cho các lịch cũ chưa lưu courtImage
    const courtImages = {
        1: "images/phong vũ.jpg",
        2: "images/bongro.jpg",
        3: "images/caulong.webp",
        4: "images/pickleball.webp",
        5: "images/caulong1.webp",
        6: "images/tennis.jpg",
        7: "images/caulong2.jpg",
        8: "images/tennis2.jpg",
        9: "images/pickleball2.webp"
    };

    // Giá thuê mỗi giờ của từng sân.
    // Sân 1 có giá thay đổi theo khung giờ.
    const courtPrices = {
        1: [
            { start: 5 * 60, end: 12 * 60, price: 34000 },
            { start: 12 * 60, end: 17 * 60, price: 60000 },
            { start: 17 * 60, end: 24 * 60, price: 89000 }
        ],
        2: [{ start: 0, end: 1440, price: 100000 }],
        3: [{ start: 0, end: 1440, price: 60000 }],
        4: [{ start: 0, end: 1440, price: 220000 }],
        5: [{ start: 0, end: 1440, price: 50000 }],
        6: [{ start: 0, end: 1440, price: 200000 }],
        7: [{ start: 0, end: 1440, price: 45000 }],
        8: [{ start: 0, end: 1440, price: 220000 }],
        9: [{ start: 0, end: 1440, price: 250000 }]
    };

    let editingKey = null;

    // ================================
    // 1. CÁC HÀM ĐỊNH DẠNG
    // ================================

    function escapeHtml(value) {
        return String(value ?? "").replace(/[&<>"']/g, char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[char]);
    }

    function formatDate(date) {
        const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date || "");

        return match
            ? `${match[3]}/${match[2]}/${match[1]}`
            : date || "—";
    }

    function formatPrice(price) {
        const amount = Number(price);

        return Number.isFinite(amount) && amount >= 0
            ? `${amount.toLocaleString("vi-VN")}đ`
            : "—";
    }

    function formatTime(minutes) {
        return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
    }

    function formatDuration(minutes) {
        const hours = Math.floor(minutes / 60);
        const remaining = minutes % 60;

        return [
            hours ? `${hours} giờ` : "",
            remaining ? `${remaining} phút` : ""
        ].filter(Boolean).join(" ") || "0 phút";
    }

    function toMinutes(time) {
        const match = /^(\d{2}):(\d{2})$/.exec(time || "");

        if (!match) return null;

        const hours = Number(match[1]);
        const minutes = Number(match[2]);

        if (
            hours > 24 ||
            minutes >= 60 ||
            (hours === 24 && minutes !== 0)
        ) {
            return null;
        }

        return hours * 60 + minutes;
    }

    function getInterval(booking) {
        const start = toMinutes(booking.startTime || booking.start);
        const end = toMinutes(booking.endTime || booking.end);

        if (start === null || end === null || end <= start) {
            return null;
        }

        return {
            start,
            end,
            minutes: end - start
        };
    }

    // ================================
    // 2. ĐỌC VÀ LƯU LOCAL STORAGE
    // ================================

    function readBookings() {
        const stored = localStorage.getItem(STORAGE_KEY);

        if (!stored) return [];

        const bookings = JSON.parse(stored);

        if (!Array.isArray(bookings)) {
            throw new Error("Dữ liệu lịch đặt sân không đúng định dạng.");
        }

        return bookings;
    }

    function saveBookings(bookings) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    }

    function getCourtImage(booking) {
        return booking.courtImage || courtImages[booking.courtId] || "";
    }

    // ================================
    // 3. TÍNH GIÁ THUÊ
    // ================================

    function getHourlyPrice(courtId, start) {
        const periods = courtPrices[courtId];

        if (!periods) return 0;

        const period = periods.find(item =>
            start >= item.start && start < item.end
        );

        return period ? period.price : 0;
    }

    function calculateTotal(courtId, start, end) {
        let total = 0;

        for (let time = start; time < end; time += 60) {
            total += getHourlyPrice(courtId, time);
        }

        return total;
    }

    // ================================
    // 4. GỘP CÁC KHUNG GIỜ LIÊN TIẾP
    // ================================

    function groupBookings(bookings) {
        const sorted = bookings
            .map((booking, index) => {
                const interval = getInterval(booking);

                if (!interval) return null;

                return {
                    ...booking,
                    ...interval,
                    originalIndexes: [index]
                };
            })
            .filter(Boolean)
            .sort((a, b) =>
                String(a.date).localeCompare(String(b.date)) ||
                Number(a.courtId) - Number(b.courtId) ||
                String(a.subCourtId || "").localeCompare(String(b.subCourtId || "")) ||
                a.start - b.start
            );

        const grouped = [];

        sorted.forEach(booking => {
            const previous = grouped[grouped.length - 1];

            // Loại bản ghi trùng hoàn toàn khỏi phần hiển thị.
            const duplicate = grouped.find(item =>
                Number(item.courtId) === Number(booking.courtId) &&
                item.date === booking.date &&
                String(item.subCourtId || "") === String(booking.subCourtId || "") &&
                item.start === booking.start &&
                item.end === booking.end
            );

            if (duplicate) {
                duplicate.originalIndexes.push(...booking.originalIndexes);
                return;
            }

            // Gộp các khung giờ liên tiếp.
            if (
                previous &&
                Number(previous.courtId) === Number(booking.courtId) &&
                previous.date === booking.date &&
                String(previous.subCourtId || "") === String(booking.subCourtId || "") &&
                previous.end === booking.start
            ) {
                previous.end = booking.end;
                previous.minutes += booking.minutes;
                previous.price += Number(booking.price) || 0;
                previous.originalIndexes.push(...booking.originalIndexes);
                return;
            }

            grouped.push({
                ...booking,
                price: Number(booking.price) || 0
            });
        });

        return grouped.sort((a, b) =>
            String(b.date).localeCompare(String(a.date)) ||
            a.start - b.start
        );
    }

    // ================================
    // 5. TẠO DANH SÁCH GIỜ ĐỂ CHỈNH SỬA
    // ================================

    function createTimeOptions(selectedValue, minimum, maximum) {
        let html = "";

        for (let time = minimum; time <= maximum; time += 60) {
            html += `
                <option value="${formatTime(time)}"
                    ${time === selectedValue ? "selected" : ""}>
                    ${formatTime(time)}
                </option>
            `;
        }

        return html;
    }

    // ================================
    // 6. KIỂM TRA LỊCH BỊ TRÙNG
    // ================================

    function hasConflict(bookings, group, date, start, end) {
        const excludedIndexes = new Set(group.originalIndexes);

        return bookings.some((booking, index) => {
            if (excludedIndexes.has(index)) return false;

            if (
                Number(booking.courtId) !== Number(group.courtId) ||
                booking.date !== date
            ) {
                return false;
            }

            // Lịch cũ không có subCourtId được xem là chiếm toàn bộ sân.
            if (
                booking.subCourtId &&
                group.subCourtId &&
                String(booking.subCourtId) !== String(group.subCourtId)
            ) {
                return false;
            }

            const interval = getInterval(booking);

            return interval &&
                start < interval.end &&
                end > interval.start;
        });
    }

    // ================================
    // 7. HIỂN THỊ FORM CHỈNH SỬA
    // ================================

    function renderEditForm(booking, key) {
        const startOptions = createTimeOptions(
            booking.start,
            OPENING_TIME,
            CLOSING_TIME - 60
        );

        const endOptions = createTimeOptions(
            booking.end,
            booking.start + 60,
            CLOSING_TIME
        );

        return `
            <tr class="booking-edit-row">
                <td colspan="6">
                    <form class="booking-edit-form" data-key="${key}">
                        <h4>Chỉnh sửa lịch đặt sân</h4>

                        <div class="booking-edit-grid">
                            <div>
                                <label>Ngày đặt</label>
                                <input type="date"
                                    name="date"
                                    value="${escapeHtml(booking.date)}"
                                    required>
                            </div>

                            <div>
                                <label>Giờ bắt đầu</label>
                                <select name="start" required>
                                    ${startOptions}
                                </select>
                            </div>

                            <div>
                                <label>Giờ kết thúc</label>
                                <select name="end" required>
                                    ${endOptions}
                                </select>
                            </div>
                        </div>

                        <p class="booking-edit-note">
                            Thời lượng và thành tiền sẽ được tính lại khi lưu.
                            Mỗi khung giờ hiện tại tương ứng 1 tiếng.
                        </p>

                        <div class="booking-edit-actions">
                            <button type="submit" class="booking-save-btn">
                                Lưu thay đổi
                            </button>

                            <button type="button"
                                class="booking-cancel-btn"
                                data-action="cancel">
                                Hủy
                            </button>
                        </div>
                    </form>
                </td>
            </tr>
        `;
    }

    // ================================
    // 8. HIỂN THỊ DANH SÁCH
    // ================================

    function render() {
        let bookings;

        try {
            bookings = readBookings();
        } catch (error) {
            bookingList.innerHTML = "";
            bookingMessage.textContent =
                `Không thể tải lịch đặt sân: ${error.message}`;
            bookingMessage.classList.add("booking-history-message--error");
            return;
        }

        bookingMessage.classList.remove("booking-history-message--error");

        const groups = groupBookings(bookings);

        if (groups.length === 0) {
            bookingList.innerHTML = `
                <tr>
                    <td colspan="6" class="booking-history-empty">
                        Bạn chưa có lịch đặt sân nào.
                    </td>
                </tr>
            `;

            bookingMessage.textContent = "";
            return;
        }

        let html = "";

        groups.forEach((booking, index) => {
            const key = booking.originalIndexes.join("-");
            const image = getCourtImage(booking);
            const courtName = escapeHtml(
                booking.courtName || `Sân ${booking.courtId || ""}`
            );

            const subCourt = booking.subCourtName
                ? `<small>${escapeHtml(booking.subCourtName)}</small>`
                : "";

            html += `
                <tr>
                    <td data-label="Thông tin sân">
                        <div class="booking-court-info">
                            ${
                                image
                                    ? `<img src="${escapeHtml(image)}"
                                        alt="${courtName}"
                                        class="booking-court-image">`
                                    : ""
                            }

                            <div>
                                <strong>${courtName}</strong>
                                ${subCourt}
                            </div>
                        </div>
                    </td>

                    <td data-label="Ngày đặt">
                        ${escapeHtml(formatDate(booking.date))}
                    </td>

                    <td data-label="Khung giờ">
                        ${formatTime(booking.start)} – ${formatTime(booking.end)}
                    </td>

                    <td data-label="Thời lượng">
                        ${formatDuration(booking.minutes)}
                    </td>

                    <td data-label="Thành tiền">
                        <strong class="booking-price">
                            ${formatPrice(booking.price)}
                        </strong>
                    </td>

                    <td data-label="Thao tác">
                        <div class="booking-actions">
                            <button type="button"
                                class="booking-action-edit"
                                data-action="edit"
                                data-key="${key}">
                                <i class="fa-solid fa-pen"></i>
                                Sửa
                            </button>

                            <button type="button"
                                class="booking-action-delete"
                                data-action="delete"
                                data-key="${key}">
                                <i class="fa-solid fa-trash"></i>
                                Xóa
                            </button>
                        </div>
                    </td>
                </tr>
            `;

            if (editingKey === key) {
                html += renderEditForm(booking, key);
            }
        });

        bookingList.innerHTML = html;
        bookingMessage.textContent = "";
    }

    // ================================
    // 9. XỬ LÝ CÁC NÚT SỬA / XÓA
    // ================================

    bookingList.addEventListener("click", event => {
        const button = event.target.closest("button[data-action]");

        if (!button) return;

        const action = button.dataset.action;
        const key = button.dataset.key;

        if (action === "cancel") {
            editingKey = null;
            render();
            return;
        }

        let bookings;

        try {
            bookings = readBookings();
        } catch (error) {
            bookingMessage.textContent = error.message;
            return;
        }

        const group = groupBookings(bookings).find(
            item => item.originalIndexes.join("-") === key
        );

        if (!group) {
            render();
            return;
        }

        if (action === "edit") {
            editingKey = editingKey === key ? null : key;
            render();
            return;
        }

        if (action === "delete") {
            const confirmed = window.confirm(
                `Bạn có chắc muốn xóa lịch đặt ${group.courtName} ngày ${formatDate(group.date)} không?`
            );

            if (!confirmed) return;

            const indexes = new Set(group.originalIndexes);

            const updatedBookings = bookings.filter(
                (_, index) => !indexes.has(index)
            );

            try {
                saveBookings(updatedBookings);
                editingKey = null;
                bookingMessage.textContent = "Đã xóa lịch đặt sân.";
                render();
                bookingMessage.textContent = "Đã xóa lịch đặt sân.";
            } catch (error) {
                bookingMessage.textContent =
                    "Không thể cập nhật dữ liệu đặt sân.";
            }
        }
    });

    // ================================
    // 10. CẬP NHẬT DANH SÁCH GIỜ KẾT THÚC
    // ================================

    bookingList.addEventListener("change", event => {
        if (event.target.name !== "start") return;

        const form = event.target.closest(".booking-edit-form");
        const endSelect = form?.querySelector('[name="end"]');

        if (!endSelect) return;

        const start = toMinutes(event.target.value);

        endSelect.innerHTML = createTimeOptions(
            null,
            start + 60,
            CLOSING_TIME
        );

        endSelect.value = formatTime(start + 60);
    });

    // ================================
    // 11. LƯU THAY ĐỔI LỊCH ĐẶT
    // ================================

    bookingList.addEventListener("submit", event => {
        const form = event.target.closest(".booking-edit-form");

        if (!form) return;

        event.preventDefault();

        let bookings;

        try {
            bookings = readBookings();
        } catch (error) {
            bookingMessage.textContent = error.message;
            return;
        }

        const key = form.dataset.key;

        const group = groupBookings(bookings).find(
            item => item.originalIndexes.join("-") === key
        );

        if (!group) {
            bookingMessage.textContent = "Không tìm thấy lịch cần chỉnh sửa.";
            render();
            return;
        }

        const date = form.elements.date.value;
        const start = toMinutes(form.elements.start.value);
        const end = toMinutes(form.elements.end.value);

        if (
            !date ||
            start === null ||
            end === null ||
            start < OPENING_TIME ||
            end > CLOSING_TIME ||
            end <= start ||
            start % 60 !== 0 ||
            end % 60 !== 0
        ) {
            bookingMessage.textContent =
                "Vui lòng chọn ngày và khung giờ hợp lệ.";
            return;
        }

        if (hasConflict(bookings, group, date, start, end)) {
            bookingMessage.textContent =
                "Khung giờ này đã có lịch đặt khác. Vui lòng chọn khung giờ khác.";
            bookingMessage.classList.add("booking-history-message--error");
            return;
        }

        const newBookings = [];

        for (let time = start; time < end; time += 60) {
            const hourlyPrice = getHourlyPrice(group.courtId, time);

            if (hourlyPrice <= 0) {
                bookingMessage.textContent =
                    "Không tìm thấy giá thuê cho khung giờ đã chọn.";
                return;
            }

            newBookings.push({
                courtId: group.courtId,
                courtName: group.courtName,
                courtImage: getCourtImage(group),
                subCourtId: group.subCourtId,
                subCourtName: group.subCourtName,
                date,
                startTime: formatTime(time),
                endTime: formatTime(time + 60),
                price: hourlyPrice
            });
        }

        const excludedIndexes = new Set(group.originalIndexes);

        const remainingBookings = bookings.filter(
            (_, index) => !excludedIndexes.has(index)
        );

        try {
            saveBookings([...remainingBookings, ...newBookings]);

            editingKey = null;
            render();

            bookingMessage.textContent =
                `Đã cập nhật lịch đặt. Thành tiền: ${formatPrice(
                    calculateTotal(group.courtId, start, end)
                )}.`;

        } catch (error) {
            bookingMessage.textContent =
                "Không thể lưu thay đổi. Vui lòng thử lại.";
            bookingMessage.classList.add("booking-history-message--error");
        }
    });

    // ================================
    // 12. KHỞI TẠO
    // ================================

    render();
})();
