/*************************************************************************************************/
/**                                                                                             **/
/**   CareScale.jsx est un composant React qui affiche les étoiles d'entretien d'une plante.  **/
/**   Il reçoit une prop : care qui est un nombre entre 1 et 3.                               **/
/**                                                                                             **/
/*************************************************************************************************/

import { GiWaterDrop } from 'react-icons/gi'
{/* On importe l'icône goutte d'eau depuis react-icons */}

const CareScale = (props) => {
    /* On crée un tableau de 3 éléments pour afficher les gouttes */
    console.log('care reçu :', props.care)
    const drops = [1, 2, 3]

    return (
        <div className="care-scale">
            {/* On parcourt le tableau et on affiche une goutte pour chaque élément */}
            {drops.map((drop) => (
                <GiWaterDrop
                    key={drop}
                    color={drop <= parseInt(props.care) ? '#5F9EA0' : 'grey'}
/* On convertit care en nombre avec parseInt */
                    size={20}
                />
            ))}
        </div>
    )
}

export default CareScale


