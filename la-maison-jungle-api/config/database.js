/*************************************************************************************************/
/**                                                                                             **/
/**   database.js est le fichier de configuration de la connexion à la base de données MySQL.  **/
/**   Il utilise Sequelize pour se connecter à la base de données.                             **/
/**   Les informations de connexion sont stockées dans le fichier .env                         **/
/**                                                                                             **/
/*************************************************************************************************/

const { Sequelize } = require('sequelize')
/* On importe Sequelize pour gérer la connexion à la base de données */

require('dotenv').config()
/* On charge les variables d'environnement depuis le fichier .env */

const sequelize = new Sequelize(
    /* On crée une nouvelle instance de Sequelize avec les informations de connexion */
    process.env.DB_NAME,
    /* Le nom de la base de données récupéré depuis le fichier .env */
    process.env.DB_USER,
    /* Le nom d'utilisateur récupéré depuis le fichier .env */
    process.env.DB_PASSWORD,
    /* Le mot de passe récupéré depuis le fichier .env */
    {
        host: process.env.DB_HOST,
        /* L'adresse du serveur MySQL récupérée depuis le fichier .env */
        dialect: 'mysql'
        /* On indique à Sequelize qu'on utilise MySQL */
    }
)

module.exports = sequelize
/* On exporte la connexion pour l'utiliser dans les autres fichiers */