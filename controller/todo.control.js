import todo from "../models/todo.model.js";


// controller  to get todo

const getTodo = async (req, res) => {
    try {
        let alltodos = await todo.find();
        return res.json({ data: alltodos, message: "todo fetched successfully", success: true })
    } catch (error) {
        return res.json({ data: null, message: error.message, success: false })
    }
}

// controller use to add todo...
const addTodo = async (req, res) => {
    try {
        let { title, description } = req.body;

        if (!title || !description) {
            return res.status(401).json({ data: null, message: "title & description is required", success: false });
        }

        let createdTodo = await todo.create({ title: title, description: description });
        let savedTodo = await createdTodo.save();

        if (savedTodo) {
            return res.json({ data: savedTodo, message: "todo created successfully", success: true })
        }

        return res.json({ data: null, message: "something went wrong", success: false })

    } catch (error) {
        return res.json({ data: null, message: error.message, success: false })
    }
}

// gettodo by id 

const gettodoById = async (req, res) => {
    try {
        let { id } = req.params
        if (!id) {
            return res.json({ data: null, message: "id is required", success: false })
        }

        let findedTodo = await todo.findById(id);
        return res.json({ data: findedTodo, message: "todo fetched successfully", success: true })

    } catch (error) {
        return res.json({ data: null, message: error.message, success: false })
    }
}

// update todo status...

const updateTodoStatus = async (req, res) => {
    try {

        let { id } = req.params;
        if (!id) {
            return res.json({ data: null, message: "id is required", success: false });
        }
        // let updatedtodoStatus = await todo.updateOne({_id:id},{$set:{isComplete:true}});
        // // await updatedtodoStatus.save();
        // return res.json({data:updatedtodoStatus,message:"todo status updated successfully",success:true})

        let findedTodo = await todo.findOne({ _id: id })
        findedTodo.isComplete = !findedTodo.isComplete;
        await findedTodo.save();
        return res.json({ data: findedTodo, message: "todo status updated successfully", success: true })


    } catch (error) {
        return res.json({ data: null, message: error.message, success: false })
    }
}

// delete todo 

const deleteTodo = async (req,res) => {
    try {

        let {id} = req.params;
        if(!id){
            return res.json({data:null,message:"id is required",success:false})
        }

        let deletedTodo = await todo.deleteOne({_id:id});
        return res.json({data:deletedTodo,message:"todo deleted successfully",success:true})

    } catch (error) {
        return res.json({ data: null, message: error.message, success: false })
    }
}

export { addTodo, getTodo, gettodoById, updateTodoStatus ,deleteTodo}
