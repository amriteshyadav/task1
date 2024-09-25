const express= require("express");
const app=express();

/// load config from env file
require("dotenv").config();
const PORT=process.env.PORT||4000||5000||6000;


//middleware to parse json request body
app.use(express.json());


//import rotes for todoapi
const todoRoutes= require("./route/todos");
//mount the todo api routes
app.use("/api/v1",todoRoutes);

//SERVER START
app.listen(PORT,()=>{
   console.log(`server started successfully at ${PORT}`); 
})
//CONNECT TO THE DATABASE
const dbConnect=require("./config/database");
dbConnect();
//default route
app.get("/",(req,res)=>{
res.send(`<h1>This is my homepage baby</h1>`);
})