import { useParams } from "react-router-dom";
import { cars } from "../data/carsData";
import { Head } from "../components/Head";
import { Features } from "../components/Features";
import { Technical } from "../components/Technical";
import { Design } from "../components/Design";
import { History } from "../components/History";
import { Price } from "../components/Price";

export default function Modell() {
const { id } = useParams<{ id: string }>();
const car = cars.find((c) => c.id === id);

  if (!car) {
    return <p>Nincs adat</p>;
  }

  return (
    <div className="modell">
      <Head car={car} />
      <Features car={car} />
      <Technical car={car} />
      <Design car={car} />
      <History car={car} />
      <Price car={car} />
      <p>További információkért kérjük, vegye fel velünk a kapcsolatot!</p>
    </div>
  );
}
