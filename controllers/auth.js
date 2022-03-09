const Utilisateur = require('../models/utilisateur')
const bcrypt = require('bcryptjs')
const {validationResult} = require('express-validator')


exports.getInscription = (req, res, next) => {
    res.render('auth/inscription', {
          pageTitle: 'Inscription',
          path: '/auth/inscription',
          errorMessage: null
        });
}

exports.getConnexion = (req,res,next) => {
    res.render('auth/connexion', {
        pageTitle: 'Connexion',
        path: '/auth/connexion',
        errorMessage: null        
      })
}

exports.postInscription = (req,res,next) => {
  const email = req.body.email
  const password = req.body.password
  const errors = validationResult(req)

  if(!errors.isEmpty()){
    return res.status(422).render('auth/inscription', {
      pageTitle: 'Inscription',
      path: '/auth/inscription',
      errorMessage: errors.array()[0].msg
    });
  }

  bcrypt.hash(password,12)
    .then(hashedPassword => {
      const utilisateur = new Utilisateur({
        email: email,
        password: hashedPassword
      })
    
      utilisateur.save()
      res.redirect("connexion")
    })

} 