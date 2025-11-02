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
  }
];
