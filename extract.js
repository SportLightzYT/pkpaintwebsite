const fs = require('fs');
const catalogCode = fs.readFileSync('js/catalog.js', 'utf8');

const getVar = (regex) => {
    const match = catalogCode.match(regex);
    if (!match) return null;
    return new Function('return ' + match[1])();
};

const getString = (varName) => {
    const regex = new RegExp('const ' + varName + ' = `([\\s\\S]*?)`;');
    const match = catalogCode.match(regex);
    return match ? match[1] : '';
};

let BRANDS = getVar(/const BRANDS = ([\s\S]*?);\s*const COLORS =/);
let COLORS = getVar(/const COLORS = ([\s\S]*?);\s*const EXTRA_CSV_DATA =/);

const INDEX_LOGO_PATHS = {
        toyota: 'asset/Toyota-Symbol.png',
        honda: 'asset/honda-logo.png',
        'ford-mazda': 'asset/mazda_PNG86.png',
        chevrolet: 'asset/Chevrolet-logo.png',
        'mercedes-benz': 'asset/Mercedes-Benz-Logo.png',
        nissan: 'asset/nissan-6.svg',
        mitsubishi: 'asset/Mitsubishi_logo.svg.png',
        mg: 'asset/MG-Logo.png',
        bmw: 'asset/BMW.svg.png',
        subaru: 'asset/Subaru_logo_(transparent).svg',
        hyundai: 'asset/Hyundai-Logo.png',
        kia: 'asset/KIA_logo2.svg.png',
        suzuki: 'asset/Suzuki_Motor_Corporation_logo.svg.png',
        proton: 'asset/PROTON_Holdings_logo_(2019–present).svg.png',
        volvo: 'asset/Volvo_logo.svg.png',
        volkswagen: 'asset/volkswagen-10.svg',
        mini: 'asset/MINI_logo.svg',
        audi: 'asset/Audi-Logo_2016.svg',
        isuzu: 'asset/Isuzu.svg.png',
        'thai-rung': 'asset/Thairung-Logo-removebg-preview.png',
        taxi: 'asset/taxi-icon.svg',
        byd: 'asset/BYD_Auto_2022_logo.svg',
        'changan-deepal': 'asset/deepal-site-image.png',
        'gac-aion': 'asset/gac_motor_logo-freelogovectors.net_.png',
        'greatwall-haval': 'asset/Great-Wall-logo.png',
        'hozon-neta': 'asset/Hozon_Auto_logo.png',
        wuling: 'asset/wuling-logo.png',
        'chery-omodaand-jaecoo': 'asset/Chery_logo.svg'
};

const EXTRA_CSV_DATA = getString('EXTRA_CSV_DATA');
const EXTRA_CSV_DATA_2 = getString('EXTRA_CSV_DATA_2');
const EXTRA_CSV_DATA_ISUZU = getString('EXTRA_CSV_DATA_ISUZU');
const EXTRA_CSV_DATA_3 = getString('EXTRA_CSV_DATA_3');
const EXTRA_CSV_DATA_4 = getString('EXTRA_CSV_DATA_4');
const EXTRA_CSV_DATA_5 = getString('EXTRA_CSV_DATA_5');

function slugBrand(brandName) {
    return brandName.toLowerCase().replace(' &', 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
function titleCase(text) {
    return text.toLowerCase().replace(/\b\w/g, ch => ch.toUpperCase());
}
function inferFinishFromName(name) {
    const upper = name.toUpperCase();
    if (upper.includes('PEARL') || upper.includes('CRYSTAL') || upper.includes('MICA')) return 'pearl';
    if (upper.includes('SILVER') || upper.includes('METAL') || upper.includes('MET.') || upper.includes('GREY') || upper.includes('GRAY') || upper.includes(' STEEL') || upper.includes('TITANIUM') || upper.includes('ALUMINUM') || upper.includes('GRAPHITE') || upper.includes('GUNMETAL')) return 'metallic';
    return 'solid';
}
function fallbackBrandLogo(name) {
    const initials = name.split(/[^A-Za-z0-9]+/).filter(Boolean).slice(0, 2).map(s => s[0].toUpperCase()).join('') || 'BR';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect width="100%" height="100%" rx="48" fill="#0f172a"/><text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" font-family="Arial,sans-serif" font-size="32" font-weight="700" fill="#f8fafc">${initials}</text></svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
function parseCsvLine(line) {
    const out = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
            if (inQuotes && line[i + 1] === '"') { current += '"'; i++; }
            else { inQuotes = !inQuotes; }
        } else if (ch === ',' && !inQuotes) { out.push(current.trim()); current = ''; }
        else { current += ch; }
    }
    out.push(current.trim());
    return out;
}
function normalizeHeader(text) {
    return (text || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
}
function parseCsvCatalogData(csvText, seenRowKeys) {
    const lines = csvText.trim().split(/\r?\n/).filter(Boolean);
    if (lines.length < 2) return { rows: [], brandEntries: [] };
    const headers = parseCsvLine(lines[0]).map(normalizeHeader);
    const brandIdx = headers.findIndex(h => h === 'brand');
    const nameIdx = headers.findIndex(h => h === 'colorname' || h === 'name');
    const codeIdx = headers.findIndex(h => h === 'colorcode' || h === 'code');
    const hexIdx = headers.findIndex(h => h === 'hexcolor' || h === 'hexcode' || h === 'hex');
    const modelsIdx = headers.findIndex(h => h === 'models' || h === 'compatiblemodels');
    const rows = lines.slice(1).map(line => {
        const cols = parseCsvLine(line);
        const brandRaw = (cols[brandIdx] || '').trim();
        const colorName = (cols[nameIdx] || '').trim();
        const colorCode = (cols[codeIdx] || '').trim();
        const hex = (cols[hexIdx] || '').trim().toUpperCase();
        const models = (cols[modelsIdx] || '').trim();
        return { brandRaw, brand: slugBrand(brandRaw), code: colorCode, name: titleCase(colorName), color: hex || '#808080', finish: inferFinishFromName(colorName), models };
    });
    const brandEntries = [];
    const seen = new Set(BRANDS.map(b => b.id));
    rows.forEach(item => {
        if (!item.brand) return;
        if (seen.has(item.brand)) return;
        seen.add(item.brand);
        brandEntries.push({ id: item.brand, name: item.brandRaw, logo: INDEX_LOGO_PATHS[item.brand] || fallbackBrandLogo(item.brandRaw) });
    });
    return { rows, brandEntries };
}

const seenImportedRows = new Set(COLORS.map(c => `${c.brand}|${String(c.code || '').toUpperCase().replace(/\s/g, '')}|${String(c.color || '').toUpperCase()}`));

[EXTRA_CSV_DATA, EXTRA_CSV_DATA_2, EXTRA_CSV_DATA_ISUZU, EXTRA_CSV_DATA_3, EXTRA_CSV_DATA_4, EXTRA_CSV_DATA_5].forEach(csvText => {
    const parsedCsvData = parseCsvCatalogData(csvText, seenImportedRows);
    BRANDS.push(...parsedCsvData.brandEntries);
    parsedCsvData.rows.forEach(newItem => {
        if (!newItem.brand || !newItem.code || !/^#[0-9A-F]{6}$/.test(newItem.color)) return;
        const cleanCode = String(newItem.code).toUpperCase().replace(/\s/g, '');
        const rowKey = `${newItem.brand}|${cleanCode}|${newItem.color}`;
        const existing = COLORS.find(c => c.brand === newItem.brand && String(c.code).toUpperCase().replace(/\s/g, '') === cleanCode);
        if (existing) {
            if (newItem.models) existing.models = newItem.models;
        } else if (!seenImportedRows.has(rowKey)) {
            COLORS.push({
                brand: newItem.brand,
                code: newItem.code,
                name: newItem.name,
                color: newItem.color,
                finish: newItem.finish,
                models: newItem.models || ''
            });
            seenImportedRows.add(rowKey);
        }
    });
});

fs.writeFileSync('asset/colors-data.json', JSON.stringify({ brands: BRANDS, colors: COLORS }, null, 2));
console.log('Done writing ' + COLORS.length + ' colors to asset/colors-data.json');
