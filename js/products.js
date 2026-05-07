(function() {
    'use strict';

    // ── State ──
    let selectedCategory = '';
    let selectedBrand = '';
    let priceMin = 0;
    let priceMax = 15000;
    let priceActive = false;
    let searchQuery = '';

    const SLIDER_ABS_MIN = 0;
    const SLIDER_ABS_MAX = 15000;
    const SLIDER_STEP = 100;

    // ── Hamburger — Handled by main.js ──

    // ── Dropdown Toggle ──
    window.toggleDropdown = function(id) {
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

    // ── Category Select ──
    window.selectCategory = function(el) {
        const val = el.dataset.value;
        document.querySelectorAll('#categoryPanel .dropdown-item').forEach(i => i.classList.remove('active'));
        if (selectedCategory === val) {
            selectedCategory = '';
        } else {
            selectedCategory = val;
            el.classList.add('active');
        }
        closeAllDropdowns();
        updateFilters();
    };

    // ── Brand Select ──
    window.selectBrand = function(el) {
        const val = el.dataset.value;
        document.querySelectorAll('#brandPanel .brand-item').forEach(i => i.classList.remove('active'));
        if (selectedBrand === val) {
            selectedBrand = '';
        } else {
            selectedBrand = val;
            el.classList.add('active');
        }
        closeAllDropdowns();
        updateFilters();
    };

    // ── Apply Custom Price ──
    window.applyCustomPrice = function() {
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

    // ── Clear Price Filter ──
    window.clearPriceFilter = function() {
        priceMin = SLIDER_ABS_MIN;
        priceMax = SLIDER_ABS_MAX;
        priceActive = false;

        syncSliderFromState();
        syncInputsFromState();
        applyPriceToUI();
    };

    // ── Sync helpers ──
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

    function applyPriceToUI() {
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

        updateFilters();
    }

    // ── Dual Slider Logic ──
    const sliderMin = document.getElementById('sliderMin');
    const sliderMax = document.getElementById('sliderMax');

    function updateSliderFill() {
        const fill = document.getElementById('sliderFill');
        if (!fill || !sliderMin || !sliderMax) return;
        const min = parseInt(sliderMin.value);
        const max = parseInt(sliderMax.value);
        const range = SLIDER_ABS_MAX - SLIDER_ABS_MIN;
        const left = ((min - SLIDER_ABS_MIN) / range) * 100;
        const right = 100 - ((max - SLIDER_ABS_MIN) / range) * 100;
        fill.style.left = left + '%';
        fill.style.right = right + '%';
    }

    if (sliderMin && sliderMax) {
        sliderMin.addEventListener('input', function () {
            let min = parseInt(this.value);
            let max = parseInt(sliderMax.value);
            if (min > max - SLIDER_STEP) {
                min = max - SLIDER_STEP;
                this.value = min;
            }
            priceMin = min;
            priceMax = max;
            priceActive = (priceMin > SLIDER_ABS_MIN || priceMax < SLIDER_ABS_MAX);
            updateSliderFill();
            updatePriceDisplay();
            syncInputsFromState();
            applyPriceToUI();
        });

        sliderMax.addEventListener('input', function () {
            let max = parseInt(this.value);
            let min = parseInt(sliderMin.value);
            if (max < min + SLIDER_STEP) {
                max = min + SLIDER_STEP;
                this.value = max;
            }
            priceMin = min;
            priceMax = max;
            priceActive = (priceMin > SLIDER_ABS_MIN || priceMax < SLIDER_ABS_MAX);
            updateSliderFill();
            updatePriceDisplay();
            syncInputsFromState();
            applyPriceToUI();
        });
    }

    // ── Input fields ──
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
            let val = parseInt(this.value) || 0;
            val = Math.max(SLIDER_ABS_MIN, Math.min(val, SLIDER_ABS_MAX));
            if (sliderMin) sliderMin.value = val;
            priceMin = val;
            priceActive = (priceMin > SLIDER_ABS_MIN || priceMax < SLIDER_ABS_MAX);
            updateSliderFill();
            updatePriceDisplay();
            applyPriceToUI();
        });

        priceMaxInput.addEventListener('input', function () {
            this.value = this.value.replace(/[^0-9]/g, '');
            let val = parseInt(this.value) || 0;
            val = Math.max(SLIDER_ABS_MIN, Math.min(val, SLIDER_ABS_MAX));
            if (sliderMax) sliderMax.value = val;
            priceMax = val;
            priceActive = (priceMin > SLIDER_ABS_MIN || priceMax < SLIDER_ABS_MAX);
            updateSliderFill();
            updatePriceDisplay();
            applyPriceToUI();
        });
    }

    // ── Update Filters ──
    function updateFilters() {
        const cards = document.querySelectorAll('.product-card');
        let visibleCount = 0;

        cards.forEach(card => {
            const cat = card.dataset.category;
            const brand = card.dataset.brand;
            const price = parseInt(card.dataset.price);
            const name = card.dataset.name.toLowerCase();

            let show = true;
            if (selectedCategory && cat !== selectedCategory) show = false;
            if (selectedBrand && brand !== selectedBrand) show = false;
            if (priceActive && (price < priceMin || price > priceMax)) show = false;
            if (searchQuery && !name.includes(searchQuery)) show = false;

            card.style.display = show ? '' : 'none';
            if (show) visibleCount++;
        });

        const countDisplay = document.getElementById('productCountDisplay');
        if (countDisplay) countDisplay.textContent = visibleCount;
        const noResults = document.getElementById('noResults');
        if (noResults) noResults.style.display = visibleCount === 0 ? 'block' : 'none';

        updateTriggerCount('categoryCount', selectedCategory);
        updateTriggerCount('brandCount', selectedBrand);
        updateTriggerText('categoryDropdown', selectedCategory || 'หมวดหมู่สินค้า');
        updateTriggerText('brandDropdown', selectedBrand || 'แบรนด์สินค้า');

        renderPills();
    }

    function updateTriggerCount(id, value) {
        const el = document.getElementById(id);
        if (!el) return;
        if (value) {
            el.textContent = '1';
            el.style.display = '';
        } else {
            el.style.display = 'none';
        }
    }

    function updateTriggerText(dropdownId, text) {
        const wrap = document.getElementById(dropdownId);
        if (!wrap) return;
        const textEl = wrap.querySelector('.dropdown-trigger-text');
        if (textEl) textEl.textContent = text;
    }

    // ── Active Filter Pills ──
    function renderPills() {
        const container = document.getElementById('activeFilters');
        if (!container) return;
        container.innerHTML = '';
        let hasPills = false;

        if (selectedCategory) {
            hasPills = true;
            container.innerHTML += createPill(selectedCategory, 'removeCategory');
        }
        if (selectedBrand) {
            hasPills = true;
            const brandItem = document.querySelector(`.brand-item[data-value="${selectedBrand}"]`);
            const logoSrc = brandItem ? brandItem.querySelector('.brand-logo')?.src : '';
            const logoHtml = logoSrc ? `<img src="${logoSrc}" class="pill-logo" alt="">` : '';
            container.innerHTML += createPill(selectedBrand, 'removeBrand', logoHtml);
        }
        if (priceActive) {
            hasPills = true;
            const minStr = '฿' + priceMin.toLocaleString();
            const maxStr = priceMax >= SLIDER_ABS_MAX ? 'ไม่จำกัด' : '฿' + priceMax.toLocaleString();
            container.innerHTML += createPill(minStr + ' - ' + maxStr, 'removePrice');
        }

        if (hasPills) {
            const clearBtn = document.createElement('button');
            clearBtn.className = 'clear-all-btn';
            clearBtn.textContent = 'ล้างทั้งหมด';
            clearBtn.onclick = clearAll;
            container.appendChild(clearBtn);
        }
    }

    function createPill(text, removeFn, extraHtml = '') {
        return `<span class="filter-pill">${extraHtml}${text} <i class="fas fa-times" onclick="${removeFn}()"></i></span>`;
    }

    window.removeCategory = function() {
        selectedCategory = '';
        document.querySelectorAll('#categoryPanel .dropdown-item').forEach(i => i.classList.remove('active'));
        updateFilters();
    };

    window.removeBrand = function() {
        selectedBrand = '';
        document.querySelectorAll('#brandPanel .brand-item').forEach(i => i.classList.remove('active'));
        updateFilters();
    };

    window.removePrice = function() {
        window.clearPriceFilter();
    };

    window.clearAll = function() {
        window.removeCategory();
        window.removeBrand();
        window.clearPriceFilter();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.value = '';
        const searchClear = document.getElementById('searchClear');
        if (searchClear) searchClear.style.display = 'none';
        searchQuery = '';
        updateFilters();
    };

    // ── Search ──
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

    // ── Sort ──
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function () {
            const grid = document.getElementById('productGrid');
            if (!grid) return;
            const cards = Array.from(grid.querySelectorAll('.product-card'));

            cards.sort((a, b) => {
                switch (sortSelect.value) {
                    case 'price-low': return parseInt(a.dataset.price) - parseInt(b.dataset.price);
                    case 'price-high': return parseInt(b.dataset.price) - parseInt(a.dataset.price);
                    case 'name': return a.dataset.name.localeCompare(b.dataset.name, 'th');
                    default: return 0;
                }
            });

            cards.forEach(card => grid.appendChild(card));
        });
    }

    // ── Scroll-in Animation ──
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

        document.querySelectorAll('.product-card').forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = `opacity 0.5s ease ${i * 0.04}s, transform 0.5s ease ${i * 0.04}s`;
            observer.observe(el);
        });
    }

    // Init
    updateSliderFill();
    updatePriceDisplay();
    updateFilters();

})();
