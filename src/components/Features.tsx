import { Car } from "../data/carsData";

export function Features({ car }: { car: Car }) {
  return (
    <section>
      <h3>Jellemzők:</h3>
      <ul>
        {car.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </section>
  );
}
