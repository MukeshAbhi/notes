const express = require("express");
const app = express();

var users =[{
    name:"john",
    kidneys:[{
        healthy: false
    },{
        healthy: true
    }]
}];

app.use(express.json());

// query parameter i.e ?
app.get("/",function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy == true ) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfunHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfunHealthyKidneys
    })

})

// body parameter
app.post("/",function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

// replace unhealthy with healthy
app.put("/",function(req, res) {
    if (toCheckIfThereisUnhealthykidney()) {
        for(let i =0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy = true;
        }
        res.json({});
    }
    else{
        res.status(411).json({
            msg: "You have no bad kidneys"
        });
    }
})

// removing all the unhealthy kidney
app.delete("/",function(req, res) {

    if (toCheckIfThereisUnhealthykidney()){
            const newKidneys = [];
            for(let i = 0; i < users[0].kidneys.length; i++) {
                if (users[0].kidneys[i].healthy ) {
                    newKidneys.push({
                        healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "Done!"})
    }
    else{
        res.status(411).json({
            msg: "You have no bad kidneys"
        });
    }
    
})

function toCheckIfThereisUnhealthykidney (){
    let atlestunhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy){
            atlestunhealthyKidney = true;
        }
    }
    return atlestunhealthyKidney;
}

app.listen(3001);
