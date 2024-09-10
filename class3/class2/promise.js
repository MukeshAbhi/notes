const fs = require("fs");

function mread() {
    return new Promise(function (resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        });
    });
};

//callback function
function onDone(data) {
    console.log(data);
};

//calling a promise
mread().then(onDone);