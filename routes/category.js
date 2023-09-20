const Router = require("express");
const cat = require("../model/category");
const category=Router()


category.post("/cat",async(req,res)=>{
    await cat.create(req.body)
    res.send("ook")
})

module.exports=category