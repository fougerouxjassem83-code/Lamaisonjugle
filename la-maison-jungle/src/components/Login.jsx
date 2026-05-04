/*************************************************************************************************/
/**                                                                                             **/
/**   Login.jsx est un composant React qui affiche le formulaire de connexion.                 **/
/**   Il permet à l'utilisateur de se connecter avec son email et son mot de passe.            **/
/**                                                                                             **/
/*************************************************************************************************/

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
/* On importe useNavigate pour rediriger l'utilisateur */

const Login = (props) => {
    /* On reçoit les props envoyées depuis App.jsx */
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    
    const navigate = useNavigate()
    /* On crée une fonction de navigation */

    const handleLogin = () => {
        fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.message === 'Connexion réussie !') {
                /* On stocke l'utilisateur connecté dans App.jsx via props */
                props.setUser(data.username)
                /* On redirige vers l'accueil */
                navigate('/')
            } else {
                /* On affiche le message d'erreur */
                setMessage(data.message)
            }
        })
    }

    return (
        <div className="register">
            <h2>Se connecter</h2>
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Mot de passe"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Se connecter</button>
            {message && <p>{message}</p>}
        </div>
    )
}

export default Login