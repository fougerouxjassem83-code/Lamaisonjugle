/*************************************************************************************************/
/**                                                                                             **/
/**   main.jsx est le point d'entrée de l'application React.                                  **/
/**   Il configure les routeurs pour naviguer entre les pages.                                   **/
/**                                                                                             **/
/*************************************************************************************************/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
/* On importe BrowserRouter pour gérer la navigation */
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* On entoure l'application avec BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)