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

exports.postConnexion = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const errors = validationResult(req)

  if(!errors.isEmpty()){
    return res.status(422).render('auth/connexion', {
      pageTitle: 'Connexion',
      path: '/auth/connexion',
      errorMessage: errors.array()[0].msg
    });
  }

  Utilisateur.findOne({ email: email })
      .then(user => {
        if (!user) {
          return res.status(422).render('auth/connexion', {
            pageTitle: 'Connexion',
            path: 'connexion',
            errorMessage: 'Utilisateur inexistant 😕'
          });
        }
        bcrypt
          .compare(password, user.password)
          .then(doMatch => {
            if (doMatch) {
              console.log("çA Match ! 🥳")
              req.session.isLoggedIn = true;
              req.session.user = user;
              return req.session.save(err => {
                console.log(err);
                res.redirect('/');
              });
            }
            console.log(user)
            return res.status(422).render('auth/connexion', {
              pageTitle: 'Connexion',
              path: 'connexion',
              errorMessage: 'Mot de passe ou email incorrecte 😖'
            });
          })
          .catch(err => {
            console.log(err);
            res.redirect('connexion');
          });
      })
      .catch(err => console.log(err));
  };


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