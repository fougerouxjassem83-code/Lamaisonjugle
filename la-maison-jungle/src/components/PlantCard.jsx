/*************************************************************************************************/
/**                                                                                             **/
/**   PlantCard.jsx est un composant qui affiche une carte pour une plante.              **/
/**   Il reçoit des props : name, price et image pour afficher les infos de la plante.         **/
/**                                                                                             **/
/*************************************************************************************************/

const PlantCard = (props) => {
    /* On reçoit les props envoyées depuis App.jsx */
    return (
        <div className="plant-card">
            {/* On affiche l'image de la plante */}
            <img src={`http://localhost:3000/images/${props.image}`} alt={props.name} />
            {/* On affiche le nom de la plante */}
            <h2>{props.name}</h2>
            {/* On affiche le prix de la plante */}
            <p>{props.price} €</p>
        </div>
    );
};

export default PlantCard;