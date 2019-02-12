const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/TodoApp';


MongoClient.connect(url, (err,db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB');
  
    
    //Delete Many
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log("Unable to delete documents");
    // })

    // //DeleteOne

    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log(err);
    // })
    
    //FindOneAndDelete
    db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log(err);
    })
//db.close();

});