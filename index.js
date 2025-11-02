import express from "express";
import { config } from "dotenv";
config();
const app = express();
const PORT = 3000 || process.env.PORT;


/* === MY CONTROLLERS ===*/
import {gettodos} from "./controller/todo.control.js"
import connectdb from "./config/connectdb.js";
import mongoose from "mongoose";
import todo from "./models/todo.model.js";

app.get("/todos",gettodos);


app.get("/gettodo",async ()=>{
    const todos = await todo.find()
    console.log(todos);
})



app.get("/health",(req,res)=>{
    return res.status(200).json({
         data:null,
         message:"server is running healthy"
    })
})

app.listen(PORT,()=>{
    console.log(`app is running on the port ${PORT}`);
    connectdb()

})