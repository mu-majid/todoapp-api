const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const _ = require('lodash');
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
  tokens: [
    {
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }
  ]
});

UserSchema.methods.removeToken = async function (token) {
  const user = this;
  await user.update({ $pull: { tokens: { token } } });
};

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
  }
  catch (error) {

    return error;
  }

};

UserSchema.statics.findByToken = function (token) {
  const User = this;
  let decoded;
  try {
    decoded = jwt.verify(token, 'saltingOrSecret');
  }
  catch (error) {
    return Promise.reject('un auth..');
  }

  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};

UserSchema.pre('save', function (next) {
  const user = this;

  if(user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      if(err) {
        console.log(err);

      }
      bcrypt.hash(user.password, salt, (err, hash) => {
        if(err) {
          console.log(err);

        }
        user.password = hash;
        next();
      });
    });
  }
  else {
    next();
  }
});

UserSchema.statics.findByCredentials = async function (email, password) {
  const User = this;

  const foundusr = await User.findOne({ email });

  console.log('foundusr', foundusr);


  if(_.isNull(foundusr)) {
    return 'no such user';
  }

  return new Promise((resolve, reject) => {
    bcrypt.compare(password, foundusr.password, (err, result) => {
      if(err) {
        console.log(err);

      }

      if(result) {

        resolve(foundusr);
      }

      else {
        reject('passwords are not the same');
      }
    });
  });


  // return User.findOne({ email }).then((user) => {
  //   if(!user) {

  //     return Promise.reject();
  //   }

  //   return new Promise((resolve, reject) => {
  //     bcrypt.compare(password, user.password, (err, result) => {
  //       if(err) {
  //         console.log(err);

  //       }

  //       if(result) {
  //         resolve(user);
  //       }

  //       else {
  //         reject();
  //       }
  //     });
  //   });
  // });

};

const User = mongoose.model('User', UserSchema);

console.log('created user schema');

module.exports = { User };