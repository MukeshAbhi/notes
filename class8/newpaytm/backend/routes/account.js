const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { Account } = require('../db');
const { default: mongoose } = require('mongoose');
const router = express.Router();


// to get account balance
router.get('/balance',authMiddleware,async(req,res)=>{
    const userId = req.userId;

    const account = await Account.findOne({userId});

    res.json({
        balance: account.balance
    })
})

// to send money to others
router.post('/transfer',authMiddleware,async(req,res)=>{
    const session = await mongoose.startSession();

    session.startTransaction();

    const{to,amount} = req.body;
    const userId = req.userId;
    const account = await Account.findOne({userId}).session(session);

    if(!account||account.balance < amount ){
        await session.abortTransaction();
        res.status(400).json({
            message:"Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({userId:to}).session(session);

    if(!toAccount){
        await session.abortTransaction();
        res.status(400).json({
            message:"Invalid Account"
        })
    }

    //performing the transfer
    await Account.updateOne({userId},{$inc:{balance:-amount}}).session(session);
    await Account.updateOne({userId:to},{$inc:{balance:amount}}).session(session);

    //Commit the transaction
    await session.commitTransaction();

    await session.endSession();
    
    res.json({
        message:"Transfer successful"
    })

    
})

module.exports= router;