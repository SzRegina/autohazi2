import { useEffect, useState } from "react";
import CarCard from "../components/CarCard"
import { cars as seed, type Car } from "../data/cars";

export default function Cars() {
  const [list, setList] = useState<Car[]>([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    // itt lehetne fetch is – most seed
    setList(seed);
  }, []);

  const filtered = list.filter(c =>
    (c.name + " " + c.brand).toLowerCase().includes(q.toLowerCase())
  );

  return (
    <main className="container">
      <h2>Autóink</h2>
      <input
        placeholder="Keresés…"
        value={q}
        onChange={e => setQ(e.target.value)}
        className="search"
      />
      <div className="grid">
        {filtered.map(c => <CarCard key={c.id} car={c} />)}
      </div>
    </main>
  );
}
