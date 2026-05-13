/*************************************************************************************************/
/**                                                                                             **/
/**   Categories.jsx est un composant React qui affiche les boutons de catégories.            **/
/**   Il permet à l'utilisateur de filtrer les plantes par catégorie.                         **/
/**                                                                                             **/
/*************************************************************************************************/

const Categories = (props) => {
    /* On reçoit les props envoyées depuis App.jsx */

    /* On définit les catégories disponibles */
    const categories = ['Toutes', 'fruits', 'légumes', 'intérieur', 'extérieur']

    return (
        <div className="categories">
            {/* On parcourt les catégories et on crée un bouton pour chacune */}
            {categories.map((category) => (
                <button
                    key={category}
                    className={props.selected === category ? 'category-btn active' : 'category-btn'}
                    /* On applique la classe active si la catégorie est sélectionnée */
                    onClick={() => props.onSelect(category)}
                    /* Callback : on envoie la catégorie sélectionnée à App.jsx */
                >
                    {category}
                </button>
            ))}
        </div>
    )
}

export default Categories