import React from "react";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div>
      <header>
        <section className="encabezado">
          <img
            className="imagen-encavezado"
            src="/logoSite.png"
            alt="No encontrado"
          />
          <h1>COVID19 UNA HISTORIA QUE CONTAR</h1>
        </section>
        <nav className="menu-navegacion">
          <Link className="activo" to="/">Inicio</Link>
          <Link to="/noticias">Noticias</Link>
          <Link to="/mortandad">Mortandad</Link>
        </nav>
      </header>

      <main className="principal">
        <section>
          <h2>Introduccion</h2>
          <p>
            El primer caso confirmado de COVID‑19 en Japón fue el 16 de enero de 2020 en la prefectura de Kanagawa, correspondiente a 
            un residente que había viajado desde Wuhan, China. Pocos días después, el 24 de enero, se registró el primer caso en Tokio. 
            Durante los primeros meses del 2020, otras prefecturas como Nara y Osaka comenzaron a reportar sus primeros casos. El primer 
            fallecimiento en Japón se produjo el 14 de febrero de 2020. En febrero, el crucero Diamond Princess, atracado en Yokohama, 
            se convirtió en uno de los primeros focos masivos de infección en el país. El gobierno japonés respondió con medidas como 
            control en fronteras, cuarentenas y la declaración de COVID‑19 como enfermedad designada, intentando frenar la propagación 
            del virus durante los primeros meses de la pandemia.
          </p>
        </section>

      </main>

      <footer>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/noticias">Noticias</Link>
          <Link to="/mortandad">Mortandad</Link>
        </nav>
        <section className="propaganda">
          <img src="/propagandaFooter.png" alt="Propaganda del sitio" />
        </section>
        <p>
          &copy; 2025 Covid19 y su impacto en la sociedad. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default Inicio;
