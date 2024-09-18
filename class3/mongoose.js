const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://abhimukesh284:qZ4cZSZXTQO4aWD5@cluster0.kjhif.mongodb.net/ClassAssignment",
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

const app = express();
app.use(express.json());

async function userExists(username) {
  // should check in the database
  try {
    const data = await User.findOne({username:username});
    if(data) return true;
    else return false;
  }catch(err){
    console.log(err);
    return false;
  }
}

 async function  userWithPassword (username, password) {
  const data = await User.find({username:username,password:password});
  return data;
  
}


app.post('/signup', async (req,res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  if(await userExists(username)){
    return res.json({
      msg : "User already exists"
    });
  } else {
    const userProfile = new User({
      username: username,
      password: password,
      name: name,
    })
    
    await userProfile.save();
    res.status(200).json({msg: 'User profile successfuly CREATED'})
  }
})

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!(await userExists(username))) {
    return res.status(403).json({
      msg: "User doesnt exist in our database",
    });
  } else{
    const data = await userWithPassword(username,password);
    
    if(!(data.length > 0)){
      return res.status(403).json({
        msg: 'Wrong Password'
      })
    } else {
      const  token = jwt.sign({ username: username }, jwtPassword);
      return res.json({token,});
    }
  }
});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    
    // return a list of users other than this username from the database
    if (!(await userExists(username))) {
      return res.status(403).json({
        msg: "User doesnt exist in our in memory database",
      });
    } else {
      const allUsers = await User.find({});
      const people = allUsers.filter(user => user.username !== username );
      res.json(people);
    } 
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3001);