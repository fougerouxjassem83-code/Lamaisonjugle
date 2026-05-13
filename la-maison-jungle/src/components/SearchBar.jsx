/*************************************************************************************************/
/**                                                                                             **/
/**   SearchBar.jsx est un composant React qui affiche une barre de recherche.                **/
/**   Il permet à l'utilisateur de filtrer les plantes par nom en temps réel.                 **/
/**                                                                                             **/
/*************************************************************************************************/

const SearchBar = (props) => {
    /* On reçoit les props envoyées depuis App.jsx */
    return (
        <div className="search-bar">
            {/* On affiche l'input de recherche */}
            <input
                type="text"
                placeholder="🔍 Rechercher une plante..."
                onChange={(e) => props.onSearch(e.target.value)}
                /* ici je rajoute un Callback pour envoyer la valeur saisie à App.jsx */
            />
        </div>
    )
}

export default SearchBar
