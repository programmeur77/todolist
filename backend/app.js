const express = require('express');

const Item = require('./models/item');
const dataBase = require('./includes/dbConnect');   

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/getItems', (req, res, next) => {
    Item.countDocuments()
    .then(item => {
        if(item > 0) {
            return res.status(200).json({item});
        } else {
            return res.status(400).json({error : 'Aucun item enregistré'});
        }
    })
    .catch (error => res.status(500).json({error}));
});

module.exports = app;