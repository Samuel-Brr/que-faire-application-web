const express = require('express');
const { default: mongoose } = require('mongoose');
const path = require('path');


const errorController = require('./controllers/error.js');



const app = express()

app.set('view engine', 'ejs');
app.set('views', 'views');

const appliRoutes = require('./routes/appli');
const authRoutes = require('./routes/auth');

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

