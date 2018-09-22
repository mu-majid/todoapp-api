const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const config = require('./config/config');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');
const { ObjectID } = require('mongodb');
const { autheticate } = require('./middlewares/authenticate');


const app = express();
const PORT = process.env.PORT;

// takes the json sent from the request and makes an object called body and append it to the req object
app.use(bodyParser.json());

// routes

// GET /
app.get('/', (req, res) => {
  console.log('req', req);
  res.send('Hello World!');
});

// Creating a Todo via POST request
app.post('/todos', autheticate, (req, res) => {
  const todo = new Todo({ text: req.body.text, _creator: req.user._id });
  todo.save()
    .then((doc) => {
      res.send(doc);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

// Listing All todos
app.get('/todos', (req, res) => {
  Todo.find({ _creator: req.user._id })
    .then(((todos) => {
      res.send({ todos });
    })).catch((e) => {
      res.status(400).send(e);
    });
});

// GET /todo:id for fetching a certain todo
app.get('/todos/:id', (req, res) => {
  // get the id from the request params
  const id = req.params.id;

  // chech if is invalid
  if(!ObjectID.isValid(id)) {
    console.log('Id is not valid');

    return res.status(404).send();

  }
  // query the todo
  Todo.findById(id)
    .then((todo) => {
      if(!todo) {
        return res.status(404).send();
      }
      res.send({ todo });
    })
    .catch((e) => {
      res.status(400).send();
    });
});

// DELETE a todo route
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;

  if(!ObjectID.isValid(id)) {
    console.log('Id is not valid');

    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id)
    .then((todo) => {
      console.log(todo);

      if(!todo) {
        return res.status(404).send();
      }
      res.status(200).send({ todo });
    })
    .catch((e) => {
      console.log(e);
      res.status(400).send();
    });
});

// PATCH /todos/:id update a specific todo
app.patch('/todos/:id', (req, res) => {
  const id = req.params.id;
  const body = _.pick(req.body, ['text', 'completed']);

  if(!ObjectID.isValid(id)) {
    console.log('Id is not valid');

    return res.status(404).send();
  }

  if(_.isBoolean(body['completed'] && body['completed'])) {
    body.completedAt = new Date().getTime();
  }
  else {
    body.completed = false;
    body.completedAt = null; // for removing any value from mongodb you just set it to null
  }
  Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
    .then((todo) => {
      if(!todo) {
        return res.status(404).send();
      }
      res.send({ todo });
    })
    .catch((e) => {
      res.status(400).send();
    });
});

// USERS Routes

// Create a new user
app.post('/users', async (req, res) => {
  const body = _.pick(req.body, ['email', 'password']);
  const user = new User(body);
  // saving the user to DB
  // user.save()
  //     .then(() => {
  //         return user.generateAuthToken();
  //     })
  //     .then((token) => {
  //         res.header('x-auth', token).send(user);
  //     })
  //     .catch((e) => {
  //         res.status(400).send(e);
  //     })
  try {
    const savedUser = await user.save();
    const userToken = await savedUser.generateAuthToken();
    res.header('x-auth', userToken).send(user);

  }
  catch (error) {
    res.send(error);

  }
});

// POST user login
app.post('/users/login', async (req, res) => {
  const body = _.pick(req.body, ['email', 'password']);
  try {
    const user = await User.findByCredentials(body.email, body.password);
    const userToken = await user.generateAuthToken();
    res.header('x-auth', userToken).send(user);
  }
  catch (error) {
    res.status(400).send(error);
  }


  // User.findByCredentials(body.email, body.password)
  //   .then((user) => {
  //     res.send(user);
  //   })
  //   .catch((e) => {
  //     res.status(400).send(e);
  //   });

});

// logging out i.e deleting token that was already put using authenticate middleware

app.delete('/users/me/token', autheticate, (req, res) => {
  // this user was added by the auth middleware
  req.user.removeToken(req.token)
    .then(() => {
      res.status(200).send();
    })
    .catch((e) => {
      res.status(400).send();
    });
});

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

module.exports = { app };