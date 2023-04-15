const express = require("express");
const App = express();
require("./db/connection");
const router= require("./routes/router");
const cors=require("cors");

const port = 8000;


App.use(express());
App.use(cors());
App.use(router);
App.use("./uploads",express.static("./uploads"));

// App.get("/",(req,res)=>{ 
//  res.send("bakk bsdk");
// })
App.listen(port,()=>{
    console.log(`server sttart at port no ${port}`)
})
