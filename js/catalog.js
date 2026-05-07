(function () {
    'use strict';

    /* ══════════════════════════════════════════════════════════════
       BRANDS
    ══════════════════════════════════════════════════════════════ */
    const BRANDS = [
        { id: 'toyota', name: 'Toyota', logo: 'asset/Toyota-Symbol.png' },
        { id: 'honda', name: 'Honda', logo: 'asset/honda-logo.png' },
    ];

    /* ══════════════════════════════════════════════════════════════
       FINISH TYPES
       M = Metallic  |  P = Pearl  |  OP = Opal Pearl  |  '' = Solid
    ══════════════════════════════════════════════════════════════ */
    //  finish: 'solid' | 'metallic' | 'pearl' | 'opal'

    /* ══════════════════════════════════════════════════════════════
       COLORS — Toyota (63) + Honda (63) + Others
       HEX ปรับให้แตกต่างกันในแต่ละเฉด ไม่ใช่ค่าเดียวกันทั้งกลุ่ม
       *** เป็นค่าอ้างอิงเท่านั้น — สีจริงขึ้นอยู่กับสูตรผสมสี ***
    ══════════════════════════════════════════════════════════════ */
    const COLORS = [

        /* ────────────── TOYOTA ────────────── */

        // ── ขาว (White)
        { brand: 'toyota', code: '040', name: 'Super White', color: '#F8F8F6', finish: 'solid' },
        { brand: 'toyota', code: '058', name: 'Warm White', color: '#FBF5E6', finish: 'solid' },
        { brand: 'toyota', code: '070', name: 'White Crystal Shine', color: '#EDF4FB', finish: 'pearl' },
        { brand: 'toyota', code: '089', name: 'Platinum White Pearl', color: '#F2F0EA', finish: 'pearl' },

        // ── เงิน / เทา (Silver / Grey)
        { brand: 'toyota', code: '1A0', name: 'Bluish Silver', color: '#8FA8BF', finish: 'metallic' },
        { brand: 'toyota', code: '1C0', name: 'Silver Ash', color: '#A9A4A0', finish: 'metallic' },
        { brand: 'toyota', code: '1C3', name: 'Dark Grey', color: '#525252', finish: 'solid' },
        { brand: 'toyota', code: '1D0', name: 'Liquid Silver', color: '#BFC3C8', finish: 'metallic' },
        { brand: 'toyota', code: '1D4', name: 'Silver Ash', color: '#A0A0A2', finish: 'metallic' },
        { brand: 'toyota', code: '1D6', name: 'Silver', color: '#B4B4B6', finish: 'metallic' },
        { brand: 'toyota', code: '1E7', name: 'Silver', color: '#A8A8AA', finish: 'metallic' },
        { brand: 'toyota', code: '1E9', name: 'Dark Grey', color: '#484848', finish: 'solid' },
        { brand: 'toyota', code: '1F8', name: 'Medium Silver', color: '#9C9C9E', finish: 'metallic' },
        { brand: 'toyota', code: '1F9', name: 'Slate', color: '#70808C', finish: 'metallic' },
        { brand: 'toyota', code: '1G3', name: 'Magnetic Grey', color: '#56595E', finish: 'metallic' },
        { brand: 'toyota', code: '1H2', name: 'Dark Steel', color: '#24282E', finish: 'metallic' },
        { brand: 'toyota', code: '1K0', name: 'Metal Stream', color: '#C4C8CC', finish: 'metallic' },
        { brand: 'toyota', code: '1K3', name: 'Celestite Grey', color: '#B2B6BC', finish: 'metallic' },

        // ── ดำ (Black)
        { brand: 'toyota', code: '209', name: 'Night Time Black', color: '#101214', finish: 'solid' },
        { brand: 'toyota', code: '218', name: 'Attitude Black', color: '#1A1A1C', finish: 'solid' },
        { brand: 'toyota', code: 'X12', name: 'Black', color: '#0D0D0F', finish: 'solid' },

        // ── แดง (Red)
        { brand: 'toyota', code: '343', name: 'Red', color: '#D42020', finish: 'solid' },
        { brand: 'toyota', code: '3G9', name: 'Wine Red', color: '#6B2030', finish: 'solid' },
        { brand: 'toyota', code: '3K4', name: 'Red', color: '#CC1A1A', finish: 'solid' },
        { brand: 'toyota', code: '3P0', name: 'Super Red', color: '#E01010', finish: 'solid' },
        { brand: 'toyota', code: '3P1', name: 'Impulse Red', color: '#C82010', finish: 'solid' },
        { brand: 'toyota', code: '3Q2', name: 'Dark Red', color: '#7A1020', finish: 'solid' },
        { brand: 'toyota', code: '3R3', name: 'Barcelona Red', color: '#C41020', finish: 'solid' },
        { brand: 'toyota', code: '3S1', name: 'Red', color: '#D61616', finish: 'solid' },
        { brand: 'toyota', code: '3T6', name: 'Crimson Spark Red', color: '#CC1030', finish: 'pearl' },

        // ── เบจ / น้ำตาล (Beige / Brown)
        { brand: 'toyota', code: '4P9', name: 'Angora Beige', color: '#E2CFAA', finish: 'metallic' },
        { brand: 'toyota', code: '4Q2', name: 'Beige', color: '#CEBD9E', finish: 'solid' },
        { brand: 'toyota', code: '4Q8', name: 'Beige', color: '#C6B494', finish: 'solid' },
        { brand: 'toyota', code: '4R0', name: 'Beige', color: '#CCBA98', finish: 'solid' },
        { brand: 'toyota', code: '4R8', name: 'Orange', color: '#E07020', finish: 'solid' },
        { brand: 'toyota', code: '4U3', name: 'Sunset Bronze', color: '#C07840', finish: 'metallic' },
        { brand: 'toyota', code: '4W0', name: 'Quartz Brown', color: '#7A5838', finish: 'metallic' },
        { brand: 'toyota', code: '4W1', name: 'Silky Beige', color: '#DCC9A0', finish: 'metallic' },
        { brand: 'toyota', code: '4W9', name: 'Phantom Brown', color: '#5A4030', finish: 'metallic' },

        // ── เหลือง / ทอง (Yellow / Gold)
        { brand: 'toyota', code: '574', name: 'Pale Yellow Opal', color: '#F0E880', finish: 'opal' },
        { brand: 'toyota', code: '586', name: 'Champagne', color: '#EEE0C0', finish: 'metallic' },
        { brand: 'toyota', code: '5B7', name: 'Champagne', color: '#EAD8B0', finish: 'metallic' },
        { brand: 'toyota', code: '5A7', name: 'Silky Gold', color: '#C09820', finish: 'metallic' },

        // ── เขียว (Green)
        { brand: 'toyota', code: '6S0', name: 'Light Green', color: '#4CA860', finish: 'solid' },
        { brand: 'toyota', code: '6S3', name: 'Dark Green', color: '#1A5C28', finish: 'solid' },

        // ── น้ำเงิน (Blue)
        { brand: 'toyota', code: '741', name: 'Teal Blue', color: '#00888A', finish: 'solid' },
        { brand: 'toyota', code: '8L2', name: 'Dark Blue', color: '#0C2060', finish: 'solid' },
        { brand: 'toyota', code: '8L4', name: 'Atlantis Blue', color: '#1660C0', finish: 'metallic' },
        { brand: 'toyota', code: '8M6', name: 'Blue', color: '#1878D0', finish: 'solid' },
        { brand: 'toyota', code: '8N8', name: 'Dark Blue', color: '#0A1E58', finish: 'solid' },
        { brand: 'toyota', code: '8P1', name: 'Blue', color: '#1A50BC', finish: 'solid' },
        { brand: 'toyota', code: '8P4', name: 'Dark Blue', color: '#0C3078', finish: 'solid' },
        { brand: 'toyota', code: '8R3', name: 'Greyish Blue', color: '#6A8CAA', finish: 'metallic' },
        { brand: 'toyota', code: '8S7', name: 'Light Blue', color: '#8CCAE0', finish: 'solid' },
        { brand: 'toyota', code: '8S9', name: 'Light Blue', color: '#80C8E8', finish: 'pearl' },
        { brand: 'toyota', code: '8T7', name: 'Blue Streak', color: '#1870C4', finish: 'metallic' },
        { brand: 'toyota', code: '8U8', name: 'Light Blue', color: '#78C4DE', finish: 'solid' },
        { brand: 'toyota', code: '8W1', name: 'True Blue', color: '#1C50C0', finish: 'solid' },
        { brand: 'toyota', code: '8W8', name: 'Frozen Blue', color: '#5898D4', finish: 'pearl' },
        { brand: 'toyota', code: '8W9', name: 'Cyan Splash', color: '#90D4DC', finish: 'pearl' },
        { brand: 'toyota', code: '8X2', name: 'Nebula Blue', color: '#1E4898', finish: 'metallic' },
        { brand: 'toyota', code: '8X7', name: 'Pure Blue', color: '#0048AA', finish: 'solid' },

        // ── อื่นๆ
        { brand: 'toyota', code: '926', name: 'Cool Steel', color: '#889AA8', finish: 'metallic' },

        /* ────────────── HONDA ────────────── */

        // ── น้ำเงิน (Blue)
        { brand: 'honda', code: 'B506M', name: 'Ice Blue', color: '#A0D0E8', finish: 'metallic' },
        { brand: 'honda', code: 'B520P', name: 'Vivid Blue', color: '#1565C0', finish: 'pearl' },
        { brand: 'honda', code: 'B538M', name: 'Blueish Silver', color: '#8898A8', finish: 'metallic' },
        { brand: 'honda', code: 'B558M', name: 'Deep Lapis Blue', color: '#0E2468', finish: 'metallic' },
        { brand: 'honda', code: 'B561P', name: 'New Teal Blue', color: '#007E88', finish: 'pearl' },
        { brand: 'honda', code: 'B569M', name: 'Energetic Blue', color: '#1878D0', finish: 'metallic' },
        { brand: 'honda', code: 'B570M', name: 'Twilight Blue', color: '#6A9EC0', finish: 'metallic' },
        { brand: 'honda', code: 'B593M', name: 'New Sporty Blue', color: '#1A5898', finish: 'metallic' },
        { brand: 'honda', code: 'B594P', name: 'Morpho Blue', color: '#2840A0', finish: 'pearl' },
        { brand: 'honda', code: 'B607M', name: 'Cosmic Blue', color: '#183470', finish: 'metallic' },
        { brand: 'honda', code: 'B92P', name: 'Nighthawk Black', color: '#0A0C10', finish: 'pearl' },
        { brand: 'honda', code: 'B95P', name: 'Electron Blue', color: '#0038D8', finish: 'pearl' },
        { brand: 'honda', code: 'B96P', name: 'Eternal Blue', color: '#183888', finish: 'pearl' },
        { brand: 'honda', code: 'BG53M', name: 'Brilliant Sky', color: '#88CEE8', finish: 'metallic' },
        { brand: 'honda', code: 'GY27M', name: 'Fresh Lime', color: '#80B400', finish: 'metallic' },

        // ── ขาว (White)
        { brand: 'honda', code: 'N-11-OP', name: 'Micro White Silver', color: '#EAEAEA', finish: 'opal' },
        { brand: 'honda', code: 'NH537M', name: 'Pewter Grey', color: '#8C8C8C', finish: 'metallic' },
        { brand: 'honda', code: 'NH578', name: 'Taffeta White', color: '#F8F2E8', finish: 'solid' },
        { brand: 'honda', code: 'NH612M', name: 'Regent Silver', color: '#ACAFB4', finish: 'metallic' },
        { brand: 'honda', code: 'NH623M', name: 'Satin Silver', color: '#BCC0C4', finish: 'metallic' },
        { brand: 'honda', code: 'NH630M', name: 'Silverstone', color: '#A4AEB8', finish: 'metallic' },
        { brand: 'honda', code: 'NH636P', name: 'Brilliant White', color: '#F8F8F8', finish: 'pearl' },
        { brand: 'honda', code: 'NH658P', name: 'Graphite', color: '#282828', finish: 'pearl' },
        { brand: 'honda', code: 'NH663M', name: 'Satellite Silver', color: '#AEBABE', finish: 'metallic' },
        { brand: 'honda', code: 'NH684P', name: 'Sparkle Grey', color: '#9CA8B0', finish: 'pearl' },
        { brand: 'honda', code: 'NH691M', name: 'Silver Moss', color: '#8A9888', finish: 'metallic' },
        { brand: 'honda', code: 'NH700M', name: 'Alabaster Silver', color: '#C8C8C4', finish: 'metallic' },
        { brand: 'honda', code: 'NH731P', name: 'Crystal Black', color: '#080A0C', finish: 'pearl' },
        { brand: 'honda', code: 'NH737M', name: 'Polished Metal', color: '#C4C8CC', finish: 'metallic' },
        { brand: 'honda', code: 'NH787M', name: 'New Frosty White', color: '#ECF3F8', finish: 'metallic' },
        { brand: 'honda', code: 'NH788P', name: 'White Orchid Pearl', color: '#F5F0EC', finish: 'pearl' },
        { brand: 'honda', code: 'NH797M', name: 'Modern Steel', color: '#7A8890', finish: 'metallic' },
        { brand: 'honda', code: 'NH830M', name: 'Lunar Silver', color: '#B8BCBE', finish: 'metallic' },
        { brand: 'honda', code: 'NH877P', name: 'Sonic Grey', color: '#CCCCD0', finish: 'pearl' },
        { brand: 'honda', code: 'NH883P', name: 'Platinum White Pearl', color: '#F0F0EE', finish: 'pearl' },

        // ── ม่วง / น้ำเงินม่วง
        { brand: 'honda', code: 'PB79M', name: 'Purplish Blue', color: '#3840A8', finish: 'metallic' },
        { brand: 'honda', code: 'RP31M', name: 'Signet Silver', color: '#A4A8AC', finish: 'metallic' },
        { brand: 'honda', code: 'RP32P', name: 'Vintage Plum', color: '#72288C', finish: 'pearl' },
        { brand: 'honda', code: 'RP40P', name: 'Misty Violet', color: '#B898C0', finish: 'pearl' },

        // ── แดง (Red)
        { brand: 'honda', code: 'R507P', name: 'New Firepepper Red', color: '#E42020', finish: 'pearl' },
        { brand: 'honda', code: 'R513', name: 'Liberty Rally Red', color: '#C41028', finish: 'solid' },
        { brand: 'honda', code: 'R516P', name: 'Iris Red', color: '#C01428', finish: 'pearl' },
        { brand: 'honda', code: 'R522P', name: 'Royal Ruby Red', color: '#880C20', finish: 'pearl' },
        { brand: 'honda', code: 'R543P', name: 'Carnelian Red', color: '#B01E1E', finish: 'pearl' },
        { brand: 'honda', code: 'R560P', name: 'Burgundy Night', color: '#18060A', finish: 'pearl' },
        { brand: 'honda', code: 'R575M', name: 'Ignite Red', color: '#CE0E1C', finish: 'metallic' },
        { brand: 'honda', code: 'R96P', name: 'Inza Red', color: '#D41414', finish: 'pearl' },

        // ── เหลือง / ส้ม / ทอง / น้ำตาล
        { brand: 'honda', code: 'Y54', name: 'Carnival Yellow', color: '#FFCC00', finish: 'solid' },
        { brand: 'honda', code: 'Y72P', name: 'Attract Yellow', color: '#FFC000', finish: 'pearl' },
        { brand: 'honda', code: 'YR505M', name: 'Cashmere Silver', color: '#C8BCB0', finish: 'metallic' },
        { brand: 'honda', code: 'YR524M', name: 'Naples Gold', color: '#C09C28', finish: 'metallic' },
        { brand: 'honda', code: 'YR525M', name: 'Titanium', color: '#6C5C48', finish: 'metallic' },
        { brand: 'honda', code: 'YR538M', name: 'Desert Mist', color: '#C4B090', finish: 'metallic' },
        { brand: 'honda', code: 'YR557P', name: 'Habanero Red', color: '#C22028', finish: 'pearl' },
        { brand: 'honda', code: 'YR574M', name: 'Bold Beige', color: '#C4A880', finish: 'metallic' },
        { brand: 'honda', code: 'YR576M', name: 'Brilliant Orange', color: '#E27020', finish: 'metallic' },
        { brand: 'honda', code: 'YR578M', name: 'Urban Titanium', color: '#786050', finish: 'metallic' },
        { brand: 'honda', code: 'YR591P', name: 'New Seashell', color: '#E8E0D4', finish: 'pearl' },
        { brand: 'honda', code: 'YR595M', name: 'Sparkling Brown', color: '#885840', finish: 'metallic' },
        { brand: 'honda', code: 'YR604M', name: 'Golden Brown', color: '#C09028', finish: 'metallic' },
        { brand: 'honda', code: 'YR614P', name: 'Copper Sunset', color: '#CC7038', finish: 'pearl' },
        { brand: 'honda', code: 'YR628M', name: 'Premium Amber', color: '#CC8020', finish: 'metallic' },
        { brand: 'honda', code: 'YR639P', name: 'Phoenix Orange', color: '#DC6418', finish: 'pearl' },


    ];

    /* ══════════════════════════════════════════════════════════════
       HELPERS
    ══════════════════════════════════════════════════════════════ */
    const brandMap = {};
    BRANDS.forEach(b => { brandMap[b.id] = b; });

    function finishLabel(finish) {
        switch (finish) {
            case 'metallic': return { text: 'เมทัลลิก', cls: 'badge-metallic' };
            case 'pearl': return { text: 'เพิร์ล', cls: 'badge-pearl' };
            case 'opal': return { text: 'โอปอล', cls: 'badge-opal' };
            default: return null;
        }
    }

    /* สร้าง SVG swatch พร้อม effect ตาม finish type */
    function makeSwatchSVG(hex, finish) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        const lighter = `rgb(${Math.min(255, r + 40)},${Math.min(255, g + 40)},${Math.min(255, b + 40)})`;
        const darker = `rgb(${Math.max(0, r - 30)},${Math.max(0, g - 30)},${Math.max(0, b - 30)})`;
        const isLight = (r + g + b) > 450;

        let extraLayers = '';

        if (finish === 'metallic') {
            // เพิ่ม diagonal sheen สำหรับ metallic
            extraLayers = `
  <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%"   stop-color="white" stop-opacity="0.22"/>
    <stop offset="45%"  stop-color="white" stop-opacity="0.04"/>
    <stop offset="55%"  stop-color="white" stop-opacity="0.18"/>
    <stop offset="100%" stop-color="white" stop-opacity="0"/>
  </linearGradient>`;
        } else if (finish === 'pearl' || finish === 'opal') {
            // iridescent shimmer สำหรับ pearl/opal
            extraLayers = `
  <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="0.8">
    <stop offset="0%"   stop-color="white"   stop-opacity="0.30"/>
    <stop offset="40%"  stop-color="#c8e8ff" stop-opacity="0.12"/>
    <stop offset="70%"  stop-color="white"   stop-opacity="0.22"/>
    <stop offset="100%" stop-color="white"   stop-opacity="0.05"/>
  </linearGradient>`;
        } else {
            extraLayers = `
  <linearGradient id="sheen" x1="0" y1="0" x2="0" y2="0.5">
    <stop offset="0%"   stop-color="white" stop-opacity="0.15"/>
    <stop offset="100%" stop-color="white" stop-opacity="0"/>
  </linearGradient>`;
        }

        const w = 400, h = 300;
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="base" x1="0.1" y1="0" x2="0.3" y2="1">
      <stop offset="0%"   stop-color="${lighter}"/>
      <stop offset="100%" stop-color="${darker}"/>
    </linearGradient>${extraLayers}
  </defs>
  <rect width="${w}" height="${h}" fill="url(#base)"/>
  <rect width="${w}" height="${h}" fill="url(#sheen)"/>
</svg>`;
        return `data:image/svg+xml,${encodeURIComponent(svg)}`;
    }

    /* ══════════════════════════════════════════════════════════════
       BRAND DROPDOWN
    ══════════════════════════════════════════════════════════════ */
    const brandCounts = {};
    COLORS.forEach(c => { brandCounts[c.brand] = (brandCounts[c.brand] || 0) + 1; });

    const brandPanel = document.getElementById('brandPanel');
    if (brandPanel) {
        let items = `<div class="dropdown-item active" data-brand="all">
            <div class="dropdown-item-left"><i class="fas fa-th"></i> ทั้งหมด</div>
            <span class="dropdown-item-count">${COLORS.length}</span>
        </div>`;
        BRANDS.forEach(b => {
            const cnt = brandCounts[b.id] || 0;
            if (cnt === 0) return;
            items += `<div class="dropdown-item" data-brand="${b.id}">
                <div class="dropdown-item-left">
                    <div class="dropdown-item-logo"><img src="${b.logo}" alt="${b.name}"></div>
                    ${b.name}
                </div>
                <span class="dropdown-item-count">${cnt}</span>
            </div>`;
        });
        brandPanel.innerHTML = items;
    }

    /* ══════════════════════════════════════════════════════════════
       DROPDOWN TOGGLE
    ══════════════════════════════════════════════════════════════ */
    let selectedBrand = 'all';
    const brandTrigger = document.getElementById('brandTrigger');

    if (brandTrigger && brandPanel) {
        brandTrigger.addEventListener('click', e => {
            e.stopPropagation();
            brandTrigger.classList.toggle('open');
            brandPanel.classList.toggle('open');
        });
        document.addEventListener('click', () => {
            brandTrigger.classList.remove('open');
            brandPanel.classList.remove('open');
        });

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

            brandTrigger.classList.remove('open');
            brandPanel.classList.remove('open');
            filterAndRender();
        });
    }

    /* ══════════════════════════════════════════════════════════════
       RENDER + FILTER
    ══════════════════════════════════════════════════════════════ */
    const colorGrid = document.getElementById('colorGrid');
    const showingCount = document.getElementById('showingCount');
    const noResults = document.getElementById('noResults');
    const activeFiltersEl = document.getElementById('activeFilters');

    function filterAndRender() {
        const searchInput = document.getElementById('searchInput');
        const search = searchInput ? searchInput.value.toLowerCase().trim() : '';

        const filtered = COLORS.filter(c => {
            const matchBrand = selectedBrand === 'all' || c.brand === selectedBrand;
            const matchSearch = !search ||
                c.name.toLowerCase().includes(search) ||
                c.code.toLowerCase().includes(search) ||
                (brandMap[c.brand] && brandMap[c.brand].name.toLowerCase().includes(search));
            return matchBrand && matchSearch;
        });

        if (showingCount) showingCount.textContent = filtered.length;
        const brandCountEl = document.getElementById('brandCount');
        if (brandCountEl) brandCountEl.textContent = filtered.length;

        if (colorGrid) {
            colorGrid.innerHTML = '';
            filtered.forEach((c, i) => {
                const b = brandMap[c.brand];
                const swatch = makeSwatchSVG(c.color, c.finish);
                const badge = finishLabel(c.finish);

                const card = document.createElement('div');
                card.className = 'color-card';
                card.dataset.index = i;
                card.innerHTML = `
                    <div class="color-card-img-wrap">
                        <div class="color-swatch" style="background-image:url('${swatch}');background-size:cover;background-position:center;"></div>
                        ${badge ? `<span class="finish-badge ${badge.cls}">${badge.text}</span>` : ''}
                        <div class="zoom-icon"><i class="fas fa-expand"></i></div>
                    </div>
                    <div class="color-card-body">
                        <div class="color-card-brand">
                            <img src="${b.logo}" alt="${b.name}"> ${b.name}
                        </div>
                        <div class="color-card-name">${c.name}</div>
                        <div class="color-card-code">
                            <span class="color-dot" style="background:${c.color};"></span>
                            ${c.code}
                        </div>
                        <div class="color-disclaimer">* สีที่แสดงเป็นค่าอ้างอิงเท่านั้น</div>
                    </div>`;
                card.addEventListener('click', () => openLightbox(card, filtered));
                colorGrid.appendChild(card);
                setTimeout(() => card.classList.add('visible'), (i + 1) * 30);
            });
        }

        if (noResults) noResults.classList.toggle('show', filtered.length === 0);
        renderChips();
    }

    function renderChips() {
        if (!activeFiltersEl) return;
        activeFiltersEl.innerHTML = '';
        if (selectedBrand === 'all') {
            activeFiltersEl.style.display = 'none';
            return;
        }
        activeFiltersEl.style.display = 'flex';
        const chip = document.createElement('span');
        chip.className = 'filter-chip';
        chip.innerHTML = `${brandMap[selectedBrand].name} <i class="fas fa-times"></i>`;
        chip.addEventListener('click', () => {
            selectedBrand = 'all';
            if (brandPanel) {
                brandPanel.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('active'));
                const allItem = brandPanel.querySelector('[data-brand="all"]');
                if (allItem) allItem.classList.add('active');
            }
            const triggerText = document.getElementById('brandTriggerText');
            if (triggerText) triggerText.textContent = 'ยี่ห้อรถทั้งหมด';
            const triggerLeft = document.querySelector('#brandTrigger .dropdown-trigger-left');
            if (triggerLeft) {
                const old = triggerLeft.querySelector('.dropdown-item-logo');
                if (old) old.remove();
            }
            filterAndRender();
        });
        activeFiltersEl.appendChild(chip);
    }

    /* Search */
    const searchInput = document.getElementById('searchInput');
    const searchClearBtn = document.getElementById('searchClear');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            if (searchClearBtn) searchClearBtn.style.display = this.value ? 'block' : 'none';
            filterAndRender();
        });
    }
    if (searchClearBtn) {
        searchClearBtn.addEventListener('click', function () {
            if (searchInput) { searchInput.value = ''; searchInput.focus(); }
            this.style.display = 'none';
            filterAndRender();
        });
    }

    filterAndRender();

    /* ══════════════════════════════════════════════════════════════
       VIEW TOGGLE
    ══════════════════════════════════════════════════════════════ */
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (colorGrid) colorGrid.classList.toggle('list-view', btn.dataset.view === 'list');
        });
    });

    /* ══════════════════════════════════════════════════════════════
       LIGHTBOX
    ══════════════════════════════════════════════════════════════ */
    const lightbox = document.getElementById('lightbox');
    const lightboxSwatch = document.getElementById('lightboxSwatch');
    const lightboxBrand = document.getElementById('lightboxBrand');
    const lightboxName = document.getElementById('lightboxName');
    const lightboxCode = document.getElementById('lightboxCode');

    let lbIndex = -1;
    let lbData = [];

    window.openLightbox = function (card, dataArr) {
        if (!lightbox) return;
        lbData = dataArr;
        lbIndex = parseInt(card.dataset.index);
        showLB(lbIndex);
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    function showLB(idx) {
        const c = lbData[idx];
        const b = brandMap[c.brand];
        const badge = finishLabel(c.finish);
        if (lightboxSwatch) {
            lightboxSwatch.style.background = `linear-gradient(135deg, ${lightenHex(c.color, 30)} 0%, ${c.color} 50%, ${darkenHex(c.color, 20)} 100%)`;
        }
        if (lightboxBrand) lightboxBrand.innerHTML = `<img src="${b.logo}" alt="${b.name}"> ${b.name}`;
        if (lightboxName) lightboxName.textContent = c.name;
        if (lightboxCode) lightboxCode.innerHTML =
            `โค้ดสี: <strong>${c.code}</strong>${badge ? ` &nbsp;<span class="finish-badge ${badge.cls}">${badge.text}</span>` : ''}`;
    }

    function lightenHex(hex, amt) {
        const r = Math.min(255, parseInt(hex.slice(1, 3), 16) + amt);
        const g = Math.min(255, parseInt(hex.slice(3, 5), 16) + amt);
        const b = Math.min(255, parseInt(hex.slice(5, 7), 16) + amt);
        return `rgb(${r},${g},${b})`;
    }
    function darkenHex(hex, amt) {
        const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - amt);
        const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - amt);
        const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - amt);
        return `rgb(${r},${g},${b})`;
    }

    function closeLB() {
        if (lightbox) { lightbox.classList.remove('open'); document.body.style.overflow = ''; }
    }

    const closeBtn = document.getElementById('lightboxClose');
    if (closeBtn) closeBtn.addEventListener('click', closeLB);

    const prevBtn = document.getElementById('lightboxPrev');
    if (prevBtn) prevBtn.addEventListener('click', () => { lbIndex = (lbIndex - 1 + lbData.length) % lbData.length; showLB(lbIndex); });

    const nextBtn = document.getElementById('lightboxNext');
    if (nextBtn) nextBtn.addEventListener('click', () => { lbIndex = (lbIndex + 1) % lbData.length; showLB(lbIndex); });

    if (lightbox) lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLB(); });

    document.addEventListener('keydown', e => {
        if (!lightbox || !lightbox.classList.contains('open')) return;
        if (e.key === 'Escape') closeLB();
        if (e.key === 'ArrowLeft') { lbIndex = (lbIndex - 1 + lbData.length) % lbData.length; showLB(lbIndex); }
        if (e.key === 'ArrowRight') { lbIndex = (lbIndex + 1) % lbData.length; showLB(lbIndex); }
    });

})();