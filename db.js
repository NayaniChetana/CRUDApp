const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/cs20b055',
 {useNewUrlParser: true, useUnifiedTopology: true}
 ).then(()=>{console.log("db connected")}).catch((e)=>{console.log("Connecting to db failed : "+e)});