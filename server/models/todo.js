const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  },
  _creator: {
    required: true,
    type: mongoose.Schema.Types.ObjectId
  }
});

console.log('created todo schema');

module.exports = { Todo };