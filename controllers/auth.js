exports.getInscription = (req, res, next) => {
    res.render('auth/inscription', {
        //   prods: products,
          pageTitle: 'Shop',
          path: '/auth/inscription',
        });
}

exports.getConnexion = (req,res,next) => {
    res.render('auth/connexion', {
        // prods: products,
        pageTitle: 'connexion',
        path: '/auth/connexion',        
      })
}