/*************************************************************************************************/
/**                                                                                             **/
/**   App.jsx est le composant principal de l'application "La Maison Jungle".                  **/
/**   Il importe et affiche le composant Banner qui constitue l'en-tête du site.               **/
/**   C'est le point d'entrée de l'interface, appelé depuis main.jsx.                          **/
/**                                                                                             **/
/*************************************************************************************************/

import './App.css'
/* On importe le fichier CSS global de l'application */

import Banner from './components/Banner'
/* On importe le composant Banner depuis le dossier components */

function App() {
  return (
    <>
      <Banner />
      /* On affiche le composant Banner dans l'interface */
    </>
  )
}

export default App
/* On exporte le composant App pour qu'il soit utilisé dans main.jsx */