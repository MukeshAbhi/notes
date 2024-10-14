const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abhimukesh284:qZ4cZSZXTQO4aWD5@cluster0.kjhif.mongodb.net/paytm');

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

const User = mongoose.model('User',userSchema);

module.exports = {
    User
}