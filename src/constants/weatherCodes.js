
const weatherCodes = [
    801, 802, 801, 802, 803, 804, 701, 711, 721, 731, 741,
    751, 761, 762, 771, 781, 611, 612, 613, 601, 615,
    616, 620, 621, 602, 622, 500, 501, 520, 521, 531,
    502, 503, 504, 522, 300, 301, 302, 310, 311,
    312, 313, 321, 200, 210, 201, 211, 221, 230,
    231, 232, 202, 212,
]

//helder weer 90%-100%: 800                        (pos 1)
//gedeeltelijk bewolking 20%-50%: 801, 802          (pos 2 - 3)
//overwegend bewolkt: 50%-90%: 803, 804             (pos 4 - 5)
//slecht atmosfeer: 701, 711, 721, 731, 741         (pos 6 - 10)
//zeer slecht atmosfeer: 751, 761, 762, 771, 781    (pos 11 - 15)

//licht sneeuw: 611, 612, 613                       (pos 16 - 18)
//gemiddeld sneeuw: 601, 615, 616, 620, 621         (pos 9- 24)
//zwaar sneeuw: 602, 622                            (pos 25 - 26)

//licht regen: 500, 501, 520                        (pos 27 - 29)
//middel zwaar regen: 521, 531                      (pos 30 - 31)
//zwaar regen: 502, 503, 504, 522                   (pos 32 - 35)

//mot regen: 300, 301, 302, 310, 311, 312, 313, 321 (pos 36 - 43)

//licht onweer: 200, 210                            (pos 44 - 45)
//gemiddeld onweer: 201, 211, 221, 230, 231, 232    (pos 46 - 51)
//zwaar onweer: 202, 212                            (pos 52 - 53)

export default weatherCodes;
