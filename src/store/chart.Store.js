import { makeAutoObservable } from "mobx";

class ChartStore {
    num = 0;
    ageOption = {
        title: {
            text: '恶意代码年龄分布表',
            subtext: '以 20 岁作为基准',
            x: 'center'
        },
        tooltip: {
            trigger: "item"
        },
        legend: {
            orient: "vertical",
            left: "left"
        },
        series: [
            {
                name: "年龄",
                type: "pie",
                radius: "50%",
                data: [
                    { name: 20, value: 556 },
                    { name: 21, value: 2565 },
                    { name: 22, value: 3400 },
                    { name: 23, value: 3006 },
                    { name: 24, value: 2967 },
                    { name: 25, value: 2900 },
                    { name: 26, value: 2588 },
                    { name: 27, value: 2166 },
                    { name: 28, value: 1867 },
                    { name: 29, value: 1593 },
                    { name: 30, value: 1176 },
                    { name: 31, value: 871 },
                    { name: 32, value: 516 },
                    { name: 33, value: 314 },
                    { name: 34, value: 186 },
                ],
                label: {
                    show: true,
                    formatter: "{b} {d}%"
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                }
            }
        ]
    };

    locationOption = {
        title: {
            text: '恶意代码地域分布表',
            subtext: '以国家为单位',
            x: 'center'
        },
        tooltip: {
            trigger: "item"
        },
        legend: {
            orient: "vertical",
            left: "left"
        },
        series: [
            {
                name: "国家",
                type: "pie",
                radius: "50%",
                data: [
                    { name: "USA", value: 1182 },
                    { name: "India", value: 299 },
                    { name: "Brazil", value: 186 },
                    { name: "UK", value: 174 },
                    { name: "China", value: 128 },
                    { name: "Germany", value: 100 },
                    { name: "France", value: 75 },
                    { name: "Canada", value: 72 },
                    { name: "Indonesia", value: 59 },
                ],
                label: {
                    show: true,
                    formatter: "{b} {d}%"
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                }
            }
        ]
    };

    // USA,1400
    // India,1222
    // Brazil,519
    // UK,174
    // China,363
    // Germany,640
    // France,510
    // Canada,387
    // Indonesia,310
    // "Korea, Republic of",59
    // Czech Republic,117
    // Bangladesh,182
    // Spain,242
    // South Africa,82
    // Russian Federation,41
    // Italy,330
    // Pakistan,132
    // Mexico,138
    // Sri Lanka,99
    // Poland,245
    // Argentina,123
    // Netherlands,158
    // Philippines,103
    // New Zealand,92
    // "Taiwan, Province of China",30
    // Turkey,234
    // Japan,126
    // Ukraine,161
    // Sweden,123
    // Australia,221
    // Colombia,87
    // Israel,184
    // Kenya,54
    // Romania,103
    // Finland,81
    // Islamic Republic of Iran,20
    // Hong Kong,18
    // Portugal,91
    // Denmark,87
    // Egypt,111
    // Venezuela,15
    // Norway,92
    // Belgium,102
    // Serbia,38
    // Greece,95
    // Thailand,65
    // Nepal,40
    // Georgia,47
    // Uruguay,18
    // Switzerland,77
    // Morocco,51
    // Malaysia,48
    // Bulgaria,35
    // Singapore,124
    // Viet Nam,9
    // Saudi Arabia,21
    // Ethiopia,23
    // Croatia,29
    // Belarus,23
    // Nicaragua,8
    // United Arab Emirates,30
    // Azerbaijan,20
    // Algeria,46
    // Lebanon,21
    // Hungary,44
    // Ireland,59
    // Tunisia,49
    // Puerto Rico,8
    // Austria,58
    // Uzbekistan,5
    // Guatemala,14
    // Ghana,20
    // Angola,5
    // Lithuania,30
    // Sudan,6
    // Estonia,6
    // Paraguay,7
    // Ecuador,9
    // Dominican Republic,7
    // Latvia,13
    // Rwanda,10
    // Slovakia,29
    // El Salvador,4
    // Cyprus,9
    // Armenia,8
    // Kazakhstan,12
    // "Tanzania, United Republic of",3
    // Bosnia and Herzegovina,6
    // Cambodia,4
    // Jersey,2
    // Uganda,5
    // Myanmar,10
    // Sierra Leone,2
    // Yemen,2
    // Bolivia,9
    // Nigeria,16
    // Maldives,3
    // C?te D'ivoire (Ivory Coast),2
    // Chile,42
    // Costa Rica,9
    // Zambia,3
    // Cameroon,4
    // Panama,4
    // Jordan,4
    // Iceland,14
    // "Moldova, Republic of",1
    // Luxembourg,17
    // Albania,7
    // Bahama,1
    // Peru,22
    // Kyrgyzstan,5
    // Antarctica,1
    // Zimbabwe,7
    // Mali,1
    // Congo-Kinshasa,1
    // Sao Tome & Principe,1
    // Iraq,4
    // Xtra Klean,1
    // Libyan Arab Jamahiriya,1
    // Macau,1
    // Macedonia,1
    // United Kingdom,402
    // People's Republic of China,75
    // Russia,212
    // Vietnam,100
    // Taiwan,108
    // Iran,114
    // South Korea,149
    // Slovenia,11
    // Jamaica,10
    // Honduras,3
    // Mozambique,3
    // Seychelles,3
    // Moldova,7
    // Tanzania,9
    // Syria,2
    // Madagascar,4
    // Eswatini,2
    // Malta,2
    // Afghanistan,4
    // Somalia,2
    // Kuwait,1
    // Monaco,1
    // Bahrain,2
    // Oman,2
    // Vatican City,1
    // Laos,1
    // Gabon,1
    // Togo,1
    // Mauritius,1
    // Greenland,1
    // Senegal,1
    // Andorra,2
    // The Bahamas,1
    // North Korea,2
    // United States,445
    // Palestine,6
    // Benin,3
    // Saint Kitts and Nevis,1
    // Ivory Coast,1
    // Kosovo,1
    // Republic of Congo,1
    // Montenegro,1


    tendencyOption = [
        {
            "name": "Java",
            "year": "2000",
            "heat": 1211346869605.24
        },
        {
            "name": "Java",
            "year": "2001",
            "heat": 1339395718865.3
        },
        {
            "name": "Java",
            "year": "2002",
            "heat": 1470550015081.55
        },
        {
            "name": "Java",
            "year": "2003",
            "heat": 1660287965662.68
        },
        {
            "name": "Java",
            "year": "2004",
            "heat": 1955347004963.27
        },
        {
            "name": "Java",
            "year": "2005",
            "heat": 2285965892360.54
        },
        {
            "name": "Java",
            "year": "2006",
            "heat": 2752131773355.16
        },
        {
            "name": "Java",
            "year": "2007",
            "heat": 3550342425238.25
        },
        {
            "name": "Java",
            "year": "2008",
            "heat": 4594306848763.08
        },
        {
            "name": "Java",
            "year": "2009",
            "heat": 5101702432883.45
        },
        {
            "name": "Java",
            "year": "2010",
            "heat": 6087164527421.24
        },
        {
            "name": "Java",
            "year": "2011",
            "heat": 7551500425597.77
        },
        {
            "name": "Java",
            "year": "2012",
            "heat": 8532230724141.76
        },
        {
            "name": "Java",
            "year": "2013",
            "heat": 9570405758739.79
        },
        {
            "name": "Java",
            "year": "2014",
            "heat": 10438529153237.6
        },
        {
            "name": "Java",
            "year": "2015",
            "heat": 11015542352468.9
        },
        {
            "name": "Java",
            "year": "2016",
            "heat": 11137945669350.6
        },
        {
            "name": "Java",
            "year": "2017",
            "heat": 12143491448186.1
        },
        {
            "name": "Java",
            "year": "2018",
            "heat": 13608151864637.9
        },
        {
            "name": "JavaScript",
            "year": "2000",
            "heat": 10252345464000
        },
        {
            "name": "JavaScript",
            "year": "2001",
            "heat": 10581821399000
        },
        {
            "name": "JavaScript",
            "year": "2002",
            "heat": 10936419054000
        },
        {
            "name": "JavaScript",
            "year": "2003",
            "heat": 11458243878000
        },
        {
            "name": "JavaScript",
            "year": "2004",
            "heat": 12213729147000
        },
        {
            "name": "JavaScript",
            "year": "2005",
            "heat": 13036640229000
        },
        {
            "name": "JavaScript",
            "year": "2006",
            "heat": 13814611414000
        },
        {
            "name": "JavaScript",
            "year": "2007",
            "heat": 14451858650000
        },
        {
            "name": "JavaScript",
            "year": "2008",
            "heat": 14712844084000
        },
        {
            "name": "JavaScript",
            "year": "2009",
            "heat": 14448933025000
        },
        {
            "name": "JavaScript",
            "year": "2010",
            "heat": 14992052727000
        },
        {
            "name": "JavaScript",
            "year": "2011",
            "heat": 15542581104000
        },
        {
            "name": "JavaScript",
            "year": "2012",
            "heat": 16197007349000
        },
        {
            "name": "JavaScript",
            "year": "2013",
            "heat": 16784849190000
        },
        {
            "name": "JavaScript",
            "year": "2014",
            "heat": 17521746534000
        },
        {
            "name": "JavaScript",
            "year": "2015",
            "heat": 18219297584000
        },
        {
            "name": "JavaScript",
            "year": "2016",
            "heat": 18707188235000
        },
        {
            "name": "JavaScript",
            "year": "2017",
            "heat": 19485393853000
        },
        {
            "name": "JavaScript",
            "year": "2018",
            "heat": 20544343456936.5
        },
        {
            "name": "C/C++",
            "year": "2000",
            "heat": 1657816613708.58
        },
        {
            "name": "C/C++",
            "year": "2001",
            "heat": 1640246149417.01
        },
        {
            "name": "C/C++",
            "year": "2002",
            "heat": 1784473920863.31
        },
        {
            "name": "C/C++",
            "year": "2003",
            "heat": 2053018775510.2
        },
        {
            "name": "C/C++",
            "year": "2004",
            "heat": 2416931526913.22
        },
        {
            "name": "C/C++",
            "year": "2005",
            "heat": 2538680000000
        },
        {
            "name": "C/C++",
            "year": "2006",
            "heat": 2713749770009.2
        },
        {
            "name": "C/C++",
            "year": "2007",
            "heat": 3100882352941.18
        },
        {
            "name": "C/C++",
            "year": "2008",
            "heat": 2922667279411.76
        },
        {
            "name": "C/C++",
            "year": "2009",
            "heat": 2410909799034.12
        },
        {
            "name": "C/C++",
            "year": "2010",
            "heat": 2475244321361.11
        },
        {
            "name": "C/C++",
            "year": "2011",
            "heat": 2659310054646.23
        },
        {
            "name": "C/C++",
            "year": "2012",
            "heat": 2704887678386.72
        },
        {
            "name": "C/C++",
            "year": "2013",
            "heat": 2786022872706.81
        },
        {
            "name": "C/C++",
            "year": "2014",
            "heat": 3063803240208.01
        },
        {
            "name": "C/C++",
            "year": "2015",
            "heat": 2928591002002.51
        },
        {
            "name": "C/C++",
            "year": "2016",
            "heat": 2694283209613.29
        },
        {
            "name": "C/C++",
            "year": "2017",
            "heat": 2666229179958.01
        },
        {
            "name": "C/C++",
            "year": "2018",
            "heat": 2855296731521.96
        },
        {
            "name": "Python",
            "year": "2000",
            "heat": 259710142196.94
        },
        {
            "name": "Python",
            "year": "2001",
            "heat": 306602070620.5
        },
        {
            "name": "Python",
            "year": "2002",
            "heat": 345470494417.86
        },
        {
            "name": "Python",
            "year": "2003",
            "heat": 430347770731.79
        },
        {
            "name": "Python",
            "year": "2004",
            "heat": 591016690742.8
        },
        {
            "name": "Python",
            "year": "2005",
            "heat": 764017107992.39
        },
        {
            "name": "Python",
            "year": "2006",
            "heat": 989930542278.7
        },
        {
            "name": "Python",
            "year": "2007",
            "heat": 1299705764823.62
        },
        {
            "name": "Python",
            "year": "2008",
            "heat": 1660846387624.78
        },
        {
            "name": "Python",
            "year": "2009",
            "heat": 1222644282201.86
        },
        {
            "name": "Python",
            "year": "2010",
            "heat": 1524917468442.01
        },
        {
            "name": "Python",
            "year": "2011",
            "heat": 2051661732059.78
        },
        {
            "name": "Python",
            "year": "2012",
            "heat": 2210256976945.38
        },
        {
            "name": "Python",
            "year": "2013",
            "heat": 2297128039058.21
        },
        {
            "name": "Python",
            "year": "2014",
            "heat": 2059984158438.46
        },
        {
            "name": "Python",
            "year": "2015",
            "heat": 1363594369577.82
        },
        {
            "name": "Python",
            "year": "2016",
            "heat": 1282723881134.01
        },
        {
            "name": "Python",
            "year": "2017",
            "heat": 1578624060588.26
        },
        {
            "name": "Python",
            "year": "2018",
            "heat": 1657554647149.87
        },
        {
            "name": "Golang",
            "year": "2000",
            "heat": 4887519660744.86
        },
        {
            "name": "Golang",
            "year": "2001",
            "heat": 4303544259842.72
        },
        {
            "name": "Golang",
            "year": "2002",
            "heat": 4115116279069.77
        },
        {
            "name": "Golang",
            "year": "2003",
            "heat": 4445658071221.86
        },
        {
            "name": "Golang",
            "year": "2004",
            "heat": 4815148854362.11
        },
        {
            "name": "Golang",
            "year": "2005",
            "heat": 4755410630912.14
        },
        {
            "name": "Golang",
            "year": "2006",
            "heat": 4530377224970.4
        },
        {
            "name": "Golang",
            "year": "2007",
            "heat": 4515264514430.57
        },
        {
            "name": "Golang",
            "year": "2008",
            "heat": 5037908465114.48
        },
        {
            "name": "Golang",
            "year": "2009",
            "heat": 5231382674593.7
        },
        {
            "name": "Golang",
            "year": "2010",
            "heat": 5700098114744.41
        },
        {
            "name": "Golang",
            "year": "2011",
            "heat": 6157459594823.72
        },
        {
            "name": "Golang",
            "year": "2012",
            "heat": 6203213121334.12
        },
        {
            "name": "Golang",
            "year": "2013",
            "heat": 5155717056270.83
        },
        {
            "name": "Golang",
            "year": "2014",
            "heat": 4850413536037.84
        },
        {
            "name": "Golang",
            "year": "2015",
            "heat": 4389475622588.97
        },
        {
            "name": "Golang",
            "year": "2016",
            "heat": 4926667087367.51
        },
        {
            "name": "Golang",
            "year": "2017",
            "heat": 4859950558538.97
        },
        {
            "name": "Golang",
            "year": "2018",
            "heat": 4971323079771.87
        }
    ]

    watchTendencyOption = [
        {
            "name": "Python",
            "year": "2008",
            "heat": 869
        },
        {
            "name": "Python",
            "year": "2009",
            "heat": 3226
        },
        {
            "name": "Python",
            "year": "2010",
            "heat": 8409
        },
        {
            "name": "Python",
            "year": "2011",
            "heat": 16205
        },
        {
            "name": "Python",
            "year": "2012",
            "heat": 17844
        },
        {
            "name": "Python",
            "year": "2013",
            "heat": 26976
        },
        {
            "name": "Python",
            "year": "2014",
            "heat": 66395
        },
        {
            "name": "Python",
            "year": "2015",
            "heat": 71822
        },
        {
            "name": "Python",
            "year": "2016",
            "heat": 50320
        },
        {
            "name": "Python",
            "year": "2017",
            "heat": 154433
        },
        {
            "name": "Python",
            "year": "2018",
            "heat": 88185
        },
        {
            "name": "Python",
            "year": "2019",
            "heat": 68196
        },
        {
            "name": "Python",
            "year": "2020",
            "heat": 51252
        },
        {
            "name": "Python",
            "year": "2021",
            "heat": 34404
        },
        {
            "name": "Python",
            "year": "2022",
            "heat": 11932
        },
        {
            "name": "Java",
            "year": "2008",
            "heat": 542
        },
        {
            "name": "Java",
            "year": "2009",
            "heat": 357
        },
        {
            "name": "Java",
            "year": "2010",
            "heat": 1557
        },
        {
            "name": "Java",
            "year": "2011",
            "heat": 1512
        },
        {
            "name": "Java",
            "year": "2012",
            "heat": 3856
        },
        {
            "name": "Java",
            "year": "2013",
            "heat": 1911
        },
        {
            "name": "Java",
            "year": "2014",
            "heat": 2969
        },
        {
            "name": "Java",
            "year": "2015",
            "heat": 4933
        },
        {
            "name": "Java",
            "year": "2016",
            "heat": 7542
        },
        {
            "name": "Java",
            "year": "2017",
            "heat": 6845
        },
        {
            "name": "Java",
            "year": "2018",
            "heat": 5289
        },
        {
            "name": "Java",
            "year": "2019",
            "heat": 6985
        },
        {
            "name": "Java",
            "year": "2020",
            "heat": 5681
        },
        {
            "name": "Java",
            "year": "2021",
            "heat": 1600
        },
        {
            "name": "Java",
            "year": "2022",
            "heat": 1530
        },
        {
            "name": "C/C++",
            "year": "2008",
            "heat": 447
        },
        {
            "name": "C/C++",
            "year": "2009",
            "heat": 2112
        },
        {
            "name": "C/C++",
            "year": "2010",
            "heat": 6321
        },
        {
            "name": "C/C++",
            "year": "2011",
            "heat": 28514
        },
        {
            "name": "C/C++",
            "year": "2012",
            "heat": 14572
        },
        {
            "name": "C/C++",
            "year": "2013",
            "heat": 31427
        },
        {
            "name": "C/C++",
            "year": "2014",
            "heat": 17498
        },
        {
            "name": "C/C++",
            "year": "2015",
            "heat": 42763
        },
        {
            "name": "C/C++",
            "year": "2016",
            "heat": 53150
        },
        {
            "name": "C/C++",
            "year": "2017",
            "heat": 49381
        },
        {
            "name": "C/C++",
            "year": "2018",
            "heat": 38899
        },
        {
            "name": "C/C++",
            "year": "2019",
            "heat": 32465
        },
        {
            "name": "C/C++",
            "year": "2020",
            "heat": 23325
        },
        {
            "name": "C/C++",
            "year": "2021",
            "heat": 23368
        },
        {
            "name": "C/C++",
            "year": "2022",
            "heat": 10435
        },
        {
            "name": "JavaScript",
            "year": "2008",
            "heat": 2596
        },
        {
            "name": "JavaScript",
            "year": "2009",
            "heat": 2585
        },
        {
            "name": "JavaScript",
            "year": "2010",
            "heat": 8739
        },
        {
            "name": "JavaScript",
            "year": "2011",
            "heat": 7117
        },
        {
            "name": "JavaScript",
            "year": "2012",
            "heat": 6497
        },
        {
            "name": "JavaScript",
            "year": "2013",
            "heat": 18028
        },
        {
            "name": "JavaScript",
            "year": "2014",
            "heat": 8805
        },
        {
            "name": "JavaScript",
            "year": "2015",
            "heat": 12447
        },
        {
            "name": "JavaScript",
            "year": "2016",
            "heat": 25485
        },
        {
            "name": "JavaScript",
            "year": "2017",
            "heat": 19203
        },
        {
            "name": "JavaScript",
            "year": "2018",
            "heat": 19708
        },
        {
            "name": "JavaScript",
            "year": "2019",
            "heat": 17034
        },
        {
            "name": "JavaScript",
            "year": "2020",
            "heat": 11079
        },
        {
            "name": "JavaScript",
            "year": "2021",
            "heat": 13523
        },
        {
            "name": "JavaScript",
            "year": "2022",
            "heat": 3740
        },
        {
            "name": "Golang",
            "year": "2008",
            "heat": 9
        },
        {
            "name": "Golang",
            "year": "2009",
            "heat": 425
        },
        {
            "name": "Golang",
            "year": "2010",
            "heat": 175
        },
        {
            "name": "Golang",
            "year": "2011",
            "heat": 2777
        },
        {
            "name": "Golang",
            "year": "2012",
            "heat": 8995
        },
        {
            "name": "Golang",
            "year": "2013",
            "heat": 9071
        },
        {
            "name": "Golang",
            "year": "2014",
            "heat": 10555
        },
        {
            "name": "Golang",
            "year": "2015",
            "heat": 30602
        },
        {
            "name": "Golang",
            "year": "2016",
            "heat": 16470
        },
        {
            "name": "Golang",
            "year": "2017",
            "heat": 40845
        },
        {
            "name": "Golang",
            "year": "2018",
            "heat": 27700
        },
        {
            "name": "Golang",
            "year": "2019",
            "heat": 11963
        },
        {
            "name": "Golang",
            "year": "2020",
            "heat": 17500
        },
        {
            "name": "Golang",
            "year": "2021",
            "heat": 7222
        },
        {
            "name": "Golang",
            "year": "2022",
            "heat": 10485
        }
    ]

    starTendencyOption = [
        {
            "name": "Python",
            "year": "2008",
            "heat": 869
        },
        {
            "name": "Python",
            "year": "2009",
            "heat": 3226
        },
        {
            "name": "Python",
            "year": "2010",
            "heat": 8409
        },
        {
            "name": "Python",
            "year": "2011",
            "heat": 16205
        },
        {
            "name": "Python",
            "year": "2012",
            "heat": 17844
        },
        {
            "name": "Python",
            "year": "2013",
            "heat": 26976
        },
        {
            "name": "Python",
            "year": "2014",
            "heat": 66395
        },
        {
            "name": "Python",
            "year": "2015",
            "heat": 71822
        },
        {
            "name": "Python",
            "year": "2016",
            "heat": 50320
        },
        {
            "name": "Python",
            "year": "2017",
            "heat": 154433
        },
        {
            "name": "Python",
            "year": "2018",
            "heat": 88185
        },
        {
            "name": "Python",
            "year": "2019",
            "heat": 68196
        },
        {
            "name": "Python",
            "year": "2020",
            "heat": 51252
        },
        {
            "name": "Python",
            "year": "2021",
            "heat": 34404
        },
        {
            "name": "Python",
            "year": "2022",
            "heat": 11932
        },
        {
            "name": "Java",
            "year": "2008",
            "heat": 542
        },
        {
            "name": "Java",
            "year": "2009",
            "heat": 357
        },
        {
            "name": "Java",
            "year": "2010",
            "heat": 1557
        },
        {
            "name": "Java",
            "year": "2011",
            "heat": 1512
        },
        {
            "name": "Java",
            "year": "2012",
            "heat": 3856
        },
        {
            "name": "Java",
            "year": "2013",
            "heat": 1911
        },
        {
            "name": "Java",
            "year": "2014",
            "heat": 2969
        },
        {
            "name": "Java",
            "year": "2015",
            "heat": 4933
        },
        {
            "name": "Java",
            "year": "2016",
            "heat": 7542
        },
        {
            "name": "Java",
            "year": "2017",
            "heat": 6845
        },
        {
            "name": "Java",
            "year": "2018",
            "heat": 5289
        },
        {
            "name": "Java",
            "year": "2019",
            "heat": 6985
        },
        {
            "name": "Java",
            "year": "2020",
            "heat": 5681
        },
        {
            "name": "Java",
            "year": "2021",
            "heat": 1600
        },
        {
            "name": "Java",
            "year": "2022",
            "heat": 1530
        },
        {
            "name": "C/C++",
            "year": "2008",
            "heat": 447
        },
        {
            "name": "C/C++",
            "year": "2009",
            "heat": 2112
        },
        {
            "name": "C/C++",
            "year": "2010",
            "heat": 6321
        },
        {
            "name": "C/C++",
            "year": "2011",
            "heat": 28514
        },
        {
            "name": "C/C++",
            "year": "2012",
            "heat": 14572
        },
        {
            "name": "C/C++",
            "year": "2013",
            "heat": 31427
        },
        {
            "name": "C/C++",
            "year": "2014",
            "heat": 17498
        },
        {
            "name": "C/C++",
            "year": "2015",
            "heat": 42763
        },
        {
            "name": "C/C++",
            "year": "2016",
            "heat": 53150
        },
        {
            "name": "C/C++",
            "year": "2017",
            "heat": 49381
        },
        {
            "name": "C/C++",
            "year": "2018",
            "heat": 38899
        },
        {
            "name": "C/C++",
            "year": "2019",
            "heat": 32465
        },
        {
            "name": "C/C++",
            "year": "2020",
            "heat": 23325
        },
        {
            "name": "C/C++",
            "year": "2021",
            "heat": 23368
        },
        {
            "name": "C/C++",
            "year": "2022",
            "heat": 10435
        },
        {
            "name": "JavaScript",
            "year": "2008",
            "heat": 2596
        },
        {
            "name": "JavaScript",
            "year": "2009",
            "heat": 2585
        },
        {
            "name": "JavaScript",
            "year": "2010",
            "heat": 8739
        },
        {
            "name": "JavaScript",
            "year": "2011",
            "heat": 7117
        },
        {
            "name": "JavaScript",
            "year": "2012",
            "heat": 6497
        },
        {
            "name": "JavaScript",
            "year": "2013",
            "heat": 18028
        },
        {
            "name": "JavaScript",
            "year": "2014",
            "heat": 8805
        },
        {
            "name": "JavaScript",
            "year": "2015",
            "heat": 12447
        },
        {
            "name": "JavaScript",
            "year": "2016",
            "heat": 25485
        },
        {
            "name": "JavaScript",
            "year": "2017",
            "heat": 19203
        },
        {
            "name": "JavaScript",
            "year": "2018",
            "heat": 19708
        },
        {
            "name": "JavaScript",
            "year": "2019",
            "heat": 17034
        },
        {
            "name": "JavaScript",
            "year": "2020",
            "heat": 11079
        },
        {
            "name": "JavaScript",
            "year": "2021",
            "heat": 13523
        },
        {
            "name": "JavaScript",
            "year": "2022",
            "heat": 3740
        },
        {
            "name": "Golang",
            "year": "2008",
            "heat": 9
        },
        {
            "name": "Golang",
            "year": "2009",
            "heat": 425
        },
        {
            "name": "Golang",
            "year": "2010",
            "heat": 175
        },
        {
            "name": "Golang",
            "year": "2011",
            "heat": 2777
        },
        {
            "name": "Golang",
            "year": "2012",
            "heat": 8995
        },
        {
            "name": "Golang",
            "year": "2013",
            "heat": 9071
        },
        {
            "name": "Golang",
            "year": "2014",
            "heat": 10555
        },
        {
            "name": "Golang",
            "year": "2015",
            "heat": 30602
        },
        {
            "name": "Golang",
            "year": "2016",
            "heat": 16470
        },
        {
            "name": "Golang",
            "year": "2017",
            "heat": 40845
        },
        {
            "name": "Golang",
            "year": "2018",
            "heat": 27700
        },
        {
            "name": "Golang",
            "year": "2019",
            "heat": 11963
        },
        {
            "name": "Golang",
            "year": "2020",
            "heat": 17500
        },
        {
            "name": "Golang",
            "year": "2021",
            "heat": 7222
        },
        {
            "name": "Golang",
            "year": "2022",
            "heat": 10485
        }
    ]

    openIssueTendencyOption = [
        {
            "name": "Python",
            "year": "2008",
            "heat": 22
        },
        {
            "name": "Python",
            "year": "2009",
            "heat": 188
        },
        {
            "name": "Python",
            "year": "2010",
            "heat": 360
        },
        {
            "name": "Python",
            "year": "2011",
            "heat": 633
        },
        {
            "name": "Python",
            "year": "2012",
            "heat": 747
        },
        {
            "name": "Python",
            "year": "2013",
            "heat": 1065
        },
        {
            "name": "Python",
            "year": "2014",
            "heat": 2157
        },
        {
            "name": "Python",
            "year": "2015",
            "heat": 3907
        },
        {
            "name": "Python",
            "year": "2016",
            "heat": 2814
        },
        {
            "name": "Python",
            "year": "2017",
            "heat": 3145
        },
        {
            "name": "Python",
            "year": "2018",
            "heat": 2904
        },
        {
            "name": "Python",
            "year": "2019",
            "heat": 3756
        },
        {
            "name": "Python",
            "year": "2020",
            "heat": 2753
        },
        {
            "name": "Python",
            "year": "2021",
            "heat": 1239
        },
        {
            "name": "Python",
            "year": "2022",
            "heat": 567
        },
        {
            "name": "Java",
            "year": "2008",
            "heat": 27
        },
        {
            "name": "Java",
            "year": "2009",
            "heat": 16
        },
        {
            "name": "Java",
            "year": "2010",
            "heat": 36
        },
        {
            "name": "Java",
            "year": "2011",
            "heat": 93
        },
        {
            "name": "Java",
            "year": "2012",
            "heat": 378
        },
        {
            "name": "Java",
            "year": "2013",
            "heat": 230
        },
        {
            "name": "Java",
            "year": "2014",
            "heat": 241
        },
        {
            "name": "Java",
            "year": "2015",
            "heat": 3523
        },
        {
            "name": "Java",
            "year": "2016",
            "heat": 1107
        },
        {
            "name": "Java",
            "year": "2017",
            "heat": 1205
        },
        {
            "name": "Java",
            "year": "2018",
            "heat": 1139
        },
        {
            "name": "Java",
            "year": "2019",
            "heat": 1040
        },
        {
            "name": "Java",
            "year": "2020",
            "heat": 669
        },
        {
            "name": "Java",
            "year": "2021",
            "heat": 229
        },
        {
            "name": "Java",
            "year": "2022",
            "heat": 201
        },
        {
            "name": "C/C++",
            "year": "2008",
            "heat": 5
        },
        {
            "name": "C/C++",
            "year": "2009",
            "heat": 107
        },
        {
            "name": "C/C++",
            "year": "2010",
            "heat": 211
        },
        {
            "name": "C/C++",
            "year": "2011",
            "heat": 847
        },
        {
            "name": "C/C++",
            "year": "2012",
            "heat": 383
        },
        {
            "name": "C/C++",
            "year": "2013",
            "heat": 788
        },
        {
            "name": "C/C++",
            "year": "2014",
            "heat": 610
        },
        {
            "name": "C/C++",
            "year": "2015",
            "heat": 6053
        },
        {
            "name": "C/C++",
            "year": "2016",
            "heat": 3095
        },
        {
            "name": "C/C++",
            "year": "2017",
            "heat": 1172
        },
        {
            "name": "C/C++",
            "year": "2018",
            "heat": 754
        },
        {
            "name": "C/C++",
            "year": "2019",
            "heat": 805
        },
        {
            "name": "C/C++",
            "year": "2020",
            "heat": 911
        },
        {
            "name": "C/C++",
            "year": "2021",
            "heat": 615
        },
        {
            "name": "C/C++",
            "year": "2022",
            "heat": 214
        },
        {
            "name": "JavaScript",
            "year": "2008",
            "heat": 19
        },
        {
            "name": "JavaScript",
            "year": "2009",
            "heat": 109
        },
        {
            "name": "JavaScript",
            "year": "2010",
            "heat": 208
        },
        {
            "name": "JavaScript",
            "year": "2011",
            "heat": 395
        },
        {
            "name": "JavaScript",
            "year": "2012",
            "heat": 506
        },
        {
            "name": "JavaScript",
            "year": "2013",
            "heat": 980
        },
        {
            "name": "JavaScript",
            "year": "2014",
            "heat": 1196
        },
        {
            "name": "JavaScript",
            "year": "2015",
            "heat": 2712
        },
        {
            "name": "JavaScript",
            "year": "2016",
            "heat": 1962
        },
        {
            "name": "JavaScript",
            "year": "2017",
            "heat": 2972
        },
        {
            "name": "JavaScript",
            "year": "2018",
            "heat": 3890
        },
        {
            "name": "JavaScript",
            "year": "2019",
            "heat": 10301
        },
        {
            "name": "JavaScript",
            "year": "2020",
            "heat": 8867
        },
        {
            "name": "JavaScript",
            "year": "2021",
            "heat": 1106
        },
        {
            "name": "JavaScript",
            "year": "2022",
            "heat": 468
        },
        {
            "name": "Golang",
            "year": "2008",
            "heat": 0
        },
        {
            "name": "Golang",
            "year": "2009",
            "heat": 4
        },
        {
            "name": "Golang",
            "year": "2010",
            "heat": 4
        },
        {
            "name": "Golang",
            "year": "2011",
            "heat": 108
        },
        {
            "name": "Golang",
            "year": "2012",
            "heat": 371
        },
        {
            "name": "Golang",
            "year": "2013",
            "heat": 114
        },
        {
            "name": "Golang",
            "year": "2014",
            "heat": 186
        },
        {
            "name": "Golang",
            "year": "2015",
            "heat": 977
        },
        {
            "name": "Golang",
            "year": "2016",
            "heat": 668
        },
        {
            "name": "Golang",
            "year": "2017",
            "heat": 765
        },
        {
            "name": "Golang",
            "year": "2018",
            "heat": 641
        },
        {
            "name": "Golang",
            "year": "2019",
            "heat": 721
        },
        {
            "name": "Golang",
            "year": "2020",
            "heat": 1010
        },
        {
            "name": "Golang",
            "year": "2021",
            "heat": 550
        },
        {
            "name": "Golang",
            "year": "2022",
            "heat": 235
        }
    ]

    forkTendencyOption = [
        {
            "name": "Python",
            "year": "2008",
            "heat": 183
        },
        {
            "name": "Python",
            "year": "2009",
            "heat": 720
        },
        {
            "name": "Python",
            "year": "2010",
            "heat": 1891
        },
        {
            "name": "Python",
            "year": "2011",
            "heat": 3919
        },
        {
            "name": "Python",
            "year": "2012",
            "heat": 5290
        },
        {
            "name": "Python",
            "year": "2013",
            "heat": 7306
        },
        {
            "name": "Python",
            "year": "2014",
            "heat": 16859
        },
        {
            "name": "Python",
            "year": "2015",
            "heat": 22428
        },
        {
            "name": "Python",
            "year": "2016",
            "heat": 17652
        },
        {
            "name": "Python",
            "year": "2017",
            "heat": 38217
        },
        {
            "name": "Python",
            "year": "2018",
            "heat": 24567
        },
        {
            "name": "Python",
            "year": "2019",
            "heat": 21332
        },
        {
            "name": "Python",
            "year": "2020",
            "heat": 13830
        },
        {
            "name": "Python",
            "year": "2021",
            "heat": 7634
        },
        {
            "name": "Python",
            "year": "2022",
            "heat": 2701
        },
        {
            "name": "Java",
            "year": "2008",
            "heat": 436
        },
        {
            "name": "Java",
            "year": "2009",
            "heat": 221
        },
        {
            "name": "Java",
            "year": "2010",
            "heat": 357
        },
        {
            "name": "Java",
            "year": "2011",
            "heat": 403
        },
        {
            "name": "Java",
            "year": "2012",
            "heat": 1806
        },
        {
            "name": "Java",
            "year": "2013",
            "heat": 1438
        },
        {
            "name": "Java",
            "year": "2014",
            "heat": 1283
        },
        {
            "name": "Java",
            "year": "2015",
            "heat": 2376
        },
        {
            "name": "Java",
            "year": "2016",
            "heat": 3115
        },
        {
            "name": "Java",
            "year": "2017",
            "heat": 2683
        },
        {
            "name": "Java",
            "year": "2018",
            "heat": 3654
        },
        {
            "name": "Java",
            "year": "2019",
            "heat": 2172
        },
        {
            "name": "Java",
            "year": "2020",
            "heat": 1305
        },
        {
            "name": "Java",
            "year": "2021",
            "heat": 591
        },
        {
            "name": "Java",
            "year": "2022",
            "heat": 471
        },
        {
            "name": "C/C++",
            "year": "2008",
            "heat": 87
        },
        {
            "name": "C/C++",
            "year": "2009",
            "heat": 709
        },
        {
            "name": "C/C++",
            "year": "2010",
            "heat": 1569
        },
        {
            "name": "C/C++",
            "year": "2011",
            "heat": 6715
        },
        {
            "name": "C/C++",
            "year": "2012",
            "heat": 3886
        },
        {
            "name": "C/C++",
            "year": "2013",
            "heat": 7272
        },
        {
            "name": "C/C++",
            "year": "2014",
            "heat": 6262
        },
        {
            "name": "C/C++",
            "year": "2015",
            "heat": 14933
        },
        {
            "name": "C/C++",
            "year": "2016",
            "heat": 20041
        },
        {
            "name": "C/C++",
            "year": "2017",
            "heat": 14224
        },
        {
            "name": "C/C++",
            "year": "2018",
            "heat": 11418
        },
        {
            "name": "C/C++",
            "year": "2019",
            "heat": 8780
        },
        {
            "name": "C/C++",
            "year": "2020",
            "heat": 6269
        },
        {
            "name": "C/C++",
            "year": "2021",
            "heat": 5190
        },
        {
            "name": "C/C++",
            "year": "2022",
            "heat": 1946
        },
        {
            "name": "JavaScript",
            "year": "2008",
            "heat": 684
        },
        {
            "name": "JavaScript",
            "year": "2009",
            "heat": 350
        },
        {
            "name": "JavaScript",
            "year": "2010",
            "heat": 1421
        },
        {
            "name": "JavaScript",
            "year": "2011",
            "heat": 2157
        },
        {
            "name": "JavaScript",
            "year": "2012",
            "heat": 1705
        },
        {
            "name": "JavaScript",
            "year": "2013",
            "heat": 3873
        },
        {
            "name": "JavaScript",
            "year": "2014",
            "heat": 2158
        },
        {
            "name": "JavaScript",
            "year": "2015",
            "heat": 4044
        },
        {
            "name": "JavaScript",
            "year": "2016",
            "heat": 5637
        },
        {
            "name": "JavaScript",
            "year": "2017",
            "heat": 5035
        },
        {
            "name": "JavaScript",
            "year": "2018",
            "heat": 4929
        },
        {
            "name": "JavaScript",
            "year": "2019",
            "heat": 2904
        },
        {
            "name": "JavaScript",
            "year": "2020",
            "heat": 4352
        },
        {
            "name": "JavaScript",
            "year": "2021",
            "heat": 4246
        },
        {
            "name": "JavaScript",
            "year": "2022",
            "heat": 1005
        },
        {
            "name": "Golang",
            "year": "2008",
            "heat": 2
        },
        {
            "name": "Golang",
            "year": "2009",
            "heat": 80
        },
        {
            "name": "Golang",
            "year": "2010",
            "heat": 31
        },
        {
            "name": "Golang",
            "year": "2011",
            "heat": 192
        },
        {
            "name": "Golang",
            "year": "2012",
            "heat": 1565
        },
        {
            "name": "Golang",
            "year": "2013",
            "heat": 1262
        },
        {
            "name": "Golang",
            "year": "2014",
            "heat": 1194
        },
        {
            "name": "Golang",
            "year": "2015",
            "heat": 5162
        },
        {
            "name": "Golang",
            "year": "2016",
            "heat": 3079
        },
        {
            "name": "Golang",
            "year": "2017",
            "heat": 5083
        },
        {
            "name": "Golang",
            "year": "2018",
            "heat": 2997
        },
        {
            "name": "Golang",
            "year": "2019",
            "heat": 2330
        },
        {
            "name": "Golang",
            "year": "2020",
            "heat": 3487
        },
        {
            "name": "Golang",
            "year": "2021",
            "heat": 1677
        },
        {
            "name": "Golang",
            "year": "2022",
            "heat": 1160
        }
    ]

    setAgeOptionData = (data) => {
        this.ageOption.series[0].data = data;
    };

    setLocationOptionData = (data) => {
        this.locationOption.series[0].data = data;
    };

    setTendencyOptionData = (data) => {
        this.tendencyOption = data
    };

    getGraphOriginData = (graphOrigin) => {
        switch (graphOrigin) {
            case "star":
                return this.starTendencyOption
            case "fork":
                return this.forkTendencyOption
            case "watch":
                return this.watchTendencyOption
            case "open_issue":
                return this.openIssueTendencyOption
            default:
                return [];
        }
    }

    constructor() {
        makeAutoObservable(this);
    }
}

export default ChartStore;