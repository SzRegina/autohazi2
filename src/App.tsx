import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Gallery from "./components/Gallery"
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.title = "Szépréthy Regina & Bíró Eszter";
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Webshop</h1>
      </header>

      <NavBar />

      <main className="content">
        <section className="section">
          <Gallery />
        </section>
      </main>

      <Footer authors={["Szépréthy Regina", "Bíró Eszter"]} />
    </div>
  );
}
