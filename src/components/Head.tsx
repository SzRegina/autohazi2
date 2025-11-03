import { Car } from "../data/carsData";

export function Head({ car }: { car: Car }) {
  return (
    <section className="head">
      <h2>{car.name}</h2>
      <div className="head-pict"><img src={car.image} alt={car.name}/></div>
      <p>{car.description}</p>
    </section>
  );
}
