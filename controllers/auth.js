const Utilisateur = require('../models/utilisateur')
const bcrypt = require('bcryptjs')


exports.getInscription = (req, res, next) => {
    res.render('auth/inscription', {
        //   prods: products,
          pageTitle: 'Inscription',
          path: '/auth/inscription',
        });
}

exports.getConnexion = (req,res,next) => {
    res.render('auth/connexion', {
        // prods: products,
        pageTitle: 'Connexion',
        path: '/auth/connexion',        
      })
}

exports.postInscription = (req,res,next) => {
  const email = req.body.email
  const password = req.body.password

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