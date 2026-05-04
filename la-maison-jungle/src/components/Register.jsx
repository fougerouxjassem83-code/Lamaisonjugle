/*************************************************************************************************/
/**                                                                                             **/
/**   Register.jsx est un composant React qui affiche le formulaire d'inscription.             **/
/**   Il permet à l'utilisateur de créer un compte avec un nom, un email et un mot de passe.  **/
/**   Après l'inscription il redirige vers la page de bienvenue.                               **/
/**                                                                                             **/
/*************************************************************************************************/

import { useState } from 'react'
/* On importe le Hook useState depuis React */

import { useNavigate } from 'react-router-dom'
/* On importe useNavigate pour rediriger l'utilisateur */

const Register = () => {

    /* On crée des états pour stocker les données du formulaire */
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const navigate = useNavigate()
    /* On crée une fonction de navigation */

    /* Gestionnaire d'événement : fonction qui envoie les données à l'API */
    const handleRegister = () => {
        fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.message === 'Compte créé avec succès !') {
                /* On redirige vers la page de bienvenue */
                navigate('/welcome')
            } else {
                /* On affiche le message d'erreur */
                setMessage(data.message)
            }
        })
    }

    return (
        <div className="register">
            <h2>Créer un compte</h2>
            {/* On affiche le champ nom */}
            <input
                type="text"
                placeholder="Nom d'utilisateur"
                onChange={(e) => setUsername(e.target.value)}
            />
            {/* On affiche le champ email */}
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            {/* On affiche le champ mot de passe */}
            <input
                type="password"
                placeholder="Mot de passe"
                onChange={(e) => setPassword(e.target.value)}
            />
            {/* On affiche le bouton d'inscription */}
            <button onClick={handleRegister}>S'inscrire</button>
            {/* On affiche le message d'erreur si il y en a un */}
            {message && <p>{message}</p>}
        </div>
    )
}

export default Register