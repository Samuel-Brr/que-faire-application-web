const Activite = require("../models/activite")

exports.getIndex = (req, res, next) => {

        res.render('appli/index', {
        //   prods: products,
          pageTitle: 'Que-faire ? 🤔',
          path: '/',
        });
  };

exports.getListe = (req, res, next) => {
  Activite.find()
    .then(activites => {
      res.render('appli/liste', {
            activites: activites,
            pageTitle: "Liste d'envies",
            path: '/liste',
          });
    })
    .catch(err=>console.log(err))
}

exports.postListe = (req,res,next) => {
    const activity = req.body.activity
    const accessibility = req.body.accessibility
    const type = req.body.type
    const participants = req.body.participants
    const price = req.body.price
    const link = req.body.link
    const key = req.body.key

    const activite = new Activite({
      activity: activity,
      accessibility: accessibility,
      type: type,
      participants: participants,
      price: price,
      link: link,
      key: key
    })

    activite.save()
    res.end()
}

exports.deleteListItem = (req,res,next) => {
  
}