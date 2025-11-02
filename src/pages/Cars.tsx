import { Link } from "react-router-dom";
import { cars } from "../data/cars";

export default function Cars() {
  return (
    <main className="content">
      <h2>Autóink</h2>
      <div className="grid">
        {cars.map(c => (
          <article className="card" key={c.id}>
            <img src={c.img} alt={c.name} />
            <h3>{c.name}</h3>
            <p className="muted">{c.brand}</p>
            <strong>{c.price.toLocaleString()} €</strong>
            <div style={{ marginTop: 8 }}>
              <Link to={`/cars/${c.id}`}>Részletek</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
