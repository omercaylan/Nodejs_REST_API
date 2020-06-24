const express = require('express');
const app = express(); //constructor

const productRoutes = require('./api/routes/products');

//burada lamda kullandik fakat farkli bir fonksiyon yazip onu burada verebilirdik
app.use((req,res,next) =>{
    res.status(200).json({
        message : 'it works'
    });

});

module.exports = app;