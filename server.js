require('./models/db');
const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');
const orderController = require('./controllers/orderController');
const bodyParser = require('body-parser');

var app=express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs', expressHbs({
    extname:'.hbs',
    defaultLayout: 'mainLayout',
    layoutsDir:__dirname+'/views/'
}));
app.set('view engine', 'hbs');
app.listen(3000,()=>{
    console.log('Server on port: 3000');
});
app.use('/',orderController);