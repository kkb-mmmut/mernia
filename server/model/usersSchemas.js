const mongoose = require("mongoose");
const usersSchemas=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    imgpath:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
})
//create model

const users = new mongoose.model("user-data",usersSchemas);
module.exports=users;