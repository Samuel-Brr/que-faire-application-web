const express = require('express');

const appliController = require('../controllers/appli');

const router = express.Router();

router.get('/', appliController.getIndex );

router.get('/liste', appliController.getListe);

module.exports = router