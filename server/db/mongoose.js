var mongoose = require('mongoose');

// using promises in JS
mongoose.Promise = global.Promise;

// connecting to database
mongoose.connect(process.env.MONGODB_URI, (err, result) => {
    if (err) {
        throw err;
    }
});

console.log('connected to the DB');

module.exports = {
    mongoose
}