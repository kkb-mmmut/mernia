
// const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose");
const uri = "mongodb+srv://kkb-mmmut:Kam189251@cluster0.wykp3en.mongodb.net/user-data?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
mongoose.connect(uri,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("database concnect")).catch((err)=>console.log("error",err))
 