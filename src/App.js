/* Il componente App è il componente principale dell'applicazione React.
 Utilizza react-router-dom per gestire le rotte dell'applicazione.

 Il componente Routes contiene le definizioni delle rotte dell'applicazione.
 Ogni Route è associata a un percorso specifico e a un componente da renderizzare quando quel percorso è corrisposto.

 La prima Route corrisponde al percorso "/" (Home) e renderizza il componente Home.
 La seconda Route corrisponde al percorso "/counter" e renderizza il componente Counter.
 La terza Route corrisponde al percorso "/book-search" e renderizza il componente BookSearch.

 I componenti Home, Counter, e BookSearch sono importati dalle rispettive pagine.
 L'attributo 'element' di ogni Route specifica il componente da renderizzare quando il percorso è corrisposto.
 Il componente App è esportato per essere utilizzato nel punto di ingresso dell'applicazione.
*/

// Importa i componenti necessari da react-router-dom e il foglio di stile principale dell'app
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Importa i componenti delle pagine dell'app
import Home from "./pages/home";
import Counter from "./pages/counter";
import BookSearch from "./pages/bookSearch/bookSearch";

// Definizione del componente principale dell'app
function App() {
  return (
    // Utilizza il componente Routes per definire le rotte dell'applicazione
    <Routes>
      {/* Definizione della rotta per la pagina Home */}
      <Route path="/" element={<Home />} />

      {/* Definizione della rotta per la pagina Counter */}
      <Route path="/counter" element={<Counter />} />

      {/* Definizione della rotta per la pagina BookSearch */}
      <Route path="/book-search" element={<BookSearch />} />
    </Routes>
  );
}

// Esporta il componente principale dell'app
export default App;
