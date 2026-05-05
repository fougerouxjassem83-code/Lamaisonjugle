/*************************************************************************************************/
/**                                                                                             **/
/**   Navbar.jsx est un composant React qui affiche la barre de navigation.                   **/
/**   Elle contient les liens vers les différentes pages de l'application.                     **/
/**                                                                                             **/
/*************************************************************************************************/

import { Link } from 'react-router-dom'
/* On importe Link depuis react-router-dom pour naviguer entre les pages */

const Navbar = (props) => {
    /* On reçoit les props envoyées depuis App.jsx */
    return (
        <nav className="navbar">
            {/* Lien vers la page d'accueil */}
            <Link to="/">🌿 La Maison Jungle</Link>
            <div className="navbar-links">
                {/* Rendu conditionnel : si user est connecté on affiche son nom */}
                {props.user ? (
                    <>
                        {/* Bouton panier dans la navbar */}
                        <button className="navbar-cart" onClick={props.onCartOpen}>
                            🛒 Panier ({props.cartCount})
                        </button>
                        {/* On affiche le nom de l'utilisateur connecté */}
                        <span className="navbar-user">👋 Bonjour {props.user} !</span>
                        {/* Bouton de déconnexion */}
                        <button onClick={props.onLogout}>Se déconnecter</button>
                    </>
                ) : (
                    <>
                        {/* Lien vers la page d'inscription */}
                        <Link to="/register">S'inscrire</Link>
                        {/* Lien vers la page de connexion */}
                        <Link to="/login">Se connecter</Link>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Navbar