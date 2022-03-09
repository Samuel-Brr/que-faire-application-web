const express = require('express');

const appliController = require('../controllers/appli');

const router = express.Router();

router.get('/', appliController.getIndex );

router.get('/liste', appliController.getListe);

router.post('/liste', appliController.postListe)

router.delete('/liste/delete/:activiteId', appliController.deleteListItem)

module.exports = router