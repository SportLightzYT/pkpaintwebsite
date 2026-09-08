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
    
    const ftDaysEl = document.getElementById('ft-days');
    const ftHoursEl = document.getElementById('ft-hours');
    const ftMinutesEl = document.getElementById('ft-minutes');
    const ftSecondsEl = document.getElementById('ft-seconds');

    let flashSaleEndDate = null; // Can be updated by initPromos API call

    function updateFlashTimer() {
        if (!ftHoursEl) return;
        const nowTime = new Date();
        
        let targetTime;
        if (flashSaleEndDate) {
            targetTime = flashSaleEndDate;
        } else {
            // Default fallback: midnight tonight
            targetTime = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate() + 1, 0, 0, 0);
        }
        
        const diff = targetTime - nowTime;
        
        if (diff <= 0) {
            if (ftDaysEl) ftDaysEl.textContent = '00';
            ftHoursEl.textContent = '00';
            if (ftMinutesEl) ftMinutesEl.textContent = '00';
            if (ftSecondsEl) ftSecondsEl.textContent = '00';
            return;
        }
        
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        
        if (ftDaysEl) {
            if (d > 0) {
                ftDaysEl.parentElement.style.display = 'block';
                ftDaysEl.textContent = String(d).padStart(2, '0');
            } else {
                // Hide days if 0 to save space
                ftDaysEl.parentElement.style.display = 'none';
            }
        }
        
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
    // ==========================================
    // DYNAMIC PROMOTIONS FETCHING & RENDERING
    // ==========================================
    let allPromotions = [];
    let filteredPromotions = [];
    let currentPromoCategory = 'all';
    let displayedPromosCount = 0;
    let heroUsesSettingsEndDate = false;
    const PROMOS_PER_PAGE = 8;
    const fallbackGradients = [
        'linear-gradient(135deg, #1a1a2e, #16213e)',
        'linear-gradient(135deg, #1f1a0e, #2e2510)',
        'linear-gradient(135deg, #0d1f2d, #1a3344)',
        'linear-gradient(135deg, #1a1200, #2a1e00)'
    ];
    function escapeHtml(s){ if(s==null) return ''; return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }
    function isSafeUrl(u){ if(!u) return false; try{ const p=new URL(u, window.location.origin); return p.protocol==='http:'||p.protocol==='https:'; }catch(e){ return false; } }
    function sanitizeHTML(html) {
        if (window.DOMPurify && DOMPurify.sanitize) return DOMPurify.sanitize(html);
        // Fallback: strip tags if DOMPurify unavailable (prevent raw HTML XSS)
        const tmp=document.createElement('div');
        tmp.textContent=html;
        return tmp.innerHTML;
    }

    window.toggleDropdown = function (id) {
        const wrap = document.getElementById(id);
        if (!wrap) return;
        const trigger = wrap.querySelector('.dropdown-trigger');
        const panel = wrap.querySelector('.dropdown-panel');
        if (!trigger || !panel) return;
        const isOpen = trigger.classList.contains('open');
        closeAllDropdowns();
        if (!isOpen) {
            trigger.classList.add('open');
            panel.classList.add('open');
        }
    };
    function closeAllDropdowns() {
        document.querySelectorAll('.dropdown-trigger').forEach(t => t.classList.remove('open'));
        document.querySelectorAll('.dropdown-panel').forEach(p => p.classList.remove('open'));
    }
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown-wrap')) closeAllDropdowns();
    });

    window.selectPromoCategory = function (el) {
        const val = el.dataset.value;
        const text = el.querySelector('.dropdown-item-left').textContent.trim();
        document.querySelectorAll('#promoCategoryPanel .dropdown-item').forEach(i => i.classList.remove('active'));
        el.classList.add('active');
        
        const triggerText = document.getElementById('selectedCategoryText');
        if (triggerText) {
            triggerText.innerHTML = sanitizeHTML(val === 'all' ? 'หมวดหมู่สินค้า (ทั้งหมด)' : `หมวดหมู่สินค้า (${text})`);
        }
        
        currentPromoCategory = val;
        closeAllDropdowns();
        
        // Reset and re-render
        displayedPromosCount = 0;
        renderPromos(false);
    };

    window.loadMorePromos = function() {
        renderPromos(true);
    };

    async function loadPromotionsDynamic() {
        const grid = document.getElementById('promoProductsGrid');
        if (!grid) return;
        
        // Show skeleton
        grid.innerHTML = sanitizeHTML('<div style="grid-column:1/-1; text-align:center; padding:60px 20px; color:#999;"><i class="fas fa-spinner fa-spin" style="font-size:32px; margin-bottom:12px;"></i><p>กำลังโหลดสินค้าลดราคา...</p></div>');
        
        try {
            const res = await fetch('data/promotions.json');
            if (!res.ok) throw new Error('HTTP ' + res.status);
            allPromotions = await res.json();
            
            // Find nearest end date for Hero
            let nearestEndDate = null;
            const nowMs = Date.now();
            allPromotions.forEach(p => {
                if (p.end_date) {
                    const pEnd = new Date(p.end_date.replace(/-/g, '/'));
                    if (pEnd.getTime() > nowMs) {
                        if (!nearestEndDate || pEnd < nearestEndDate) {
                            nearestEndDate = pEnd;
                        }
                    }
                }
            });
            if (nearestEndDate && !heroUsesSettingsEndDate) {
                endDate = nearestEndDate;
                updateCountdown();
            }

            displayedPromosCount = 0;
            renderPromos(false);
            
        } catch (err) {
            grid.innerHTML = sanitizeHTML(`<div style="grid-column:1 / -1; width:100%; text-align:center; padding:50px; color:#ef4444;"><i class="fas fa-exclamation-triangle fa-3x" style="margin-bottom: 12px;"></i><h4 style="margin-bottom:6px; font-weight:600;">เกิดข้อผิดพลาดในการเชื่อมต่อข้อมูล</h4></div>`);
        }
    }

    function renderPromos(append = false) {
        const grid = document.getElementById('promoProductsGrid');
        const loadMoreContainer = document.getElementById('loadMoreContainer');
        const countDisplay = document.getElementById('promoCountDisplay');
        if (!grid) return;

        if (!append) {
            grid.innerHTML = sanitizeHTML('');
            displayedPromosCount = 0;
        }
        
        filteredPromotions = allPromotions.filter(p => {
            if (currentPromoCategory === 'all') return true;
            return p.product_category === currentPromoCategory;
        });
        
        if (filteredPromotions.length === 0) {
            grid.innerHTML = sanitizeHTML(`
            <div class="promo-empty-state" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #999;">
                <div style="font-size: 56px; margin-bottom: 18px; color: #1e90ff; filter: drop-shadow(0 4px 10px rgba(30,144,255,0.25));"><i class="fas fa-tags"></i></div>
                <h3 style="font-size: 20px; color: #1a1a2e; margin-bottom: 8px; font-weight: 600;">ไม่มีโปรโมชั่นพิเศษในหมวดหมู่นี้</h3>
                <a href="products.html" class="btn-primary" style="border-radius: 30px; padding: 10px 28px; font-size: 13px; margin-top: 16px; display: inline-flex; align-items: center; gap: 8px; text-decoration: none; color: #fff; background: #1e90ff;"><i class="fas fa-shopping-bag"></i> ดูสินค้าทั้งหมด</a>
            </div>`);
            if (loadMoreContainer) loadMoreContainer.style.display = 'none';
            if (countDisplay) countDisplay.textContent = '0';
            return;
        }

        const toRender = filteredPromotions.slice(displayedPromosCount, displayedPromosCount + PROMOS_PER_PAGE);
        if (countDisplay) countDisplay.textContent = filteredPromotions.length;

        toRender.forEach((p, index) => {
            const pct = Math.round(((p.original_price - p.discount_price) / p.original_price) * 100);
            const saveAmount = p.original_price - p.discount_price;
            const rawTitle = p.product_title || p.product_name || '';
            const escapedTitleAttr = escapeHtml(rawTitle);
            const escapedTitleHtml = escapeHtml(rawTitle);
            const safeBuyUrl = isSafeUrl(p.shopee_url) ? escapeHtml(p.shopee_url) : 'https://shopee.co.th';
            const safeImg = isSafeUrl(p.product_img) ? escapeHtml(p.product_img) : '';
            
            let imgHTML = '';
            if (safeImg) {
                imgHTML = `<div class="promo-product-img" style="background: #fff; padding: 12px; box-sizing: border-box;"><img src="${safeImg}" alt="${escapedTitleAttr}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 8px;" loading="lazy" onerror="this.style.display='none'"></div>`;
            } else {
                const gradient = fallbackGradients[index % fallbackGradients.length];
                imgHTML = `<div class="promo-product-img" style="background: ${gradient};"><i class="fas fa-spray-can"></i></div>`;
            }

            const card = document.createElement('div');
            card.className = 'promo-product-card';
            card.style.opacity = '0';
            card.style.transform = 'translateY(16px)';
            card.innerHTML = sanitizeHTML(`
                <span class="promo-product-badge">-${Number(pct)}%</span>
                ${imgHTML}
                <div class="promo-product-info">
                    <div class="promo-product-title" title="${escapedTitleAttr}">${escapedTitleHtml}</div>
                    <div class="promo-product-price-row">
                        <span class="promo-product-price">฿${Number(p.discount_price).toLocaleString()}</span>
                        <span class="promo-product-old">฿${Number(p.original_price).toLocaleString()}</span>
                    </div>
                    <span class="promo-product-save">ประหยัด ฿${Number(saveAmount).toLocaleString()}</span>
                    <div class="promo-product-progress">
                        <div class="progress-text" style="display: flex; justify-content: space-between; font-weight: 700; color: #f5222d; margin-bottom: 6px; font-size: 11px;">
                            <span>ความต้องการสูง!</span>
                            <span class="card-countdown" data-end="${escapeHtml(p.end_date)}" style="color: #ff4d4f; font-weight: 700;">ใกล้หมดโปร</span>
                        </div>
                        <div class="progress-bar-bg" style="background-color: #ffe6e6; border-radius: 10px; height: 6px; overflow: hidden;"><div class="progress-bar-fill" style="width:${80 + ((Number(p.id) * 17) % 15)}%; background: linear-gradient(90deg, #f5222d, #ff7a45); border-radius: 10px; height: 100%;"></div></div>
                    </div>
                    <a href="${safeBuyUrl}" target="_blank" rel="noopener" class="btn-buy-now" data-promo-id="${Number(p.id)}"><i class="fas fa-shopping-cart"></i> สั่งซื้อเลย</a>
                </div>
            `);
            
            // Re-bind click for logging
            const btn = card.querySelector('.btn-buy-now');
            if (btn) {
                btn.addEventListener('click', function() {
                    const promoId = this.dataset.promoId;
                    if (promoId) {
                        fetch('api/products.php', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ action: 'click', id: parseInt(p.product_id) })
                        }).catch(err => {});
                    }
                });
            }

            grid.appendChild(card);
            
            // trigger animation
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            }, 50 * index);
        });

        displayedPromosCount += toRender.length;

        if (loadMoreContainer) {
            loadMoreContainer.style.display = displayedPromosCount < filteredPromotions.length ? 'block' : 'none';
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
            btn.innerHTML = sanitizeHTML('<i class="fas fa-check"></i> ก๊อปปี้แล้ว');
            btn.classList.add('copied');
            showToast(code);
            setTimeout(() => {
                btn.innerHTML = sanitizeHTML('<i class="fas fa-copy"></i> ก๊อปปี้');
                btn.classList.remove('copied');
            }, 2500);
        }).catch((err) => {
            alert('ไม่สามารถก๊อปปี้ได้ โปรดคัดลอกด้วยตนเอง: ' + code);
            btn.innerHTML = sanitizeHTML('<i class="fas fa-exclamation-triangle"></i> ก๊อปปี้ไม่สำเร็จ');
            setTimeout(() => {
                btn.innerHTML = sanitizeHTML('<i class="fas fa-copy"></i> ก๊อปปี้');
            }, 2500);
        });
    };
    
    function updateCardCountdowns() {
        const countdowns = document.querySelectorAll('.card-countdown');
        const nowMs = Date.now();
        countdowns.forEach(el => {
            const endStr = el.getAttribute('data-end');
            if (!endStr) return;
            const targetTime = new Date(endStr.replace(/-/g, '/')).getTime();
            const diff = targetTime - nowMs;
            if (diff <= 0) {
                el.textContent = 'หมดเวลาแล้ว';
                el.style.color = '#999';
                return;
            }
            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);
            
            if (d > 0) {
                el.textContent = `เหลือ ${d} วัน ${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
            } else {
                el.textContent = `เหลือ ${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
            }
        });
    }

    const cardCountdownInterval = setInterval(updateCardCountdowns, 1000);

    window.addEventListener('beforeunload', function() {
        if (cardCountdownInterval) clearInterval(cardCountdownInterval);
    });

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
    async function initPromos() {
        // Load flash sale settings from API
        try {
            const settingsRes = await fetch('data/settings.json');
            if (settingsRes.ok) {
                const settings = await settingsRes.json();
                const flashTitle = document.getElementById('flashSaleTitle');
                const flashDesc = document.getElementById('flashSaleDesc');
                const heroTitle = document.getElementById('heroTitle');
                const heroDesc = document.getElementById('heroDesc');
                const heroBadge = document.getElementById('heroBadge');
                if (flashTitle && settings.flash_sale_title) flashTitle.textContent = settings.flash_sale_title;
                if (flashDesc && settings.flash_sale_desc) flashDesc.textContent = settings.flash_sale_desc;
                if (heroTitle && settings.flash_sale_title) heroTitle.textContent = settings.flash_sale_title;
                if (heroDesc && settings.flash_sale_desc) heroDesc.textContent = settings.flash_sale_desc;
                if (heroBadge) heroBadge.textContent = 'โปรโมชั่นพิเศษ';
                if (settings.flash_sale_end) {
                    const parsedDate = new Date(settings.flash_sale_end.replace(/-/g, '/')); // replace - with / for safari compatibility
                    if (!isNaN(parsedDate)) {
                        flashSaleEndDate = parsedDate;
                        endDate = parsedDate;
                        heroUsesSettingsEndDate = true;
                        updateCountdown();
                        updateFlashTimer(); // force immediate UI update
                    }
                }
            }
        } catch (e) { /* ignore - use defaults */ }

        loadPromotionsDynamic();
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPromos);
    } else {
        initPromos();
    }
})();
