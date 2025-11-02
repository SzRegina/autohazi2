export type Car = {
  id: string;          
  name: string;
  brand: string;
  price: number;
  img: string;         
  description: string;
};

export const cars: Car[] = [
  {
    id: "skoda-octavia",
    name: "Skoda Octavia",
    brand: "Skoda",
    price: 19990,
    img: "/car-imgs/Skoda_Octavia_IV_liftback_(cropped).jpg",
    description: "Kompakt, fürge városi autó."
  },
  {
    id: "skoda-octaviaVRS",
    name: "Skoda Octavia VRS 1.8",
    brand: "Skoda",
    price: 28990,
    img: "/car-imgs/Skoda_Octavia_VRS_1.8_Front.jpg",
    description: "Sportos karakter, erős motor."
  },
  {
    id: "skoda-karoq",
    name: "Skoda Karoq",
    brand: "Skoda",
    price: 34990,
    img: "/car-imgs/Skoda_Karoq_SE_L_TDi_S-A_1.6_Front.jpg",
    description: "Csendes, kényelmes utazó."
  },
  {
    id: "skoda-superb-combi",
    name: "Skoda Superb Combi",
    brand: "Skoda",
    price: 37990,
    img: "/car-imgs/SKODA-Superb-Combi-001-1-e1462865204840.jpg",
    description: "Villámgyors reagálás, feszes futás."
  },
  {
    id: "skoda_kodiaq",
    name: "Skoda Kodiaq",
    brand: "Skoda",
    price: 41990,
    img: "/car-imgs//Skoda_Kodiaq_Facelift_IMG_6636.jpg",
    description: "Tágas, családi király."
  },
  {
    id: "skoda-superb",
    name: "Skoda Superb",
    brand: "Skoda",
    price: 30990,
    img: "/car-imgs/Škoda_Superb_IV_Combi_Automesse_Ludwigsburg_2024_IMG_1400.jpg",
    description: "Letisztult, elegáns megjelenés."
  }
];
