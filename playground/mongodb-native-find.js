const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, dbObj) => {
    if (err) {
        console.log('Unable to connect to mongodb');
        
    } else {
        console.log('Connected to MongoDB..');
        dbObj.collection('Todos').find().toArray().then(docs => {console.log(JSON.stringify(docs));})
    }
})