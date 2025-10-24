import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./pages/Home";
import Cars from "./pages/Cars";

export default function App() {
  // Követelmény: title tagben a csapattagok neve
  useEffect(() => {
    document.title = "Webshop – Regina & Partner";
  }, []);

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

