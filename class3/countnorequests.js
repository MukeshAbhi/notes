const express = require("express");
const app = express();

let count = 0;

function countNumOfRequests( req,res,next){
    
    count++;
    console.log(count);
    next();
}



app.get('/',countNumOfRequests, (req, res) => {
    res.send("helloworld");
});



app.listen(3000);