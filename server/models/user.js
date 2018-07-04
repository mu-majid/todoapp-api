const mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    }
});

console.log('created user schema');

module.exports = {User};