const express = require('express');

const appliController = require('../controllers/appli');

const router = express.Router();

router.get('/', appliController.getIndex );

router.get('/liste', appliController.getListe);

router.post('/liste', appliController.postListe)

router.post('/liste/delete/:activiteId',)

module.exports = router