import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <main className="content">
      <header className="header">
        <h1>Webshop</h1>
        <p className="subtitle">Találd meg a következő autód.</p>
      </header>

      <section className="section">
        <h2>Galéria</h2>
        <Gallery />
      </section>
    </main>
  );
}
