/*************************************************************************************************/
/**                                                                                             **/
/**   auth.js contient toutes les routes de l'API pour gérer l'authentification.              **/
/**   POST /auth/register → créer un compte                                                    **/
/**   POST /auth/login → se connecter                                                          **/
/**                                                                                             **/
/*************************************************************************************************/

const express = require('express')
const router = express.Router()
const User = require('../models/User')
/* On importe le modèle User */

/*************************************************************************************************/
/**   Quand quelqu'un arrive sur POST "/auth/register", cette fonction crée                    **/
/**   un nouvel utilisateur dans la base de données                                            **/
/*************************************************************************************************/
router.post('/register', async (req, res) => {
    /* On récupère les données envoyées */
    const { username, email, password } = req.body
    /* On crée l'utilisateur dans la base de données */
    const user = await User.create({ username, email, password })
    /* On envoie un message de confirmation */
    res.json({ message: 'Compte créé avec succès !' })
})

/*************************************************************************************************/
/**   Quand quelqu'un arrive sur POST "/auth/login", cette fonction vérifie                    **/
/**   les informations de connexion                                                            **/
/*************************************************************************************************/
router.post('/login', async (req, res) => {
    /* On récupère les données envoyées */
    const { email, password } = req.body
    /* On cherche l'utilisateur dans la base de données */
    const user = await User.findOne({ where: { email, password } })
    /* Si l'utilisateur n'existe pas on envoie une erreur */
    if (!user) return res.status(404).json({ message: 'Email ou mot de passe incorrect !' })
    /* On envoie les infos de l'utilisateur */
    res.json({ message: 'Connexion réussie !', username: user.username })
})

module.exports = router 