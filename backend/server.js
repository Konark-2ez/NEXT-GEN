const express = require("express")
const {chats} = require("./data/data")
require("dotenv").config()
const app = express()
app.get('/',(req,res)=>{
    res.json({msg:"API is running..."})
})
app.get('/api/chat',(req,res)=>{
    res.send(chats)
})
app.get('/api/chat/:id',(req,res)=>{
    // console.log(req.params.id)
    const singleChat = chats.find((c)=>c._id===req.params.id)
    res.send(singleChat)
})
app.listen(process.env.PORT,()=>{
    try {
        console.log("Running on port")
    } catch (error) {
        console.log(error);
    }
})