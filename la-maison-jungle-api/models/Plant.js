/*************************************************************************************************/
/**                                                                                             **/
/**   Plant.js est le modèle Sequelize qui représente la table Plants                         **/
/**   dans la base de données MySQL.                                                           **/
/**                                                                                             **/
/*************************************************************************************************/

const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
/* On importe la connexion à la base de données */

const Plant = sequelize.define('Plant', {
    /* On définit les colonnes de la table */
    name: {
        type: DataTypes.STRING,
        /* Le nom de la plante est une chaîne de caractères */
        allowNull: false
        /* Le nom est obligatoire */
    },
    price: {
        type: DataTypes.FLOAT,
        /* Le prix est un nombre décimal */
        allowNull: false
        /* Le prix est obligatoire */
    },
    image: {
        type: DataTypes.STRING,
        /* L'image est le nom du fichier */
        allowNull: true
        /* L'image est optionnelle */
    },
    care: {
        type: DataTypes.INTEGER,
        /* Le niveau d'entretien est un nombre entre 1 et 3 */
        allowNull: true
        /* Le niveau d'entretien est optionnel */
    },
    category: {
        type: DataTypes.STRING,
        /* La catégorie de la plante ex: fruits, légumes, intérieur */
        allowNull: true
        /* La catégorie est optionnelle */
    }
})

module.exports = Plant
/* On exporte le modèle pour l'utiliser dans les routes */