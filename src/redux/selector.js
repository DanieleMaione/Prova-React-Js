/* Questo file contiene due selettori che vengono utilizzati per estrarre dati dallo stato globale dell'applicazione,
 in particolare dallo stato associato ai dati dei libri gestiti dal reducer "booksSlice".

 Il selettore selectorFilteredBooks filtra l'array di libri in base a criteri specificati.
 Prende in input lo stato globale e le opzioni di filtro come un oggetto.
 Restituisce un nuovo array di libri che soddisfano i criteri specificati:
 - Se hasEbook è true, esclude i libri senza accesso "borrowable" all'ebook.
 - Se hasItalianTranslation è true, esclude i libri senza traduzione italiana.

 Il selettore selectorLoading restituisce lo stato di caricamento dei libri. */

// Selettore che filtra l'array di libri in base ai criteri specificati
export const selectorFilteredBooks = (
  state, // Lo stato globale dell'applicazione
  { hasEbook, hasItalianTranslation } // Opzioni di filtro passate come oggetto
) =>
  state.books.data.filter((book) => {
    // Controllo se il libro deve essere escluso a causa della mancanza dell'ebook
    if (hasEbook && book.ebook_access !== "borrowable") {
      return false;
    }

    // Controllo se il libro deve essere escluso a causa della mancanza di traduzione italiana
    if (
      hasItalianTranslation &&
      book.language &&
      !book.language.includes("ita")
    ) {
      return false;
    }

    // Se il libro non è stato escluso, viene incluso nel risultato finale
    return true;
  });

// Selettore che restituisce lo stato di caricamento dei libri
export const selectorLoading = (state) => state.books.loading;
