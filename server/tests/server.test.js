const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
    _id: new ObjectID(),
    text: 'first'
}, {
    _id: new ObjectID(),
    text: 'second'
}]

//deleting all todos to make sure that
//db is empty so we ensure that only one inserted when we hit that end point
// and then seeds it with dummy data for GET /todos route
beforeEach((done) => {
    console.log('before each');
    Todo.remove({})
    .then(() => {
        return Todo.insertMany(todos)
    })
    .then( () => done())
    .catch(e => done(e));
})

describe('POST /todos', () => {
    //done used because the code insisde the callback is async code
    it('should create a new todo', (done) => {
        var text = 'Test text';
        // using supertest to simulate a request <supertest is used to test express apps>
        request(app)
        .post('/todos')
        .send({
            text
        })
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text);
        })
        .end((err, res) => {
            if (err) {
                return done(err);
            }
            Todo.find({text})
            .then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            })
            .catch( e => done(e));
        });
    });

    it('should not create a new todo', (done) => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => { // callback passed to end because we're making async work
            if (err) {
                return done(err);
            }
            Todo.find().then((todos) => {
                expect(todos.length).toBe(2);
                done();
            }).catch((e) => done(e));
        });
    });
});

describe('GET /todos', () => {
    it('should get all todos', (done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
            expect(res.body.todos.length).toBe(2);
        })
        .end(done);
    });
});

describe('GET /todos/:id', () => {
    it('should return a todo doc', (done) => {
        request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res) => {
            expect(res.body.todo.text).toBe(todos[0].text)
        })
        .end(done);
    });

    it('should return 404 for a valid id but does not exist', (done) => {
        var hexId = new ObjectID().toHexString();
        request(app)
        .get(`/todos/${hexId}`)
        .expect(404)
        .end(done);
    });

    it('should return 404 for an in valid ID', (done) => {
        request(app)
        .get('/todos/1234dsd')
        .expect(404)
        .end(done);
    });
});

describe('DELETE /todos/:id', () => {
    it('should remove a todo from DB with id from the req', (done) => {
        var hexId = todos[1]._id.toHexString();
        request(app)
        .delete(`/todos/${hexId}`)
        .expect(200)
        .expect((res) => {
            expect(res.body.todo._id).toBe(hexId);
        })
        .end((err, res) => {
            if (err) {
                console.log(err);
                return done(err);
            }
            Todo.findById(hexId)
            .then(todo => {
                expect(todo).toNotExist();
                done();
            })
            .catch(e => {
                done(e);
            });
        });
    });

    it('should return 404 if todo is not found', (done) => {
        var hexId = new ObjectID().toHexString();
        request(app)
        .get(`/todos/${hexId}`)
        .expect(404)
        .end(done);
    });

    it('should return 404 if objectID is not valid', (done) => {
        request(app)
        .get('/todos/1234dsd')
        .expect(404)
        .end(done);
    });
})