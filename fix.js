const fs = require('fs');
let content = fs.readFileSync('js/catalog.js', 'utf8');
const lines = content.split(/\r?\n/);

const pre = lines.slice(0, 2);
const post = lines.slice(888);

const newContent = `    let BRANDS = [];
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

        fetch('/asset/colors-data.json', { cache: 'force-cache' })
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
    }`;

fs.writeFileSync('js/catalog.js', pre.join('\n') + '\n' + newContent + '\n' + post.join('\n'));
console.log('Fixed catalog.js!');
