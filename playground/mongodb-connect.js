const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/TodoApp';


MongoClient.connect(url, { useNewUrlParser: true }, (err,client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB');
    const db = client.db('TodoApp');
/*
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err,result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops,undefined,2))
    });
*/
    db.collection('Users').insertOne({
        name:'Vinicius',
        idade: 23,
        estado: 'Rio de Janeiro'
    }, (err,result) => {
    if(err){
        return console.log('Unable to insert user', err);
    }
    console.log(result.ops);
});
client.close();
});