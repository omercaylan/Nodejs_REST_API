const express = require('express');
const app = express(); //constructor

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

//burada lamda kullandik fakat farkli bir fonksiyon yazip onu burada verebilirdik
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;