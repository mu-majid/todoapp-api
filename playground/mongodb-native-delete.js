const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, dbObj) => {
    if (err) {
        console.log('Unable to connect to mongodb');
        
    } else {
        console.log('Connected to MongoDB..');
        // deleteMany
        db.collection('Todos').deleteMany({text: 'bla bla'}).then( res => {
            console.log(res);
        });
        // deleteOne
        db.collection('Todos').deleteOne({text: 'bla bla'}).then( res => {
            console.log(res);
        });
        //findOneAndDelete useful because you get the data back<in server> that you want to delete
        // here res in the then method is actually the document you deleted
        db.collection('Todos').findOneAndDelete({text: 'bla bla'}).then( res => {
            console.log(res);
        })
    }
});
