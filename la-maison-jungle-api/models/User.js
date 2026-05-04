/*************************************************************************************************/
/**                                                                                             **/
/**   User.js est le modèle Sequelize qui représente la table Users                           **/
/**   dans la base de données MySQL.                                                           **/
/**   Il contient les informations de l'utilisateur : nom, email et mot de passe.             **/
/**                                                                                             **/
/*************************************************************************************************/

const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
/* On importe la connexion à la base de données */

const User = sequelize.define('User', {
    /* On définit les colonnes de la table */
    username: {
        type: DataTypes.STRING,
        /* Le nom d'utilisateur est une chaîne de caractères */
        allowNull: false
        /* Le nom d'utilisateur est obligatoire */
    },
    email: {
        type: DataTypes.STRING,
        /* L'email est une chaîne de caractères */
        allowNull: false,
        /* L'email est obligatoire */
        unique: true
        /* L'email doit être unique */
    },
    password: {
        type: DataTypes.STRING,
        /* Le mot de passe est une chaîne de caractères */
        allowNull: false
        /* Le mot de passe est obligatoire */
    }
})

module.exports = User
/* On exporte le modèle pour l'utiliser dans les routes */