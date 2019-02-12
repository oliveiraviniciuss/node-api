const {MongoClient,ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';


MongoClient.connect(url, (err,db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB');
  
    db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5c5b1b595b996f2f38c59a01')},
    {
        $set: {
            completed: true
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    },(err)=> {
        console.log(err);
    });
//db.close();

});