const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abhimukesh284:qZ4cZSZXTQO4aWD5@cluster0.kjhif.mongodb.net/paytm');

// Create a Schema for Users
const userSchema = mongoose.Schema({
    username:{
        type:String,
        unique:true,
        trim:true,
        required:true,
        lowecase:true,
        minLength:3,
        maxLength:15
    },
    password:{
        type:String,
        required:true,
        minLength:6,
    },
    fistName:{
        type:String,
        trim:true,
        required:true,
        maxLength:50
    },
    lastName:{
        type:String,
        trim:true,
        required:true,
        maxLength:50
    }
})

// Create a Schema for Accounts 
const accountSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,// referance to user model
        ref:'User',
        required: true
    },
    balance:{
        type:Number,
        required: true
    }
    
})

const User = mongoose.model('User',userSchema);
const Account = mongoose.model('Account',accountSchema)

module.exports = {
    User,
    Account
}