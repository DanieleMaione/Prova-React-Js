/* Questo file definisce uno slice Redux utilizzando la funzione createSlice
 fornita dalla libreria @reduxjs/toolkit. Lo slice gestisce lo stato associato
 ai dati dei libri, utilizzando un reducer per rispondere a diverse azioni
 associate alle richieste asincrone (pending, fulfilled, rejected) tramite il thunk fetchBooks.
*/

import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "./thunks";

// Definizione dello stato iniziale
const initialState = {
  data: [], // Array di libri
  loading: false, // Flag di caricamento
  error: null, // Eventuale messaggio di errore
};

// Creazione di uno slice con createSlice
const booksSlice = createSlice({
  name: "Books Data", // Nome dello slice
  initialState, // Stato iniziale
  reducers: {}, // Azioni definite per lo slice (in questo caso, nessuna)
  extraReducers: (builder) => {
    // Gestione dello stato durante la fase di pending (richiesta in corso)
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
    });

    // Gestione dello stato durante la fase di fulfilled (richiesta completata con successo)
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false; // Imposta il flag di caricamento a false
      state.data = action.payload; // Aggiorna l'array di libri con i dati ottenuti
    });

    // Gestione dello stato durante la fase di rejected (richiesta rifiutata o con errore)
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false; // Imposta il flag di caricamento a false
      state.error = action.error.message; // Memorizza il messaggio di errore
    });
  },
});

// Esporta il reducer
export default booksSlice.reducer;
