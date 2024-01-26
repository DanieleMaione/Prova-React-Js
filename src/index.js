/* Questo file rappresenta il punto di ingresso dell'applicazione React.
 Utilizza ReactDOM.createRoot per creare un root React e definisce il punto di montaggio come l'elemento con id "root".

 Nella fase di rendering, viene utilizzato React.StrictMode per rilevare potenziali problemi nel codice durante lo sviluppo.

 Il componente Provider di Redux avvolge l'intera applicazione, fornendo lo store Redux a tutti i componenti.
 BrowserRouter gestisce le rotte dell'applicazione.

 L'applicazione principale è rappresentata dal componente App. 
*/

// Importa le librerie React e ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Importa il foglio di stile principale dell'app, il componente principale App,
// e le librerie necessarie per la gestione dello stato globale con Redux
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Crea un root React usando createRoot di ReactDOM e specifica il punto di montaggio
const root = ReactDOM.createRoot(document.getElementById("root"));

// Esegue il rendering dell'app nell'elemento con id "root"
root.render(
  // Utilizza React.StrictMode per identificare possibili problemi nel codice durante lo sviluppo
  <React.StrictMode>
    {/* Utilizza il componente Provider di Redux per fornire lo store a tutti i componenti */}
    <Provider store={store}>
      {/* Utilizza BrowserRouter per gestire le rotte dell'applicazione */}
      <BrowserRouter>
        {/* Il componente principale dell'app */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
