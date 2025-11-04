import { Schema,model } from "mongoose";

const todoSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    isComplete:{
        type:Boolean,
        default:false
    }
})


const todo = model("todos",todoSchema)
export default todo;