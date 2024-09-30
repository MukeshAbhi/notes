//to decribe the schema

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://abhimukesh284:qZ4cZSZXTQO4aWD5@cluster0.kjhif.mongodb.net/idTodo")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    id:Number,
    completed:Boolean
})

const todo = mongoose.model( 'todo', todoSchema);

module.exports={
    todo
}