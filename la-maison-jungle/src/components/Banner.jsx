/*************************************************************************************************/
/**                                                                                             **/
/**   Banner.jsx est un composant React qui affiche une bannière avec un titre                 **/
/**   et un slogan pour le site "La Maison Jungle".                                            **/
/**   Il utilise des classes CSS pour le style, qui sont définies dans un fichier CSS séparé.  **/
/**   Le composant est simple et statique, il ne prend pas de props ni n'utilise d'état local. **/
/**   Il est destiné à être utilisé comme une partie de l'interface utilisateur du site        **/
/**   pour accueillir les visiteurs et présenter le nom et le slogan de la boutique.           **/
/**                                                                                             **/
/*************************************************************************************************/

import { GiLeafSwirl } from 'react-icons/gi'
{/* On importe l'icône feuille depuis react-icons */}

const Banner = (props) => {
    /* On reçoit les props envoyées depuis App.jsx */
    return (
        <div className="banner">
            {/* On affiche le titre principal */}
            <h1 className="banner-title">{props.title}</h1>
            {/* On affiche le slogan */}
            <p className="banner-content">{props.slogan}</p>
            {/* On affiche le logo avec l'icône et le nom */}
            <div className="banner-logo">
                <GiLeafSwirl color="green" size={40} />
                <span>La maison jungle</span>
            </div>
        </div>
    );
};

export default Banner;