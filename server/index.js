const express = require("express");
const cors = require("cors");
const Todo = require("./model/Todo");
require("dotenv").config();

const app = express();
app.use(cors());
require('./config/connect')
app.get('/',async(req,res)=>{
    const todos = await Todo.find()
    res.status(200).json(todos)
})
// app.use(express.json()
app.listen(process.env.PORT, () =>
  console.log(`server raning in port ${process.env.PORT}`)
);




































