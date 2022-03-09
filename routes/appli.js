const express = require('express');

const appliController = require('../controllers/appli');
const isAuth = require("../middleware/is-auth")

const router = express.Router();

router.get('/', appliController.getIndex );

router.get('/liste', isAuth, appliController.getListe);

router.post('/liste', isAuth, appliController.postListe)

router.put('/liste/update/:activiteId', isAuth, appliController.updateCommentaire)

router.delete('/liste/delete/:activiteId', isAuth, appliController.deleteListItem)

module.exports = router