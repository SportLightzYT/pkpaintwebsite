(function() {
    'use strict';
    const cdDaysEl = document.getElementById('cd-days');
    const cdHoursEl = document.getElementById('cd-hours');
    const cdMinutesEl = document.getElementById('cd-minutes');
    const cdSecondsEl = document.getElementById('cd-seconds');

    let endDate = null;
    
    // Set a safe default fallback endDate (3 days from now)
    const now = new Date();
    endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3, 23, 59, 59);

    function updateCountdown() {
        if (!cdDaysEl) return;
        const nowTime = new Date();
        const diff = endDate - nowTime;
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
        const nowTime = new Date();
        const midnight = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate() + 1, 0, 0, 0);
        const diff = midnight - nowTime;
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

    // ==========================================
    // DYNAMIC PROMOTIONS FETCHING & RENDERING
    // ==========================================
    async function loadPromotionsDynamic() {
        const grid = document.querySelector('.promo-products-grid');
        if (!grid) return;

        // Render skeleton loaders
        let skeletons = '';
        for (let i = 0; i < 4; i++) {
            skeletons += `
            <div class="promo-product-card" style="min-height:360px; padding:14px; opacity:1; transform:none;">
                <div class="shimmer-img" style="width:100%; aspect-ratio:4/3; background:#f0f2f5; border-radius:8px; margin-bottom:12px; position:relative; overflow:hidden;"></div>
                <div class="shimmer-line" style="height:14px; background:#f0f2f5; border-radius:4px; width:80%; margin-bottom:10px; position:relative; overflow:hidden;"></div>
                <div class="shimmer-line" style="height:22px; background:#f0f2f5; border-radius:4px; width:50%; margin-bottom:10px; position:relative; overflow:hidden;"></div>
                <div class="shimmer-line" style="height:12px; background:#f0f2f5; border-radius:4px; width:90%; margin-bottom:12px; position:relative; overflow:hidden;"></div>
                <div class="shimmer-btn" style="height:36px; background:#f0f2f5; border-radius:6px; width:100%; position:relative; overflow:hidden;"></div>
            </div>`;
        }
        grid.innerHTML = skeletons;

        // Dynamic Shimmer style injection
        if (!document.getElementById('shimmer-style')) {
            const style = document.createElement('style');
            style.id = 'shimmer-style';
            style.textContent = `
                .shimmer-img::after, .shimmer-line::after, .shimmer-btn::after {
                    content: "";
                    position: absolute;
                    top: 0; right: 0; bottom: 0; left: 0;
                    transform: translateX(-100%);
                    background-image: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0) 100%);
                    animation: shimmer-anim 1.5s infinite;
                }
                @keyframes shimmer-anim {
                    100% { transform: translateX(100%); }
                }
            `;
            document.head.appendChild(style);
        }

        try {
            const res = await fetch('data/promotions.json');
            if (!res.ok) throw new Error('HTTP ' + res.status);
            const promotionsData = await res.json();

            if (promotionsData.length === 0) {
                // Renders elegant Empty State
                grid.innerHTML = `
                <div class="promo-empty-state" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
                    <div style="font-size: 56px; margin-bottom: 18px; color: #1e90ff; filter: drop-shadow(0 4px 10px rgba(30,144,255,0.25));"><i class="fas fa-tags"></i></div>
                    <h3 style="font-size: 20px; color: #1a1a2e; margin-bottom: 8px; font-weight: 600;">ไม่มีโปรโมชั่นพิเศษในขณะนี้</h3>
                    <p style="font-size: 14px; max-width: 440px; margin: 0 auto 20px; color:#777; line-height: 1.6;">กำลังเตรียมข้อเสนอสุดพิเศษสำหรับคุณอยู่! โปรดแวะกลับมาดูอีกครั้งในเร็วๆ นี้ หรือดูแคตตาล็อคสินค้าอื่นของเรา</p>
                    <a href="products.html" class="btn-primary" style="border-radius: 30px; padding: 10px 28px; font-size: 13px;"><i class="fas fa-shopping-bag" style="margin-right: 6px;"></i> ดูสินค้าทั้งหมด</a>
                </div>`;
                return;
            }

            // Find the closest ending promotion to set the Hero banner countdown
            let nearestEndDate = null;
            const nowMs = Date.now();

            promotionsData.forEach(p => {
                if (p.end_date) {
                    // Safe parsing for date strings
                    const pEnd = new Date(p.end_date.replace(/-/g, '/'));
                    if (pEnd.getTime() > nowMs) {
                        if (!nearestEndDate || pEnd < nearestEndDate) {
                            nearestEndDate = pEnd;
                        }
                    }
                }
            });

            if (nearestEndDate) {
                endDate = nearestEndDate;
                updateCountdown();
            }

            // Clear Grid and Render Real dynamic cards
            grid.innerHTML = '';
            
            const fallbackGradients = [
                'linear-gradient(135deg, #1a1a2e, #16213e)',
                'linear-gradient(135deg, #1f1a0e, #2e2510)',
                'linear-gradient(135deg, #0d1f2d, #1a3344)',
                'linear-gradient(135deg, #1a1200, #2a1e00)'
            ];

            promotionsData.forEach((p, index) => {
                const pct = Math.round(((p.original_price - p.discount_price) / p.original_price) * 100);
                const saveAmount = p.original_price - p.discount_price;
                const formattedPrice = Number(p.discount_price).toLocaleString();
                const formattedOldPrice = Number(p.original_price).toLocaleString();
                const formattedSave = Number(saveAmount).toLocaleString();
                
                // Keep progress bar looking organic but consistent
                const soldPct = 50 + ((p.id * 13) % 40); // Generates deterministic values between 50% and 90%
                const leftPct = 100 - soldPct;

                const escapedTitle = (p.product_title || p.product_name).replace(/"/g, '&quot;');
                const buyUrl = p.shopee_url ? p.shopee_url : 'https://shopee.co.th';

                // Image render wrapper: if we have a real image, render it cleanly with container padding, else fall back to iconic gradient
                let imgHTML = '';
                if (p.product_img && p.product_img.trim() !== '') {
                    imgHTML = `
                    <div class="promo-product-img" style="background: #fff; padding: 12px; box-sizing: border-box;">
                        <img src="${p.product_img}" alt="${escapedTitle}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 8px;" loading="lazy">
                    </div>`;
                } else {
                    const gradient = fallbackGradients[index % fallbackGradients.length];
                    imgHTML = `
                    <div class="promo-product-img" style="background: ${gradient};">
                        <i class="fas fa-spray-can"></i>
                    </div>`;
                }

                const card = document.createElement('div');
                card.className = 'promo-product-card';
                card.innerHTML = `
                    <span class="promo-product-badge">-${pct}%</span>
                    ${imgHTML}
                    <div class="promo-product-info">
                        <div class="promo-product-title" title="${escapedTitle}">${p.product_title || p.product_name}</div>
                        <div class="promo-product-price-row">
                            <span class="promo-product-price">฿${formattedPrice}</span>
                            <span class="promo-product-old">฿${formattedOldPrice}</span>
                        </div>
                        <span class="promo-product-save">ประหยัด ฿${formattedSave}</span>
                        <div class="promo-product-progress">
                            <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${soldPct}%"></div></div>
                            <div class="progress-text"><span>ขายแล้ว ${soldPct}%</span><span>เหลือ ${leftPct}%</span></div>
                        </div>
                        <a href="${buyUrl}" target="_blank" rel="noopener" class="btn-buy-now" data-promo-id="${p.id}"><i class="fas fa-shopping-cart"></i> สั่งซื้อเลย</a>
                    </div>
                `;

                grid.appendChild(card);
            });

            // Re-apply reveal animation if not reduced motion
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (!prefersReducedMotion) {
                const revealObserver = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                            revealObserver.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

                grid.querySelectorAll('.promo-product-card').forEach((el, idx) => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(16px)';
                    el.style.transition = `opacity 0.4s ease ${idx * 0.05}s, transform 0.4s ease ${idx * 0.05}s`;
                    revealObserver.observe(el);
                });
            }

            // Click listener for Shopee Conversion Logging
            grid.querySelectorAll('.btn-buy-now').forEach(btn => {
                btn.addEventListener('click', function() {
                    const promoId = this.dataset.promoId;
                    if (promoId) {
                        // Dynamically log shopee conversion click on the associated product
                        fetch('data/products.json', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ action: 'click', id: parseInt(promotionsData.find(pr => pr.id == promoId)?.product_id) })
                        }).catch(err => // console.error('Error logging shopee click conversion from promo:', err));
                    }
                });
            });

        } catch (err) {
            // console.error('Error fetching dynamic active promotions:', err);
            grid.innerHTML = `
            <div style="grid-column:1 / -1; width:100%; text-align:center; padding:50px; color:#ef4444;">
                <i class="fas fa-exclamation-triangle fa-3x" style="margin-bottom: 12px;"></i>
                <h4 style="margin-bottom:6px; font-weight:600;">เกิดข้อผิดพลาดในการเชื่อมต่อข้อมูลหลังบ้าน</h4>
                <p style="font-size: 13px; color: #777;">กรุณาติดต่อผู้ดูแลระบบ หรือคลิกรันไฟล์ติดตั้งฐานข้อมูลอีกครั้ง</p>
            </div>`;
        }
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

    // Proactively kick off load promotions data on initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadPromotionsDynamic);
    } else {
        loadPromotionsDynamic();
    }
})();
