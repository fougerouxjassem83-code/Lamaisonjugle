/*************************************************************************************************/
/**                                                                                             **/
/**   LandingPage.jsx est un composant React qui affiche la page d'accueil                    **/
/**   avant que l'utilisateur ne s'inscrive ou se connecte.                                    **/
/**   Elle attire l'attention du visiteur et l'invite à rejoindre la communauté.              **/
/**                                                                                             **/
/*************************************************************************************************/

import { useNavigate } from 'react-router-dom'
/* On importe useNavigate pour rediriger l'utilisateur */

import heroBg from '../assets/hero.jpg'
/* On importe l'image de fond */

const LandingPage = () => {

    const navigate = useNavigate()
    /* On crée une fonction de navigation */

    return (
        /* On applique l'image de fond directement sur la div via style */
        <div className="landing" style={{ backgroundImage: `url(${heroBg})` }}>
            {/* Section principale décalée à gauche */}
            <div className="landing-content">
                {/* Titre accrocheur */}
                <h1 className="landing-title">🌿 La Maison Jungle</h1>
                {/* Slogan */}
                <p className="landing-slogan">Chez vous, partout et ailleurs</p>
                {/* Description */}
                <p className="landing-description">
                    Vous êtes passionné-e de plantes ? 🌱 <br />
                    Rejoignez notre communauté et découvrez <br />
                    les plus belles plantes du monde !
                </p>
                {/* Boutons */}
                <div className="landing-buttons">
                    {/* Bouton inscription */}
                    <button
                        className="landing-btn-primary"
                        onClick={() => navigate('/register')}>
                        Rejoindre la communauté !
                    </button>
                    {/* Bouton connexion */}
                    <button
                        className="landing-btn-secondary"
                        onClick={() => navigate('/login')}>
                        Se connecter
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage