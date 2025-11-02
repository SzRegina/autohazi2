import { Link } from "react-router-dom";
import type { Car } from "../data/cars";

export default function CarCard({ car }: { car: Car }) {
  return (
    <article className="card">
      <img src={car.img} alt={car.name} />
      <h3>{car.name}</h3>
      <p className="muted">{car.brand}</p>
      <strong>{car.price.toLocaleString()} €</strong>
      <div>
        <Link to={`/cars/${car.id}`}>Részletek</Link>
      </div>
    </article>
  );
}
