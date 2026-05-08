(function () {
    'use strict';
    /* ══════════════════════════════════════════════════════════════
       BRANDS
    ══════════════════════════════════════════════════════════════ */
    const BRANDS = [
        { id: 'toyota', name: 'Toyota', logo: 'asset/Toyota-Symbol.png' },
        { id: 'honda', name: 'Honda', logo: 'asset/honda-logo.png' },
    ];

    /* ═════════════════════════════════════════════════════════ ═════
       COLORS — Toyota + Honda + Others
       *** เป็นค่าอ้างอิงเท่านั้น — สีจริงขึ้นอยู่กับสูตรผสมสี ***
    ══════════════════════════════════════════════════════════════ */
    const COLORS = [
        { brand: 'toyota', code: '040', name: 'Super White', color: '#F8F8F6', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova, Raize, Veloz' },
        { brand: 'toyota', code: '058', name: 'Warm White', color: '#FBF5E6', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '070', name: 'White Crystal Shine', color: '#EDF4FB', finish: 'pearl', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '089', name: 'Platinum White Pearl', color: '#F2F0EA', finish: 'pearl', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '1A0', name: 'Bluish Silver', color: '#8FA8BF', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '1C0', name: 'Silver Ash', color: '#A9A4A0', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '1C3', name: 'Dark Grey', color: '#525252', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '1D0', name: 'Liquid Silver', color: '#BFC3C8', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '1D4', name: 'Silver Ash', color: '#A0A0A2', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '1D6', name: 'Silver', color: '#B4B4B6', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '1E7', name: 'Silver', color: '#A8A8AA', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '1E9', name: 'Dark Grey', color: '#484848', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '1F8', name: 'Medium Silver', color: '#9C9C9E', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '1F9', name: 'Slate', color: '#70808C', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '1G3', name: 'Magnetic Grey', color: '#56595E', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '1H2', name: 'Dark Steel', color: '#24282E', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '1K0', name: 'Metal Stream', color: '#C4C8CC', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '1K3', name: 'Celestite Grey', color: '#B2B6BC', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '209', name: 'Night Time Black', color: '#101214', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '218', name: 'Attitude Black', color: '#1A1A1C', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: 'X12', name: 'Black', color: '#0D0D0F', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '343', name: 'Red', color: '#D42020', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '3G9', name: 'Wine Red', color: '#6B2030', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '3K4', name: 'Red', color: '#CC1A1A', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '3P0', name: 'Super Red', color: '#E01010', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '3P1', name: 'Impulse Red', color: '#C82010', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '3Q2', name: 'Dark Red', color: '#7A1020', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '3R3', name: 'Barcelona Red', color: '#C41020', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '3S1', name: 'Red', color: '#D61616', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '3T6', name: 'Crimson Spark Red', color: '#CC1030', finish: 'pearl', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '4P9', name: 'Angora Beige', color: '#E2CFAA', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '4Q2', name: 'Beige', color: '#CEBD9E', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '4Q8', name: 'Beige', color: '#C6B494', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '4R0', name: 'Beige', color: '#CCBA98', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '4R8', name: 'Orange', color: '#E07020', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '4U3', name: 'Sunset Bronze', color: '#C07840', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '4W0', name: 'Quartz Brown', color: '#7A5838', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '4W1', name: 'Silky Beige', color: '#DCC9A0', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '4W9', name: 'Phantom Brown', color: '#5A4030', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '574', name: 'Pale Yellow Opal', color: '#F0E880', finish: 'opal', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '586', name: 'Champagne', color: '#EEE0C0', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '5B7', name: 'Champagne', color: '#EAD8B0', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '5A7', name: 'Silky Gold', color: '#C09820', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '6S0', name: 'Light Green', color: '#4CA860', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '6S3', name: 'Dark Green', color: '#1A5C28', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '741', name: 'Teal Blue', color: '#00888A', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '8L2', name: 'Dark Blue', color: '#0C2060', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '8L4', name: 'Atlantis Blue', color: '#1660C0', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '8M6', name: 'Blue', color: '#1878D0', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '8N8', name: 'Dark Blue', color: '#0A1E58', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '8P1', name: 'Blue', color: '#1A50BC', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '8P4', name: 'Dark Blue', color: '#0C3078', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '8R3', name: 'Greyish Blue', color: '#6A8CAA', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '8S7', name: 'Light Blue', color: '#8CCAE0', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '8S9', name: 'Light Blue', color: '#80C8E8', finish: 'pearl', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '8T7', name: 'Blue Streak', color: '#1870C4', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '8U8', name: 'Light Blue', color: '#78C4DE', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '8W1', name: 'True Blue', color: '#1C50C0', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '8W8', name: 'Frozen Blue', color: '#5898D4', finish: 'pearl', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '8W9', name: 'Cyan Splash', color: '#90D4DC', finish: 'pearl', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '8X2', name: 'Nebula Blue', color: '#1E4898', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '8X7', name: 'Pure Blue', color: '#0048AA', finish: 'solid', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'toyota', code: '926', name: 'Cool Steel', color: '#889AA8', finish: 'metallic', models: 'Vios, Yaris, Corolla, Corolla Cross, Camry, Hilux Revo, Fortuner, Innova' },
        { brand: 'honda', code: 'B506M', name: 'Ice Blue', color: '#A0D0E8', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'B520P', name: 'Vivid Blue', color: '#1565C0', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'B538M', name: 'Blueish Silver', color: '#8898A8', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'B558M', name: 'Deep Lapis Blue', color: '#0E2468', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'B561P', name: 'New Teal Blue', color: '#007E88', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'B569M', name: 'Energetic Blue', color: '#1878D0', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'B570M', name: 'Twilight Blue', color: '#6A9EC0', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'B593M', name: 'New Sporty Blue', color: '#1A5898', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'B594P', name: 'Morpho Blue', color: '#2840A0', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'B607M', name: 'Cosmic Blue', color: '#183470', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'B92P', name: 'Nighthawk Black', color: '#0A0C10', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'B95P', name: 'Electron Blue', color: '#0038D8', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'B96P', name: 'Eternal Blue', color: '#183888', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'BG53M', name: 'Brilliant Sky', color: '#88CEE8', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'GY27M', name: 'Fresh Lime', color: '#80B400', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'N-11-OP', name: 'Micro White Silver', color: '#EAEAEA', finish: 'opal', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'NH537M', name: 'Pewter Grey', color: '#8C8C8C', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'NH578', name: 'Taffeta White', color: '#F8F2E8', finish: 'solid', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'NH612M', name: 'Regent Silver', color: '#ACAFB4', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'NH623M', name: 'Satin Silver', color: '#BCC0C4', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'NH630M', name: 'Silverstone', color: '#A4AEB8', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'NH636P', name: 'Brilliant White', color: '#F8F8F8', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'NH658P', name: 'Graphite', color: '#282828', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'NH663M', name: 'Satellite Silver', color: '#AEBABE', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'NH684P', name: 'Sparkle Grey', color: '#9CA8B0', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'NH691M', name: 'Silver Moss', color: '#8A9888', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'NH700M', name: 'Alabaster Silver', color: '#C8C8C4', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'NH731P', name: 'Crystal Black', color: '#080A0C', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'NH737M', name: 'Polished Metal', color: '#C4C8CC', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'NH787M', name: 'New Frosty White', color: '#ECF3F8', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'NH788P', name: 'White Orchid Pearl', color: '#F5F0EC', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'NH797M', name: 'Modern Steel', color: '#7A8890', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'NH830M', name: 'Lunar Silver', color: '#B8BCBE', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'NH877P', name: 'Sonic Grey', color: '#CCCCD0', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'NH883P', name: 'Platinum White Pearl', color: '#F0F0EE', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'PB79M', name: 'Purplish Blue', color: '#3840A8', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'RP31M', name: 'Signet Silver', color: '#A4A8AC', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'RP32P', name: 'Vintage Plum', color: '#72288C', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'RP40P', name: 'Misty Violet', color: '#B898C0', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'R507P', name: 'New Firepepper Red', color: '#E42020', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'R513', name: 'Liberty Rally Red', color: '#C41028', finish: 'solid', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'R516P', name: 'Iris Red', color: '#C01428', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'R522P', name: 'Royal Ruby Red', color: '#880C20', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'R543P', name: 'Carnelian Red', color: '#B01E1E', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'R560P', name: 'Burgundy Night', color: '#18060A', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'R575M', name: 'Ignite Red', color: '#CE0E1C', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'R96P', name: 'Inza Red', color: '#D41414', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'Y54', name: 'Carnival Yellow', color: '#FFCC00', finish: 'solid', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'Y72P', name: 'Attract Yellow', color: '#FFC000', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'YR505M', name: 'Cashmere Silver', color: '#C8BCB0', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'YR524M', name: 'Naples Gold', color: '#C09C28', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'YR525M', name: 'Titanium', color: '#6C5C48', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'YR538M', name: 'Desert Mist', color: '#C4B090', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'YR557P', name: 'Habanero Red', color: '#C22028', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'YR574M', name: 'Bold Beige', color: '#C4A880', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'YR576M', name: 'Brilliant Orange', color: '#E27020', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'YR578M', name: 'Urban Titanium', color: '#786050', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'YR591P', name: 'New Seashell', color: '#E8E0D4', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'YR595M', name: 'Sparkling Brown', color: '#885840', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'YR604M', name: 'Golden Brown', color: '#C09028', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'YR614P', name: 'Copper Sunset', color: '#CC7038', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'YR628M', name: 'Premium Amber', color: '#CC8020', finish: 'metallic', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
        { brand: 'honda', code: 'YR639P', name: 'Phoenix Orange', color: '#DC6418', finish: 'pearl', models: 'City, Jazz/Fit, Civic, Accord, CR-V, HR-V, BR-V, WR-V, Freed' },
    ];

    const EXTRA_CSV_DATA = `Brand,Color Name,Color Code,Hex Color,Models
MITSUBISHI,EISEN GREY,A02,#2C2C2C,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,MEDIUM SILVER,A36,#8C8A78,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,MEDIUM PURPLISH GREY,A39,#3C3840,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,GRAY,A63,#4A5260,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,HAMILTON SILVER,A65,#A2A2A2,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,COOL SILVER,A66,#B8B8B8,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,TITANIUM GREY,A67,#787878,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,OCEAN SILVER,A70,#6A7868,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,DARK GREY,A72,#2A2A2A,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,MEDIUM GREY,A75,#5C5C5C,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,GREYISH BROWN,C06,#4A3828,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,DEEP BROWN,C17,#2A1A0E,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,BLUE,D23,#1A3C8C,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,POP GREEN,F24,#78CC10,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,DARK GREEN,F27,#2A3820,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,BLUE GREEN,F50,#0A3828,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,LIGHT GREEN,F89,#3A8870,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,TIMBER GREEN,G60,#1C2A1A,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,CRYOLITE SILVER,H22,#C8D4C8,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,CHROMATIC SILVER,H82,#C0C0C0,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,ORANGE,M09,#CC6600,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,MEDIUM RED,P17,#8C1A1A,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,RED,P19,#CC1A1A,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,BLUISH RED,P57,#8C1A28,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,CAMBRIDGE RED,P78,#8A2020,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,RIO RED,R20,#CC2020,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,PALMA RED,R59,#AA2020,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,BEIGE,S15,#F5F0E0,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,PLATINUM BEIGE,S18,#C8B898,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,WHEAT BEIGE,S22,#C8B880,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,FRASER BEIGE,S74,#AA9870,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,ANADAMARON,T32,#1A1A3C,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,MARS BLUE,T38,#1A2A6A,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,SAPPHIRE BLUE,T64,#1C3C7C,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,CERULEAN BLUE,T69,#3A9ACC,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,BLUE,T83,#1A4A9A,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,MALACCA BLUE,T86,#1A2A4C,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,BALBOA BLUE,T88,#0A1A3A,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,TITANIUM GREY,U17,#6A6A78,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,SILVER,U25,#C0C0C0,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,GRAPHITE GRAY,U28,#3A3A3A,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,PURPLE,V08,#CC88CC,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,ADELIE PURPLE,V73,#2A1A3C,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,ALPINE WHITE,W32,#F0F0F0,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,WHITE,W54,#FFFFFF,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,WHITE,W85,#F8F8F8,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,PYRENEES BLACK,X08,#0A0A0A,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,JET BLACK,X37,#080808,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
MITSUBISHI,YELLOW,Y25,#DDCC00,"Mirage, Attrage, Xpander, Triton, Pajero Sport, Eclipse Cross"
FORD/MAZDA,TWILIGHT BLUE,12K,#1A2848,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,AQUARIUS BLUE,12R,#1A3464,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,BLACK,16W/38A,#0A0A0A,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,HIGHLIGHT SILVER,18G/38C,#B0B8B8,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,DUSK GREEN,18N,#2A3A28,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,SPRUCE GREEN,24M,#384840,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,AMBER,24N,#B87828,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,SNOWFLAKE WHITE,25D,#F8F8F8,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,STARRY BLUE,26P,#1A3A78,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,GLOAMING SILVER,28N/37Y,#A0A898,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,TITANIUM GRAY,30B,#787878,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,BLUE PACIFIC,30D,#1A3A7A,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,MEDIUM BLUE,30E,#284888,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,PHANTOM BLUE,32C,#1A2850,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,STRATO BLUE,32K,#1A2440,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,ANDAMAN BLUE,32L,#1A3870,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,CHILLI ORANGE,33J,#B83A18,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,ICY BLUE,33Y,#7AAAC8,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,SPARKLING GOLD,34E,#A89040,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,PHANTOM PURPLE,34N,#382848,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,SPIRITED GREEN,36A,#3AA828,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,METROPOLITAN GREY,36C,#686870,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,WINNING BLUE,37L/4CC,#284898,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,COPPER RED,37M,#882820,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,DESERT BRONZE,37P,#786048,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,LAGOON BLUE,37R,#1A4878,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,CELESTIAL BLUE,38J,#3A78C8,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,GUNMETAL BLUE,38L,#383C48,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,ALUMINUM,38P,#A8A8A8,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,AURORA BLUE,39A,#1A3888,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,TONIC,3DTCWWA,#181818,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,PLATINUM,3QNCWWA,#C8C8C8,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,SKY BLUE,41B,#5AAAD8,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,AQUATIC BLUE,41L,#285888,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,SOUL RED,41V,#AA1818,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,JET BLACK,41W,#0A0A0A,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,METEOR GREY,42A,#484848,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,DEEP CRYSTAL BLUE,42M,#0A2068,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,TITANIUM FLASH,42S,#787880,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,MACHINE GREY,46G,#585858,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,SOUL RED CRYSTAL,46V,#C81818,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,FROZEN WHITE,4CA,#F8F8F8,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,LUNAR SKY,4CD,#484850,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,INGOT SILVER,4CG,#A0A0A0,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,MIDNIGHT SKY,4CH,#101018,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,CANDY RED,4CN,#C01828,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,MUSTARD OLIVE,4CS,#786820,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,MAGNETIC SILVER,6QTCWWA,#888888,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,PERFORMANCE BLUE,7412,#102878,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,NIFTY RED,A1T,#881818,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,COOL WHITE,A2W,#F0F0F0,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,TRUE RED,A4A,#CC1818,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,ARCTIC WHITE,A4D,#FAFAFA,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,MARS RED,EJ6,#A01818,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,BLUE REFLEX,FCC,#0A1878,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,PRIDE ORANGE,FLQ,#C87830,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,SUNSET,FSQ,#C85030,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,PANTHER BLACK,JAYAWWA,#0A0A0A,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,SABER,JE5,#706850,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,CONQUER GREY,JMW,#585858,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,ABSOLUTE BLACK,WVS,#080808,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,DIAMOND WHITE,ZAFAWWA,#F8F8F8,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
FORD/MAZDA,MOONDUST SILVER,ZJNCWWA,#A8A8A8,"Ranger, Everest, Focus, Mazda2, Mazda3, CX-3, CX-30, CX-5, BT-50"
CHEVROLET,IMPULSE BLUE,06U,#1A3A9A,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,ICEBERGE BLUE,07U,#486880,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,LIGHT SKY BLUE,08U,#60A8C8,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,PEWTER,0CU,#889088,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,STAR SILVER,2AU,#A8A8A8,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,BLACK SAPPHIRE,2HU,#101820,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,GOLD SILVER,3SU,#B0A878,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,POLAR SEA BLUE,3TU,#183A68,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,WHITE PEARL,42U,#F5F5F0,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,STERLING SILVER,49U,#9898A0,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,CAPE BLUE,5AU,#1A50A0,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,LIGHT QUARTZ GRAY,5DU,#B8B8B8,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,SANDALWOOD,5EU,#C8B890,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,DENIM BLUE,5HU,#2A4878,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,SHANGHAI RED,5KU,#981818,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,SPARKLING TAN,61U,#A88A60,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,ROYAL GREY,90U/GQQ,#606068,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,MIRAGE,94L,#A0A0A0,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,ALPINE WHITE,96U,#F0F0F0,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,CITRUS GREEN,C7U,#A8D048,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,ORANGE ROCK,G6V,#C85020,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,BLUE ME AWAY,G8P,#1A3890,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,SWITCHBLADE SILVER,GAN,#909090,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,CARBON FLASH,GAR,#1C1C1C,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,OLYMPIC WHITE,GAZ,#F8F8F8,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,BLACK MEET KETTLE,GB0,#101010,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,MISTY LAKE,GCW,#78A0A8,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,PULL ME OVER RED,GG2,#C01818,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,SIZZLE,GGJ,#A81818,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,ABALONE WHITE,GP5,#F0EEE8,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,AUBURN BROWN,GVX,#683820,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,MOUNTAIN BLUE,GVY,#1848A8,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,OCEANIC BLUE,GVZ,#1A5090,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,SATIN STEEL GREY,GYM,#707070,"Colorado, Trailblazer, Captiva, Silverado"
CHEVROLET,IMPERIAL BLOND,ODU,#D4BC80,"Colorado, Trailblazer, Captiva, Silverado"
MG,MARINA BLUE,JSJ,#1A3898,"MG3, MG5, MG ZS, MG HS, MG GT, MG4"
MG,METAL GREY,LMA,#505058,"MG3, MG5, MG ZS, MG HS, MG GT, MG4"
MG,ARCTIC WHITE,NDW,#F8F8F8,"MG3, MG5, MG ZS, MG HS, MG GT, MG4"
MG,BLACK KNIGHT,PBC,#0A0A0A,"MG3, MG5, MG ZS, MG HS, MG GT, MG4"
MG,RUBY RED,RSK,#8A1818,"MG3, MG5, MG ZS, MG HS, MG GT, MG4"
MG,SILVER,SSA,#B8B8B8,"MG3, MG5, MG ZS, MG HS, MG GT, MG4"
MG,YELLOW,YSA,#DDB800,"MG3, MG5, MG ZS, MG HS, MG GT, MG4"
BMW,ALPINWEISS,300,#F2F2F0,"1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW,CARBONSCHWARZ,416,#1C1C1C,"1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW,SAPHIRSCHWARZ,475,#101018,"1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW,SCHWARZ,668,#0A0A0A,"1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW,SPACEGRAU,A52,#707078,"1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW,KASCHMIRSILBER,A72,#A8A8A8,"1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW,MELBOURNEROT,A73,#882018,"1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW,GLACIERSILBER,A83,#C8C8C8,"1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW,SOPHISTOGRAU,A90,#383838,"1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW,MINERALWEISS,A96,#F0F0EE,"1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW,MINERALGRAU,B39,#484848,"1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW,VALENCIA ORANGE,B44,#C06020,"1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW,ESTORILBLAU,B45,#1A3888,"1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW,SPARKLING BROWN,B53,#503020,"1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
MERCEDES BENZ,SCHWARZ,040,#0A0A0A,"A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
MERCEDES BENZ,POLAR WHITE,149,#F5F5F5,"A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
MERCEDES BENZ,KOSMOSSCHWARZ,191,#101010,"A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
MERCEDES BENZ,OBSIDIANSCHWARZ,197,#080808,"A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
MERCEDES BENZ,TENORITGRAU,755,#404040,"A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
MERCEDES BENZ,POLARSILBER,761,#B0B0B0,"A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
MERCEDES BENZ,IRIDIUMSILBER,775,#A0A0A0,"A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
MERCEDES BENZ,MOUNTAIN GREY,787,#686868,"A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
MERCEDES BENZ,PALLADIUMSILBER,792,#989898,"A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
MERCEDES BENZ,CITRINBRAUN,796,#604828,"A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
MERCEDES BENZ,DIAMANTWEISS,799,#F8F8F8,"A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
MERCEDES BENZ,CAVANSITBLAU,890,#1A2870,"A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
MERCEDES BENZ,DIAMANTSILBER,988,#B8B8B8,"A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
MERCEDES BENZ,SELENITE GREY,992,#787878,"A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"`;

    const EXTRA_CSV_DATA_2 = `Brand,Color Code,Color Name,HEX Code,Models
SUBARU,37J,SATIN WHITE,#F0F4F2,"Impreza, Legacy, Forester, Outback, Crosstrek, WRX"
SUBARU,61K,DARK GREY,#3A3C3E,"Impreza, Legacy, Forester, Outback, Crosstrek, WRX"
SUBARU,D4S,CRYSTAL BLACK SILICA,#111111,"Impreza, Legacy, Forester, Outback, Crosstrek, WRX"
SUBARU,F9H,MARINE BLUE,#1F2C44,"Impreza, Legacy, Forester, Outback, Crosstrek, WRX"
SUBARU,G1U,ICE SILVER,#A5A9A8,"Impreza, Legacy, Forester, Outback, Crosstrek, WRX"
SUBARU,G2U,TANGERINE ORANGE,#D75C29,"Impreza, Legacy, Forester, Outback, Crosstrek, WRX"
SUBARU,H2Q,VENETIAN RED,#8C2724,"Impreza, Legacy, Forester, Outback, Crosstrek, WRX"
HYUNDAI,GF,MATTE GREY,#6E6F6C,"i10, i20, i30, Elantra, Sonata, Tucson, Santa Fe, Creta, Palisade"
HYUNDAI,N9N,ARABIAN MOCHA,#2E2D2B,"i10, i20, i30, Elantra, Sonata, Tucson, Santa Fe, Creta, Palisade"
HYUNDAI,NCA,SLEEK SILVER,#B7B9B8,"i10, i20, i30, Elantra, Sonata, Tucson, Santa Fe, Creta, Palisade"
HYUNDAI,P2S,HYPER METALLIC,#7A7C7B,"i10, i20, i30, Elantra, Sonata, Tucson, Santa Fe, Creta, Palisade"
HYUNDAI,RB5,TIMELESS BLACK,#141515,"i10, i20, i30, Elantra, Sonata, Tucson, Santa Fe, Creta, Palisade"
HYUNDAI,YAC,CREAMY WHITE,#F1F2ED,"i10, i20, i30, Elantra, Sonata, Tucson, Santa Fe, Creta, Palisade"
HYUNDAI,ZBF,BRONZE,#8E867E,"i10, i20, i30, Elantra, Sonata, Tucson, Santa Fe, Creta, Palisade"
KIA,3D,BRIGHT SILVER,#C3C6C5,"Rio, Cerato, Seltos, Sportage, Sorento, Carnival, Stonic"
KIA,ABP,AURORA BLACK,#151616,"Rio, Cerato, Seltos, Sportage, Sorento, Carnival, Stonic"
KIA,D3,SILKY BEIGE,#9A998B,"Rio, Cerato, Seltos, Sportage, Sorento, Carnival, Stonic"
KIA,D7U,PLANET BLUE,#1C2534,"Rio, Cerato, Seltos, Sportage, Sorento, Carnival, Stonic"
KIA,K3G,GLITTERING METAL,#3B3E40,"Rio, Cerato, Seltos, Sportage, Sorento, Carnival, Stonic"
KIA,SWP,SNOW WHITE,#EAEBEB,"Rio, Cerato, Seltos, Sportage, Sorento, Carnival, Stonic"
KIA,UD,CLEAR WHITE,#F1F2F2,"Rio, Cerato, Seltos, Sportage, Sorento, Carnival, Stonic"
SUZUKI,Z2S,SILKY SILVER,#B8BABC,"Swift, Ciaz, Ertiga, Vitara, Jimny, Ignis, Baleno, XL7"
SUZUKI,ZBD,COOL BLACK,#18191B,"Swift, Ciaz, Ertiga, Vitara, Jimny, Ignis, Baleno, XL7"
SUZUKI,ZKB,RADIANT RED,#922724,"Swift, Ciaz, Ertiga, Vitara, Jimny, Ignis, Baleno, XL7"
SUZUKI,ZLL,BURGUNDY RED,#551F22,"Swift, Ciaz, Ertiga, Vitara, Jimny, Ignis, Baleno, XL7"
SUZUKI,ZNQ,ENERGY GREEN,#55A03A,"Swift, Ciaz, Ertiga, Vitara, Jimny, Ignis, Baleno, XL7"
SUZUKI,ZPJ,PEARL WHITE,#EAECE8,"Swift, Ciaz, Ertiga, Vitara, Jimny, Ignis, Baleno, XL7"
SUZUKI,ZQE,CERULEAN BLUE,#1F659C,"Swift, Ciaz, Ertiga, Vitara, Jimny, Ignis, Baleno, XL7"
SUZUKI,ZQF,SUNSHINE YELLOW,#D1A522,"Swift, Ciaz, Ertiga, Vitara, Jimny, Ignis, Baleno, XL7"
SUZUKI,ZQG,RASPBERRY PINK,#7C353E,"Swift, Ciaz, Ertiga, Vitara, Jimny, Ignis, Baleno, XL7"
SUZUKI,ZQU,DIGNITY BROWN,#4A3530,"Swift, Ciaz, Ertiga, Vitara, Jimny, Ignis, Baleno, XL7"
SUZUKI,ZTR,SNOW WHITE,#EAEBEB,"Swift, Ciaz, Ertiga, Vitara, Jimny, Ignis, Baleno, XL7"
SUZUKI,ZTS,STAR SILVER,#919391,"Swift, Ciaz, Ertiga, Vitara, Jimny, Ignis, Baleno, XL7"
SUZUKI,ZTT,SUPER BLACK,#111212,"Swift, Ciaz, Ertiga, Vitara, Jimny, Ignis, Baleno, XL7"
SUZUKI,ZTU,MINERAL GREY,#5C5E60,"Swift, Ciaz, Ertiga, Vitara, Jimny, Ignis, Baleno, XL7"
SUZUKI,ZTV,BOOST BLUE,#173C7A,"Swift, Ciaz, Ertiga, Vitara, Jimny, Ignis, Baleno, XL7"
SUZUKI,ZTW,ABLAZE RED,#9B2222,"Swift, Ciaz, Ertiga, Vitara, Jimny, Ignis, Baleno, XL7"
SUZUKI,ZTZ,SUNLIGHT COPPER,#853625,"Swift, Ciaz, Ertiga, Vitara, Jimny, Ignis, Baleno, XL7"
SUZUKI,ZUH,SERENA BLUE,#7B8893,"Swift, Ciaz, Ertiga, Vitara, Jimny, Ignis, Baleno, XL7"
SUZUKI,ZUJ,MET DUSKY BROWN,#4E443C,"Swift, Ciaz, Ertiga, Vitara, Jimny, Ignis, Baleno, XL7"
SUZUKI,ZYH,SPEEDY BLUE,#1C469D,"Swift, Ciaz, Ertiga, Vitara, Jimny, Ignis, Baleno, XL7"
SUZUKI,ZYG,PURE WHITE,#EDEEEE,"Swift, Ciaz, Ertiga, Vitara, Jimny, Ignis, Baleno, XL7"
PROTON,A0081,ENERGY ORANGE,#C4402A,"Saga, Persona, Iriz, X50, X70, X90"
PROTON,A0082,PROTON WHITE,#E8E9E7,"Saga, Persona, Iriz, X50, X70, X90"
PROTON,A0090,METAL GREY,#3F4344,"Saga, Persona, Iriz, X50, X70, X90"
PROTON,A0093,IRIDESCENT WHITE,#B8BABC,"Saga, Persona, Iriz, X50, X70, X90"
PROTON,A0100,TRANQUILITY BLACK,#191E21,"Saga, Persona, Iriz, X50, X70, X90"
PROTON,A0101,PASSION BLUE,#1A53A9,"Saga, Persona, Iriz, X50, X70, X90"
PROTON,A0128,GENETIC SILVER,#BDC0C1,"Saga, Persona, Iriz, X50, X70, X90"
NISSAN,55P,SAMARARD GREEN,#142938,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,A55,ORANGE,#984A22,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,AX5,ROMA RED,#8A2222,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,AX6,RED,#A51C20,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,B51,BLUE,#1D388E,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,BB1M,GLIMMER GOLD,#908C82,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,BB1,BLUE,#1F264A,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,BE12,LIGHT GOLD,#8B8262,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,BE2M,BLUISH SILVER,#737B85,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,BE32,GREENISH GOLD,#7D8365,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,BE3M,BROWN,#6C594A,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,BG42,BLACK,#131415,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,BG4M,BLUE,#191A2A,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,BI1M,BEIGE,#9C907A,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,BI2P,BLUE,#25256E,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,BI3M,BLUE,#212F5A,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,BJ1M,CHAMPAGNE GOLD,#78776B,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,BK21,TWILIGHT GREY,#4F5052,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,BK23,BRILLIANT SILVER,#9D9FA2,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,BK32,YELLOWISH SILVER,#8F908A,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,BKR4,SILVER,#A4A6A8,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,BKW5,SILVER,#AEB0AC,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,BQM1,WHITE SOLID,#EBEDEC,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,BQX1,WHITE,#EDEEE9,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,BRWO,RED,#6A2222,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,BX7,BRIGHT BLUE,#284A8E,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,C20,BRONZEE GOLD,#866442,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,CAQ,DARK BROWN,#382C27,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,EAH,GOLD,#AE9B40,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,EAN,DARK OLIVE,#272A26,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,EAQ,LIGHT GREENISH YELLOW,#C3C669,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,EAU,ORANGE,#985925,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,GAB,NIGHTSHADE,#27262A,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,GE1P,DARK GREEN,#232E2E,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,GG2M,SILVER,#B2B4B3,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,GI1M,SILVER,#9A9D99,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,GI2M,MAGICRON,#575B49,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,JAD,YELLOW GREEN,#97AA34,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,KAC,DESERT SHADOW,#6D675F,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,KAS,PURPLISH SILVER,#B7B2B6,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,KBD,DARK GRAY,#4E5256,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,KF1M,BLACK,#131415,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,KH3,SUPER BLACK,#111212,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,KY0,SILVER,#A7A9AA,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,LAA,DARK VIOLET,#2F2633,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,NAH,FORCE RED,#842223,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,NAR,PINK,#B47171,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,QAB,STORM WHITE,#E8E9E4,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,RA1S,RED,#AD2A2D,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,RAA,DARK BLUE,#1F3173,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,RBH,DARK BLUE,#222E42,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,RBS,LIGHT BLUE,#2F6A9F,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,RC1P,RED,#6B2222,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,RD1S,RED,#8F2426,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,YF1P,ORAL YELLOW,#DED3A4,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
NISSAN,YI1M,LIGHT YELLOWISH BLUE,#B6BDC2,"Almera, Terra, Navara, Kicks, X-Trail, Serena, Magnite"
VOLVO,426,SILVER,#A4A6A8,"S60, S90, V60, XC40, XC60, XC90, C40"
VOLVO,477,ELECTRIC SILVER,#8C8E90,"S60, S90, V60, XC40, XC60, XC90, C40"
VOLVO,487,EMBER BLACK,#1A1C1D,"S60, S90, V60, XC40, XC60, XC90, C40"
VOLVO,614,ICE WHITE,#E8EAEC,"S60, S90, V60, XC40, XC60, XC90, C40"
VOLVO,700,TWILIGHT BRONZE,#554C43,"S60, S90, V60, XC40, XC60, XC90, C40"
VOLVO,707,CRYSTAL WHITE,#EAECEE,"S60, S90, V60, XC40, XC60, XC90, C40"
VOLVO,710,MISTY BLUE,#C0C4C8,"S60, S90, V60, XC40, XC60, XC90, C40"
VOLKSWAGEN,1B,MOJAWEBEIGE,#7F7D74,"Polo, Golf, Jetta, Passat, Tiguan, T-Cross, T-Roc"
VOLKSWAGEN,2T,DEEPBLACK,#131415,"Polo, Golf, Jetta, Passat, Tiguan, T-Cross, T-Roc"
VOLKSWAGEN,8E,REFLEXSILBER,#A7A9AA,"Polo, Golf, Jetta, Passat, Tiguan, T-Cross, T-Roc"
VOLKSWAGEN,B4,CANDYWEISS,#EAEBEB,"Polo, Golf, Jetta, Passat, Tiguan, T-Cross, T-Roc"
VOLKSWAGEN,M4,NATURAL GREY,#727475,"Polo, Golf, Jetta, Passat, Tiguan, T-Cross, T-Roc"
VOLKSWAGEN,P3,DARK WOOD,#373330,"Polo, Golf, Jetta, Passat, Tiguan, T-Cross, T-Roc"
VOLKSWAGEN,P8,SANDBEIGE,#D2D1CB,"Polo, Golf, Jetta, Passat, Tiguan, T-Cross, T-Roc"
MINI,850,PEPPER WHITE,#DFE0DC,"Cooper, Clubman, Countryman, John Cooper Works"
MINI,851,CHILI RED,#B32A22,"Cooper, Clubman, Countryman, John Cooper Works"
MINI,A62,WHITE SILVER,#BCC1C2,"Cooper, Clubman, Countryman, John Cooper Works"
MINI,A94,MIDNIGHT BLACK,#111212,"Cooper, Clubman, Countryman, John Cooper Works"
MINI,B17,BRIGHT YELLOW,#DFD321,"Cooper, Clubman, Countryman, John Cooper Works"
MINI,B60,BRILLANT COPPER,#724B2C,"Cooper, Clubman, Countryman, John Cooper Works"
MINI,B70,VOLCANIC ORANGE UNI,#DE851D,"Cooper, Clubman, Countryman, John Cooper Works"
AUDI,0C,MONSUN GRAU,#5F6264,"A3, A4, A6, Q5, Q7"
AUDI,0E,MYTHOSSCHWARZ,#151616,"A3, A4, A5, Q3, Q5, e-tron"
AUDI,2Y,GLETSCHERWEISS,#E0E2E3,"A3, A4, Q3, TT"
AUDI,L5,FLORETTSILBER,#A3A5A7,"A4, A6, Q5, Q7"
AUDI,Q2,TORNADOGRAU,#858889,"A3, A4, Q5"
AUDI,W1,MONDSCHEINBLAU,#1C2331,"A5, A7, Q8"
AUDI,W3,ARGUSBRAUN,#3F3631,"A6, Q7, Q8"`;

    const EXTRA_CSV_DATA_ISUZU = `Brand, Color Code, Color Name, Hex, Models
ISUZU, 501, TOPAZ GOLD,#8B7147, "D-Max, MU-X, N-Series"
ISUZU, 504, TORNADO RED,#652222, "D-Max, MU-X, N-Series"
ISUZU, 505, ROYAL GREY,#333537, "D-Max, MU-X, N-Series"
ISUZU, 506, DUNE GREY,#5C5E60, "D-Max, MU-X, N-Series"
ISUZU, 511, CHARDONNAY GOLD, #A3A092, "D-Max, MU-X, N-Series"
ISUZU, 512, LAPIS BLUE,#20418A, "D-Max, MU-X, N-Series"
ISUZU, 520, NEBULA GREY,#5E646A, "D-Max, MU-X, N-Series"
ISUZU, 521, NAUTILUS BLUE,#17233B, "D-Max, MU-X, N-Series"
ISUZU, 523, COSMIC BLACK,#141516, "D-Max, MU-X, N-Series"
ISUZU, 526, BALTIC BLUE,#637081, "D-Max, MU-X, N-Series"
ISUZU, 527, SPLASH WHITE, #EBECED, "D-Max, MU-X, N-Series"
ISUZU, 528, GARNET RED,#4A2020, "D-Max, MU-X, N-Series"
ISUZU, 529, TITANIUM SILVER, #B7B9BA, "D-Max, MU-X, N-Series"
ISUZU, 530, MINERAL GREY,#727679, "D-Max, MU-X, N-Series"
ISUZU, 531, SILKY WHITE, #E8EAE6, "D-Max, MU-X, N-Series"
ISUZU, 541, ASH BEIGE,#6F6851, "D-Max, MU-X, N-Series"
ISUZU, 545, FJORD BLUE,#264983, "D-Max, MU-X, N-Series"
ISUZU, 546, VENETIAN RED,#862828, "D-Max, MU-X, N-Series"
ISUZU, 553, QUARTZ BLUE,#48597E, "D-Max, MU-X, N-Series"
ISUZU, 554, OBSIDIAN GREY,#565759, "D-Max, MU-X, N-Series"
ISUZU, 563, ZERMATT SILVER,#95999A, "D-Max, MU-X, N-Series"
ISUZU, 575, DOLOMITE WHITE, #E2E4E4, "D-Max, MU-X, N-Series"
ISUZU, 588, ISLAY GRAY,#333537, "D-Max, MU-X, N-Series"
ISUZU, 612, CAPE BLUE,#14223A, "D-Max, MU-X, N-Series"
ISUZU, 641, STEEL BLACK,#1A1B1C, "D-Max, MU-X, N-Series"
ISUZU, 642, LT QUARTZ GRAY,#56575A, "D-Max, MU-X, N-Series"
ISUZU, 643, SANDALWOOD, #B4AD97, "D-Max, MU-X, N-Series"
ISUZU, 644, CHAMONIX GREEN,#296058, "D-Max, MU-X, N-Series"
ISUZU, 645, GLACIER BLUE,#687C87, "D-Max, MU-X, N-Series"
ISUZU, 646, ZENITH BLUE,#1C2E55, "D-Max, MU-X, N-Series"
ISUZU, 647, RIGID BLUE,#1C283F, "D-Max, MU-X, N-Series"
ISUZU, 648, SAHARA BEIGE,#998E75, "D-Max, MU-X, N-Series"
ISUZU, 658, FOXFIRE RED,#482323, "D-Max, MU-X, N-Series"
ISUZU, 682, COSMIC GREY,#707376, "D-Max, MU-X, N-Series"
ISUZU, 683, KRYPT NITE, #E1E2E4, "D-Max, MU-X, N-Series"
ISUZU, 687, MOONSTONE BLUE,#325E9E, "D-Max, MU-X, N-Series"
ISUZU, 688, IMPERIAL BLOND, #B79C61, "D-Max, MU-X, N-Series"
ISUZU, 692, OMEGA WHITE, #DFE2DC, "D-Max, MU-X, N-Series"
ISUZU, 718, ASTRAL SILVER, #ACAFB0, "D-Max, MU-X, N-Series"
ISUZU, 877, ALPINE WHITE, #EAEBEB, "D-Max, MU-X, N-Series"
ISUZU, 935, STARRY BLACK,#1A1C1D, "D-Max, MU-X, N-Series"
ISUZU, 936, STERLING SILVER,#406E7A, "D-Max, MU-X, N-Series"
ISUZU, 937, CRYSTAL BLUE,#688698, "D-Max, MU-X, N-Series"
ISUZU, 950, SILVER, #BCBEBD, "D-Max, MU-X, N-Series"
ISUZU, PT030, RED,#5A1C1C, "D-Max, MU-X, N-Series"
ISUZU, PT036, SPARKLING SILVER,#8A8D8F, "D-Max, MU-X, N-Series"
ISUZU, PT038, WHITE, #DFE1E1, "D-Max, MU-X, N-Series"
ISUZU, PT040, HAZY GREY,#545758, "D-Max, MU-X, N-Series"
ISUZU, PT042, GREEN,#29858E, "D-Max, MU-X, N-Series"
ISUZU, PT047, SILVER,#8E9193, "D-Max, MU-X, N-Series"
ISUZU, PT048, RED,#571F1F, "D-Max, MU-X, N-Series"
ISUZU, PT056, SEA BLUE,#213650, "D-Max, MU-X, N-Series"
ISUZU, PT057, CABERNET,#411A1B, "D-Max, MU-X, N-Series"
ISUZU, PT059, BEIGE, #A49C8C, "D-Max, MU-X, N-Series"
ISUZU, PT060, FOREST GREEN,#1B6A68, "D-Max, MU-X, N-Series"
ISUZU, PT061, LIGHT GREEN,#68A2A8, "D-Max, MU-X, N-Series"
ISUZU, PT064, WHITE, #EBECED, "D-Max, MU-X, N-Series"
ISUZU, PT066, SILVER,#8B8E8F, "D-Max, MU-X, N-Series"
ISUZU, PT069, SATIN GOLD,#8D8469, "D-Max, MU-X, N-Series"
ISUZU, PT070, CHANTI RED,#5F1920, "D-Max, MU-X, N-Series"
ISUZU, PT071, CYPRESS GREEN,#183531, "D-Max, MU-X, N-Series"
ISUZU, PT072, CASCADE BLUE,#3A87B7, "D-Max, MU-X, N-Series"
ISUZU, PT073, KAISER SILVER, #AFB3B5, "D-Max, MU-X, N-Series"`;

    const EXTRA_CSV_DATA_3 = `Brand, Color Code, Color Name, Hex, Models
BMW, 329, VULKAN GRAY,#4A4A48, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, 416, CARBONSCHWARZ PEARL MET.,#1C1C1C, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, 668, SCHWARZ,#0A0A0A, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, A17, BROWN PEARL MET.,#4B3621, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, A38, MOONLIGHT BLUE PEARL MET.,#1E2A44, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, 309, ARKTISSILBER MET., #C0C0C0, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, 400, STAHLGRAU PEARL MET.,#6E7B8B, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, 481, BEIGE MET.OPAL, #D8CAB8, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, 897, TECHNOVIOLETT PEARL MET.,#6A0DAD, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, A32, SPARKLING SILVER MET., #D3D3D3, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, 300, BILLLOW RED,#8B0000, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, 372, STAHLBLAU MET.OPAL,#4682B4, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, 475, SAPPHIRE PEARL MET.,#0F0F0F, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, 869, VERTEX MET.,#3B3B3B, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, A22, SPARKLING GRAPHITE PEARL MET.,#4B4B4B, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, A30, BRIGHTNESS, #B0B0B0, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, 354, TITANSILBER MET., #C8C8C8, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, 851, RED, #B22222, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, A18, QUARTZ BLUE MET.,#5F9EA0, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, B45, BLUE MET.,#1E90FF, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, B19, COFFEE,#4B3621, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, A96, ALPIN WHITE 3, #F5F5F2, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, A75, FLAMENCO RED PEARL, #B22222, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, A52, SPACE GREY MET., #A9A9A9, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, B35, KING BROWN PEARL,#5C4033, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, B21, MANGO YELLOW, #FFD700, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, A76, DEEP SEA BLUE PEARL,#003366, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, A53, LUNAR BRONZE MET.OPAL,#8B7355, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, B88, MARINA BLUE PEARL MET.,#4682B4, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, B39, MINERAL GREY PEARL MET.,#696969, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, B06, SPARKLING BRONZE PEARL MET.,#8B5A2B, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, A43, GLACIER SILVER MET., #DCDCDC, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, A61, KORALLENROT, #FF4040, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, B94, BLAU PEARL MET.,#1C39BB, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, B44, MANGO ORANGE PEARL, #FF8C00, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, B09, DARK CHESTNUT BROWN PEARL,#654321, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, A92, ORION SILVER MET., #C0C0C0, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, A70, MINERAL GREEN MET.OPAL,#3CB371, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, U98, SPEED GELB, #FFD700, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, C1D, TETRAPOL BLAU PEARL MET,#1E3F66, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, C1L, MEDITERRANE BLAU PEARL MET,#2E4A7D, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, C06, FLAMINGO ROT BRILLIANT PEARL, #DC143C, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, WC1M, PORTIMAO BLAU PEARL MET,#4169E1, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, C3E, SANREMO GRÜN PEARL,#2E8B57, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, C1P, GALVANIC GOLD PEARL MET, #DAA520, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, C29, KASTANIEN BRONZE PEARL,#8B4513, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, C07, PHOENIX STORM BRILLIANT PEARL,#708090, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, VC15, INDIAN GREEN PEARL MET,#006400, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, C3G, TORONTO ROT PEARL, #B22222, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, C15, COPPER PEARL MET, #B87333, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, C1G, SNAPPER ROCKS BLUE MET,#4682B4, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, C08, PLATIN SILVER MET, #C0C0C0, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, VC31, PORTIMAO BLAU PEARL MET,#4169E1, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, U83, OXIDGRAU GREY PEARL MET,#696969, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, C1X, SUNSET ORANGE PEARL, #FF4500, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, C1H, SAKHIR ORANGE PEARL, #FF6347, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
BMW, C09, ATLANTIC GRAU PEARL ORAL,#708090, "1 Series, 2 Series, 3 Series, 4 Series, 5 Series, 7 Series, X1, X3, X5, X6, Z4"
Mercedes - Benz, 559, FIRE OPAL RED, #B22222, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 359, TANSANITE BLUE PEARL,#0F52BA, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 197, DESIGNO SAND SILVER PEARL, #C0C0B0, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 149, POLAR WHITE, #F8F8FF, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz,049, DESIGNO MAGNO KASHMIR WHITE, #F5F5F5, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 650, CALCIUMISS, #DCDCDC, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 368, FLINT GRAY PEARL MET,#6C7B8B, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 230, INDIGO LITE BLUE MET,#4682B4, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 278, SOLAR BEAM, #FFD700, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 144, DESIGNO MAGNO SILVER, #C0C0C0, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 667, BLUE LINE PEARL MET,#1E90FF, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 497, CAPRITE BROWN PEARL,#5C4033, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 19, COSMOS BLACK PEARL,#0A0A0A, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 633, TRAVERTINE BEIGE MET, #D2B48C, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 589, PATRIOT RED PEARL,#8B0000, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 177, MAG.GALACTIC BEAM, #DAA520, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 144, MAG.SILVER PEARL, #C0C0C0, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 957, GALAXITE SILVER MET, #A9A9A9, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 989, SMARAGD GREEN PEARL,#2E8B57, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 831, CAVANSITE BLUE PEARL,#1E3F66, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 919, ORIENT BROWN PEARL MET,#5C4033, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 932, SELENITE GREY MET,#708090, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 787, SELENITE GREY MET,#708090, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 792, PALLADIUM SILVER PEARL MET, #C0C0C0, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 914, SUN YELLOW ELEB, #FFD700, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 796, CITRIN BROWN PEARL MET,#8B4513, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 794, PEARL BEIGE MET OPAL, #F5DEB3, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 745, CRYSTAL SILVER MET, #D3D3D3, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 775, IRIDIUM SILVER MET, #C0C0C0, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 786, SPARKLING GREY PEARL MET, #A9A9A9, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 723, PALLADIUM SILVER MET, #C0C0C0, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 737, ASPHALT GREY,#696969, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 744, BRILLIANT SILVER MET, #DCDCDC, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Mercedes - Benz, 737, CLASSIC WEISS, #FFFFFF, "A-Class, B-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS"
Volvo,019, BLACKSTONE,#0A0A0A, "S60, S90, V60, XC40, XC60, XC90, C40"
Volvo, 415, HELIUM MET., #D3D3D3, "S60, S90, V60, XC40, XC60, XC90, C40"
Volvo, 409, BURGUNDY RED PEARL MET.,#800020, "S60, S90, V60, XC40, XC60, XC90, C40"
Volvo, 412, GREEN PEARL MET.,#2E8B57, "S60, S90, V60, XC40, XC60, XC90, C40"
Volvo, 418, RED PEARL, #B22222, "S60, S90, V60, XC40, XC60, XC90, C40"
Volvo, 444, ARCTIC DAWN PEARL MET., #F0F8FF, "S60, S90, V60, XC40, XC60, XC90, C40"
Volvo, 414, LUMINOUS GREY PEARL MET., #A9A9A9, "S60, S90, V60, XC40, XC60, XC90, C40"
Volvo, 725, PASSION RED PEARL, #FF2400, "S60, S90, V60, XC40, XC60, XC90, C40"
Volvo, 717, ONYX BLACK PEARL MET.,#0F0F0F, "S60, S90, V60, XC40, XC60, XC90, C40"
Volvo, 707, CRYSTAL WHITE PEARL, #F8F8F6, "S60, S90, V60, XC40, XC60, XC90, C40"
Volvo, 720, THUNDER GREY PEARL MET.,#4B4B4B, "S60, S90, V60, XC40, XC60, XC90, C40"
Volvo, 720, BURSTING BLUE MET.,#1E90FF, "S60, S90, V60, XC40, XC60, XC90, C40"
Volvo, 722, MAPLE BROWN PEARL,#5C4033, "S60, S90, V60, XC40, XC60, XC90, C40"
Volvo, 711, BRIGHT SILVER MET., #C0C0C0, "S60, S90, V60, XC40, XC60, XC90, C40"
Volvo, 714, LUMINOUS GREY PEARL MET., #A9A9A9, "S60, S90, V60, XC40, XC60, XC90, C40"
Volvo, 731, BLACK MET.,#1C1C1C, "S60, S90, V60, XC40, XC60, XC90, C40"`;

    const EXTRA_CSV_DATA_4 = `Brand, Color Code, Color Name, Hex, Models
AUDI, 0C, MONSUN GRAU,#5F6264, "A3, A4, A6, Q5, Q7"
AUDI, 0E, MYTHOSSCHWARZ,#151616, "A3, A4, A5, Q3, Q5, e-tron"
AUDI, 2Y, GLETSCHERWEISS, #E0E2E3, "A3, A4, Q3, TT"
AUDI, L5, FLORETTSILBER, #A3A5A7, "A4, A6, Q5, Q7"
AUDI, Q2, TORNADOGRAU,#858889, "A3, A4, Q5"
AUDI, W1, MONDSCHEINBLAU,#1C2331, "A5, A7, Q8"
AUDI, W3, ARGUSBRAUN,#3F3631, "A6, Q7, Q8"`;

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

    const EXTRA_CSV_DATA_5 = `Brand, Color Code, Color Name, Hex, Models
BYD, AA1, QUANTUM BLACK, #1C1C1C, "Atto 3, Dolphin, Seal, Han, Tang, Sealion"
BYD, CA2, FLORAL PURPLE, #9B8EB0, "Atto 3, Dolphin"
BYD, HAN, GRAPHITE ALASKAN GREY, #5E5E5E, "Han, Tang"
BYD, HB5, MAFIC GREY, #2C3A4A, "Seal, Sealion"
BYD, HB6, SPACE GREY, #2C2C3A, "Seal, Sealion"
BYD, KW, CORAL PINK, #B38B6E, "Dolphin, Atto 3"
BYD, LAP, LAGOON BLUE, #2A6A9E, "Atto 3, Seal"
BYD, LAQ, SOLAR RED, #C8102E, "Atto 3, Dolphin, Seal"
BYD, LAT, VELOCITY BLUE, #7A8A96, "Seal, Sealion"
BYD, UA6, EMERALD GREEN, #4A6B4F, "Atto 3"
BYD, WA2, HORIZON WHITE, #F5F5F5, "Atto 3, Dolphin, Seal, Han, Tang, Sealion"
BYD, WAC, FROST WHITE, #D9D9D9, "Atto 3, Dolphin, Seal, Han"
BYD, YB1, COASTAL CREAM, #F0E8D8, "Atto 3, Sealion"
CHANGAN (DEEPAL), C05, COMET WHITE, #F5F5EB, "Deepal S07, L07, SL03"
CHANGAN (DEEPAL), Y08, STELLAR BLUE, #1F2A44, "Deepal S07, L07, SL03"
CHANGAN (DEEPAL), Y19, MOSS GREEN, #7CA38E, "Deepal S07"
CHANGAN (DEEPAL), Y25, LUNAR GRAY, #2F2F2F, "Deepal S07, L07, SL03"
CHANGAN (DEEPAL), Y65, MAGPIE GRAY, #8A8C7E, "Deepal L07, SL03"
CHANGAN (DEEPAL), Y66, NEBULA CYAN, #5F7A6F, "Deepal S07"
CHANGAN (DEEPAL), Y74, WHEAT YELLOW, #D9C38A, "Deepal S07"
CHANGAN (DEEPAL), Y75, SUNSET ORANGE, #E36B4A, "Deepal S07"
CHANGAN (DEEPAL), Y77, ECLIPSE BLACK, #1C1C1C, "Deepal S07, L07, SL03"
CHANGAN (DEEPAL), Y78, COSMIC YELLOW, #EDE53C, "Deepal S07"
CHANGAN (DEEPAL), Y81, SAKURA PINK, #E0B8A0, "Deepal S07"
GAC (AION), B09, VITALITY GREEN, #9CC3B5, "Aion S, V, Y, LX Plus"
GAC (AION), B1, GLAMOUR BLACK, #1C1C1C, "Aion S, V, Y, LX Plus"
GAC (AION), B6H, PURE WHITE, #F5F5F5, "Aion S, V, Y, LX Plus"
GAC (AION), B8G, LIBERTY ASH, #5A5A5A, "Aion S, V, Y, LX Plus"
GAC (AION), B81, ELEGANT GRAY, #A8A8A8, "Aion S, V, Y, LX Plus"
GAC (AION), B9A, SPEEDY SILVER, #7F7F7A, "Aion S, V, Y, LX Plus"
GAC (AION), B9Y, LUCKY GOLD, #E0C55C, "Aion Y, LX Plus"
GREATWALL / HAVAL, 1B, HAZEL WOOD BEIGE, #E8D9C2, "Haval H6, Jolion, H9, Dargo"
GREATWALL / HAVAL, 1Y, MARS RED, #A02C2C, "Haval Jolion, H6"
GREATWALL / HAVAL, 20, CRYSTAL PURPLE, #6A6A7A, "Haval Jolion"
GREATWALL / HAVAL, 2Y, ORANGE, #E05C2C, "Haval Jolion"
GREATWALL / HAVAL, 40, AMETHYST GRAY, #5A6A7A, "Haval H6, Jolion, H9"
GREATWALL / HAVAL, 6Y, SWAROVSKI BLUE, #2A4A8A, "Haval H6, H9"
GREATWALL / HAVAL, 7T, VERDANT GREEN, #1A4A4A, "Haval H9, Dargo"
GREATWALL / HAVAL, 8T, SUN BLACK, #1C1C1C, "Haval H6, Jolion, H9, Dargo"
GREATWALL / HAVAL, 9C, HAMILTON WHITE, #F5F5F0, "Haval H6, Jolion, H9, Dargo"
GREATWALL / HAVAL, 9F, JADE WHITE, #F0F0E8, "Haval H6, H9"
GREATWALL / HAVAL, C0C, CRYSTAL GRAY ULTRA, #5A5A5A, "Haval Jolion, H6"
GREATWALL / HAVAL, D2, WISDOM BROWN, #3A2C2C, "Haval H9"
GREATWALL / HAVAL, F3, AYERS GREY, #7A7A7A, "Haval H6, H9, Dargo"
GREATWALL / HAVAL, G7, BURGUNDY RED, #5A2C2C, "Haval H9"
GREATWALL / HAVAL, HR, CORAL BLUE, #7A9EB8, "Haval Jolion"
GREATWALL / HAVAL, KU, AQUA GREY, #5A6A7A, "Haval Jolion, H6"
GREATWALL / HAVAL, LB, PISTACHIO GREEN, #9EB88A, "Haval Jolion"
GREATWALL / HAVAL, N1, BLACK, #1C1C1C, "Haval H6, Jolion, H9"
HOZON / NETA, TBL, GLACIER BLUE, #2A4A8A, "Neta V, U, S, X"
HOZON / NETA, TBQ, BABY BLUE, #7AB8E0, "Neta V, U"
HOZON / NETA, TBS, MILK TEA, #E0C8A8, "Neta V, U, S"
HOZON / NETA, TCA, SAKURA PINK, #E8A88A, "Neta U, S"
HOZON / NETA, TCC, MIDNIGHT GRAY, #2C2C3A, "Neta V, U, S, X"
HOZON / NETA, TCD, SKY BLUE, #4A7AB8, "Neta V, U, S, X"
HOZON / NETA, TCF, MOONLIGHT GREEN, #7A9E8A, "Neta U, S"
HOZON / NETA, TCQ, CYAN, #6A9E9E, "Neta S, X"
HOZON / NETA, TCR, WHITE STORM, #F5F5E8, "Neta V, U, S, X"
Wuling, C2, PRISTINE WHITE, #F5F5EB, "Almaz, Air EV, BinguoEV"
Wuling, WL9, AVOCADO GREEN, #9EB88A, "Air EV, BinguoEV"
Wuling, WL10, PEACH PINK, #E8C8B8, "Air EV, BinguoEV"
Wuling, WL12, LEMON YELLOW, #E8D82C, "Air EV"
Wuling, WL16, MILK COFFEE, #A88A6A, "Almaz, Air EV"
Wuling, WL23, MOUSSE GREEN, #8A9E8A, "BinguoEV"
CHERY (OMODA & JAECOO), BW, ARCTIC WHITE, #F5F5EB, "Omoda 5, Omoda C5, Jaecoo 7"
CHERY (OMODA & JAECOO), CL, NIGHT BLACK, #1C1C1C, "Omoda 5, Omoda C5, Jaecoo 7"
CHERY (OMODA & JAECOO), GV, COIN GREY, #5A5A5A, "Omoda 5, Jaecoo 7"
CHERY (OMODA & JAECOO), KH, LUNAR SILVER, #A8A8A8, "Omoda 5, Omoda C5, Jaecoo 7"
CHERY (OMODA & JAECOO), NL, VOLCANIC RED, #A02C2C, "Omoda 5, Omoda C5"
CHERY (OMODA & JAECOO), SJ, FOREST GREEN, #1A3A3A, "Jaecoo 7"
CHERY (OMODA & JAECOO), SK, MINT GREEN, #9EB88A, "Omoda 5"`;

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

    /* ══════════════════════════════════════════════════════════════
       HELPERS & UI LOGIC
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

    /* BRAND DROPDOWN */
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

    /* DROPDOWN TOGGLE */
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

    /* RENDER + FILTER + PAGINATION */
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
                card.addEventListener('click', () => openLightbox(card, currentFiltered, start + i));
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
    checkUrlParams(); filterAndRender();

    document.querySelectorAll('.view-btn').forEach(btn => { btn.addEventListener('click', () => { document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); if (colorGrid) colorGrid.classList.toggle('list-view', btn.dataset.view === 'list'); }); });

    /* LIGHTBOX */
    const lightbox = document.getElementById('lightbox');
    const lightboxSwatch = document.getElementById('lightboxSwatch');
    const lightboxBrand = document.getElementById('lightboxBrand');
    const lightboxName = document.getElementById('lightboxName');
    const lightboxCode = document.getElementById('lightboxCode');
    let lbIndex = -1; let lbData = [];

    window.openLightbox = function (card, dataArr, absIdx) {
        if (!lightbox) return;
        lbData = dataArr; lbIndex = absIdx !== undefined ? absIdx : parseInt(card.dataset.index);
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

    function lightenHex(hex, amt) { const r = Math.min(255, parseInt(hex.slice(1, 3), 16) + amt); const g = Math.min(255, parseInt(hex.slice(3, 5), 16) + amt); const b = Math.min(255, parseInt(hex.slice(5, 7), 16) + amt); return `rgb(${r}, ${g}, ${b})`; }
    function darkenHex(hex, amt) { const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - amt); const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - amt); const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - amt); return `rgb(${r}, ${g}, ${b})`; }
    function closeLB() { if (lightbox) { lightbox.classList.remove('open'); document.body.style.overflow = ''; } }

    const closeBtn = document.getElementById('lightboxClose'); if (closeBtn) closeBtn.addEventListener('click', closeLB);
    const prevBtn = document.getElementById('lightboxPrev'); if (prevBtn) prevBtn.addEventListener('click', () => { lbIndex = (lbIndex - 1 + lbData.length) % lbData.length; showLB(lbIndex); });
    const nextBtn = document.getElementById('lightboxNext'); if (nextBtn) nextBtn.addEventListener('click', () => { lbIndex = (lbIndex + 1) % lbData.length; showLB(lbIndex); });
    if (lightbox) lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLB(); });
    document.addEventListener('keydown', e => { if (!lightbox || !lightbox.classList.contains('open')) return; if (e.key === 'Escape') closeLB(); if (e.key === 'ArrowLeft') { lbIndex = (lbIndex - 1 + lbData.length) % lbData.length; showLB(lbIndex); } if (e.key === 'ArrowRight') { lbIndex = (lbIndex + 1) % lbData.length; showLB(lbIndex); } });
})();