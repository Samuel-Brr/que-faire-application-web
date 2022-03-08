const express = require('express');

const authController = require('../controllers/auth.js');

const router = express.Router();

router.get('/connexion', authController.getConnexion);

router.get('/inscription', authController.getInscription);

router.post('/inscription', authController.postInscription)

module.exports = router