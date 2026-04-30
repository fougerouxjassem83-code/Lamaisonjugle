/*************************************************************************************************/
/**                                                                                             **/
/**   Footer.jsx est un composant React qui affiche le pied de page du site.                  **/
/**   Il contient un formulaire pour laisser son mail.                                         **/
/**                                                                                             **/
/*************************************************************************************************/

const Footer = () => {
    return (
        <footer className="footer">
            {/* On affiche le texte principal */}
            <p>Pour les passionné-e-s de plantes 🌱🌿</p>
            {/* On affiche le label */}
            <p>Laissez-nous votre mail :</p>
            {/* On affiche l'input */}
            <input type="email" placeholder="Entrez votre mail" />
        </footer>
    );
};

export default Footer;