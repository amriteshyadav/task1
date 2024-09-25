
/// import the model
const Todo=require("../models/todo");

//define the handler
exports.createTodo =async(req,res)=>{
    try{
 //extract the title and description from request body
 const {title,description}=req.body;
 //create a new todo and insert in the db
 const response= await Todo.create({title,description});
 //send the json response with a success flag
 res.status(200).json({
    success:true,
    data:response,
    message:'entry created successfully'
}
 );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }
}