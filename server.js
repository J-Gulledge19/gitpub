require("dotenv").config();
const express = require("express");
const drinks = require('./models/drinks');
const app = express();

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {drinks})
})

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

app.get('/fruits/:id', (req, res) => {
    // res.render(template, data)
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.index]
    });
});

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});