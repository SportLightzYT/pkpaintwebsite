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
       COLORS — Toyota + Honda + Others
       *** เป็นค่าอ้างอิงเท่านั้น — สีจริงขึ้นอยู่กับสูตรผสมสี ***
    ══════════════════════════════════════════════════════════════ */
    const COLORS = [
        /* ────── TOYOTA ────── */
        { brand: 'toyota', code: '040', name: 'Super White', color: '#F8F8F6', finish: 'solid' },
        { brand: 'toyota', code: '058', name: 'Warm White', color: '#FBF5E6', finish: 'solid' },
        { brand: 'toyota', code: '070', name: 'White Crystal Shine', color: '#EDF4FB', finish: 'pearl' },
        { brand: 'toyota', code: '089', name: 'Platinum White Pearl', color: '#F2F0EA', finish: 'pearl' },
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
        { brand: 'toyota', code: '209', name: 'Night Time Black', color: '#101214', finish: 'solid' },
        { brand: 'toyota', code: '218', name: 'Attitude Black', color: '#1A1A1C', finish: 'solid' },
        { brand: 'toyota', code: 'X12', name: 'Black', color: '#0D0D0F', finish: 'solid' },
        { brand: 'toyota', code: '343', name: 'Red', color: '#D42020', finish: 'solid' },
        { brand: 'toyota', code: '3G9', name: 'Wine Red', color: '#6B2030', finish: 'solid' },
        { brand: 'toyota', code: '3K4', name: 'Red', color: '#CC1A1A', finish: 'solid' },
        { brand: 'toyota', code: '3P0', name: 'Super Red', color: '#E01010', finish: 'solid' },
        { brand: 'toyota', code: '3P1', name: 'Impulse Red', color: '#C82010', finish: 'solid' },
        { brand: 'toyota', code: '3Q2', name: 'Dark Red', color: '#7A1020', finish: 'solid' },
        { brand: 'toyota', code: '3R3', name: 'Barcelona Red', color: '#C41020', finish: 'solid' },
        { brand: 'toyota', code: '3S1', name: 'Red', color: '#D61616', finish: 'solid' },
        { brand: 'toyota', code: '3T6', name: 'Crimson Spark Red', color: '#CC1030', finish: 'pearl' },
        { brand: 'toyota', code: '4P9', name: 'Angora Beige', color: '#E2CFAA', finish: 'metallic' },
        { brand: 'toyota', code: '4Q2', name: 'Beige', color: '#CEBD9E', finish: 'solid' },
        { brand: 'toyota', code: '4Q8', name: 'Beige', color: '#C6B494', finish: 'solid' },
        { brand: 'toyota', code: '4R0', name: 'Beige', color: '#CCBA98', finish: 'solid' },
        { brand: 'toyota', code: '4R8', name: 'Orange', color: '#E07020', finish: 'solid' },
        { brand: 'toyota', code: '4U3', name: 'Sunset Bronze', color: '#C07840', finish: 'metallic' },
        { brand: 'toyota', code: '4W0', name: 'Quartz Brown', color: '#7A5838', finish: 'metallic' },
        { brand: 'toyota', code: '4W1', name: 'Silky Beige', color: '#DCC9A0', finish: 'metallic' },
        { brand: 'toyota', code: '4W9', name: 'Phantom Brown', color: '#5A4030', finish: 'metallic' },
        { brand: 'toyota', code: '574', name: 'Pale Yellow Opal', color: '#F0E880', finish: 'opal' },
        { brand: 'toyota', code: '586', name: 'Champagne', color: '#EEE0C0', finish: 'metallic' },
        { brand: 'toyota', code: '5B7', name: 'Champagne', color: '#EAD8B0', finish: 'metallic' },
        { brand: 'toyota', code: '5A7', name: 'Silky Gold', color: '#C09820', finish: 'metallic' },
        { brand: 'toyota', code: '6S0', name: 'Light Green', color: '#4CA860', finish: 'solid' },
        { brand: 'toyota', code: '6S3', name: 'Dark Green', color: '#1A5C28', finish: 'solid' },
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
        { brand: 'toyota', code: '926', name: 'Cool Steel', color: '#889AA8', finish: 'metallic' },

        /* ────── HONDA ────── */
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
        { brand: 'honda', code: 'PB79M', name: 'Purplish Blue', color: '#3840A8', finish: 'metallic' },
        { brand: 'honda', code: 'RP31M', name: 'Signet Silver', color: '#A4A8AC', finish: 'metallic' },
        { brand: 'honda', code: 'RP32P', name: 'Vintage Plum', color: '#72288C', finish: 'pearl' },
        { brand: 'honda', code: 'RP40P', name: 'Misty Violet', color: '#B898C0', finish: 'pearl' },
        { brand: 'honda', code: 'R507P', name: 'New Firepepper Red', color: '#E42020', finish: 'pearl' },
        { brand: 'honda', code: 'R513', name: 'Liberty Rally Red', color: '#C41028', finish: 'solid' },
        { brand: 'honda', code: 'R516P', name: 'Iris Red', color: '#C01428', finish: 'pearl' },
        { brand: 'honda', code: 'R522P', name: 'Royal Ruby Red', color: '#880C20', finish: 'pearl' },
        { brand: 'honda', code: 'R543P', name: 'Carnelian Red', color: '#B01E1E', finish: 'pearl' },
        { brand: 'honda', code: 'R560P', name: 'Burgundy Night', color: '#18060A', finish: 'pearl' },
        { brand: 'honda', code: 'R575M', name: 'Ignite Red', color: '#CE0E1C', finish: 'metallic' },
        { brand: 'honda', code: 'R96P', name: 'Inza Red', color: '#D41414', finish: 'pearl' },
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

    const EXTRA_CSV_DATA = `Brand,Color Name,Color Code,Hex Color
MITSUBISHI,EISEN GREY,A02,#2C2C2C
MITSUBISHI,MEDIUM SILVER,A36,#8C8A78
MITSUBISHI,MEDIUM PURPLISH GREY,A39,#3C3840
MITSUBISHI,GRAY,A63,#4A5260
MITSUBISHI,HAMILTON SILVER,A65,#A2A2A2
MITSUBISHI,COOL SILVER,A66,#B8B8B8
MITSUBISHI,TITANIUM GREY,A67,#787878
MITSUBISHI,OCEAN SILVER,A70,#6A7868
MITSUBISHI,DARK GREY,A72,#2A2A2A
MITSUBISHI,MEDIUM GREY,A75,#5C5C5C
MITSUBISHI,GREYISH BROWN,C06,#4A3828
MITSUBISHI,DEEP BROWN,C17,#2A1A0E
MITSUBISHI,BLUE,D23,#1A3C8C
MITSUBISHI,POP GREEN,F24,#78CC10
MITSUBISHI,DARK GREEN,F27,#2A3820
MITSUBISHI,BLUE GREEN,F50,#0A3828
MITSUBISHI,LIGHT GREEN,F89,#3A8870
MITSUBISHI,TIMBER GREEN,G60,#1C2A1A
MITSUBISHI,CRYOLITE SILVER,H22,#C8D4C8
MITSUBISHI,CHROMATIC SILVER,H82,#C0C0C0
MITSUBISHI,ORANGE,M09,#CC6600
MITSUBISHI,MEDIUM RED,P17,#8C1A1A
MITSUBISHI,RED,P19,#CC1A1A
MITSUBISHI,BLUISH RED,P57,#8C1A28
MITSUBISHI,CAMBRIDGE RED,P78,#8A2020
MITSUBISHI,RIO RED,R20,#CC2020
MITSUBISHI,PALMA RED,R59,#AA2020
MITSUBISHI,BEIGE,S15,#F5F0E0
MITSUBISHI,PLATINUM BEIGE,S18,#C8B898
MITSUBISHI,WHEAT BEIGE,S22,#C8B880
MITSUBISHI,FRASER BEIGE,S74,#AA9870
MITSUBISHI,ANADAMARON,T32,#1A1A3C
MITSUBISHI,MARS BLUE,T38,#1A2A6A
MITSUBISHI,SAPPHIRE BLUE,T64,#1C3C7C
MITSUBISHI,CERULEAN BLUE,T69,#3A9ACC
MITSUBISHI,BLUE,T83,#1A4A9A
MITSUBISHI,MALACCA BLUE,T86,#1A2A4C
MITSUBISHI,BALBOA BLUE,T88,#0A1A3A
MITSUBISHI,TITANIUM GREY,U17,#6A6A78
MITSUBISHI,SILVER,U25,#C0C0C0
MITSUBISHI,GRAPHITE GRAY,U28,#3A3A3A
MITSUBISHI,PURPLE,V08,#CC88CC
MITSUBISHI,ADELIE PURPLE,V73,#2A1A3C
MITSUBISHI,ALPINE WHITE,W32,#F0F0F0
MITSUBISHI,WHITE,W54,#FFFFFF
MITSUBISHI,WHITE,W85,#F8F8F8
MITSUBISHI,PYRENEES BLACK,X08,#0A0A0A
MITSUBISHI,JET BLACK,X37,#080808
MITSUBISHI,YELLOW,Y25,#DDCC00
FORD/MAZDA,TWILIGHT BLUE,12K,#1A2848
FORD/MAZDA,AQUARIUS BLUE,12R,#1A3464
FORD/MAZDA,BLACK,16W / 38A,#0A0A0A
FORD/MAZDA,HIGHLIGHT SILVER,18G / 38C,#B0B8B8
FORD/MAZDA,DUSK GREEN,18N,#2A3A28
FORD/MAZDA,SPRUCE GREEN,24M,#384840
FORD/MAZDA,AMBER,24N,#B87828
FORD/MAZDA,SNOWFLAKE WHITE,25D,#F8F8F8
FORD/MAZDA,STARRY BLUE,26P,#1A3A78
FORD/MAZDA,GLOAMING SILVER,28N / 37Y,#A0A898
FORD/MAZDA,TITANIUM GRAY,30B,#787878
FORD/MAZDA,BLUE PACIFIC,30D,#1A3A7A
FORD/MAZDA,MEDIUM BLUE,30E,#284888
FORD/MAZDA,PHANTOM BLUE,32C,#1A2850
FORD/MAZDA,STRATO BLUE,32K,#1A2440
FORD/MAZDA,ANDAMAN BLUE,32L,#1A3870
FORD/MAZDA,CHILLI ORANGE,33J,#B83A18
FORD/MAZDA,ICY BLUE,33Y,#7AAAC8
FORD/MAZDA,SPARKLING GOLD,34E,#A89040
FORD/MAZDA,PHANTOM PURPLE,34N,#382848
FORD/MAZDA,SPIRITED GREEN,36A,#3AA828
FORD/MAZDA,METROPOLITAN GREY,36C,#686870
FORD/MAZDA,WINNING BLUE,37L / 4CC,#284898
FORD/MAZDA,COPPER RED,37M,#882820
FORD/MAZDA,DESERT BRONZE,37P,#786048
FORD/MAZDA,LAGOON BLUE,37R,#1A4878
FORD/MAZDA,CELESTIAL BLUE,38J,#3A78C8
FORD/MAZDA,GUNMETAL BLUE,38L,#383C48
FORD/MAZDA,ALUMINUM,38P,#A8A8A8
FORD/MAZDA,AURORA BLUE,39A,#1A3888
FORD/MAZDA,TONIC,3DTCWWA,#181818
FORD/MAZDA,PLATINUM,3QNCWWA,#C8C8C8
FORD/MAZDA,SKY BLUE,41B,#5AAAD8
FORD/MAZDA,AQUATIC BLUE,41L,#285888
FORD/MAZDA,SOUL RED,41V,#AA1818
FORD/MAZDA,JET BLACK,41W,#0A0A0A
FORD/MAZDA,METEOR GREY,42A,#484848
FORD/MAZDA,DEEP CRYSTAL BLUE,42M,#0A2068
FORD/MAZDA,TITANIUM FLASH,42S,#787880
FORD/MAZDA,MACHINE GREY,46G,#585858
FORD/MAZDA,SOUL RED CRYSTAL,46V,#C81818
FORD/MAZDA,FROZEN WHITE,4CA,#F8F8F8
FORD/MAZDA,LUNAR SKY,4CD,#484850
FORD/MAZDA,INGOT SILVER,4CG,#A0A0A0
FORD/MAZDA,MIDNIGHT SKY,4CH,#101018
FORD/MAZDA,CANDY RED,4CN,#C01828
FORD/MAZDA,MUSTARD OLIVE,4CS,#786820
FORD/MAZDA,MAGNETIC SILVER,6QTCWWA,#888888
FORD/MAZDA,PERFORMANCE BLUE,7412,#102878
FORD/MAZDA,NIFTY RED,A1T,#881818
FORD/MAZDA,COOL WHITE,A2W,#F0F0F0
FORD/MAZDA,TRUE RED,A4A,#CC1818
FORD/MAZDA,ARCTIC WHITE,A4D,#FAFAFA
FORD/MAZDA,MARS RED,EJ6,#A01818
FORD/MAZDA,BLUE REFLEX,FCC,#0A1878
FORD/MAZDA,PRIDE ORANGE,FLQ,#C87830
FORD/MAZDA,SUNSET,FSQ,#C85030
FORD/MAZDA,PANTHER BLACK,JAYAWWA,#0A0A0A
FORD/MAZDA,SABER,JE5,#706850
FORD/MAZDA,CONQUER GREY,JMW,#585858
FORD/MAZDA,ABSOLUTE BLACK,WVS,#080808
FORD/MAZDA,DIAMOND WHITE,ZAFAWWA,#F8F8F8
FORD/MAZDA,MOONDUST SILVER,ZJNCWWA,#A8A8A8
CHEVROLET,IMPULSE BLUE,06U,#1A3A9A
CHEVROLET,ICEBERGE BLUE,07U,#486880
CHEVROLET,LIGHT SKY BLUE,08U,#60A8C8
CHEVROLET,PEWTER,0CU,#889088
CHEVROLET,STAR SILVER,2AU,#A8A8A8
CHEVROLET,BLACK SAPPHIRE,2HU,#101820
CHEVROLET,GOLD SILVER,3SU,#B0A878
CHEVROLET,POLAR SEA BLUE,3TU,#183A68
CHEVROLET,WHITE PEARL,42U,#F5F5F0
CHEVROLET,STERLING SILVER,49U,#9898A0
CHEVROLET,CAPE BLUE,5AU,#1A50A0
CHEVROLET,LIGHT QUARTZ GRAY,5DU,#B8B8B8
CHEVROLET,SANDALWOOD,5EU,#C8B890
CHEVROLET,DENIM BLUE,5HU,#2A4878
CHEVROLET,SHANGHAI RED,5KU,#981818
CHEVROLET,SPARKLING TAN,61U,#A88A60
CHEVROLET,ROYAL GREY,90U / GQQ,#606068
CHEVROLET,MIRAGE,94L,#A0A0A0
CHEVROLET,ALPINE WHITE,96U,#F0F0F0
CHEVROLET,CITRUS GREEN,C7U,#A8D048
CHEVROLET,ORANGE ROCK,G6V,#C85020
CHEVROLET,BLUE ME AWAY,G8P,#1A3890
CHEVROLET,SWITCHBLADE SILVER,GAN,#909090
CHEVROLET,CARBON FLASH,GAR,#1C1C1C
CHEVROLET,OLYMPIC WHITE,GAZ,#F8F8F8
CHEVROLET,BLACK MEET KETTLE,GB0,#101010
CHEVROLET,MISTY LAKE,GCW,#78A0A8
CHEVROLET,PULL ME OVER RED,GG2,#C01818
CHEVROLET,SIZZLE,GGJ,#A81818
CHEVROLET,ABALONE WHITE,GP5,#F0EEE8
CHEVROLET,AUBURN BROWN,GVX,#683820
CHEVROLET,MOUNTAIN BLUE,GVY,#1848A8
CHEVROLET,OCEANIC BLUE,GVZ,#1A5090
CHEVROLET,SATIN STEEL GREY,GYM,#707070
CHEVROLET,IMPERIAL BLOND,ODU,#D4BC80
MG,MARINA BLUE,JSJ,#1A3898
MG,METAL GREY,LMA,#505058
MG,ARCTIC WHITE,NDW,#F8F8F8
MG,BLACK KNIGHT,PBC,#0A0A0A
MG,RUBY RED,RSK,#8A1818
MG,SILVER,SSA,#B8B8B8
MG,YELLOW,YSA,#DDB800
BMW,ALPINWEISS,300,#F2F2F0
BMW,CARBONSCHWARZ,416,#1C1C1C
BMW,SAPHIRSCHWARZ,475,#101018
BMW,SCHWARZ,668,#0A0A0A
BMW,SPACEGRAU,A52,#707078
BMW,KASCHMIRSILBER,A72,#A8A8A8
BMW,MELBOURNEROT,A73,#882018
BMW,GLACIERSILBER,A83,#C8C8C8
BMW,SOPHISTOGRAU,A90,#383838
BMW,MINERALWEISS,A96,#F0F0EE
BMW,MINERALGRAU,B39,#484848
BMW,VALENCIA ORANGE,B44,#C06020
BMW,ESTORILBLAU,B45,#1A3888
BMW,SPARKLING BROWN,B53,#503020
MERCEDES BENZ,SCHWARZ,040,#0A0A0A
MERCEDES BENZ,POLAR WHITE,149,#F5F5F5
MERCEDES BENZ,KOSMOSSCHWARZ,191,#101010
MERCEDES BENZ,OBSIDIANSCHWARZ,197,#080808
MERCEDES BENZ,TENORITGRAU,755,#404040
MERCEDES BENZ,POLARSILBER,761,#B0B0B0
MERCEDES BENZ,IRIDIUMSILBER,775,#A0A0A0
MERCEDES BENZ,MOUNTAIN GREY,787,#686868
MERCEDES BENZ,PALLADIUMSILBER,792,#989898
MERCEDES BENZ,CITRINBRAUN,796,#604828
MERCEDES BENZ,DIAMANTWEISS,799,#F8F8F8
MERCEDES BENZ,CAVANSITBLAU,890,#1A2870
MERCEDES BENZ,DIAMANTSILBER,988,#B8B8B8
MERCEDES BENZ,SELENITE GREY,992,#787878`;

    const EXTRA_CSV_DATA_2 = `Brand,Color Code,Color Name,HEX Code
SUBARU,37J,SATIN WHITE,#F0F4F2
SUBARU,61K,DARK GREY,#3A3C3E
SUBARU,D4S,CRYSTAL BLACK SILICA,#111111
SUBARU,F9H,MARINE BLUE,#1F2C44
SUBARU,G1U,ICE SILVER,#A5A9A8
SUBARU,G2U,TANGERINE ORANGE,#D75C29
SUBARU,H2Q,VENETIAN RED,#8C2724
HYUNDAI,GF,MATTE GREY,#6E6F6C
HYUNDAI,N9N,ARABIAN MOCHA,#2E2D2B
HYUNDAI,NCA,SLEEK SILVER,#B7B9B8
HYUNDAI,P2S,HYPER METALLIC,#7A7C7B
HYUNDAI,RB5,TIMELESS BLACK,#141515
HYUNDAI,YAC,CREAMY WHITE,#F1F2ED
HYUNDAI,ZBF,BRONZE,#8E867E
KIA,3D,BRIGHT SILVER,#C3C6C5
KIA,ABP,AURORA BLACK,#151616
KIA,D3,SILKY BEIGE,#9A998B
KIA,D7U,PLANET BLUE,#1C2534
KIA,K3G,GLITTERING METAL,#3B3E40
KIA,SWP,SNOW WHITE,#EAEBEB
KIA,UD,CLEAR WHITE,#F1F2F2
SUZUKI,Z2S,SILKY SILVER,#B8BABC
SUZUKI,ZBD,COOL BLACK,#18191B
SUZUKI,ZKB,RADIANT RED,#922724
SUZUKI,ZLL,BURGUNDY RED,#551F22
SUZUKI,ZNQ,ENERGY GREEN,#55A03A
SUZUKI,ZPJ,PEARL WHITE,#EAECE8
SUZUKI,ZQE,CERULEAN BLUE,#1F659C
SUZUKI,ZQF,SUNSHINE YELLOW,#D1A522
SUZUKI,ZQG,RASPBERRY PINK,#7C353E
SUZUKI,ZQU,DIGNITY BROWN,#4A3530
SUZUKI,ZTR,SNOW WHITE,#EAEBEB
SUZUKI,ZTS,STAR SILVER,#919391
SUZUKI,ZTT,SUPER BLACK,#111212
SUZUKI,ZTU,MINERAL GREY,#5C5E60
SUZUKI,ZTV,BOOST BLUE,#173C7A
SUZUKI,ZTW,ABLAZE RED,#9B2222
SUZUKI,ZTZ,SUNLIGHT COPPER,#853625
SUZUKI,ZUH,SERENA BLUE,#7B8893
SUZUKI,ZUJ,MET DUSKY BROWN,#4E443C
SUZUKI,ZYH,SPEEDY BLUE,#1C469D
SUZUKI,ZYG,PURE WHITE,#EDEEEE
PROTON,A0081,ENERGY ORANGE,#C4402A
PROTON,A0082,PROTON WHITE,#E8E9E7
PROTON,A0090,METAL GREY,#3F4344
PROTON,A0093,IRIDESCENT WHITE,#B8BABC
PROTON,A0100,TRANQUILITY BLACK,#191E21
PROTON,A0101,PASSION BLUE,#1A53A9
PROTON,A0128,GENETIC SILVER,#BDC0C1
NISSAN,55P,SAMARARD GREEN,#142938
NISSAN,A55,ORANGE,#984A22
NISSAN,AX5,ROMA RED,#8A2222
NISSAN,AX6,RED,#A51C20
NISSAN,B51,BLUE,#1D388E
NISSAN,BB1M,GLIMMER GOLD,#908C82
NISSAN,"BBY5, BY5",BLUE,#1F264A
NISSAN,BE12,LIGHT GOLD,#8B8262
NISSAN,BE2M,BLUISH SILVER,#737B85
NISSAN,BE32,GREENISH GOLD,#7D8365
NISSAN,BE3M,BROWN,#6C594A
NISSAN,"BG42, G42",BLACK,#131415
NISSAN,BG4M,BLUE,#191A2A
NISSAN,BI1M,BEIGE,#9C907A
NISSAN,BI2P,BLUE,#25256E
NISSAN,BI3M,BLUE,#212F5A
NISSAN,BJ1M,CHAMPAGNE GOLD,#78776B
NISSAN,"BK21, K21",TWILIGHT GREY,#4F5052
NISSAN,"BK23, K23",BRILLIANT SILVER,#9D9FA2
NISSAN,"BK32, K32",YELLOWISH SILVER,#8F908A
NISSAN,"BKR4, KR4",SILVER,#A4A6A8
NISSAN,BKW5,SILVER,#AEB0AC
NISSAN,"BQM-1, QM1",WHITE SOLID,#EBEDEC
NISSAN,"BQX1, QX1",WHITE,#EDEEE9
NISSAN,BRWO,RED,#6A2222
NISSAN,BX7,BRIGHT BLUE,#284A8E
NISSAN,C20,BRONZEE GOLD,#866442
NISSAN,CAQ,DARK BROWN,#382C27
NISSAN,EAH,GOLD,#AE9B40
NISSAN,EAN,DARK OLIVE,#272A26
NISSAN,EAQ,LIGHT GREENISH YELLOW,#C3C669
NISSAN,EAU,ORANGE,#985925
NISSAN,GAB,NIGHTSHADE,#27262A
NISSAN,GE1P,DARK GREEN,#232E2E
NISSAN,GG2M,SILVER,#B2B4B3
NISSAN,GI1M,SILVER,#9A9D99
NISSAN,GI2M,MAGICRON,#575B49
NISSAN,JAD,YELLOW GREEN,#97AA34
NISSAN,KAC,DESERT SHADOW,#6D675F
NISSAN,KAS,PURPLISH SILVER,#B7B2B6
NISSAN,KBD,DARK GRAY,#4E5256
NISSAN,KF1M,BLACK,#131415
NISSAN,KH3,SUPER BLACK,#111212
NISSAN,KY0,SILVER,#A7A9AA
NISSAN,LAA,DARK VIOLET,#2F2633
NISSAN,NAH,FORCE RED,#842223
NISSAN,NAR,PINK,#B47171
NISSAN,QAB,STORM WHITE,#E8E9E4
NISSAN,RA1S,RED,#AD2A2D
NISSAN,RAA,DARK BLUE,#1F3173
NISSAN,RBH,DARK BLUE,#222E42
NISSAN,RBS,LIGHT BLUE,#2F6A9F
NISSAN,RC1P,RED,#6B2222
NISSAN,RD1S,RED,#8F2426
NISSAN,YF1P,ORAL YELLOW,#DED3A4
NISSAN,YI1M,LIGHT YELLOWISH BLUE,#B6BDC2
VOLVO,426,SILVER,#A4A6A8
VOLVO,477,ELECTRIC SILVER,#8C8E90
VOLVO,487,EMBER BLACK,#1A1C1D
VOLVO,614,ICE WHITE,#E8EAEC
VOLVO,700,TWILIGHT BRONZE,#554C43
VOLVO,707,CRYSTAL WHITE,#EAECEE
VOLVO,710,MISTY BLUE,#C0C4C8
VOLKSWAGEN,1B,MOJAWEBEIGE,#7F7D74
VOLKSWAGEN,"2T, LC9X",DEEPBLACK,#131415
VOLKSWAGEN,"8E, LA7W",REFLEXSILBER,#A7A9AA
VOLKSWAGEN,"B4, LB9A",CANDYWEISS,#EAEBEB
VOLKSWAGEN,"M4, LH7W",NATURAL GREY,#727475
VOLKSWAGEN,"P3, LB4V",DARK WOOD,#373330
VOLKSWAGEN,"P8, LH1W",SANDBEIGE,#D2D1CB
MINI,850,PEPPER WHITE,#DFE0DC
MINI,851,CHILI RED,#B32A22
MINI,A62,WHITE SILVER,#BCC1C2
MINI,A94,MIDNIGHT BLACK,#111212
MINI,B17,BRIGHT YELLOW,#DFD321
MINI,B60,BRILLANT COPPER,#724B2C
MINI,B70,VOLCANIC ORANGE UNI,#DE851D
AUDI,"0C, LX7R",MONSUN GRAU,#5F6264
AUDI,"0E, LY9T",MYTHOSSCHWARZ,#151616
AUDI,"2Y, LS9R",GLETSCHERWEISS,#E0E2E3
AUDI,"L5, LZ7G",FLORETTSILBER,#A3A5A7
AUDI,"Q2, LX7",TORNADOGRAU,#858889
AUDI,"W1, LX5R",MONDSCHEINBLAU,#1C2331
AUDI,"W3, LY8S",ARGUSBRAUN,#3F3631
ISUZU,501,TOPAZ GOLD,#8B7147
ISUZU,504,TORNADO RED,#652222
ISUZU,505,ROYAL GREY,#333537
ISUZU,506,DUNE GREY,#5C5E60
ISUZU,511,CHARDONNAY GOLD,#A3A092
ISUZU,512,LAPIS BLUE,#20418A
ISUZU,520,NEBULA GREY,#5E646A
ISUZU,521,NAUTILUS BLUE,#17233B
ISUZU,523,COSMIC BLACK,#141516
ISUZU,526,BALTIC BLUE,#637081
ISUZU,527,SPLASH WHITE,#EBECED
ISUZU,528,GARNET RED,#4A2020
ISUZU,529,TITANIUM SILVER,#B7B9BA
ISUZU,530,MINERAL GREY,#727679
ISUZU,531,SILKY WHITE,#E8EAE6
ISUZU,541,ASH BEIGE,#6F6851
ISUZU,545,FJORD BLUE,#264983
ISUZU,546,VENETIAN RED,#862828
ISUZU,553,QUARTZ BLUE,#48597E
ISUZU,554,OBSIDIAN GREY,#565759
ISUZU,563,ZERMATT SILVER,#95999A
ISUZU,575,DOLOMITE WHITE,#E2E4E4
ISUZU,588,ISLAY GRAY,#333537
ISUZU,612,CAPE BLUE,#14223A
ISUZU,641,STEEL BLACK,#1A1B1C
ISUZU,642,LT QUARTZ GRAY,#56575A
ISUZU,643,SANDALWOOD,#B4AD97
ISUZU,644,CHAMONIX GREEN,#296058
ISUZU,645,GLACIER BLUE,#687C87
ISUZU,646,ZENITH BLUE,#1C2E55
ISUZU,647 / PT025,RIGID BLUE,#1C283F
ISUZU,648,SAHARA BEIGE,#998E75
ISUZU,658,FOXFIRE RED,#482323
ISUZU,682,COSMIC GREY,#707376
ISUZU,683,KRYPT NITE,#E1E2E4
ISUZU,687,MOONSTONE BLUE,#325E9E
ISUZU,688,IMPERIAL BLOND,#B79C61
ISUZU,692,OMEGA WHITE,#DFE2DC
ISUZU,718,ASTRAL SILVER,#ACAFB0
ISUZU,877,ALPINE WHITE,#EAEBEB
ISUZU,935,STARRY BLACK,#1A1C1D
ISUZU,936,STERLING SILVER,#406E7A
ISUZU,937,CRYSTAL BLUE,#688698
ISUZU,950,SILVER,#BCBEBD
ISUZU,PT030,RED,#5A1C1C
ISUZU,PT036,SPARKLING SILVER,#8A8D8F
ISUZU,PT038,WHITE,#DFE1E1
ISUZU,PT040,HAZY GREY,#545758
ISUZU,PT042,GREEN,#29858E
ISUZU,PT047,SILVER,#8E9193
ISUZU,PT048,RED,#571F1F
ISUZU,PT056,SEA BLUE,#213650
ISUZU,PT057,CABERNET,#411A1B
ISUZU,PT059,BEIGE,#A49C8C
ISUZU,PT060,FOREST GREEN,#1B6A68
ISUZU,PT061,LIGHT GREEN,#68A2A8
ISUZU,PT064,WHITE,#EBECED
ISUZU,PT066,SILVER,#8B8E8F
ISUZU,PT069,SATIN GOLD,#8D8469
ISUZU,PT070,CHANTI RED,#5F1920
ISUZU,PT071,CYPRESS GREEN,#183531
ISUZU,PT072,CASCADE BLUE,#3A87B7
ISUZU,PT073,KAISER SILVER,#AFB3B5
TAXI,N/A,TAXI ORANGE,#FF6F20
TAXI,N/A,TAXI YELLOW,#FFD600
TAXI,N/A,TAXI BLUE,#0066CC
TAXI,N/A,TAXI RED,#DD2222
TAXI,N/A,PERSONAL TAXI GREEN,#00882B
TAXI,N/A,PERSONAL TAXI YELLOW,#FFD600
TAXI,N/A,TAXI PINK,#FF3366
THAI RUNG,TR-1106,GREY,#545A61
THAI RUNG,TR-B050,INDIGO SILVER,#BBC0C5
THAI RUNG,TR-J020,KAISER GRAY,#93979B
THAI RUNG,TR-044,ORANGE,#9A422D
THAI RUNG,TR-B030,FERRIC SILVER,#AFB1B4
THAI RUNG,TR-J010,MYSTERY GRAY,#5B6165
THAI RUNG,TR-028,GREEN,#205B5C
THAI RUNG,TR-7A3,MIDNIGHT BLACK,#252729
THAI RUNG,TR-G030,MAGIC BLACK,#202123
THAI RUNG,TR-026,BLUISH SILVER,#868E96
THAI RUNG,TR-5B0,BLUE,#1B243B
THAI RUNG,TR-D010,PASTELLA BLUE,#2C7BB6
THAI RUNG,TR-024,BEIGE,#998B71
THAI RUNG,TR-5A0,MISTY MEDIUM,#3E464E
THAI RUNG,TR-C060,CRYSTAL GOLD,#A39066
THAI RUNG,TR-006,SILVER,#8E9598
THAI RUNG,TR-2B0,SMOKE SILVER,#A6A292
THAI RUNG,TR-C050,LIGHT BEIGE,#C6BA9A
THAI RUNG,TR-002,BLUE,#173473
THAI RUNG,TR-1A0,ALPINE WHITE,#E8EAE6
THAI RUNG,TR-C040,BEIGE,#A49168`;

    // ✅ เพิ่มข้อมูล CSV ชุดที่ 3 (BMW, Mercedes-Benz, Volvo)
    const EXTRA_CSV_DATA_3 = `Brand,Color Code,Color Name,Hex
BMW,329,VULKAN GRAY,#4A4A48
BMW,416,CARBONSCHWARZ PEARL MET.,#1C1C1C
BMW,668,SCHWARZ,#0A0A0A
BMW,A17,BROWN PEARL MET.,#4B3621
BMW,A38,MOONLIGHT BLUE PEARL MET.,#1E2A44
BMW,309,ARKTISSILBER MET.,#C0C0C0
BMW,400,STAHLGRAU PEARL MET.,#6E7B8B
BMW,481,BEIGE MET. OPAL,#D8CAB8
BMW,897,TECHNOVIOLETT PEARL MET.,#6A0DAD
BMW,A32,SPARKLING SILVER MET.,#D3D3D3
BMW,300,BILLLOW RED,#8B0000
BMW,372,STAHLBLAU MET. OPAL,#4682B4
BMW,475,SAPPHIRE PEARL MET.,#0F0F0F
BMW,869,VERTEX MET.,#3B3B3B
BMW,A22,SPARKLING GRAPHITE PEARL MET.,#4B4B4B
BMW,A30,BRIGHTNESS,#B0B0B0
BMW,354,TITANSILBER MET.,#C8C8C8
BMW,851,RED,#B22222
BMW,A18,QUARTZ BLUE MET.,#5F9EA0
BMW,B45,BLUE MET.,#1E90FF
BMW,B19,COFFEE,#4B3621
BMW,A96,ALPIN WHITE 3,#F5F5F2
BMW,A75,FLAMENCO RED PEARL,#B22222
BMW,A52,SPACE GREY MET.,#A9A9A9
BMW,B35,KING BROWN PEARL,#5C4033
BMW,B21,MANGO YELLOW,#FFD700
BMW,A76,DEEP SEA BLUE PEARL,#003366
BMW,A53,LUNAR BRONZE MET.OPAL,#8B7355
BMW,B88,MARINA BLUE PEARL MET.,#4682B4
BMW,B39,MINERAL GREY PEARL MET.,#696969
BMW,B06,SPARKLING BRONZE PEARL MET.,#8B5A2B
BMW,A43,GLACIER SILVER MET.,#DCDCDC
BMW,A61,KORALLENROT,#FF4040
BMW,B94,BLAU PEARL MET.,#1C39BB
BMW,B44,MANGO ORANGE PEARL,#FF8C00
BMW,B09,DARK CHESTNUT BROWN PEARL,#654321
BMW,A92,ORION SILVER MET.,#C0C0C0
BMW,A70,MINERAL GREEN MET.OPAL,#3CB371
BMW,U98,SPEED GELB,#FFD700
BMW,C1D,TETRAPOL BLAU PEARL MET,#1E3F66
BMW,C1L,MEDITERRANE BLAU PEARL MET,#2E4A7D
BMW,C06,FLAMINGO ROT BRILLIANT PEARL,#DC143C
BMW,WC1M,PORTIMAO BLAU PEARL MET,#4169E1
BMW,C3E,SANREMO GRÜN PEARL,#2E8B57
BMW,C1P,GALVANIC GOLD PEARL MET,#DAA520
BMW,C29,KASTANIEN BRONZE PEARL,#8B4513
BMW,C07,PHOENIX STORM BRILLIANT PEARL,#708090
BMW,VC15,INDIAN GREEN PEARL MET,#006400
BMW,C3G,TORONTO ROT PEARL,#B22222
BMW,C15,COPPER PEARL MET,#B87333
BMW,C1G,SNAPPER ROCKS BLUE MET,#4682B4
BMW,C08,PLATIN SILVER MET,#C0C0C0
BMW,VC31,PORTIMAO BLAU PEARL MET,#4169E1
BMW,U83,OXIDGRAU GREY PEARL MET,#696969
BMW,C1X,SUNSET ORANGE PEARL,#FF4500
BMW,C1H,SAKHIR ORANGE PEARL,#FF6347
BMW,C09,ATLANTIC GRAU PEARL ORAL,#708090
Mercedes-Benz,559,FIRE OPAL RED,#B22222
Mercedes-Benz,359,TANSANITE BLUE PEARL,#0F52BA
Mercedes-Benz,197,DESIGNO SAND SILVER PEARL,#C0C0B0
Mercedes-Benz,149,POLAR WHITE,#F8F8FF
Mercedes-Benz,049,DESIGNO MAGNO KASHMIR WHITE,#F5F5F5
Mercedes-Benz,650,CALCIUMISS,#DCDCDC
Mercedes-Benz,368,FLINT GRAY PEARL MET,#6C7B8B
Mercedes-Benz,230,INDIGO LITE BLUE MET,#4682B4
Mercedes-Benz,278,SOLAR BEAM,#FFD700
Mercedes-Benz,144,DESIGNO MAGNO SILVER,#C0C0C0
Mercedes-Benz,667,BLUE LINE PEARL MET,#1E90FF
Mercedes-Benz,497,CAPRITE BROWN PEARL,#5C4033
Mercedes-Benz,19,COSMOS BLACK PEARL,#0A0A0A
Mercedes-Benz,633,TRAVERTINE BEIGE MET,#D2B48C
Mercedes-Benz,589,PATRIOT RED PEARL,#8B0000
Mercedes-Benz,177,MAG. GALACTIC BEAM,#DAA520
Mercedes-Benz,144,MAG. SILVER PEARL,#C0C0C0
Mercedes-Benz,957,GALAXITE SILVER MET,#A9A9A9
Mercedes-Benz,989,SMARAGD GREEN PEARL,#2E8B57
Mercedes-Benz,831,CAVANSITE BLUE PEARL,#1E3F66
Mercedes-Benz,919,ORIENT BROWN PEARL MET,#5C4033
Mercedes-Benz,932,SELENITE GREY MET,#708090
Mercedes-Benz,787,SELENITE GREY MET,#708090
Mercedes-Benz,792,PALLADIUM SILVER PEARL MET,#C0C0C0
Mercedes-Benz,914,SUN YELLOW ELEB,#FFD700
Mercedes-Benz,796,CITRIN BROWN PEARL MET,#8B4513
Mercedes-Benz,794,PEARL BEIGE MET OPAL,#F5DEB3
Mercedes-Benz,745,CRYSTAL SILVER MET,#D3D3D3
Mercedes-Benz,775,IRIDIUM SILVER MET,#C0C0C0
Mercedes-Benz,786,SPARKLING GREY PEARL MET,#A9A9A9
Mercedes-Benz,723,PALLADIUM SILVER MET,#C0C0C0
Mercedes-Benz,737,ASPHALT GREY,#696969
Mercedes-Benz,744,BRILLIANT SILVER MET,#DCDCDC
Mercedes-Benz,737,CLASSIC WEISS,#FFFFFF
Volvo,019,BLACKSTONE,#0A0A0A
Volvo,415,HELIUM MET.,#D3D3D3
Volvo,409,BURGUNDY RED PEARL MET.,#800020
Volvo,412,GREEN PEARL MET.,#2E8B57
Volvo,418,RED PEARL,#B22222
Volvo,444,ARCTIC DAWN PEARL MET.,#F0F8FF
Volvo,414,LUMINOUS GREY PEARL MET.,#A9A9A9
Volvo,725,PASSION RED PEARL,#FF2400
Volvo,717,ONYX BLACK PEARL MET.,#0F0F0F
Volvo,707,CRYSTAL WHITE PEARL,#F8F8F6
Volvo,720,THUNDER GREY PEARL MET.,#4B4B4B
Volvo,720,BURSTING BLUE MET.,#1E90FF
Volvo,722,MAPLE BROWN PEARL,#5C4033
Volvo,711,BRIGHT SILVER MET.,#C0C0C0
Volvo,714,LUMINOUS GREY PEARL MET.,#A9A9A9
Volvo,731,BLACK MET.,#1C1C1C`;

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
    };

    function slugBrand(brandName) {
        return brandName
            .toLowerCase()
            .replace(' &', 'and')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    function titleCase(text) {
        return text.toLowerCase().replace(/\b\w/g, ch => ch.toUpperCase());
    }

    // ✅ อัปเดต: รองรับคำว่า "MET." ในชื่อสี
    function inferFinishFromName(name) {
        const upper = name.toUpperCase();
        if (upper.includes('PEARL') || upper.includes('CRYSTAL') || upper.includes('MICA')) return 'pearl';
        if (
            upper.includes('SILVER') || upper.includes('METAL') || upper.includes('MET.') ||
            upper.includes('GREY') || upper.includes('GRAY') || upper.includes('STEEL') ||
            upper.includes('TITANIUM') || upper.includes('ALUMINUM') || upper.includes('GRAPHITE') ||
            upper.includes('GUNMETAL')
        ) return 'metallic';
        return 'solid';
    }

    function fallbackBrandLogo(name) {
        const initials = name
            .split(/[^A-Za-z0-9]+/)
            .filter(Boolean)
            .slice(0, 2)
            .map(s => s[0].toUpperCase())
            .join('') || 'BR';
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
                if (inQuotes && line[i + 1] === '"') {
                    current += '"';
                    i++;
                } else {
                    inQuotes = !inQuotes;
                }
            } else if (ch === ',' && !inQuotes) {
                out.push(current.trim());
                current = '';
            } else {
                current += ch;
            }
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

        const rows = lines.slice(1).map(line => {
            const cols = parseCsvLine(line);
            const brandRaw = (cols[brandIdx] || '').trim();
            const colorName = (cols[nameIdx] || '').trim();
            const colorCode = (cols[codeIdx] || '').trim();
            const hex = (cols[hexIdx] || '').trim().toUpperCase();
            return {
                brandRaw,
                brand: slugBrand(brandRaw),
                code: colorCode,
                name: titleCase(colorName),
                color: hex || '#808080',
                finish: inferFinishFromName(colorName),
            };
        }).filter(item => {
            if (!item.brand || !item.code || !/^#[0-9A-F]{6}$/.test(item.color)) return false;
            const rowKey = `${item.brand}|${item.code.toUpperCase()}|${item.color}`;
            if (seenRowKeys.has(rowKey)) return false;
            seenRowKeys.add(rowKey);
            return true;
        });

        const brandEntries = [];
        const seen = new Set(BRANDS.map(b => b.id));
        rows.forEach(item => {
            if (seen.has(item.brand)) return;
            seen.add(item.brand);
            brandEntries.push({
                id: item.brand,
                name: item.brandRaw,
                logo: INDEX_LOGO_PATHS[item.brand] || fallbackBrandLogo(item.brandRaw),
            });
        });
        return { rows, brandEntries };
    }

    const seenImportedRows = new Set(
        COLORS.map(c => `${c.brand}|${String(c.code || '').toUpperCase()}|${String(c.color || '').toUpperCase()}`)
    );

    // ✅ อัปเดต: รวม EXTRA_CSV_DATA_3 เข้าใน Loop การ Parse
    [EXTRA_CSV_DATA, EXTRA_CSV_DATA_2, EXTRA_CSV_DATA_3].forEach(csvText => {
        const parsedCsvData = parseCsvCatalogData(csvText, seenImportedRows);
        BRANDS.push(...parsedCsvData.brandEntries);
        COLORS.push(...parsedCsvData.rows.map(({ brand, code, name, color, finish }) => ({ brand, code, name, color, finish })));
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
        const lighter = `rgb(${Math.min(255, r + 40)},${Math.min(255, g + 40)},${Math.min(255, b + 40)})`;
        const darker = `rgb(${Math.max(0, r - 30)},${Math.max(0, g - 30)},${Math.max(0, b - 30)})`;

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
        // Default to grid view (standard)
        colorGrid.classList.remove('list-view');
        const listBtn = document.querySelector('.view-btn[data-view="list"]');
        const gridBtn = document.querySelector('.view-btn[data-view="grid"]');
        if (gridBtn) gridBtn.classList.add('active');
        if (listBtn) listBtn.classList.remove('active');
    }

    function filterAndRender() {
        const searchInput = document.getElementById('searchInput');
        const search = searchInput ? searchInput.value.toLowerCase().trim() : '';

        currentFiltered = COLORS.filter(c => {
            const matchBrand = selectedBrand === 'all' || c.brand === selectedBrand;
            const matchSearch = !search ||
                c.name.toLowerCase().includes(search) ||
                c.code.toLowerCase().includes(search) ||
                (brandMap[c.brand] && brandMap[c.brand].name.toLowerCase().includes(search));
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

                const card = document.createElement('div');
                card.className = 'color-card';
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
                card.addEventListener('click', () => openLightbox(card, currentFiltered, start + i));
                colorGrid.appendChild(card);
                setTimeout(() => card.classList.add('visible'), (i + 1) * 30);
            });
        }

        if (noResults) noResults.classList.toggle('show', currentFiltered.length === 0);
        renderPagination();
        renderChips();
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

        if (endPage - startPage < maxVisible - 1) {
            startPage = Math.max(1, endPage - maxVisible + 1);
        }

        const prev = document.createElement('a');
        prev.className = `page-link ${currentPage === 1 ? 'disabled' : ''}`;
        prev.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prev.addEventListener('click', () => currentPage > 1 && renderPage(currentPage - 1));
        paginationEl.appendChild(prev);

        if (startPage > 1) {
            paginationEl.appendChild(createPageLink(1));
            if (startPage > 2) {
                const dots = document.createElement('span');
                dots.className = 'page-dots';
                dots.textContent = '...';
                paginationEl.appendChild(dots);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationEl.appendChild(createPageLink(i));
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                const dots = document.createElement('span');
                dots.className = 'page-dots';
                dots.textContent = '...';
                paginationEl.appendChild(dots);
            }
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

    /* URL PARAMETERS */
    function checkUrlParams() {
        const params = new URLSearchParams(window.location.search);
        const brandParam = params.get('brand');
        if (brandParam && brandMap[brandParam]) {
            selectedBrand = brandParam;
            if (brandPanel) {
                brandPanel.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('active'));
                const targetItem = brandPanel.querySelector(`[data-brand="${brandParam}"]`);
                if (targetItem) targetItem.classList.add('active');
            }
            const triggerText = document.getElementById('brandTriggerText');
            if (triggerText) triggerText.textContent = brandMap[brandParam].name;

            const triggerLeft = document.querySelector('#brandTrigger .dropdown-trigger-left');
            if (triggerLeft) {
                const old = triggerLeft.querySelector('.dropdown-item-logo');
                if (old) old.remove();
                const wrap = document.createElement('div');
                wrap.className = 'dropdown-item-logo';
                wrap.innerHTML = `<img src="${brandMap[selectedBrand].logo}" alt="${brandMap[selectedBrand].name}">`;
                triggerLeft.insertBefore(wrap, triggerLeft.querySelector('.dropdown-trigger-text'));
            }
        }

        const searchParam = params.get('search');
        if (searchParam) {
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.value = searchParam;
                if (searchClearBtn) searchClearBtn.style.display = 'block';
            }
        }

        filterAndRender();
    }

    checkUrlParams();
    filterAndRender();

    /* VIEW TOGGLE */
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (colorGrid) colorGrid.classList.toggle('list-view', btn.dataset.view === 'list');
        });
    });

    /* LIGHTBOX */
    const lightbox = document.getElementById('lightbox');
    const lightboxSwatch = document.getElementById('lightboxSwatch');
    const lightboxBrand = document.getElementById('lightboxBrand');
    const lightboxName = document.getElementById('lightboxName');
    const lightboxCode = document.getElementById('lightboxCode');

    let lbIndex = -1;
    let lbData = [];

    window.openLightbox = function (card, dataArr, absIdx) {
        if (!lightbox) return;
        lbData = dataArr;
        lbIndex = absIdx !== undefined ? absIdx : parseInt(card.dataset.index);
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
        if (lightboxCode) lightboxCode.innerHTML = `โค้ดสี: <strong>${c.code}</strong>${badge ? ` &nbsp;<span class="finish-badge ${badge.cls}">${badge.text}</span>` : ''}`;
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