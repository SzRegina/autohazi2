export type Car = {
  id: string;          // slug/azonosító az URL-hez
  name: string;
  brand: string;
  price: number;
  img: string;         // pl. "/imgs/fox.jpg"
  description: string;
};

export const cars: Car[] = [
  {
    id: "fox-terrier-gt",
    name: "Fox Terrier GT",
    brand: "Winz Motors",
    price: 19990,
    img: "/imgs/fox.jpg",
    description: "Kompakt, fürge városi autó."
  },
  {
    id: "vitesse-2",
    name: "Vitesse 2",
    brand: "Ardarosa Auto",
    price: 28990,
    img: "/imgs/vitesse.jpg",
    description: "Sportos karakter, erős motor."
  },
  {
    id: "aurora-s",
    name: "Aurora S",
    brand: "Regina Labs",
    price: 34990,
    img: "/imgs/aurora.jpg",
    description: "Csendes, kényelmes utazó."
  },
  {
    id: "bolt-r",
    name: "Bolt R",
    brand: "Eszter Dynamics",
    price: 37990,
    img: "/imgs/bolt.jpg",
    description: "Villámgyors reagálás, feszes futás."
  },
  {
    id: "atlas-x",
    name: "Atlas X",
    brand: "Northwind",
    price: 41990,
    img: "/imgs/atlas.jpg",
    description: "Tágas, családi király."
  },
  {
    id: "noir-c",
    name: "Noir C",
    brand: "Kuro Motors",
    price: 30990,
    img: "/imgs/noir.jpg",
    description: "Letisztult, elegáns megjelenés."
  }
];
