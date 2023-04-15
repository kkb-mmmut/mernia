const express = require("express");
const router =new express.Router();
const users = require("../model/usersSchemas")
const moment=require('moment');
// router.get("/",(req,res)=>{
//     res.send("server start router")
// });

const multer= require("multer");
const imgconfig=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
})

//img filterations 
 
const isImage=(req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }
    else{
        callback(new Error("only image is allowed"))
    }
}

const upload = multer({
    storage:imgconfig,
    fileFilter:isImage
})

router.post("/register",upload.single("photo"),async(req,res)=>{
    const {filename} = req.file;

    const {fname} = req.body;
    if(!fname || !filename){
        res.status(401),json({status:401,message:"fill all the data fields."})
    }
    try{
        const date=moment(new Date()).format("YYYY-MM-DD");
        const userdata=new users({
            fname:fname,
            imgpath:filename,
            date:date
        })
        const finaldata=await userdata.save();
        res.status(201),json({status:201,finaldata});
    }
    catch{
        res.status(401).json({
            status:401


        })
    }
})


//user data get 

router.get("/getdata",async(req,res)=>{
    try{
        const getUser = await users.find();
        res.status(201).json({status:201,getUser});
    }catch{
        res.status(401).json({status:401,getUser});
    }
})



module.exports= router;