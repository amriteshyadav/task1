const express=require("express");
const router=express.Router();
//import controller

const {deleteTodo}=require("../controller/deleteTodo");
const {createTodo}=require("../controller/createTodo");
 const {updateTodo}=require("../controller/updateTodo");
const {getTodo,getTodobyId}=require("../controller/getTodo");
//define api routes


router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodobyId);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports=router;