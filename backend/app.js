const express = require('express');

const Item = require('./models/item');
const dataBase = require('./includes/dbConnect');   

const app = express();

app.use((res, req, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});



module.exports = app;