/*************************************************************************************************/
/**                                                                                             **/
/**   PlantItem.jsx est un composant qui affiche une carte pour une plante.              **/
/**   Il reçoit des props : name, price, image et care pour afficher les infos de la plante.  **/
/**   Il contient un bouton Ajouter pour ajouter la plante au panier.                          **/
/**                                                                                             **/
/*************************************************************************************************/

import CareScale from './CareScale'
/* On importe le composant CareScale pour afficher les gouttes d'entretien */

const PlantItem = (props) => {
    /* On reçoit les props envoyées depuis App.jsx */
    return (
        <div className="plant-item">
            {/* On affiche le badge prix */}
            <div className="plant-item-price">
                <span>{props.price}€</span>
            </div>
            {/* On affiche l'image de la plante */}
            <img src={`http://localhost:3000/images/${props.image}`} alt={props.name} />
            {/* On affiche le nom de la plante */}
            <h2>{props.name}</h2>
            {/* On affiche les gouttes d'entretien */}
            <CareScale care={props.care} />
            {/* On affiche le bouton Ajouter en dessous de ma carte */}
           <button className="plant-item-button" onClick={props.onAdd}>Ajouter</button>
        </div>
    );
};

export default PlantItem;