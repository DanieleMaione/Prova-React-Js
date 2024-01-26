/* // Questo file definisce il componente "Home" che rappresenta la pagina principale dell'applicazione.
// Il componente utilizza il modulo Link di React Router per creare collegamenti navigabili tra le diverse pagine dell'app.

// Il componente è definito come una funzione senza stato (functional component).
// Viene importato lo stile esterno dalla cartella "./styles" e utilizzato per lo stile del componente.

// La struttura principale del componente include un contenitore ("Container") e un menu di navigazione ("Menu").
// Il menu contiene una lista ordinata ("ul") con tre elementi di menu, ciascuno contenente un collegamento React Router ("Link").
// I collegamenti reindirizzano rispettivamente alla Home ("/"), al Counter ("/counter") e alla ricerca dei libri ("/book-search").
*/

// Import delle librerie React e React Router
import React from "react";
import { Link } from "react-router-dom";

// Import dello stile definito esternamente
import { Container, Menu } from "./styles";

// Definizione del componente Home
const Home = () => (
  <Container>
    {/* Contenitore principale */}
    <Menu>
      {/* Menu di navigazione */}
      <ul>
        {/* Elemento del menu per la Home con Link React Router */}
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* Elemento del menu per il Counter con Link React Router */}
        <li>
          <Link to="/counter">Counter</Link>
        </li>

        {/* Elemento del menu per la ricerca dei libri con Link React Router */}
        <li>
          <Link to="/book-search">Book Search</Link>
        </li>
      </ul>
    </Menu>
  </Container>
);

// Esporta il componente per essere utilizzato in altri file
export default Home;
