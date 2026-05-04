/*************************************************************************************************/
/**                                                                                             **/
/**   Welcome.jsx est un composant React qui affiche un message de bienvenue                  **/
/**   après l'inscription de l'utilisateur.                                                    **/
/**                                                                                             **/
/*************************************************************************************************/

import { useNavigate } from 'react-router-dom'
/* On importe useNavigate pour rediriger l'utilisateur */

const Welcome = (props) => {
    /* On reçoit les props envoyées depuis App.jsx */
    const navigate = useNavigate()

    return (
        <div className="welcome">
            {/* Message de bienvenue */}
            <h1>🌿 Bienvenue sur La Maison Jungle !</h1>
            <p>Vous êtes passionné-e de plantes ?</p>
            <p>Bien venu-e sur ce site pour plus de passion ! 🌱</p>
            {/* Bouton pour voir les plantes */}
            <button onClick={() => navigate('/')}>
                Voir les plantes 🌿
            </button>
        </div>
    )
}

export default Welcome