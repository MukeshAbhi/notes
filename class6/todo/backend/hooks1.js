const express = require('express');
const cors = require('cors');
const { createTodo} = require('./type');
const {todo} = require('./db');

const app = express();

app.use(express.json());
app.use(cors());

let id = 1;

app.post('/todo',async (req,res)=>{
    const createLoad = req.body;
    const parsedLoad = createTodo.safeParse(createLoad);
    if(!parsedLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.create({
        id: id++,
        title: createLoad.title,
        description: createLoad.description,
        completed: false
    })

    res.json({
        msg: "completed"
    })
})

app.get('/todos',async(req,res)=> {
    
    const todos = await todo.find({});
    res.json(todos);
})

app.get('/todosid',async(req,res)=> {
    
    const id = parseInt(req.query.id);
    console.log("Requested ID:", id);
    const todos = await todo.findOne({id:id});
    res.json(todos);
})

app.listen(3000);