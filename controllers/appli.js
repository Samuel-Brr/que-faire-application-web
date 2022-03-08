exports.getIndex = (req, res, next) => {

        res.render('appli/index', {
        //   prods: products,
          pageTitle: 'Que-faire ? 🤔',
          path: '/',
        });
  };

  exports.getListe = (req, res, next) => {
    res.render('appli/liste', {
        //   prods: products,
          pageTitle: "Liste d'envies",
          path: '/liste',
        });
}