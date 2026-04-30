/*************************************************************************************************/
/**                                                                                             **/
/**   Cart.jsx est un composant React qui affiche le panier de l'utilisateur.                 **/
/**   Il reçoit des props : cart, total, onClose et onClear                                   **/
/**                                                                                             **/
/*************************************************************************************************/

const Cart = (props) => {
    return (
        <div className="cart">
            {/* Bouton fermer */}
            <button onClick={props.onClose}>Fermer</button>
            <h2>Panier</h2>
            {/* Liste des plantes du panier */}
            <ul>
                {props.cart.map((plant, index) => (
                    <li key={index}>{plant.name} {plant.price}€</li>
                ))}
            </ul>
            {/* Total */}
            <p><strong>Total : {props.total}€</strong></p>
            {/* Bouton vider le panier */}
            <button onClick={props.onClear}>Vider le panier</button>
        </div>
    )
}

export default Cart