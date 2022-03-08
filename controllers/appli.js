exports.getIndex = (req, res, next) => {

        res.render('appli/index', {
        //   prods: products,
          pageTitle: 'Shop',
          path: '/',
        });
  };

  exports.getListe = (req, res, next) => {
    res.render('appli/liste', {
        //   prods: products,
          pageTitle: 'Shop',
          path: '/liste',
        });
}