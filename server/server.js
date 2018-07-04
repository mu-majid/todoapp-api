const express = require('express');
const bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/mongoose');
var {User} = require('./models/mongoose');

var app = express();
var PORT = 3000;

// takes the json sent from the request and makes an object called body and append it to the req object
app.use(bodyParser.json());

// routes

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});