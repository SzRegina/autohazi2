import { Car } from "../data/carsData";

export function Design({ car }: { car: Car }) {
  return (
    <section>
      <h3>Design:</h3>
      <p>{car.design}</p>
    </section>
  );
}
