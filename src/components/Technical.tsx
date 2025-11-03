import { Car } from "../data/carsData";

export function Technical({ car }: { car: Car }) {
  const [headers, ...rows] = car.technical;

  return (
    <section>
      <h3>Motorváltozatok és műszaki adatok:</h3>
      <table>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
