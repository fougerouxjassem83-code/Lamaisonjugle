//****************************************************************** */
//  Banner.jsx est un composant React qui affiche une bannière avec un titre et un slogan pour le site "La maison jungle".
//  Il utilise des classes CSS pour le style, qui sont définies dans un fichier CSS séparé.
//  Le composant est simple et statique, il ne prend pas de props ni n'utilise d'état local.
//  Il est destiné à être utilisé comme une partie de l'interface utilisateur du site pour accueillir les visiteurs et présenter le thème de la maison jungle.
// ****************************************************************** */

const Banner = () => {
    return (
        <div className="banner">                
            <h1 className="banner-title">La maison jungle</h1>
            <p className="banner-content">Chez vous, partout et ailleurs</p>
        </div>
    );
}


export default Banner;