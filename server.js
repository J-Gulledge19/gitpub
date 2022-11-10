require("dotenv").config();
const express = require("express");
const drinks = require('./models/drinks');
const food = require('./models/food')
const app = express();


app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {drinks, food})
})

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

app.get('/drinks/:id', (req, res) => {
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.id],
    });
});

app.get('/food/:id', (req, res) => {
    res.render('food_show.ejs', {
        food: food[req.params.id],
    });
});

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});