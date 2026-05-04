/*************************************************************************************************/
/**                                                                                             **/
/**   app.js est le fichier principal du serveur Express de La Maison Jungle.                  **/
/**   Il connecte la base de données et démarre le serveur sur le port 3000.                   **/
/**                                                                                             **/
/*************************************************************************************************/

const express = require('express')
const cors = require('cors')
const multer = require('multer')
/* On importe multer pour gérer les uploads d'images */
const sequelize = require('./config/database')
const Plant = require('./models/Plant')
const User = require('./models/User')
/* On importe le modèle User pour créer la table dans la base de données */

require('dotenv').config()

const app = express()

/* On configure multer pour stocker les images dans public/images */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
        /* On stocke les images dans le dossier public/images */
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
        /* On garde le nom original du fichier */
    }
})

/* On exporte upload pour l'utiliser dans les routes */
const upload = multer({ storage })

/* On autorise React à communiquer avec notre API */
app.use(cors())

/* On autorise le serveur à lire le JSON */
app.use(express.json())

/* On sert les fichiers statiques depuis le dossier public */
app.use(express.static('public'))

const plantRouter = require('./routes/plant')
/* On utilise la route plant */
app.use('/plants', plantRouter)

const authRouter = require('./routes/auth')
/* On importe la route auth */
app.use('/auth', authRouter)

/* On synchronise la base de données et on démarre le serveur */
sequelize.sync({ force: false })
    .then(() => {
        console.log('Base de données connectée !')
        app.listen(3000, () => {
            console.log('Serveur démarré sur le port 3000')
        })
    })
    .catch((err) => {
        console.log('Erreur de connexion à la base de données :', err)
    })

module.exports = app