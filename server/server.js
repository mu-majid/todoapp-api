const express = require('express');
const bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectID} = require('mongodb');

var app = express();
var PORT = 5000;

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

// Listing All todos
app.get('/todos', (req, res) => {
    Todo.find()
    .then((todos => {
        res.send({
            todos
        });
    })).catch(e => {
        res.status(400).send(e);
    });
});

// GET /todo:id for fetching a certain todo
app.get('/todos/:id', (req, res) => {
    // get the id from the request params
    var id = req.params.id;

    // chech if is invalid
    if (!ObjectID.isValid(id)) {
        return console.log('Id is not valid');
    }
    // query the todo
    Todo.findById(id)
    .then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    })
    .catch(e => {
        res.status(400).send();
    })
})

// it means if we are in test mode dont start the app because the test already started it
// OR it could be handeled in test script by closing server after every it()
if(!module.parent) {
    app.listen(PORT, () => {
        console.log(`server started on port ${PORT}`);
    });
}
// app.listen(PORT, () => {
//     console.log(`server started on port ${PORT}`);
// });

module.exports = {app};