//helder weer: 800                                 (pos 1)
//gedeeltelijk bewolking 20%-50%: 801, 802         (pos 2 - 3)
//overwegend bewolkt: 803, 804            (pos 4 - 5)
//vervuilde lucht: 701, 711, 721, 731, 741         (pos 6 - 10)
//zwaar vervuilde lucht: 751, 761, 762, 771, 781   (pos 11 - 15)

//lichte sneeuw: 611, 612, 613                     (pos 16 - 18)
//gemiddelde sneeuw: 601, 615, 616, 620, 621       (pos 9- 24)
//zware sneeuw: 602, 622                           (pos 25 - 26)

//lichte regen: 500, 501, 520                      (pos 27 - 29)
//middel zwaar regen: 521, 531                     (pos 30 - 31)
//zware regen: 502, 503, 504, 522                  (pos 32 - 35)

//motregen: 300, 301, 302, 310, 311, 312, 313, 321 (pos 36 - 43)

//licht onweer: 200, 210                           (pos 44 - 45)
//gemiddeld onweer: 201, 211, 221, 230, 231, 232   (pos 46 - 51)
//zwaar onweer: 202, 212                           (pos 52 - 53)

function weatherCodeToWeatherCategory(weatherCode) {
    import weatherCodes from "../constants/weatherCodes";
    let category;

    let indexNum = weatherCodes.indexOf(weatherCode);

    switch (true) { // We evalueren 'true' en vergelijken de cases met booleaanse expressies
        case indexNum < 1:
            category = "helder weer";
            break;
        case indexNum < 3:
            category = "gedeeltelijk bewolking 20%-50%";
            break;
        case indexNum < 5:
            category = "overwegend bewolkt";
            break;
        case indexNum < 10:
            category = "vervuilde lucht";
            break;
        case indexNum < 15:
            category = "zwaar vervuilde lucht";
            break;
        case indexNum < 18:
            category = "lichte sneeuw";
            break;
        case indexNum < 24:
            category = "gemiddelde sneeuw";
            break;
        case indexNum < 26:
            category = "zware sneeuw";
            break;
        case indexNum < 29:
            category = "lichte regen";
            break;
        case indexNum < 31:
            category = "middel zwaar regen";
            break;
        case indexNum < 35:
            category = "zware regen";
            break;
        case indexNum < 43:
            category = "motregen";
            break;
        case indexNum < 45:
            category = "licht onweer";
            break;
        case indexNum < 51:
            category = "gemiddeld onweer";
            break;
        case indexNum < 53:
            category = "zwaar onweer";
            break;
        default:
            category = "weer onbekend";
    }
    return category;
}

export default weatherCodeToWeatherCategory;