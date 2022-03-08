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