/*  Questo file definisce il componente "Button" che rappresenta un bottone generico.
 Il componente utilizza uno stile esterno definito in "./styles".

 La struttura del componente consiste in un elemento "GenericButton" che è definito dagli stili esterni.
 Il componente è stato definito come una funzione con stato (functional component) che accetta le proprietà "onClick" e "label".
*/

// Import dello stile definito esternamente
import { GenericButton } from "./styles";

// Definizione del componente Button
const Button = ({ onClick, label }) => {
  // Restituisce un bottone generico con le proprie proprietà
  return <GenericButton onClick={onClick}>{label}</GenericButton>;
};

// Esporta il componente per essere utilizzato in altri file
export default Button;
