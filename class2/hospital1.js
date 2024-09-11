const express = require("express");
const app = express();

app.use(express.json());

var users = [{
    name : "john",
    kidneys : [{
        healthy : true
    }, {
        healthy : false
    }]
}];

app.get('/', (req,res) => {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    const numberOfHealthyKidneys = johnKidneys.filter((kidney) => kidney.healthy).length;
    const numberOfunHealthyKidneys = johnKidneys.filter((kidney) => !kidney.healthy).length;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfunHealthyKidneys,
    })
})

app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg: "Done!"
    });
})

app.put('/', (req, res) => {
    if (isUnHealthyKidneysPresent()){
        users[0].kidneys.map((kidney) => {
            kidney.healthy = true;
        })
        res.json({
            msg : "done!"
        });
    } else {
        res.status(411).json({
            msg : "You have no unhealthy kidney"
        })
    }
   
})

app.delete('/', (req, res) => {

    if (isUnHealthyKidneysPresent()){
        const newKidneys = [];
        users[0].kidneys.filter((kidney) => {
            if (kidney.healthy){
                newKidneys.push({
                    healthy : true
                })
            }
            users[0].kidneys = newKidneys;
            res.json({
                msg : "Done!"
            })
        })
    } else {
        res.status(411).json({
            msg : "You have no unhealthy kidney"
        })
    }
  
})

function isUnHealthyKidneysPresent () {
    let UnHealthyKidneysPresent = false;
    users[0].kidneys.filter((kidney) => {
        if(!kidney.healthy){
            UnHealthyKidneysPresent = true;
        }
    })
    return  UnHealthyKidneysPresent;
}
app.listen(3000);