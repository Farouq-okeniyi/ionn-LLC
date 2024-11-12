const express = require('express')
const path = require('path');
const cors = require('cors')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const UserRoute = require('../Routes/UserRoute')
const globalErrorHandling = require('../Controllers/errorController')
dotenv.config({path: './config.env'})

const app = express();

app.use(cookieParser());

app.use(express.urlencoded({extended:true}))

app.use(express.json()); 

app.use(morgan('dev'));

app.set('view engine', 'ejs');

app.set('Views', path.join(__dirname, 'Views/htmlFiles')); 

app.use(cors())

app.use('/', UserRoute)


app.use(globalErrorHandling)


module.exports = {app}