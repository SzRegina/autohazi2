import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <main className="content">
      <header className="header">
        <h1>Webshop</h1>
      </header>

      <section className="section">
        <Gallery />
      </section>
    </main>
  );
}
