const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express(); //constructor
//restnodeshopuser 

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

mongoose.connect("mongodb+srv://restWorking:restWorking@rest-api-working-jnjpy.mongodb.net/REST-WORKING?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
//mongoose.connect('mongodb://user:password@domain.com:27017/dbname', { useNewUrlParser: true });

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false })); //hangi body parsiri kullanacaksin
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.header("Acces-Control-Allow-Origin", "*");
    res.header("Acces-Control-Allow-Header", "Origin, X-Requested-With,Content-Type,Accept,Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Acces-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});


//burada lamda kullandik fakat farkli bir fonksiyon yazip onu burada verebilirdik handle reques
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;