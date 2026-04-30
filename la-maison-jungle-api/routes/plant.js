/*************************************************************************************************/
/**                                                                                             **/
/**   plant.js contient toutes les routes de l'API pour gérer les plantes.                    **/
/**   GET /plants → récupérer toutes les plantes                                               **/
/**   POST /plants → ajouter une nouvelle plante avec une image                               **/
/**   PUT /plants/:id → mettre à jour une plante existante                                    **/
/**   DELETE /plants/:id → supprimer une plante                                               **/
/**                                                                                             **/
/*************************************************************************************************/

const express = require('express')
const router = express.Router()
const Plant = require('../models/Plant')
const multer = require('multer')
const path = require('path')
/* On importe path pour gérer les chemins absolus */

/* On configure multer pour stocker les images dans public/images */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images'))
        /* On utilise le chemin absolu pour éviter les erreurs */
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
        /* On garde le nom original du fichier */
    }
})

const upload = multer({ storage })
/* On configure multer avec notre stockage */

/*************************************************************************************************/
/**   Quand quelqu'un arrive sur GET "/plants", cette fonction récupère                        **/
/**   toutes les plantes dans la base de données                                               **/
/*************************************************************************************************/
router.get('/', async (req, res) => {
    /* On récupère toutes les plantes */
    const plants = await Plant.findAll()
    /* On envoie les plantes en JSON */
    res.json(plants)
})

/*************************************************************************************************/
/**   Quand quelqu'un arrive sur POST "/plants", cette fonction crée                           **/
/**   une nouvelle plante avec son image dans la base de données                              **/
/*************************************************************************************************/
router.post('/', upload.single('image'), async (req, res) => {
    /* On récupère le nom, le prix et le niveau d'entretien envoyés */
    const { name, price, care } = req.body
    /* On récupère le nom du fichier uploadé par multer */
    const image = req.file.originalname
    /* On crée la plante avec l'image et le niveau d'entretien */
    const plant = await Plant.create({ name, price, image, care })
    /* On envoie la plante créée en JSON */
    res.json(plant)
})

/*************************************************************************************************/
/**   Quand quelqu'un arrive sur PUT "/plants/:id", cette fonction met à jour                  **/
/**   une plante existante dans la base de données                                             **/
/*************************************************************************************************/
router.put('/:id', upload.single('image'), async (req, res) => {
    const id = req.params.id
    const { name, price, care } = req.body
    
    /* On construit l'objet de mise à jour */
    const updateData = { name, price, care }
    
    /* On ajoute l'image seulement si une nouvelle est envoyée */
    if (req.file) {
        updateData.image = req.file.originalname
    }
    
    /* On met à jour la plante */
    await Plant.update(updateData, { where: { id } })
    
    res.json({ message: 'Plante mise à jour !' })
})
/*************************************************************************************************/
/**   Quand quelqu'un arrive sur DELETE "/plants/:id", cette fonction supprime                 **/
/**   une plante de la base de données                                                         **/
/*************************************************************************************************/
router.delete('/:id', async (req, res) => {
    /* On récupère l'ID dans l'URL */
    const id = req.params.id
    /* On supprime la plante */
    await Plant.destroy({ where: { id } })
    /* On envoie un message de confirmation */
    res.json({ message: 'Plante supprimée !' })
})

module.exports = router