export type Car = {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
  technical: string[][];
  design: string;
  history: string;
  price: string[][];
};

export const cars: Car[] = [
  {
    id: "octavia",
    name: "Skoda Octavia",
    image: "https://winz606.github.io/Webshop/kepek/octavia_white.webp",
    description:
      "A Skoda Octavia egy középkategóriás autó, amely az egyik legnépszerűbb modell a márka történetében. Az Octavia változatai között megtalálhatóak a szedán és kombi formák is, amelyek mindegyike magas szintű kényelmet és megbízhatóságot biztosít.",
    features: [
      "Motor: 1.0 TSI, 1.5 TSI, 2.0 TDI motorváltozatok",
      "Teljesítmény: 115-150 lóerő",
      "Hajtás: Elsőkerék-hajtás / 4x4",
      "Átlagfogyasztás: 4.0-6.0 liter/100 km",
      "Biztonsági jellemzők: Frontális ütközéssegítő, automatikus vészfékezés, sávelhagyás figyelmeztető",
    ],
    technical: [
      ["Motorváltozat", "Motor típus", "Teljesítmény", "Max. sebesség", "Átlagfogyasztás (l/100 km)", "CO₂ kibocsátás (g/km)"],
      ["1.0 TSI", "Benzin", "115 LE", "200 km/h", "4.5", "105"],
      ["1.5 TSI", "Benzin", "150 LE", "210 km/h", "5.0", "115"],
      ["2.0 TDI", "Diesel", "150 LE", "210 km/h", "4.5", "120"],
      ["2.0 TDI 4x4", "Diesel", "190 LE", "220 km/h", "5.5", "130"],
    ],
    design:
      "A Skoda Octavia dizájnja egyszerre elegáns és praktikus. Az autó modern formái és széles választékban elérhető színei lehetővé teszik, hogy mindenki megtalálja a saját stílusához illő változatot. Az Octavia kiemelkedik tágas belső terével és kényelmes üléseivel is.",
    history:
      "Az első generációt 1996-ban mutatták be, és azóta is az egyik legnagyobb siker a Skoda történetében. Az Octavia változatai folyamatosan fejlődtek, hogy megfeleljenek a változó igényeknek és új technológiai vívmányokat kínáljanak. A legújabb modellek már hibrid és elektromos változatokban is elérhetőek.",
    price: [
      ["Modell", "Ár (HUF)", "Motor", "Hajtás"],
      ["Skoda Octavia Alap", "6.000.000 Ft", "1.0 TSI", "Elsőkerék-hajtás"],
      ["Skoda Octavia Ambition", "7.000.000 Ft", "1.5 TSI", "Elsőkerék-hajtás"],
      ["Skoda Octavia Style", "8.000.000 Ft", "2.0 TDI", "4x4"],
      ["Skoda Octavia L&K", "8.500.000 Ft", "2.0 TDI", "4x4"],
    ],
  },
  {
    id: "octavia-kombi",
    name: "Skoda Octavia",
    image: "https://winz606.github.io/Webshop/kepek/octaviacombi_white.webp",
    description:
      "A Skoda Octavia egy középkategóriás autó, amely az egyik legnépszerűbb modell a márka történetében. Az Octavia változatai között megtalálhatóak a szedán és kombi formák is, amelyek mindegyike magas szintű kényelmet és megbízhatóságot biztosít.",
    features: [
      "Motor: 1.0 TSI, 1.5 TSI, 2.0 TDI motorváltozatok",
      "Teljesítmény: 115-150 lóerő",
      "Hajtás: Elsőkerék-hajtás / 4x4",
      "Átlagfogyasztás: 4.0-6.0 liter/100 km",
      "Biztonsági jellemzők: Frontális ütközéssegítő, automatikus vészfékezés, sávelhagyás figyelmeztető",
    ],
    technical: [
      [
        "Motorváltozat",
        "Motor típus",
        "Teljesítmény",
        "Max. sebesség",
        "Átlagfogyasztás (l/100 km)",
        "CO₂ kibocsátás (g/km)",
      ],
      ["1.0 TSI", "Benzin", "115 LE", "200 km/h", "4.5", "105"],
      ["1.5 TSI", "Benzin", "150 LE", "210 km/h", "5.0", "115"],
      ["2.0 TDI", "Diesel", "150 LE", "210 km/h", "4.5", "120"],
      ["2.0 TDI 4x4", "Diesel", "190 LE", "220 km/h", "5.5", "130"],
    ],
    design:
      "A Skoda Octavia dizájnja egyszerre elegáns és praktikus. Az autó modern formái és széles választékban elérhető színei lehetővé teszik, hogy mindenki megtalálja a saját stílusához illő változatot. Az Octavia kiemelkedik tágas belső terével és kényelmes üléseivel is.",
    history:
      "Az első generációt 1996-ban mutatták be, és azóta is az egyik legnagyobb siker a Skoda történetében. Az Octavia változatai folyamatosan fejlődtek, hogy megfeleljenek a változó igényeknek és új technológiai vívmányokat kínáljanak. A legújabb modellek már hibrid és elektromos változatokban is elérhetőek.",
    price: [
      ["Modell", "Ár (HUF)", "Motor", "Hajtás"],
      ["Skoda Octavia Alap", "6.000.000 Ft", "1.0 TSI", "Elsőkerék-hajtás"],
      ["Skoda Octavia Ambition", "7.000.000 Ft", "1.5 TSI", "Elsőkerék-hajtás"],
      ["Skoda Octavia Style", "8.000.000 Ft", "2.0 TDI", "4x4"],
      ["Skoda Octavia L&K", "8.500.000 Ft", "2.0 TDI", "4x4"],
    ],
  },
  {
    id: "karoq",
    name: "Skoda Karoq",
    image: "https://winz606.github.io/Webshop/kepek/karoq_white.webp",
    description:
      "A Skoda Karoq egy kompakt SUV, amely a márka dinamikus és stílusos megoldásait kínálja a vásárlóknak. A Karoq különleges egyensúlyt teremt a megbízhatóság, kényelem és a szabadidős autózás élménye között, miközben szabadon választott hajtásláncok és gazdag felszereltség jellemzik.",
    features: [
      "Motor: 1.0 TSI, 1.5 TSI, 2.0 TDI motorváltozatok",
      "Teljesítmény: 115-190 lóerő",
      "Hajtás: Elsőkerék-hajtás / 4x4",
      "Átlagfogyasztás: 4.0-6.5 liter/100 km",
      "Biztonsági jellemzők: Frontális ütközéssegítő, automatikus vészfékezés, sávtartó asszisztens",
    ],
    technical: [
      [
        "Motorváltozat",
        "Motor típus",
        "Teljesítmény",
        "Max. sebesség",
        "Átlagfogyasztás (l/100 km)",
        "CO₂ kibocsátás (g/km)",
      ],
      ["1.0 TSI", "Benzin", "115 LE", "190 km/h", "5.0", "120"],
      ["1.5 TSI", "Benzin", "150 LE", "200 km/h", "5.2", "130"],
      ["2.0 TDI", "Diesel", "150 LE", "200 km/h", "5.0", "110"],
      ["2.0 TDI 4x4", "Diesel", "190 LE", "210 km/h", "5.5", "120"],
    ],
    design:
      "A Skoda Karoq dizájnja fiatalos és sportos, emellett elegáns és praktikus. Az autó robusztus megjelenése mellett a Karoq kiemelkedik modern fényekkel, masszív orrkialakítással és ívelt vonalakkal, amelyek dinamikus hatást keltenek. Az utastér tágas, és kiváló minőségű anyagokkal van felszerelve.",
    history:
      "A Skoda Karoq 2017-ben jelent meg, és gyorsan népszerűvé vált a kompakt SUV kategóriában. A Karoq folyamatosan megújul, és a Skoda kínálatában mindig is a legmodernebb technológiákat és praktikus megoldásokat alkalmazza, hogy megfeleljen a legújabb vásárlói igényeknek.",
    price: [
      ["Modell", "Ár (HUF)", "Motor", "Hajtás"],
      ["Skoda Karoq Alap", "7.500.000 Ft", "1.0 TSI", "Elsőkerék-hajtás"],
      ["Skoda Karoq Ambition", "8.500.000 Ft", "1.5 TSI", "Elsőkerék-hajtás"],
      ["Skoda Karoq Style", "9.500.000 Ft", "2.0 TDI", "4x4"],
      ["Skoda Karoq L&K", "10.000.000 Ft", "2.0 TDI", "4x4"],
    ],
  }, 
  {
    id: "kodiaq",
    name: "Skoda Kodiaq",
    image: "https://winz606.github.io/Webshop/kepek/kodiaq_white.webp",
    description:
      "A Skoda Kodiaq egy prémium kategóriájú, nagy méretű SUV, amely a Skoda legnagyobb és legdinamikusabb modellje. A Kodiaq egyesíti a tágas utasteret, a családbarát megoldásokat és a kifinomult technológiai jellemzőket, hogy egyensúlyba hozza a kényelmet és a teljesítményt. A Kodiaq ideális választás a hosszú utazásokra és a mindennapi városi közlekedésre egyaránt.",
    features: [
      "Motor: 1.5 TSI, 2.0 TDI, 2.0 TSI motorváltozatok",
      "Teljesítmény: 150-240 lóerő",
      "Hajtás: Elsőkerék-hajtás / 4x4",
      "Átlagfogyasztás: 5.0-7.5 liter/100 km",
      "Biztonsági jellemzők: Adaptív sebességtartó automata, sávtartó asszisztens, automatikus vészfékezés",
    ],
    technical: [
      [
        "Motorváltozat",
        "Motor típus",
        "Teljesítmény",
        "Max. sebesség",
        "Átlagfogyasztás (l/100 km)",
        "CO₂ kibocsátás (g/km)",
      ],
      ["1.5 TSI", "Benzin", "150 LE", "200 km/h", "5.5", "130"],
      ["2.0 TDI", "Diesel", "150 LE", "200 km/h", "5.2", "120"],
      ["2.0 TSI", "Benzin", "190 LE", "210 km/h", "6.2", "150"],
      ["2.0 TDI 4x4", "Diesel", "190 LE", "210 km/h", "6.0", "140"],
      ["2.0 TSI 4x4", "Benzin", "240 LE", "220 km/h", "7.5", "160"],
    ],
    design:
      "A Skoda Kodiaq elegáns és impozáns megjelenése az erőteljes vonalaknak és a jól megformált első hűtőrácsnak köszönhető. A modern LED fényszórók és az arányos arcvonások harmonikus egyensúlyt alkotnak a sportos és elegáns stílus között. Az utastér tágas, több mint 7 személy számára kínál helyet, és prémium anyagokkal van kialakítva, hogy a hosszú utazásokat is kényelmesen meg lehessen tenni.",
    history:
      "A Skoda Kodiaq 2016-ban debütált, mint a márka első nagy méretű SUV-ja. Azóta is a Skoda legnépszerűbb és legnagyobb SUV modellje, amely számos elismerést szerzett, beleértve a legjobb családi autó díjat. A Kodiaq folyamatosan frissül, és új fejlesztésekkel, mint például a plug-in hibrid változat, érkezik a vásárlókhoz.",
    price: [
      ["Modell", "Ár (HUF)", "Motor", "Hajtás"],
      ["Skoda Kodiaq Alap", "9.500.000 Ft", "1.5 TSI", "Elsőkerék-hajtás"],
      ["Skoda Kodiaq Ambition", "10.500.000 Ft", "2.0 TDI", "Elsőkerék-hajtás"],
      ["Skoda Kodiaq Style", "12.000.000 Ft", "2.0 TSI", "4x4"],
      ["Skoda Kodiaq L&K", "13.000.000 Ft", "2.0 TDI 4x4", "4x4"],
      ["Skoda Kodiaq RS", "14.500.000 Ft", "2.0 TSI 4x4", "4x4"],
    ],
  }, 
  {
    id: "superb",
    name: "Skoda Superb",
    image: "https://winz606.github.io/Webshop/kepek/superb_white.webp",
    description:
      "A Skoda Superb egy prémium középkategóriás autó, amely a márka csúcsváltozata, és kényelmével, tágasságával, valamint fejlett technológiai megoldásaival kiemelkedik a piacon. Az autó elérhető szedán és kombi változatban is.",
    features: [
      "Motor: 1.4 TSI, 2.0 TDI, 2.0 TSI motorváltozatok",
      "Teljesítmény: 150-280 lóerő",
      "Hajtás: Elsőkerék-hajtás / 4x4",
      "Átlagfogyasztás: 4.0-7.0 liter/100 km",
      "Biztonsági jellemzők: Frontális ütközéssegítő, automatikus vészfékezés, adaptív sebességtartó automatikus rendszer",
    ],
    technical: [
      [
        "Motorváltozat",
        "Motor típus",
        "Teljesítmény",
        "Max. sebesség",
        "Átlagfogyasztás (l/100 km)",
        "CO₂ kibocsátás (g/km)",
      ],
      ["1.4 TSI", "Benzin", "150 LE", "210 km/h", "5.0", "110"],
      ["2.0 TDI", "Diesel", "190 LE", "220 km/h", "4.5", "120"],
      ["2.0 TSI", "Benzin", "280 LE", "250 km/h", "7.0", "150"],
      ["2.0 TDI 4x4", "Diesel", "200 LE", "230 km/h", "5.5", "130"],
    ],
    design:
      "A Skoda Superb dizájnja elegáns és modern. Az autó belső tere prémium minőségű anyagokkal van kialakítva, amely kényelmes vezetést és utazást biztosít. A Superb kiemelkedik nagyobb csomagtartójával, tágas kabinjával és prémium felszereltségével.",
    history:
      "A Skoda Superb az első generációval 2001-ben debütált, és azóta folyamatosan fejlődött, hogy megfeleljen a prémium szegmens elvárásainak. A legújabb modellekben már elérhetőek hibrid változatok is, amelyek az elektromos autózás iránti igényt is kielégítik.",
    price: [
      ["Modell", "Ár (HUF)", "Motor", "Hajtás"],
      ["Skoda Superb Alap", "8.500.000 Ft", "1.4 TSI", "Elsőkerék-hajtás"],
      ["Skoda Superb Ambition", "9.500.000 Ft", "2.0 TDI", "4x4"],
      ["Skoda Superb Style", "11.000.000 Ft", "2.0 TSI", "4x4"],
      ["Skoda Superb Laurin & Klement", "	12.500.000 Ft", "2.0 TDI", "4x4"],
    ],
  },    
  {
    id: "superb-kombi",
    name: "Skoda Superb",
    image: "https://winz606.github.io/Webshop/kepek/superbcombi_white.webp",
    description:
      "A Skoda Superb egy prémium középkategóriás autó, amely a márka csúcsváltozata, és kényelmével, tágasságával, valamint fejlett technológiai megoldásaival kiemelkedik a piacon. Az autó elérhető szedán és kombi változatban is.",
    features: [
      "Motor: 1.4 TSI, 2.0 TDI, 2.0 TSI motorváltozatok",
      "Teljesítmény: 150-280 lóerő",
      "Hajtás: Elsőkerék-hajtás / 4x4",
      "Átlagfogyasztás: 4.0-7.0 liter/100 km",
      "Biztonsági jellemzők: Frontális ütközéssegítő, automatikus vészfékezés, adaptív sebességtartó automatikus rendszer",
    ],
    technical: [
      [
        "Motorváltozat",
        "Motor típus",
        "Teljesítmény",
        "Max. sebesség",
        "Átlagfogyasztás (l/100 km)",
        "CO₂ kibocsátás (g/km)",
      ],
      ["1.4 TSI", "Benzin", "150 LE", "210 km/h", "5.0", "110"],
      ["2.0 TDI", "Diesel", "190 LE", "220 km/h", "4.5", "120"],
      ["2.0 TSI", "Benzin", "280 LE", "250 km/h", "7.0", "150"],
      ["2.0 TDI 4x4", "Diesel", "200 LE", "230 km/h", "5.5", "130"],
    ],
    design:
      "A Skoda Superb dizájnja elegáns és modern. Az autó belső tere prémium minőségű anyagokkal van kialakítva, amely kényelmes vezetést és utazást biztosít. A Superb kiemelkedik nagyobb csomagtartójával, tágas kabinjával és prémium felszereltségével.",
    history:
      "A Skoda Superb az első generációval 2001-ben debütált, és azóta folyamatosan fejlődött, hogy megfeleljen a prémium szegmens elvárásainak. A legújabb modellekben már elérhetőek hibrid változatok is, amelyek az elektromos autózás iránti igényt is kielégítik.",
    price: [
      ["Modell", "Ár (HUF)", "Motor", "Hajtás"],
      ["Skoda Superb Alap", "8.500.000 Ft", "1.4 TSI", "Elsőkerék-hajtás"],
      ["Skoda Superb Ambition", "9.500.000 Ft", "2.0 TDI", "4x4"],
      ["Skoda Superb Style", "11.000.000 Ft", "2.0 TSI", "4x4"],
      ["Skoda Superb Laurin & Klement", "	12.500.000 Ft", "2.0 TDI", "4x4"],
    ],
  },   
];
