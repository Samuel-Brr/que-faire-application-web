const express = require('express');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');


const errorController = require('./controllers/error.js');



const app = express()

app.set('view engine', 'ejs');
app.set('views', 'views');

const appliRoutes = require('./routes/appli');
const authRoutes = require('./routes/auth');

app.use(bodyParser.json()) // utiliser pour acceder aux données sous forme json
app.use(bodyParser.urlencoded({ extended: false })); // Permet d'avoir accés au body de la requete via l 'url // données souvent transmises via formulaire

app.use(express.static(path.join(__dirname, 'public')));

app.use(appliRoutes);
app.use('/auth', authRoutes);

app.use(errorController.get404);


mongoose
    .connect(
        "mongodb+srv://Sml-Brr:YVmG4mNq24wxbku2@cluster0.jt4fy.mongodb.net/queFaire?retryWrites=true&w=majority"
    )
    .then(
        console.log("Connected to database !"),
        app.listen(4040, ()=>{
        console.log('App listening on Port 4040...')
    })
    )
    .catch(err => console.log(err))

