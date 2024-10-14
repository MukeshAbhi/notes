const express = require('express');
const router = express.Router();
const zod = require('zod');
const {User, Account} = require('../db');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const { authMiddleware } = require('../middlewares/authMiddleware');

// Schema for signup
const signupSchema = zod.object({
    username: zod.string().email(),
    password:zod.string().min(6),
    firstName: zod.string(),
    lastName: zod.string()
});

// Signup route
router.post('/signup', async(req,res)=>{
    const body = req.body;
    const {success} = signupSchema.safeParse(body);
    if(!success){
        return res.status(411).json({
            message: "Invalied Inputs "
        })
    }

    const existingUser = await User.findOne({username:body.username});

    if(existingUser){
        return res.status(411).json({
            message: "Email already exist "
        })
    }

    const user = await User.create({
        username: body.username,
        password: body.password,
        firstName: body.firstName,
        lastName: body.lastName,
    });

    const userId = user._id;

    await Account.create({userId,
        balance:(1 + Math.random() * 10000)
    })


    const token = jwt.sign({userId : user._id},JWT_SECRET);

    res.json({
        token:token,
        message:"User created successfully"
    })
})

// Schema for signin
const signinSchema = zod.object({
    username: zod.string().email(),
    password:zod.string().min(6)
})

// Signin route
router.post('/signin', async(req,res)=>{
    const body = req.body;
    const {success} = signinSchema.safeParse(body);
    if(!success){
        return res.status(411).json({
            message: "Invalid Inputs"
        });
    }

    const {username,password} = req.body;
    const user =  await User.findOne({username:username,password:password })

    if(user){
        const token = jwt.sign({userId:user._id},JWT_SECRET);
        res.json({
            token:token
        })
        return;
    }

    res.status(411).json({
         message:"Error while logging in"
    })
})

// Schema for update
const updateSchema = zod.object({
    password: zod.string().min(6).optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
});

// Update user route
router.put('/up', authMiddleware,async(req,res)=>{
    const body = req.body;
    const {success} = updateSchema.safeParse(body);
    if(!success){
        return res.status(411).json({
            message: "Error while updating information"
        })
    }
    // from middleware
    const userId = req.userId;

    await User.updateOne({_id:userId},body);

    res.json({
        message:"Updated successfully"
    })
})

// Bulk user search route
router.get('/bulk', authMiddleware,async(req,res)=>{
    const flName = req.query.filter|| '';

    const users = await User.find({
        $or:[
            {firstName:{
                '$regex': flName
            }},
            {lastName: {
                '$regex': flName
            }}
        ]
    })

    res.json({
        user: users.map(user=>({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id:user._id
        }))
    })
})









module.exports = router;
