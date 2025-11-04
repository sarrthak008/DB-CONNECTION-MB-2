import express from "express";
import { config } from "dotenv";
config();
const app = express();
const PORT = 3000 || process.env.PORT;


/* === MIDDLEEARES=== */
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/* === MY CONTROLLERS ===*/
import {addTodo, deleteTodo, getTodo, gettodoById, updateTodoStatus} from "./controller/todo.control.js"
import connectdb from "./config/connectdb.js";

app.get("/gettodo",getTodo); // used to get todo from data base...
app.post("/addtodo",addTodo); // used to add todo  in data base...
app.get("/gettodobyid/:id",gettodoById);
app.patch("/updatetodostatus/:id",updateTodoStatus);
app.delete("/deletetodo/:id",deleteTodo);


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