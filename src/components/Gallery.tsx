import { Link } from "react-router-dom";
import { cars } from "../data/cars";

export default function Gallery() {
  return (
    <div id="galeria" className="gallery">
      {cars.slice(0, 6).map((c, i) => (
        <figure className="card" key={c.id}>
          <Link to={`/cars/${c.id}`}>
            <img src={c.img} alt={c.name} />
          </Link>
        </figure>
      ))}
    </div>
  );
}
