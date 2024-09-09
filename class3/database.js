const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://abhimukesh284:qZ4cZSZXTQO4aWD5@cluster0.kjhif.mongodb.net/userappnew");



// creating a schema for mongo DB
const User = mongoose.model('User', { name: String, email: String, password: String});

// creating inmemory data
const user = new User({
    name: 'Mukesh',
    email: 'mukesh@gmail.com',
    password: '123456'
});

// to put data into DB
user.save();