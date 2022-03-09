const express = require('express');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const session = require("express-session")
const MongoDBStore = require("connect-mongodb-session")(session)


const Utilisateur = require("./models/utilisateur")
const errorController = require('./controllers/error.js');
const MONGODB_URI = "mongodb+srv://Sml-Brr:YVmG4mNq24wxbku2@cluster0.jt4fy.mongodb.net/queFaire?retryWrites=true&w=majority"


const app = express() // Ouverture de notre application
const store = new MongoDBStore({  // Création d'une nouvelle instance d'un store pour nos sessions utilisateurs
    uri: MONGODB_URI,
    collection: 'sessions'
  });

app.set('view engine', 'ejs'); // Parametrage de notre templating engine
app.set('views', 'views'); // Nos views se situent dans le dossier views 

const appliRoutes = require('./routes/appli');
const authRoutes = require('./routes/auth');


//..................     Mes  Middlewares ⬇    ..........................


app.use(bodyParser.json()) // utiliser pour acceder aux données sous forme json
app.use(bodyParser.urlencoded({ extended: false })); // Permet d'avoir accés au body de la requete via l 'url // données souvent transmises via formulaire

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({          //Parametrage de la session utilisateur
    secret: 'my secret', 
    resave: false, 
    saveUninitialized: false, 
    store: store})
)

app.use((req, res, next) => {
    if (!req.session.user) {   //Si il n y a pas de session en cours continuer sans rien faire
      return next();
    }
    Utilisateur.findById(req.session.user._id)
      .then(user => {
        req.user = user;   // Si il y a une session en cours l'utilisateur de la session devient un model mongoose
        next();
      })
      .catch(err => console.log(err));
  });
  
  app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    // res.locals.csrfToken = req.csrfToken();
    next();
  });

//..................     Mes  Middlewares ⬆    ..........................



//..................     Mes  Routes ⬇   .................................

app.use(appliRoutes);
app.use('/auth', authRoutes);

app.use(errorController.get404);
//........................................................................


mongoose
    .connect(
        MONGODB_URI
    )
    .then(
        console.log("Connected to database !"),
        app.listen(4040, ()=>{
        console.log('App listening on Port 4040...')
    })
    )
    .catch(err => console.log(err))

