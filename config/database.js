 const mongoose=require('mongoose');
//const URI=process.env.DATABASE_URL;
 const dotenv =require("dotenv")
dotenv.config();
const dbConnect =()=>{
    

   mongoose.connect('mongodb://127.0.0.1:27017/db_amriteshdatabase')//,{
    
    //useNewUrlParser:true,
    //useUnifiedTopology:true,
    //useCreateIndex:true,
    //useFindAndModify: false ,
//})
    
.then(()=> console.log("db ka connection is successful "))
.catch((err)=>{
    console.log("issue in the db connection");
    console.error(err.message);
    process.exit(1);
});

}
module.exports =dbConnect;
//const dotenv = require("dotenv");

//dotenv.config();