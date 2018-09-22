const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email',
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 7
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const access = 'auth';
  const token = jwt.sign({ _id: user._id.toHexString(), access }, 'saltingOrSecret').toString();

  user.tokens.push({ access, token });

  // saving the updated user doc
  // here we are returning a promise with token as success value
  // return user.save()
  //     .then(() => {
  //         return token;
  //     })
  //     .catch(e => {
  //         return e;
  //     })
  try {
    const saved = await user.save();

    return token;
  } catch (error) {

    return error;
  }

}

UserSchema.statics.findByToken = function (token) {
  const User = this;
  const decoded;
  try {
    decoded = jwt.verify(token, 'saltingOrSecret')
  } catch (error) {
    return Promise.reject('un auth..')
  }

  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
}

UserSchema.pre('save', function (next) {
  const user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      })
    })
  } else {
    next();
  }
})

const User = mongoose.model('User', UserSchema);

console.log('created user schema');

module.exports = { User };