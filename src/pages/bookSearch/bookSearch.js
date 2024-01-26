/*  Questo file definisce il componente "BookSearch" che rappresenta la pagina di ricerca dei libri.
 Il componente utilizza il modulo useSelector di React Redux per selezionare lo stato dallo store e useDispatch per inizializzare il dispatcher.
 È inoltre presente la logica di gestione dello stato interno tramite useState.

 La struttura del componente include un contenitore ("Container") con stili definiti esternamente,
 vari elementi come un titolo ("Title"), un input di testo ("Input"), un bottone per avviare la ricerca ("Button"),
 bottone per le opzioni di filtro ("FilterButtonContainer"), un titolo per visualizzare i risultati della ricerca ("ResultTitle"),
 una lista di libri risultanti ("List") e uno spinner di caricamento ("Spinner").

 Il componente è stato definito come una funzione senza stato (functional component).
*/

// Import delle librerie React e Redux
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectorFilteredBooks, selectorLoading } from "../../redux/selector";
import { fetchBooks } from "../../redux/thunks";

// Import di componenti e stili aggiuntivi
import {
  Container,
  Title,
  Input,
  ResultTitle,
  FilterButtonContainer,
  List,
  ListItem,
} from "./styles";
import Spinner from "../../components/Spinner";
import Button from "../../components/Button";
import HomeButton from "../../components/HomeButton";
import ToggleButton from "../../components/ToggleButton";

// Definizione del componente principale
const BookSearch = () => {
  // Definizione degli stati utilizzati nel componente
  const [query, setQuery] = useState("");
  const [hasEbook, setHasEbook] = useState(false);
  const [hasItalianTranslation, setHasItalianTranslation] = useState(false);

  // Inizializzazione del dispatcher Redux
  const dispatch = useDispatch();

  // Selezione dello stato dallo store Redux utilizzando i selettori
  const filteredBooks = useSelector((state) =>
    selectorFilteredBooks(state, { hasEbook, hasItalianTranslation })
  );
  const loading = useSelector(selectorLoading);

  // Funzione che gestisce la ricerca dei libri
  const handleSearch = () => {
    dispatch(fetchBooks(query));
  };

  // Renderizzazione del componente
  return (
    <Container>
      {/* Componente HomeButton per tornare alla home */}
      <HomeButton />

      {/* Titolo della pagina di ricerca */}
      <Title>Book Search</Title>

      {/* Input per inserire il testo di ricerca */}
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Bottone per avviare la ricerca */}
      <Button onClick={handleSearch} label={"Search"} />

      {/* Titolo per visualizzare i risultati della ricerca */}
      <ResultTitle>Result:</ResultTitle>

      {/* Contenitore per le opzioni di filtro tramite Bottone */}
      <FilterButtonContainer>
        {/* Bottone per filtrare i libri con Ebook */}
        <ToggleButton
          selected={hasEbook}
          onClick={() => setHasEbook(!hasEbook)}
          label="Has Ebook"
        />
        {/* Bottone per filtrare i libri con traduzione italiana */}
        <ToggleButton
          label="Has Italian Translation"
          selected={hasItalianTranslation}
          onClick={() => setHasItalianTranslation(!hasItalianTranslation)}
        />
      </FilterButtonContainer>

      {/* Lista dei libri risultanti dalla ricerca */}
      <List>
        {filteredBooks && !loading ? (
          // Mappa dei libri filtrati
          filteredBooks.map((book) => (
            <ListItem key={book.key}>{book.title}</ListItem>
          ))
        ) : (
          // Spinner di caricamento durante la ricerca
          <Spinner />
        )}
      </List>
    </Container>
  );
};

// Esporta il componente per essere utilizzato in altri file
export default BookSearch;
