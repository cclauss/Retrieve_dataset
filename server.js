//IMPORT MODULES
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config').get(process.env.NODE_ENV);
const router = require('./Routes/api');
const methodOverride = require('method-override');

//INITIATE APP
const app = express();

//MONGO FILE UPLOAD/DOWNLOAD SECTION
app.set('view engine', 'ejs');

//Middlewares
const bodyParser = require('body-parser');

mongoose.connect(config.DATABASE);
mongoose.Promise = global.Promise;

//STATIC (public for react app and views for file upload/download)
app.use(express.static('views'));



//Call Middlewares
app.use(bodyParser.json());
app.use('/api',router);
app.use(methodOverride('_method'));



//CONFIRM PORT AND INITIATE SERVER
const PORT = process.env.PORT || 3002;
app.listen(PORT,()=>console.log(`Listening at port ${PORT}`))