(function() {
    'use strict';
    const cdDaysEl = document.getElementById('cd-days');
    const cdHoursEl = document.getElementById('cd-hours');
    const cdMinutesEl = document.getElementById('cd-minutes');
    const cdSecondsEl = document.getElementById('cd-seconds');

    let endDate;
    if (cdDaysEl) {
        const endStr = cdDaysEl.dataset.end;
        if (endStr) {
            endDate = new Date(endStr);
        } else {
            const now = new Date();
            endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 23, 59, 59);
        }
    }

    function updateCountdown() {
        if (!cdDaysEl) return;
        const now = new Date();
        const diff = endDate - now;
        if (diff <= 0) {
            cdDaysEl.textContent = '00';
            if (cdHoursEl) cdHoursEl.textContent = '00';
            if (cdMinutesEl) cdMinutesEl.textContent = '00';
            if (cdSecondsEl) cdSecondsEl.textContent = '00';
            return;
        }
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        
        cdDaysEl.textContent = String(d).padStart(2, '0');
        if (cdHoursEl) cdHoursEl.textContent = String(h).padStart(2, '0');
        if (cdMinutesEl) cdMinutesEl.textContent = String(m).padStart(2, '0');
        if (cdSecondsEl) cdSecondsEl.textContent = String(s).padStart(2, '0');
    }
    
    let countdownIntervalId = null;
    if (cdDaysEl) {
        countdownIntervalId = setInterval(updateCountdown, 1000);
        updateCountdown();
    }
    
    const ftHoursEl = document.getElementById('ft-hours');
    const ftMinutesEl = document.getElementById('ft-minutes');
    const ftSecondsEl = document.getElementById('ft-seconds');

    function updateFlashTimer() {
        if (!ftHoursEl) return;
        const now = new Date();
        const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
        const diff = midnight - now;
        const h = Math.floor(diff / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        
        ftHoursEl.textContent = String(h).padStart(2, '0');
        if (ftMinutesEl) ftMinutesEl.textContent = String(m).padStart(2, '0');
        if (ftSecondsEl) ftSecondsEl.textContent = String(s).padStart(2, '0');
    }
    
    let flashIntervalId = null;
    if (ftHoursEl) {
        flashIntervalId = setInterval(updateFlashTimer, 1000);
        updateFlashTimer();
    }
    window.destroyPromotionTimers = function() {
        if (countdownIntervalId) clearInterval(countdownIntervalId);
        if (flashIntervalId) clearInterval(flashIntervalId);
    };
    window.copyCode = function(e, btn, code) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        navigator.clipboard.writeText(code).then(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> ก๊อปปี้แล้ว';
            btn.classList.add('copied');
            showToast(code);
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-copy"></i> ก๊อปปี้';
                btn.classList.remove('copied');
            }, 2500);
        }).catch((err) => {
            alert('ไม่สามารถก๊อปปี้ได้ โปรดคัดลอกด้วยตนเอง: ' + code);
            btn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> ก๊อปปี้ไม่สำเร็จ';
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-copy"></i> ก๊อปปี้';
            }, 2500);
        });
    };
    function showToast(code) {
        const toast = document.getElementById('toast');
        const toastCode = document.getElementById('toastCode');
        if (toast && toastCode) {
            toastCode.textContent = code;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2500);
        }
    }
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
        document.querySelectorAll('.coupon-card, .promo-product-card, .bundle-card, .terms-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(16px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });
    }
})();
