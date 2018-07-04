const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, dbObj) => {
    if (err) {
        console.log('Unable to connect to mongodb');
        
    } else {
        console.log('Connected to MongoDB..');
        dbObj.collection('Todos').findOneAndUpdate({
            _id : new ObjectID('5b3c9eff30a64d2f3ad25980')
        }, {
            $set : {
                completed: true
            }
        }, {
            returnOriginal: false
        }).then(result => {
            console.log(result);
            
        });
    }
});
