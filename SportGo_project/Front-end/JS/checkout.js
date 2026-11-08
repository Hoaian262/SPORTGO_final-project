// ========================================
// checkout.js - Trang hóa đơn: nhập thông tin và xác nhận đặt sân
// Đọc "sportgoPendingBooking" (sessionStorage), ghi "sportgoBookings" (localStorage)
// ========================================
(() => {
    const PENDING_KEY = "sportgoPendingBooking";
    const BOOKINGS_KEY = "sportgoBookings";
    const HOLDS_KEY = "sportgoHolds";
    const infoBox = document.getElementById("invoice-info");
    const body = document.getElementById("invoice-body");
    const totalEl = document.getElementById("invoice-total");
    const form = document.getElementById("checkout-form");
    const message = document.getElementById("checkout-message");
    if (!infoBox || !form) return;

    function escapeHtml(value) {
        return String(value ?? "").replace(/[&<>"']/g, c => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        })[c]);
    }

    function formatPrice(n) {
        return `${Number(n || 0).toLocaleString("vi-VN")}đ`;
    }

    function formatDate(iso) {
        const [y, m, d] = String(iso).split("-");
        return y && m && d ? `${d}/${m}/${y}` : iso;
    }

    function showMessage(text, isError = true) {
        message.textContent = text;
        message.classList.toggle("checkout-message--error", isError);
    }

    // Đọc lịch đặt đang chờ; hỏng hoặc chưa có thì trả về null
    function loadPending() {
        try {
            const data = JSON.parse(sessionStorage.getItem(PENDING_KEY));
            if (data && Array.isArray(data.slots) && data.slots.length > 0) return data;
        } catch (error) {
            console.error("Không đọc được hóa đơn:", error);
        }
        return null;
    }

    function loadBookings() {
        try {
            const data = JSON.parse(localStorage.getItem(BOOKINGS_KEY));
            return Array.isArray(data) ? data : [];
        } catch (error) {
            return [];
        }
    }

    const pending = loadPending();

    // Không có gì để thanh toán -> báo và ẩn form
    if (!pending) {
        infoBox.innerHTML = `
            <p>Chưa có lịch đặt nào cần thanh toán.</p>
            <p><a href="courts.html">Chọn sân để đặt</a></p>
        `;
        form.hidden = true;
        return;
    }

    // ---------- Giữ chỗ: đếm ngược ----------
    const countdownEl = document.getElementById("hold-countdown");
    const owner = sessionStorage.getItem("sportgoHoldOwner");
    const detailUrl = `courts-details.html?id=${pending.courtId}&date=${pending.date}`;
    let timerId = null;

    function releaseHold() {
        try {
            const holds = JSON.parse(localStorage.getItem(HOLDS_KEY));
            if (Array.isArray(holds)) {
                localStorage.setItem(
                    HOLDS_KEY,
                    JSON.stringify(holds.filter(h => h.owner !== owner))
                );
            }
        } catch (error) {
            localStorage.removeItem(HOLDS_KEY);
        }
    }

    function expireHold() {
        clearInterval(timerId);
        releaseHold();
        sessionStorage.removeItem(PENDING_KEY);
        alert("Đã hết giờ giữ sân (10 phút). Bạn sẽ được đưa về trang chi tiết sân để chọn lại.");
        window.location.href = detailUrl + "&expired=1";
    }

    function tick() {
        const remaining = Number(pending.expiresAt) - Date.now();
        if (!pending.expiresAt || remaining <= 0) {
            expireHold();
            return;
        }
        const totalSeconds = Math.ceil(remaining / 1000);
        const mm = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
        const ss = String(totalSeconds % 60).padStart(2, "0");
        countdownEl.textContent = `${mm}:${ss}`;
        countdownEl.classList.toggle("checkout-timer--warning", totalSeconds <= 60);
    }

    tick();
    timerId = setInterval(tick, 1000);

    // ---------- Vẽ hóa đơn ----------
    infoBox.innerHTML = `
        <p><strong>${escapeHtml(pending.courtName)}</strong></p>
        <p>Ngày đặt: ${escapeHtml(formatDate(pending.date))}</p>
    `;

    body.innerHTML = pending.slots.map(slot => `
        <tr>
            <td>${escapeHtml(slot.subCourtName)}</td>
            <td>${escapeHtml(slot.startTime)} – ${escapeHtml(slot.endTime)}</td>
            <td>${formatPrice(slot.price)}</td>
        </tr>
    `).join("");

    const total = pending.slots.reduce((sum, s) => sum + Number(s.price || 0), 0);
    totalEl.textContent = formatPrice(total);

    // ---------- Kiểm tra trùng giờ lần cuối ----------
    function findConflict(bookings) {
        return pending.slots.find(slot =>
            bookings.some(b => {
                if (Number(b.courtId) !== pending.courtId || b.date !== pending.date) return false;
                if (b.subCourtId && String(b.subCourtId) !== String(slot.subCourtId)) return false;
                // "HH:MM" đã đệm số 0 nên so sánh chuỗi là đúng
                return slot.startTime < b.endTime && slot.endTime > b.startTime;
            })
        );
    }

    // ---------- Xác nhận ----------
    form.addEventListener("submit", event => {
        event.preventDefault();

        if (Date.now() >= Number(pending.expiresAt)) {
            expireHold();
            return;
        }

        const name = document.getElementById("customer-name").value.trim();
        const phone = document.getElementById("customer-phone").value.trim();
        const email = document.getElementById("customer-email").value.trim();
        const note = document.getElementById("customer-note").value.trim();
        const payment = form.elements.payment.value;

        if (name.length < 2) return showMessage("Vui lòng nhập họ và tên.");
        if (!/^0\d{9}$/.test(phone)) return showMessage("Số điện thoại phải gồm 10 chữ số, bắt đầu bằng 0.");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showMessage("Email không hợp lệ.");

        const bookings = loadBookings();
        const conflict = findConflict(bookings);
        if (conflict) {
            return showMessage(
                `${conflict.subCourtName}, khung ${conflict.startTime}–${conflict.endTime} vừa có người đặt. Vui lòng quay lại chọn giờ khác.`
            );
        }

        const orderId = "SG" + Date.now();
        const newBookings = pending.slots.map(slot => ({
            orderId,
            courtId: pending.courtId,
            courtName: pending.courtName,
            courtImage: pending.courtImage,
            subCourtId: slot.subCourtId,
            subCourtName: slot.subCourtName,
            date: pending.date,
            startTime: slot.startTime,
            endTime: slot.endTime,
            price: slot.price,
            customerName: name,
            customerPhone: phone,
            customerEmail: email,
            note,
            paymentMethod: payment
        }));

        try {
            localStorage.setItem(BOOKINGS_KEY, JSON.stringify([...bookings, ...newBookings]));
        } catch (error) {
            return showMessage("Không thể lưu lịch đặt. Vui lòng kiểm tra bộ nhớ trình duyệt.");
        }

        clearInterval(timerId);
        releaseHold();
        sessionStorage.removeItem(PENDING_KEY);
        window.location.href = "booking-history.html?success=1";
    });

        const backLink = document.querySelector(".checkout-back");
    if (backLink) {
        backLink.setAttribute("href", detailUrl);
        backLink.addEventListener("click", () => {
            clearInterval(timerId);
            releaseHold();
            sessionStorage.removeItem(PENDING_KEY);
        });
    }
    
})();