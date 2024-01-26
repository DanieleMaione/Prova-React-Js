/*  Questo file definisce il componente "Counter" che rappresenta una pagina con un contatore.
 Il componente utilizza il modulo useState di React per gestire lo stato del contatore.

 La struttura del componente include un contenitore ("Container") con uno stile definito esternamente.
 All'interno del contenitore ci sono un componente "HomeButton" per tornare alla home,
 un titolo ("Title") che indica la natura del componente, un testo ("CountText") che mostra il valore corrente del contatore,
 e un bottone ("Button") che incrementa il contatore quando viene cliccato.

 Il componente è stato definito come una funzione senza stato (functional component).
*/

// Import delle librerie React e stili definiti
import React, { useState } from "react";
import { Container, Title, CountText } from "./styles";
import Button from "../../components/Button";
import HomeButton from "../../components/HomeButton";

// Definizione del componente Counter
const Counter = () => {
  // Utilizzo del hook useState per gestire lo stato del contatore
  const [count, setCount] = useState(0);

  // Renderizzazione del componente
  return (
    <Container>
      {/* Componente HomeButton per tornare alla home */}
      <HomeButton />

      {/* Titolo del contatore */}
      <Title>Counter</Title>

      {/* Testo che mostra il valore corrente del contatore */}
      <CountText>Count: {count}</CountText>

      {/* Bottone per incrementare il contatore */}
      <Button onClick={() => setCount(count + 1)} label={"Increment"} />
    </Container>
  );
};

// Esporta il componente per essere utilizzato in altri file
export default Counter;
