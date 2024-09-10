const fs = require("fs");

// asynchronous function
function mread(cb) {
    fs.readFile("a.txt","utf-8",function(err,data){
        cb(data);
    });
};

//callback function
function onDone(data) {
    console.log(data);
};
mread(onDone);

// HERE mread is calling onDone function