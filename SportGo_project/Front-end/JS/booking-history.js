(() => {
    const bookingsStorageKey = "sportgoBookings";
    const bookingList = document.querySelector("#booking-history-list");
    const bookingMessage = document.querySelector("#booking-history-message");

    if (!bookingList || !bookingMessage) {
        return;
    }

    function formatDate(date) {
        const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date || "");
        return match ? `${match[3]}/${match[2]}/${match[1]}` : date || "—";
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

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, (character) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[character]);
    }

    function getDuration(startTime, endTime) {
        const toMinutes = (time) => {
            const match = /^(\d{2}):(\d{2})$/.exec(time || "");
            if (!match) {
                return null;
            }

            const hours = Number(match[1]);
            const minutes = Number(match[2]);
            return hours <= 24 && minutes < 60 && (hours < 24 || minutes === 0)
                ? hours * 60 + minutes
                : null;
        };

        const start = toMinutes(startTime);
        const end = toMinutes(endTime);
        if (start === null || end === null || end <= start) {
            return null;
        }

        return { minutes: end - start, start, end };
    }

    function formatDuration(minutes) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return [
            hours ? `${hours} giờ` : "",
            remainingMinutes ? `${remainingMinutes} phút` : ""
        ].filter(Boolean).join(" ");
    }

    function readBookings() {
        const stored = localStorage.getItem(bookingsStorageKey);
        if (!stored) {
            return [];
        }

        const bookings = JSON.parse(stored);
        if (!Array.isArray(bookings)) {
            throw new Error("Dữ liệu lịch đặt sân không đúng định dạng.");
        }

        return bookings;
    }

    function groupAdjacentBookings(bookings) {
        const sorted = bookings
            .map((booking, index) => {
                const interval = getDuration(booking.startTime || booking.start, booking.endTime || booking.end);
                return interval ? { ...booking, ...interval, originalIndex: index } : null;
            })
            .filter(Boolean)
            .sort((first, second) =>
                String(first.date).localeCompare(String(second.date))
                || String(first.courtName).localeCompare(String(second.courtName), "vi")
                || String(first.subCourtId || first.subCourtName || "").localeCompare(
                    String(second.subCourtId || second.subCourtName || "")
                )
                || first.start - second.start
            );
        const grouped = [];
        const seenIntervals = new Set();

        sorted.forEach((booking) => {
            const subCourtKey = booking.subCourtId || booking.subCourtName || "";
            const uniqueKey = [
                booking.courtId,
                booking.date,
                subCourtKey,
                booking.start,
                booking.end
            ].join(":");
            if (seenIntervals.has(uniqueKey)) {
                return;
            }
            seenIntervals.add(uniqueKey);

            const previous = grouped[grouped.length - 1];
            if (previous
                && Number(previous.courtId) === Number(booking.courtId)
                && previous.date === booking.date
                && (previous.subCourtId || previous.subCourtName || "")
                    === subCourtKey
                && previous.end === booking.start) {
                previous.end = booking.end;
                previous.minutes += booking.minutes;
                previous.price += Number(booking.price) || 0;
                return;
            }

            grouped.push({
                ...booking,
                price: Number(booking.price) || 0
            });
        });

        return grouped.sort((first, second) =>
            String(second.date).localeCompare(String(first.date))
            || first.start - second.start
            || String(first.courtName).localeCompare(String(second.courtName), "vi")
        );
    }

    function render() {
        let bookings;
        try {
            bookings = readBookings();
        } catch (error) {
            bookingList.innerHTML = "";
            bookingMessage.textContent = `Không thể tải lịch đặt sân: ${error.message}`;
            bookingMessage.classList.add("booking-history-message--error");
            return;
        }

        bookingMessage.classList.remove("booking-history-message--error");
        const rows = groupAdjacentBookings(bookings);

        if (rows.length === 0) {
            bookingList.innerHTML = `
                <tr>
                    <td class="booking-history-empty" colspan="5">Bạn chưa có lịch đặt sân nào.</td>
                </tr>
            `;
            bookingMessage.textContent = "";
            return;
        }

        bookingList.innerHTML = rows.map((booking) => {
            const courtName = escapeHtml(booking.courtName || `Sân ${booking.courtId || ""}`.trim());
            const subCourtName = booking.subCourtName
                ? ` · ${escapeHtml(booking.subCourtName)}`
                : "";

            return `
                <tr>
                    <td data-label="Sân đặt">
                        <strong>${courtName}${subCourtName}</strong>
                    </td>
                    <td data-label="Ngày đặt">${escapeHtml(formatDate(booking.date))}</td>
                    <td data-label="Khung giờ">${formatTime(booking.start)}–${formatTime(booking.end)}</td>
                    <td data-label="Thời lượng">${formatDuration(booking.minutes)}</td>
                    <td data-label="Giá thuê">${formatPrice(booking.price)}</td>
                </tr>
            `;
        }).join("");
        bookingMessage.textContent = "";
    }

    render();
})();
