(function () {
    'use strict';
    let BRANDS = [];
    let COLORS = [];
    let brandMap = {};

    function initCatalogData() {
        const brandTrigger = document.getElementById('brandTrigger');
        const searchInput = document.getElementById('searchInput');
        const viewBtns = document.querySelectorAll('.view-btn');
        const colorGrid = document.getElementById('colorGrid');

        if (brandTrigger) brandTrigger.style.pointerEvents = 'none';
        if (searchInput) searchInput.disabled = true;
        viewBtns.forEach(btn => btn.style.pointerEvents = 'none');

        if (colorGrid) {
            colorGrid.innerHTML = '<div class="loading-spinner" style="width:100%;text-align:center;padding:40px;color:#cbd5e1;"><i class="fas fa-spinner fa-spin fa-2x"></i><p style="margin-top:10px;">กำลังโหลดข้อมูลสี...</p></div>';
        }

        fetch('asset/colors-data.json', { cache: 'force-cache' })
            .then(res => res.json())
            .then(data => {
                BRANDS = data.brands || [];
                COLORS = data.colors || [];
                BRANDS.forEach(b => { brandMap[b.id] = b; });
                
                setupBrandPanel();
                
                if (brandTrigger) brandTrigger.style.pointerEvents = '';
                if (searchInput) searchInput.disabled = false;
                viewBtns.forEach(btn => btn.style.pointerEvents = '');
                
                checkUrlParams();
                filterAndRender();
            })
            .catch(err => {
                console.error('Failed to load colors data:', err);
                if (colorGrid) {
                    colorGrid.innerHTML = '<div style="width:100%;text-align:center;padding:40px;color:#ef4444;"><i class="fas fa-exclamation-triangle fa-2x"></i><p style="margin-top:10px;">เกิดข้อผิดพลาดในการโหลดข้อมูล</p></div>';
                }
            });
    }
    function finishLabel(finish) {
        switch (finish) {
            case 'metallic': return { text: 'เมทัลลิก', cls: 'badge-metallic' };
            case 'pearl': return { text: 'เพิร์ล', cls: 'badge-pearl' };
            case 'opal': return { text: 'โอปอล', cls: 'badge-opal' };
            default: return null;
        }
    }
    function makeSwatchSVG(hex, finish) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const lighter = `rgb(${Math.min(255, r + 40)}, ${Math.min(255, g + 40)}, ${Math.min(255, b + 40)})`;
        const darker = `rgb(${Math.max(0, r - 30)}, ${Math.max(0, g - 30)}, ${Math.max(0, b - 30)})`;
        let extraLayers = '';
        if (finish === 'metallic') {
            extraLayers = `<linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="white" stop-opacity="0.22"/><stop offset="45%" stop-color="white" stop-opacity="0.04"/><stop offset="55%" stop-color="white" stop-opacity="0.18"/><stop offset="100%" stop-color="white" stop-opacity="0"/></linearGradient>`;
        } else if (finish === 'pearl' || finish === 'opal') {
            extraLayers = `<linearGradient id="sheen" x1="0" y1="0" x2="1" y2="0.8"><stop offset="0%" stop-color="white" stop-opacity="0.30"/><stop offset="40%" stop-color="#c8e8ff" stop-opacity="0.12"/><stop offset="70%" stop-color="white" stop-opacity="0.22"/><stop offset="100%" stop-color="white" stop-opacity="0.05"/></linearGradient>`;
        } else {
            extraLayers = `<linearGradient id="sheen" x1="0" y1="0" x2="0" y2="0.5"><stop offset="0%" stop-color="white" stop-opacity="0.15"/><stop offset="100%" stop-color="white" stop-opacity="0"/></linearGradient>`;
        }
        const w = 400, h = 300;
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><defs><linearGradient id="base" x1="0.1" y1="0" x2="0.3" y2="1"><stop offset="0%" stop-color="${lighter}"/><stop offset="100%" stop-color="${darker}"/></linearGradient>${extraLayers}</defs><rect width="${w}" height="${h}" fill="url(#base)"/><rect width="${w}" height="${h}" fill="url(#sheen)"/></svg>`;
        return `data:image/svg+xml,${encodeURIComponent(svg)}`;
    }
    function setupBrandPanel() {
        const brandCounts = {};
        COLORS.forEach(c => { brandCounts[c.brand] = (brandCounts[c.brand] || 0) + 1; });
        const brandPanel = document.getElementById('brandPanel');
        if (brandPanel) {
            let items = `<div class="dropdown-item active" data-brand="all"><div class="dropdown-item-left"><i class="fas fa-th"></i> ทั้งหมด</div><span class="dropdown-item-count">${COLORS.length}</span></div>`;
            BRANDS.forEach(b => {
                const cnt = brandCounts[b.id] || 0;
                if (cnt === 0) return;
                items += `<div class="dropdown-item" data-brand="${b.id}"><div class="dropdown-item-left"><div class="dropdown-item-logo"><img src="${b.logo}" alt="${b.name}"></div>${b.name}</div><span class="dropdown-item-count">${cnt}</span></div>`;
            });
            brandPanel.innerHTML = items;
        }
    }
    let selectedBrand = 'all';
    const brandTrigger = document.getElementById('brandTrigger');
    if (brandTrigger && brandPanel) {
        brandTrigger.addEventListener('click', e => { e.stopPropagation(); brandTrigger.classList.toggle('open'); brandPanel.classList.toggle('open'); });
        document.addEventListener('click', () => { brandTrigger.classList.remove('open'); brandPanel.classList.remove('open'); });
        brandPanel.addEventListener('click', e => {
            const item = e.target.closest('.dropdown-item');
            if (!item) return;
            brandPanel.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            selectedBrand = item.dataset.brand;
            const text = selectedBrand === 'all' ? 'ยี่ห้อรถทั้งหมด' : brandMap[selectedBrand].name;
            const triggerText = document.getElementById('brandTriggerText');
            if (triggerText) triggerText.textContent = text;
            const triggerLeft = document.querySelector('#brandTrigger .dropdown-trigger-left');
            if (triggerLeft) {
                const old = triggerLeft.querySelector('.dropdown-item-logo');
                if (old) old.remove();
                if (selectedBrand !== 'all' && brandMap[selectedBrand]) {
                    const wrap = document.createElement('div');
                    wrap.className = 'dropdown-item-logo';
                    wrap.innerHTML = `<img src="${brandMap[selectedBrand].logo}" alt="${brandMap[selectedBrand].name}">`;
                    triggerLeft.insertBefore(wrap, triggerLeft.querySelector('.dropdown-trigger-text'));
                }
            }
            brandTrigger.classList.remove('open'); brandPanel.classList.remove('open'); filterAndRender();
        });
    }
    const colorGrid = document.getElementById('colorGrid');
    const showingCount = document.getElementById('showingCount');
    const noResults = document.getElementById('noResults');
    const activeFiltersEl = document.getElementById('activeFilters');
    const paginationEl = document.getElementById('pagination');
    let currentPage = 1;
    const itemsPerPage = 20;
    let currentFiltered = [];
    if (colorGrid) {
        colorGrid.classList.remove('list-view');
        const listBtn = document.querySelector('.view-btn[data-view="list"]');
        const gridBtn = document.querySelector('.view-btn[data-view="grid"]');
        if (listBtn) listBtn.classList.remove('active');
        if (gridBtn) gridBtn.classList.add('active');
    }
    function filterAndRender() {
        const searchInput = document.getElementById('searchInput');
        const search = searchInput ? searchInput.value.toLowerCase().trim() : '';
        currentFiltered = COLORS.filter(c => {
            const matchBrand = selectedBrand === 'all' || c.brand === selectedBrand;
            const matchSearch = !search || c.name.toLowerCase().includes(search) || c.code.toLowerCase().includes(search) || (brandMap[c.brand] && brandMap[c.brand].name.toLowerCase().includes(search));
            return matchBrand && matchSearch;
        });
        if (showingCount) showingCount.textContent = currentFiltered.length;
        const brandCountEl = document.getElementById('brandCount');
        if (brandCountEl) brandCountEl.textContent = currentFiltered.length;
        renderPage(1);
    }
    function renderPage(page) {
        currentPage = page;
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageItems = currentFiltered.slice(start, end);
        if (colorGrid) {
            colorGrid.innerHTML = '';
            pageItems.forEach((c, i) => {
                const b = brandMap[c.brand];
                const swatch = makeSwatchSVG(c.color, c.finish);
                const badge = finishLabel(c.finish);
                const modelsHtml = c.models ? `<div class="color-card-models">รุ่นที่รองรับ: ${c.models}</div>` : '';
                const card = document.createElement('div');
                card.className = 'color-card';
                card.innerHTML = `
                <div class="color-card-img-wrap">
                    <div class="color-swatch" style="background-image:url('${swatch}');background-size:cover;background-position:center;"></div>
                    ${badge ? `<span class="finish-badge ${badge.cls}">${badge.text}</span>` : ''}
                    <div class="zoom-icon"><i class="fas fa-expand"></i></div>
                </div>
                <div class="color-card-body">
                    <div class="color-card-brand"><img src="${b.logo}" alt="${b.name}"> ${b.name}</div>
                    <div class="color-card-name">${c.name}</div>
                    <div class="color-card-code"><span class="color-dot" style="background:${c.color};"></span> ${c.code}</div>
                    ${modelsHtml}
                    <div class="color-disclaimer">* สีที่แสดงเป็นค่าอ้างอิงเท่านั้น</div>
                </div>`;
                card.addEventListener('click', () => openColorLightbox(card, currentFiltered, start + i));
                colorGrid.appendChild(card);
                setTimeout(() => card.classList.add('visible'), (i + 1) * 30);
            });
        }
        if (noResults) noResults.classList.toggle('show', currentFiltered.length === 0);
        renderPagination(); renderChips();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function renderPagination() {
        if (!paginationEl) return;
        paginationEl.innerHTML = '';
        const totalPages = Math.ceil(currentFiltered.length / itemsPerPage);
        if (totalPages <= 1) return;
        const maxVisible = 5;
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, startPage + maxVisible - 1);
        if (endPage - startPage < maxVisible - 1) startPage = Math.max(1, endPage - maxVisible + 1);
        const prev = document.createElement('a');
        prev.className = `page-link ${currentPage === 1 ? 'disabled' : ''}`;
        prev.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prev.addEventListener('click', () => currentPage > 1 && renderPage(currentPage - 1));
        paginationEl.appendChild(prev);
        if (startPage > 1) {
            paginationEl.appendChild(createPageLink(1));
            if (startPage > 2) { const dots = document.createElement('span'); dots.className = 'page-dots'; dots.textContent = '...'; paginationEl.appendChild(dots); }
        }
        for (let i = startPage; i <= endPage; i++) paginationEl.appendChild(createPageLink(i));
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) { const dots = document.createElement('span'); dots.className = 'page-dots'; dots.textContent = '...'; paginationEl.appendChild(dots); }
            paginationEl.appendChild(createPageLink(totalPages));
        }
        const next = document.createElement('a');
        next.className = `page-link ${currentPage === totalPages ? 'disabled' : ''}`;
        next.innerHTML = '<i class="fas fa-chevron-right"></i>';
        next.addEventListener('click', () => currentPage < totalPages && renderPage(currentPage + 1));
        paginationEl.appendChild(next);
    }
    function createPageLink(num) {
        const link = document.createElement('a');
        link.className = `page-link ${num === currentPage ? 'active' : ''}`;
        link.textContent = num;
        link.addEventListener('click', () => renderPage(num));
        return link;
    }
    function renderChips() {
        if (!activeFiltersEl) return;
        activeFiltersEl.innerHTML = '';
        if (selectedBrand === 'all') { activeFiltersEl.style.display = 'none'; return; }
        activeFiltersEl.style.display = 'flex';
        const chip = document.createElement('span');
        chip.className = 'filter-chip';
        chip.innerHTML = `${brandMap[selectedBrand].name} <i class="fas fa-times"></i>`;
        chip.addEventListener('click', () => {
            selectedBrand = 'all';
            if (brandPanel) { brandPanel.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('active')); const allItem = brandPanel.querySelector('[data-brand="all"]'); if (allItem) allItem.classList.add('active'); }
            const triggerText = document.getElementById('brandTriggerText'); if (triggerText) triggerText.textContent = 'ยี่ห้อรถทั้งหมด';
            const triggerLeft = document.querySelector('#brandTrigger .dropdown-trigger-left'); if (triggerLeft) { const old = triggerLeft.querySelector('.dropdown-item-logo'); if (old) old.remove(); }
            filterAndRender();
        });
        activeFiltersEl.appendChild(chip);
    }
    const searchInput = document.getElementById('searchInput');
    const searchClearBtn = document.getElementById('searchClear');
    if (searchInput) searchInput.addEventListener('input', function () { if (searchClearBtn) searchClearBtn.style.display = this.value ? 'block' : 'none'; filterAndRender(); });
    if (searchClearBtn) searchClearBtn.addEventListener('click', function () { if (searchInput) { searchInput.value = ''; searchInput.focus(); } this.style.display = 'none'; filterAndRender(); });
    function checkUrlParams() {
        const params = new URLSearchParams(window.location.search);
        const brandParam = params.get('brand');
        if (brandParam && brandMap[brandParam]) {
            selectedBrand = brandParam;
            if (brandPanel) { brandPanel.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('active')); const targetItem = brandPanel.querySelector(`[data-brand="${brandParam}"]`); if (targetItem) targetItem.classList.add('active'); }
            const triggerText = document.getElementById('brandTriggerText'); if (triggerText) triggerText.textContent = brandMap[brandParam].name;
            const triggerLeft = document.querySelector('#brandTrigger .dropdown-trigger-left');
            if (triggerLeft) { const old = triggerLeft.querySelector('.dropdown-item-logo'); if (old) old.remove(); const wrap = document.createElement('div'); wrap.className = 'dropdown-item-logo'; wrap.innerHTML = `<img src="${brandMap[selectedBrand].logo}" alt="${brandMap[selectedBrand].name}">`; triggerLeft.insertBefore(wrap, triggerLeft.querySelector('.dropdown-trigger-text')); }
        }
        const searchParam = params.get('search');
        if (searchParam) { const searchIn = document.getElementById('searchInput'); if (searchIn) { searchIn.value = searchParam; if (searchClearBtn) searchClearBtn.style.display = 'block'; } }
        filterAndRender();
    }
    initCatalogData();
    document.querySelectorAll('.view-btn').forEach(btn => { btn.addEventListener('click', () => { document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); if (colorGrid) colorGrid.classList.toggle('list-view', btn.dataset.view === 'list'); }); });
    const lightbox = document.getElementById('lightbox');
    const lightboxSwatch = document.getElementById('lightboxSwatch');
    const lightboxBrand = document.getElementById('lightboxBrand');
    const lightboxName = document.getElementById('lightboxName');
    const lightboxCode = document.getElementById('lightboxCode');
    let lbIndex = -1; let lbData = [];
    window.openColorLightbox = function (card, dataArr, absIdx) {
        if (!lightbox) return;
        lbData = dataArr; lbIndex = absIdx !== undefined ? absIdx : parseInt(card.dataset.index);
        if (isNaN(lbIndex)) return;
        showLB(lbIndex); lightbox.classList.add('open'); document.body.style.overflow = 'hidden';
    };
    function showLB(idx) {
        const c = lbData[idx]; const b = brandMap[c.brand]; const badge = finishLabel(c.finish);
        if (lightboxSwatch) lightboxSwatch.style.background = `linear-gradient(135deg, ${lightenHex(c.color, 30)} 0%, ${c.color} 50%, ${darkenHex(c.color, 20)} 100%)`;
        if (lightboxBrand) lightboxBrand.innerHTML = `<img src="${b.logo}" alt="${b.name}"> ${b.name}`;
        if (lightboxName) lightboxName.textContent = c.name;
        if (lightboxCode) {
            lightboxCode.innerHTML = `โค้ดสี: <strong>${c.code}</strong>${badge ? ` &nbsp;<span class="finish-badge ${badge.cls}">${badge.text}</span>` : ''}`;
            if (c.models) lightboxCode.innerHTML += `<br><span style="font-size:13px; color:rgba(255,255,255,0.65); margin-top:4px; display:inline-block;">รุ่นที่รองรับ: ${c.models}</span>`;
        }
    }
    function lightenHex(hex, amt) { if (!/^#[0-9a-fA-F]{6}$/.test(hex)) return '#808080'; const r = Math.min(255, parseInt(hex.slice(1, 3), 16) + amt); const g = Math.min(255, parseInt(hex.slice(3, 5), 16) + amt); const b = Math.min(255, parseInt(hex.slice(5, 7), 16) + amt); return `rgb(${r}, ${g}, ${b})`; }
    function darkenHex(hex, amt) { if (!/^#[0-9a-fA-F]{6}$/.test(hex)) return '#808080'; const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - amt); const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - amt); const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - amt); return `rgb(${r}, ${g}, ${b})`; }
    function closeLB() { if (lightbox) { lightbox.classList.remove('open'); document.body.style.overflow = ''; } }
    const closeBtn = document.getElementById('lightboxClose'); if (closeBtn) closeBtn.addEventListener('click', closeLB);
    const prevBtn = document.getElementById('lightboxPrev'); if (prevBtn) prevBtn.addEventListener('click', () => { lbIndex = (lbIndex - 1 + lbData.length) % lbData.length; showLB(lbIndex); });
    const nextBtn = document.getElementById('lightboxNext'); if (nextBtn) nextBtn.addEventListener('click', () => { lbIndex = (lbIndex + 1) % lbData.length; showLB(lbIndex); });
    if (lightbox) lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLB(); });
    document.addEventListener('keydown', e => { if (!lightbox || !lightbox.classList.contains('open')) return; if (e.key === 'Escape') closeLB(); if (e.key === 'ArrowLeft') { lbIndex = (lbIndex - 1 + lbData.length) % lbData.length; showLB(lbIndex); } if (e.key === 'ArrowRight') { lbIndex = (lbIndex + 1) % lbData.length; showLB(lbIndex); } });
})();