import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./css/style.css";
import Inicio from "./pages/Inicio";
import Mortandad from "./pages/Mortandad";
import Noticias from "./pages/Noticias";

function App() {
  return (
    <Router>
      <Header />
      <div style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/mortandad" element={<Mortandad />} />
          <Route path="/noticias" element={<Noticias />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
