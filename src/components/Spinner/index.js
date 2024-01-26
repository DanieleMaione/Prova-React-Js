/*  Questo file definisce il componente "Spinner" che rappresenta un indicatore di caricamento.
 Il componente utilizza uno stile esterno definito in "./styles".

 La struttura del componente consiste in un elemento "Loader" che è definito dagli stili esterni.
 Il componente è stato definito come una funzione senza stato (functional component).
*/

// Import dello stile definito esternamente
import { Loader } from "./styles";

// Definizione del componente Spinner
const Spinner = () => <Loader></Loader>;

// Esporta il componente per essere utilizzato in altri file
export default Spinner;
