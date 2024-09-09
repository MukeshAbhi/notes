const express = require("express");
const app = express();

let count = 0;
let totalRequestTime = 0;

function totalRequestTimeTaken ( req, res, next) {
    const startTime = Date.now();
    
    res.on('finish', () => {
        const endTime = Date.now();
        const duration = endTime - startTime ;

        totalRequestTime += duration;
        count++;

        console.log("Total time taken is "+ totalRequestTime+ " milliseconds");
        console.log("Average time taken is " + (totalRequestTime/count +" milliseconds"));
    });
    next();
}
app.use(totalRequestTimeTaken );

app.get('/',(req, res) => {
    res.send("helloworld");
});

app.post('/',(req, res) => {
    res.send("from post route");
});


app.listen(3000);