import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/" style={{ margin: "0 1rem" }}>Inicio</Link>
      <Link to="/mortandad" style={{ margin: "0 1rem" }}>Mortandad</Link>
      <Link to="/noticias" style={{ margin: "0 1rem" }}>Noticias</Link>
    </nav>
  );
}

export default Header;
