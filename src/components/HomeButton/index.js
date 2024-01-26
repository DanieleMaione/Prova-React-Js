/* Questo file definisce il componente "HomeButton" che rappresenta un collegamento alla home page.
 Il componente utilizza uno stile esterno definito in "./styles".

 La struttura del componente consiste in un elemento "HomeLink" che è definito dagli stili esterni.
 Il componente è stato definito come una funzione senza stato (functional component).*/

// Import dello stile definito esternamente
import { HomeLink } from "./styles";

// Definizione del componente HomeButton
const HomeButton = () => <HomeLink to="/">Home Page</HomeLink>;

// Esporta il componente per essere utilizzato in altri file
export default HomeButton;
