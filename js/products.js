(function () {
    'use strict';
    let selectedCategory = '';
    let selectedBrand = '';
    let priceMin = 0;
    let priceMax = 15000;
    let priceActive = false;
    let searchQuery = '';
    let currentPage = 1;
    const ITEMS_PER_PAGE = 20;
    let filteredCards = [];
    let allCards = [];
    const SLIDER_ABS_MIN = 0;
    const SLIDER_ABS_MAX = 15000;
    const SLIDER_STEP = 100;
    window.toggleDropdown = function (id) {
        const wrap = document.getElementById(id);
        if (!wrap) return;
        const trigger = wrap.querySelector('.dropdown-trigger, .brand-dropdown-trigger');
        const panel = wrap.querySelector('.dropdown-panel, .brand-panel, .price-panel');
        if (!trigger || !panel) return;
        const isOpen = trigger.classList.contains('open');
        closeAllDropdowns();
        if (!isOpen) {
            trigger.classList.add('open');
            panel.classList.add('open');
        }
    };
    function closeAllDropdowns() {
        document.querySelectorAll('.dropdown-trigger, .brand-dropdown-trigger').forEach(t => t.classList.remove('open'));
        document.querySelectorAll('.dropdown-panel, .brand-panel, .price-panel').forEach(p => p.classList.remove('open'));
    }
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown-wrap')) closeAllDropdowns();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllDropdowns();
    });
    window.selectCategory = function (el) {
        const val = el.dataset.value;
        document.querySelectorAll('#categoryPanel .dropdown-item').forEach(i => i.classList.remove('active'));
        selectedCategory = selectedCategory === val ? '' : val;
        if (selectedCategory) el.classList.add('active');
        closeAllDropdowns();
        updateFilters();
    };
    window.selectBrand = function (el) {
        const val = el.dataset.value;
        document.querySelectorAll('#brandPanel .brand-item').forEach(i => i.classList.remove('active'));
        selectedBrand = selectedBrand === val ? '' : val;
        if (selectedBrand) el.classList.add('active');
        closeAllDropdowns();
        updateFilters();
    };
    window.applyCustomPrice = function () {
        const minInput = document.getElementById('priceMinInput');
        const maxInput = document.getElementById('priceMaxInput');
        const minVal = parseInt(minInput?.value) || 0;
        const maxVal = parseInt(maxInput?.value) || SLIDER_ABS_MAX;
        priceMin = Math.max(SLIDER_ABS_MIN, Math.min(minVal, SLIDER_ABS_MAX));
        priceMax = Math.max(priceMin, Math.min(maxVal, SLIDER_ABS_MAX));
        priceActive = (priceMin > SLIDER_ABS_MIN || priceMax < SLIDER_ABS_MAX);
        syncSliderFromState();
        syncInputsFromState();
        applyPriceToUI();
    };
    window.clearPriceFilter = function (shouldFilter = true) {
        priceMin = SLIDER_ABS_MIN;
        priceMax = SLIDER_ABS_MAX;
        priceActive = false;
        syncSliderFromState();
        syncInputsFromState();
        applyPriceToUI(shouldFilter);
    };
    function syncSliderFromState() {
        const sMin = document.getElementById('sliderMin');
        const sMax = document.getElementById('sliderMax');
        if (sMin) sMin.value = priceMin;
        if (sMax) sMax.value = priceMax;
        updateSliderFill();
        updatePriceDisplay();
    }
    function syncInputsFromState() {
        const minInput = document.getElementById('priceMinInput');
        const maxInput = document.getElementById('priceMaxInput');
        if (minInput) minInput.value = priceMin > SLIDER_ABS_MIN ? priceMin : '';
        if (maxInput) maxInput.value = priceMax < SLIDER_ABS_MAX ? priceMax : '';
    }
    function updatePriceDisplay() {
        const display = document.getElementById('priceDisplayText');
        if (!display) return;
        const minStr = '฿' + priceMin.toLocaleString();
        const maxStr = priceMax >= SLIDER_ABS_MAX ? 'ไม่จำกัด' : '฿' + priceMax.toLocaleString();
        display.textContent = minStr + ' - ' + maxStr;
    }
    function applyPriceToUI(shouldFilter = true) {
        const triggerText = document.getElementById('priceTriggerText');
        const countEl = document.getElementById('priceCount');
        if (!triggerText || !countEl) return;
        if (priceActive) {
            const minStr = priceMin.toLocaleString();
            const maxStr = priceMax >= SLIDER_ABS_MAX ? 'ไม่จำกัด' : '฿' + priceMax.toLocaleString();
            triggerText.textContent = '฿' + minStr + ' - ' + maxStr;
            countEl.textContent = '1';
            countEl.style.display = '';
        } else {
            triggerText.textContent = 'ช่วงราคา';
            countEl.style.display = 'none';
        }
        if (shouldFilter) {
            updateFilters();
        }
    }
    const sliderMin = document.getElementById('sliderMin');
    const sliderMax = document.getElementById('sliderMax');
    function updateSliderFill() {
        const fill = document.getElementById('sliderFill');
        if (!fill || !sliderMin || !sliderMax) return;
        const min = parseInt(sliderMin.value);
        const max = parseInt(sliderMax.value);
        const range = SLIDER_ABS_MAX - SLIDER_ABS_MIN;
        fill.style.left = ((min - SLIDER_ABS_MIN) / range * 100) + '%';
        fill.style.right = (100 - (max - SLIDER_ABS_MIN) / range * 100) + '%';
    }
    if (sliderMin && sliderMax) {
        sliderMin.addEventListener('input', function () {
            let min = parseInt(this.value);
            let max = parseInt(sliderMax.value);
            if (min > max - SLIDER_STEP) { min = max - SLIDER_STEP; this.value = min; }
            priceMin = min; priceMax = max;
            priceActive = (priceMin > SLIDER_ABS_MIN || priceMax < SLIDER_ABS_MAX);
            updateSliderFill(); updatePriceDisplay(); syncInputsFromState(); applyPriceToUI();
        });
        sliderMax.addEventListener('input', function () {
            let max = parseInt(this.value);
            let min = parseInt(sliderMin.value);
            if (max < min + SLIDER_STEP) { max = min + SLIDER_STEP; this.value = max; }
            priceMin = min; priceMax = max;
            priceActive = (priceMin > SLIDER_ABS_MIN || priceMax < SLIDER_ABS_MAX);
            updateSliderFill(); updatePriceDisplay(); syncInputsFromState(); applyPriceToUI();
        });
    }
    const priceMinInput = document.getElementById('priceMinInput');
    const priceMaxInput = document.getElementById('priceMaxInput');
    function allowOnlyNumbers(e) {
        const allowed = ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight', 'Home', 'End'];
        if (allowed.includes(e.key)) return;
        if ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase())) return;
        if (!/^[0-9]$/.test(e.key)) e.preventDefault();
    }
    if (priceMinInput && priceMaxInput) {
        priceMinInput.addEventListener('keydown', allowOnlyNumbers);
        priceMaxInput.addEventListener('keydown', allowOnlyNumbers);
        priceMinInput.addEventListener('input', function () {
            this.value = this.value.replace(/[^0-9]/g, '');
            let val = Math.max(SLIDER_ABS_MIN, Math.min(parseInt(this.value) || 0, SLIDER_ABS_MAX));
            if (sliderMin) sliderMin.value = val;
            priceMin = val; priceActive = (priceMin > SLIDER_ABS_MIN || priceMax < SLIDER_ABS_MAX);
            updateSliderFill(); updatePriceDisplay(); applyPriceToUI();
        });
        priceMaxInput.addEventListener('input', function () {
            this.value = this.value.replace(/[^0-9]/g, '');
            let val = Math.max(SLIDER_ABS_MIN, Math.min(parseInt(this.value) || 0, SLIDER_ABS_MAX));
            if (sliderMax) sliderMax.value = val;
            priceMax = val; priceActive = (priceMin > SLIDER_ABS_MIN || priceMax < SLIDER_ABS_MAX);
            updateSliderFill(); updatePriceDisplay(); applyPriceToUI();
        });
    }
    function updateFilters() {
        filteredCards = allCards.filter(card => {
            const cat = card.dataset.category;
            const brand = card.dataset.brand;
            const price = parseInt(card.dataset.price) || 0;
            const name = (card.dataset.name || '').toLowerCase();
            if (selectedCategory && cat !== selectedCategory) return false;
            if (selectedBrand && brand !== selectedBrand) return false;
            if (priceActive && (price < priceMin || price > priceMax)) return false;
            if (searchQuery && !name.includes(searchQuery)) return false;
            return true;
        });
        currentPage = 1;
        renderPage();
        updateTriggerCount('categoryCount', selectedCategory);
        updateTriggerCount('brandCount', selectedBrand);
        updateTriggerText('categoryDropdown', selectedCategory || 'หมวดหมู่สินค้า');
        updateTriggerText('brandDropdown', selectedBrand || 'แบรนด์สินค้า');
        renderPills();
    }
    function renderPage(isUserNav = false) {
        const allCards = document.querySelectorAll('#productGrid .product-card');
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const pageSet = new Set(filteredCards.slice(start, end));
        allCards.forEach(card => {
            if (pageSet.has(card)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
        const countDisplay = document.getElementById('productCountDisplay');
        if (countDisplay) countDisplay.textContent = filteredCards.length;
        const noResults = document.getElementById('noResults');
        if (noResults) noResults.style.display = filteredCards.length === 0 ? 'block' : 'none';
        const paginationWrap = document.getElementById('paginationWrap');
        if (paginationWrap) paginationWrap.style.display = filteredCards.length <= ITEMS_PER_PAGE ? 'none' : '';
        renderPagination();
        scrollToGrid(isUserNav);
    }
    function scrollToGrid(isUserNav) {
        if (!isUserNav) return;
        const grid = document.getElementById('productGrid');
        if (grid) {
            const top = grid.getBoundingClientRect().top + window.scrollY - 120;
            window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        }
    }
    function renderPagination() {
        const container = document.getElementById('pagination');
        if (!container) return;
        const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);
        if (totalPages <= 1) { container.innerHTML = ''; return; }
        let html = '';
        html += `<button class="page-btn page-nav ${currentPage === 1 ? 'disabled' : ''}" 
                  onclick="goToPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}
                  aria-label="หน้าก่อนหน้า">
                    <i class="fas fa-chevron-left"></i>
                 </button>`;
        const pages = getPageRange(currentPage, totalPages);
        let prevPage = null;
        pages.forEach(p => {
            if (prevPage !== null && p - prevPage > 1) {
                html += `<span class="page-ellipsis">…</span>`;
            }
            if (p === currentPage) {
                html += `<button class="page-btn active" aria-current="page">${p}</button>`;
            } else {
                html += `<button class="page-btn" onclick="goToPage(${p})">${p}</button>`;
            }
            prevPage = p;
        });
        html += `<button class="page-btn page-nav ${currentPage === totalPages ? 'disabled' : ''}" 
                  onclick="goToPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}
                  aria-label="หน้าถัดไป">
                    <i class="fas fa-chevron-right"></i>
                 </button>`;
        const start = (currentPage - 1) * ITEMS_PER_PAGE + 1;
        const end = Math.min(currentPage * ITEMS_PER_PAGE, filteredCards.length);
        html += `<span class="page-info">รายการที่ ${start}–${end} จาก ${filteredCards.length}</span>`;
        container.innerHTML = html;
    }
    function getPageRange(current, total) {
        if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
        const pages = new Set();
        pages.add(1);
        pages.add(total);
        let start = Math.max(2, current - 2);
        let end = Math.min(total - 1, current + 2);
        if (current <= 3) end = Math.min(total - 1, 6);
        if (current >= total - 2) start = Math.max(2, total - 5);
        for (let i = start; i <= end; i++) {
            pages.add(i);
        }
        return Array.from(pages).sort((a, b) => a - b);
    }
    window.goToPage = function (page) {
        const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);
        if (page < 1 || page > totalPages) return;
        currentPage = page;
        renderPage(true);
    };
    function updateTriggerCount(id, value) {
        const el = document.getElementById(id);
        if (!el) return;
        if (value) { el.textContent = '1'; el.style.display = ''; }
        else el.style.display = 'none';
    }
    function updateTriggerText(dropdownId, text) {
        const wrap = document.getElementById(dropdownId);
        if (!wrap) return;
        const textEl = wrap.querySelector('.dropdown-trigger-text');
        if (textEl) textEl.textContent = text;
    }
    function renderPills() {
        const container = document.getElementById('activeFilters');
        if (!container) return;
        container.innerHTML = '';
        let hasPills = false;
        if (selectedCategory) {
            hasPills = true;
            container.appendChild(createPill(selectedCategory, removeCategory));
        }
        if (selectedBrand) {
            hasPills = true;
            const brandItem = document.querySelector(`.brand-item[data-value="${selectedBrand}"]`);
            const logoSrc = brandItem ? brandItem.querySelector('.brand-logo')?.src : '';
            container.appendChild(createPill(selectedBrand, removeBrand, logoSrc));
        }
        if (priceActive) {
            hasPills = true;
            const minStr = '฿' + priceMin.toLocaleString();
            const maxStr = priceMax >= SLIDER_ABS_MAX ? 'ไม่จำกัด' : '฿' + priceMax.toLocaleString();
            container.appendChild(createPill(minStr + ' - ' + maxStr, removePrice));
        }
        if (hasPills) {
            const clearBtn = document.createElement('button');
            clearBtn.className = 'clear-all-btn';
            clearBtn.textContent = 'ล้างทั้งหมด';
            clearBtn.addEventListener('click', clearAll);
            container.appendChild(clearBtn);
        }
    }
    function createPill(text, removeFn, logoSrc = '') {
        const span = document.createElement('span');
        span.className = 'filter-pill';
        if (logoSrc) {
            const img = document.createElement('img');
            img.src = logoSrc;
            img.className = 'pill-logo';
            img.alt = '';
            span.appendChild(img);
        }
        span.appendChild(document.createTextNode(text + ' '));
        const icon = document.createElement('i');
        icon.className = 'fas fa-times';
        icon.addEventListener('click', removeFn);
        span.appendChild(icon);
        return span;
    }
    window.removeCategory = function (shouldFilter = true) {
        selectedCategory = '';
        document.querySelectorAll('#categoryPanel .dropdown-item').forEach(i => i.classList.remove('active'));
        if (shouldFilter) updateFilters();
    };
    window.removeBrand = function (shouldFilter = true) {
        selectedBrand = '';
        document.querySelectorAll('#brandPanel .brand-item').forEach(i => i.classList.remove('active'));
        if (shouldFilter) updateFilters();
    };
    window.removePrice = function (shouldFilter = true) { window.clearPriceFilter(shouldFilter); };
    window.clearAll = function () {
        window.removeCategory(false);
        window.removeBrand(false);
        window.clearPriceFilter(false);
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.value = '';
        const searchClear = document.getElementById('searchClear');
        if (searchClear) searchClear.style.display = 'none';
        searchQuery = '';
        updateFilters();
    };
    const searchInput = document.getElementById('searchInput');
    const searchClearBtn = document.getElementById('searchClear');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            searchQuery = this.value.toLowerCase().trim();
            if (searchClearBtn) searchClearBtn.style.display = searchQuery ? 'block' : 'none';
            updateFilters();
        });
    }
    if (searchClearBtn) {
        searchClearBtn.addEventListener('click', function () {
            if (searchInput) searchInput.value = '';
            searchQuery = '';
            this.style.display = 'none';
            updateFilters();
        });
    }
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function () {
            const grid = document.getElementById('productGrid');
            if (!grid) return;
            const cards = Array.from(grid.querySelectorAll('.product-card'));
            cards.sort((a, b) => {
                const nameA = a.dataset.name || '';
                const nameB = b.dataset.name || '';
                const priceA = parseInt(a.dataset.price) || 0;
                const priceB = parseInt(b.dataset.price) || 0;
                switch (sortSelect.value) {
                    case 'price-low': return priceA - priceB;
                    case 'price-high': return priceB - priceA;
                    case 'name': return nameA.localeCompare(nameB, 'th');
                    default: return 0;
                }
            });
            const fragment = document.createDocumentFragment();
            cards.forEach(card => fragment.appendChild(card));
            grid.appendChild(fragment);
            allCards = cards; // Update cached allCards
            currentPage = 1;
            updateFilters();
        });
    }
    function initAfterLoad() {
        allCards = Array.from(document.querySelectorAll('#productGrid .product-card'));
        
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
            
            allCards.forEach((el, i) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = `opacity 0.4s ease ${(i % ITEMS_PER_PAGE) * 0.03}s, transform 0.4s ease ${(i % ITEMS_PER_PAGE) * 0.03}s`;
                observer.observe(el);
            });
        }
        
        updateSliderFill();
        updatePriceDisplay();
        updateFilters();
    }

    async function loadProductsData() {
        try {
            const response = await fetch('api/products.php?active_only=true');
            if (!response.ok) throw new Error('Failed to fetch product data');
            const data = await response.json();
            
            const grid = document.getElementById('productGrid');
            if (!grid) return;
            
            let html = '';
            data.forEach(p => {
                const escapedName = (p.name || '').replace(/"/g, '&quot;');
                const escapedCategory = (p.category || '').replace(/"/g, '&quot;');
                const escapedBrand = (p.brand || '').replace(/"/g, '&quot;');
                const escapedTitle = (p.title || '').replace(/"/g, '&quot;');
                
                html += `
                <div class="product-card" data-id="${p.id}" data-category="${escapedCategory}" data-brand="${escapedBrand}" data-price="${p.price}" data-name="${escapedName}">
                    <div class="product-img-box">
                        <img src="${p.img}" alt="${escapedTitle}" loading="lazy">
                    </div>
                    <div class="product-title">${p.title}</div>
                    <div class="price-row">
                        <span class="product-price">${p.price_text}</span>
                    </div>
                    <a href="${p.shopee_url}" class="btn-shopee" target="_blank">
                        <i class="fas fa-shopping-cart"></i> สั่งซื้อได้บน Shopee
                    </a>
                </div>`;
            });
            grid.innerHTML = html;
            
            initAfterLoad();
        } catch (error) {
            // console.error('Error loading products dynamic data:', error);
            const grid = document.getElementById('productGrid');
            if (grid) {
                grid.innerHTML = `<div class="no-results" style="display:block;"><i class="fas fa-exclamation-circle"></i> เกิดข้อผิดพลาดในการโหลดข้อมูลสินค้า กรุณาลองใหม่อีกครั้ง</div>`;
            }
        }
    }

    // Lightbox Logic using Event Delegation
    const lightbox = document.getElementById('productLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const closeLightbox = document.getElementById('closeLightbox');

    if (lightbox && lightboxImg && closeLightbox) {
        function openLightbox(src, caption) {
            lightboxImg.src = src;
            lightboxCaption.textContent = caption;
            lightbox.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        function hideLightbox() {
            lightbox.classList.remove('show');
            document.body.style.overflow = '';
            setTimeout(() => { if (!lightbox.classList.contains('show')) lightboxImg.src = ''; }, 300);
        }

        closeLightbox.addEventListener('click', hideLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.classList.contains('lightbox-content-wrap')) hideLightbox();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('show')) hideLightbox();
        });

        const grid = document.getElementById('productGrid');
        if (grid) {
            grid.addEventListener('click', (e) => {
                const img = e.target.closest('.product-img-box img');
                if (img) {
                    const card = img.closest('.product-card');
                    if (card) {
                        const name = card.dataset.name || card.querySelector('.product-title')?.textContent || 'Product Image';
                        openLightbox(img.src, name);
                        
                        // Increment product views in database
                        if (card.dataset.id) {
                            fetch('api/products.php', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ action: 'view', id: parseInt(card.dataset.id) })
                            }).catch(err => { /* console.error('Error logging view tracking:', err) */ });
                        }
                    }
                }
                
                // Track Shopee Click Conversion
                const btn = e.target.closest('.btn-shopee');
                if (btn) {
                    const card = btn.closest('.product-card');
                    if (card && card.dataset.id) {
                        fetch('api/products.php', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ action: 'click', id: parseInt(card.dataset.id) })
                        }).catch(err => { /* console.error('Error logging click tracking:', err) */ });
                    }
                }
            });
        }
    }

    // Load dynamic data on init
    loadProductsData();
})();