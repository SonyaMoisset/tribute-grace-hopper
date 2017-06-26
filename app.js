const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', { title: 'Grace Hopper'});
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})