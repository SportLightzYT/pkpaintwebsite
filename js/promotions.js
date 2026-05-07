(function() {
    'use strict';

    // Page-specific: Countdown Timer (main promo)
    function updateCountdown() {
        const now = new Date();
        const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 23, 59, 59);
        const diff = endDate - now;
        if (diff <= 0) return;
        
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        
        const dEl = document.getElementById('cd-days');
        const hEl = document.getElementById('cd-hours');
        const mEl = document.getElementById('cd-minutes');
        const sEl = document.getElementById('cd-seconds');
        
        if (dEl) dEl.textContent = String(d).padStart(2, '0');
        if (hEl) hEl.textContent = String(h).padStart(2, '0');
        if (mEl) mEl.textContent = String(m).padStart(2, '0');
        if (sEl) sEl.textContent = String(s).padStart(2, '0');
    }
    
    if (document.getElementById('cd-days')) {
        setInterval(updateCountdown, 1000);
        updateCountdown();
    }

    // Flash Sale Timer
    function updateFlashTimer() {
        const now = new Date();
        const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
        const diff = midnight - now;
        
        const h = Math.floor(diff / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        
        const hEl = document.getElementById('ft-hours');
        const mEl = document.getElementById('ft-minutes');
        const sEl = document.getElementById('ft-seconds');
        
        if (hEl) hEl.textContent = String(h).padStart(2, '0');
        if (mEl) mEl.textContent = String(m).padStart(2, '0');
        if (sEl) sEl.textContent = String(s).padStart(2, '0');
    }
    
    if (document.getElementById('ft-hours')) {
        setInterval(updateFlashTimer, 1000);
        updateFlashTimer();
    }

    // Copy coupon code
    window.copyCode = function(btn, code) {
        navigator.clipboard.writeText(code).then(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> ก๊อปปี้แล้ว';
            btn.classList.add('copied');
            showToast(code);
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-copy"></i> ก๊อปปี้';
                btn.classList.remove('copied');
            }, 2500);
        }).catch(() => {
            const el = document.createElement('textarea');
            el.value = code;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            btn.innerHTML = '<i class="fas fa-check"></i> ก๊อปปี้แล้ว';
            btn.classList.add('copied');
            showToast(code);
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-copy"></i> ก๊อปปี้';
                btn.classList.remove('copied');
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

    // Page-specific: Scroll-in animations
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
