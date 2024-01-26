/* Questo file rappresenta la configurazione dello store Redux utilizzando la funzione configureStore
 fornita dalla libreria @reduxjs/toolkit.

 La funzione configureStore accetta un oggetto di configurazione come argomento, in cui
 l'attributo "reducer" specifica come gli stati dei diversi reducer sono combinati nello store.

 In questo caso, è stato definito un unico reducer "bookReducer" associato ai dati dei libri,
 e questo reducer è collegato allo stato globale dello store con la chiave "books".*/

// Importa la funzione configureStore dalla libreria @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";

// Importa il reducer associato ai dati dei libri
import bookReducer from "./slice";

// Configurazione dello Store di Redux utilizzando configureStore
export const store = configureStore({
  // L'oggetto reducer specifica come gli stati dei diversi reducer sono combinati nello store
  reducer: {
    books: bookReducer, // Collega il reducer dei libri come "books" nello stato dello store
  },
});
