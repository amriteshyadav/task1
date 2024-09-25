/// import the model
const Todo=require("../models/todo");



//define the handler
exports.getTodo =async(req,res)=>{
    try{
        //fetchall data from the database
        const todos=await Todo.find({});
/// response
res.status(200)
.json({
    success:true,
    data:todos,
    message:"Entire Todo Data is fetched",
})

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

exports.getTodobyId=async(req,res)=>{
    try{

        //extract todo items basis on id
      const id=req.params.id;
      const todo=await Todo.findById({_id: id})
      //data forgive id not found
      if(!todo){
        return res.status(404).json({
          success:false,
          message:"No Data Found with given id",  
        })
      }
      //data fround for the given id
      res.status(200).json({
        success:true,
        data:todo,
        message:`Todo ${id} data successfully fetched`,
      }) 

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