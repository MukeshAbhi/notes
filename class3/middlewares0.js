const express = require("express");
const app = express();

app.use(express.json());

app.post("/health-checkup", (req, res) => {
    // kidneys = [1, 2]
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;

    res.send("You have " + kidneysLength + " kidneys");
});

//global catches
app.use(function(error,req,res,next){
    res.json({
        msg: "Something went wrong. Try again Later."
    })
})

app.listen(3000);