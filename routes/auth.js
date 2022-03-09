const express = require('express');
const {check} = require('express-validator')
const authController = require('../controllers/auth.js');
const Utilisateur = require("../models/utilisateur")

const router = express.Router();

router.get('/connexion', authController.getConnexion);

router.post('/connexion',
    check('email',
          'Please enter a valid email.')
        .isEmail()
        .normalizeEmail(), 
    authController.postConnexion
    )

router.get('/inscription', authController.getInscription);

router.post('/inscription',
[
  check('email',
        'Please enter a valid email.')
    .isEmail()
    .custom((value, { req }) => {
      return Utilisateur.findOne({ email: value }).then(userDoc => {
        if (userDoc) {
          return Promise.reject(
            'E-Mail exists already, please pick a different one.'
          );
        }
      });
    })
    .normalizeEmail(),
  check(
    'password',
    'Please enter a password with only numbers and text and at least 5 characters.'
  )
    .isLength({ min: 5 })
    .isAlphanumeric(),
  check('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords have to match!');
    }
    return true;
  })
], authController.postInscription)

module.exports = router