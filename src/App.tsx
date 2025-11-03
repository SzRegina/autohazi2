import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Gallery from "./components/Gallery";
import Modell from "./pages/Cars";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.title = "Szépréthy Regina & Bíró Eszter";
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <h1>Webshop</h1>
        </header>

        <NavBar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Gallery />} />
            <Route path="/cars/:id" element={<Modell />} />
          </Routes>
        </main>

        <Footer authors={["Szépréthy Regina", "Bíró Eszter"]} />
      </div>
    </BrowserRouter>
  );
}
