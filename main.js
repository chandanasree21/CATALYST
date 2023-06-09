const express = require("express");
const bodyParser=require("body-parser");
const request=require("request");
const mongoose=require("mongoose");
const app=express();
const path=require("path");

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended:true}));
app.listen(4000,function(){
    console.log("Server 4000 started");
});
app.post("/",function(req,res){
    console.log("Input is : "+req.bodyParser.in);
    console.log("Password is : "+req.bodyParser.pass);
});
app.get("/",function(req,res){
    res.sendFile(__dirname+"/main.html");
});