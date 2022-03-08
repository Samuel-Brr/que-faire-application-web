const express = require('express')
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



app.listen(4040, ()=>{
    console.log('App listening on Port 4040...')
})
