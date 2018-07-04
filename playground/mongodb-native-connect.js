const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, dbObj) => {
    if (err) {
        console.log('Unable to connect to mongodb');
        
    } else {
        console.log('Connected to MongoDB..');

        dbObj.collection('Todos').insertOne({
            text: 'First Note', 
            completed: false
        }, (err, result) => {
            if (err) {
                return console.log('Unable to insert the Doc', err);
            }
            console.log(JSON.stringify(result, undefined, 2));
            
        });

        dbObj.collection('Users').insertOne({
            name: 'Majid', 
            age: 25,
            location: 'Germany'
        }, (err, result) => {
            if (err) {
                return console.log('Unable to insert the Doc', err);
            }
            console.log(JSON.stringify(result.ops, undefined, 2));
            
        });

        dbObj.close();
    }
})