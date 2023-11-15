const express = require("express");
const app = express();
const path = require ("path");

app.get("/fashion",(Req,res)=>{
    res.sendFile(path.join(__dirname,"fashion.html"));
})
app.get("/album",(Req,res)=>{
    res.sendFile(path.join(__dirname,"album.html"));
})
app.get("/perfume",(Req,res)=>{
    res.sendFile(path.join(__dirname,"perfume.html"));
})
app.listen(3050   ,   ()=>{
    console.log("server is running");
})