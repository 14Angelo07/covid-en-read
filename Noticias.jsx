import React from "react";
import { Link } from "react-router-dom";

function Noticias() {
  return (
    <div>
      <header>
        <section className="encabezado">
          <img
            className="imagen-encavezado"
            src="/image.png"
            alt="No encontrado"
          />
          <h1>COVID19 UNA HISTORIA QUE CONTAR</h1>
        </section>
        <nav className="menu-navegacion">
          <Link to="/">Inicio</Link>
          <Link className="activo" to="/noticias">Noticias</Link>
          <Link to="/mortandad">Mortandad</Link>
        </nav>
      </header>

      <main className="principal">
        <h2>Noticias</h2>

        <p>
          En España, durante la última temporada epidemiológica se ha observado un repunte de infecciones respiratorias que incluye COVID‑19, aunque la intensidad de los casos se mantiene baja en comparación con olas anteriores de la pandemia. En la última semana evaluada, la incidencia de COVID‑19 se situó en torno a 23,1 casos por 100 000 habitantes, con circulación del virus junto a otras infecciones respiratorias como la gripe y el virus sincitial respiratorio. 
          A pesar de este repunte, las hospitalizaciones por COVID‑19 han descendido notablemente, con tasas históricamente bajas de ingresos en unidades de cuidado intensivo y en hospitalización general. Los medios destacan que el virus sigue presente y siendo monitorizado por los sistemas de salud pública.
        </p>

        <p>
          En Ecuador, se ha reportado un aumento reciente de infecciones respiratorias, incluyendo COVID‑19, debido a la circulación continua de variantes del virus y la temporada de otros virus respiratorios. En varios hospitales se ha registrado un incremento de consultas por síntomas respiratorios, lo que pone presión en los servicios sanitarios, aunque la situación no alcanza los niveles de emergencia de los picos de la pandemia. 
          El monitoreo sanitario continúa recopilando datos de hospitales centinela, mostrando una tendencia de casos en aumento, aunque muchos casos graves son los que se registran oficialmente.
        </p>
      </main>
    </div>
  );
}

export default Noticias;
