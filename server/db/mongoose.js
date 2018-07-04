var mongoose = require('mongoose');

// using promises in JS
mongoose.Promise = global.Promise;

// connecting to database
mongoose.connect('mongodb://localhost:27017/TodoApp');

console.log('connected to the DB');

module.exports = {
    mongoose
}