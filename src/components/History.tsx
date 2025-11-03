import { Car } from "../data/carsData";

export function History({ car }: { car: Car }) {
  return (
    <section>
      <h3>{car.name} története:</h3>
      <p>{car.history}</p>
    </section>
  );
}

