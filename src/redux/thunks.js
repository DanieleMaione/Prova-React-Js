/* La thunk asincrona fetchBooks viene creata utilizzando createAsyncThunk.
 Questo permette di gestire facilmente operazioni asincrone nel contesto di Redux.
 La funzione asincrona esegue una richiesta GET ai libri usando axios,
 ottenendo i libri dalla risposta e restituendoli.
 In caso di errore durante la richiesta, l'eccezione viene lanciata e gestita.
*/

// Importa le dipendenze necessarie
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Crea una thunk asincrona utilizzando createAsyncThunk
export const fetchBooks = createAsyncThunk(
  // Nome univoco per la thunk
  "books/fetchBooks",

  // Funzione asincrona che contiene la logica della richiesta
  async (query) => {
    try {
      // Esegue una richiesta GET utilizzando axios per ottenere i libri in base alla query
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${query}`
      );

      // Restituisce i libri ottenuti dalla risposta
      return response.data.docs;
    } catch (error) {
      // Se si verifica un errore, lancia l'eccezione
      throw error;
    }
  }
);
