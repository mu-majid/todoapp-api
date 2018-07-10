const express = require('express');
const bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
var PORT = 3000;

// takes the json sent from the request and makes an object called body and append it to the req object
app.use(bodyParser.json());

// routes

// Creating a Todo via POST request
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save()
        .then(doc => {
            res.send(doc);
        })
        .catch(e => {
            res.status(400).send(e);
        });
});

// it means if we are in test mode dont start the app because the test already started it
if(!module.parent) {
    app.listen(PORT, () => {
        console.log(`server started on port ${PORT}`);
    });
}

// app.listen(PORT, () => {
//     console.log(`server started on port ${PORT}`);
// });

module.exports = {app};