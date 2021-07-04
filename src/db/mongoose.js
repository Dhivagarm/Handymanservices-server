  
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true} );

var db = mongoose.connection;

db.once('open' , function(){
    console.log('Connection Is Made');
}).on('error' , function(error){
    console.log("Connection Error is :- " , error);
});