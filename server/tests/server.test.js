const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

//deleting all todos to make sure that
//db is empty so we ensure that only one inserted when we hit that end point

beforeEach((done) => {
    Todo.remove({})
    .exec()
    .then((result) => done(result))
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
            Todo.find()
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
        .end((err, res) => {
            if (err) {
                return done(err);
            }
            Todo.find().then((todos) => {
                expect(todos.length).toBe(0);
                done();
            }).catch((e) => done(e));
        });
    });
})