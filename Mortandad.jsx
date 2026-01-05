import React from "react";
import { Link } from "react-router-dom";

function Mortandad() {
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
          <Link to="/noticias">Noticias</Link>
          <Link className="activo" to="/mortandad">Mortandad</Link>
        </nav>
      </header>

      <main className="principal">
        <h2>Mortandad</h2>
        <p>España ha registrado en total más de 121 000 fallecidos por COVID‑19 desde el inicio de la pandemia.
        Estas cifras reflejan los datos oficiales acumulados reportados por el Ministerio de Sanidad de España.
        Durante los picos de la pandemia, el exceso de mortalidad en España fue significativo, especialmente en regiones como Madrid.
        Con el paso del tiempo, la COVID‑19 ha dejado de figurar entre las principales causas de muerte en España gracias a la vacunación y la inmunidad adquirida.</p>

        <p>Ecuador confirmó su primer caso de COVID‑19 el 29 de febrero de 2020.
        Las cifras de fallecidos crecieron rápidamente durante 2020‑2021, alcanzando más de 67 000 muertes confirmadas hasta mayo de 2022.
        En total, Ecuador reportó más de 1 065 013 casos confirmados de COVID‑19.
        El análisis de exceso de mortalidad sugiere que la mortalidad real fue mayor que los registros oficiales, con aproximadamente 36 402 muertes en exceso entre enero y septiembre de 2020.
        Esto indica que muchas muertes indirectas o no confirmadas podrían estar relacionadas con la pandemia, especialmente en provincias como Guayas.</p>

        <p>Comparando ambos países, España tuvo un exceso de mortalidad notable durante los picos de la pandemia, mientras que Ecuador mostró un impacto más severo respecto a los datos oficiales.
        La mortalidad observada en ambos países estuvo influenciada por la accesibilidad al sistema de salud, tasas de vacunación y metodologías de registro de fallecimientos.
        En general, los números oficiales pueden subestimar el impacto real de COVID‑19, especialmente en lugares con menor capacidad de pruebas o seguimiento epidemiológico.</p>
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

export default Mortandad;
