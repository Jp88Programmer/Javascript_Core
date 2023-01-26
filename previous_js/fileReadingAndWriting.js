console.log("Write and Read file with handling in javascript");

define(['require'], function (require) {
    var namedModule = require('');
});

const fs = require("fs");
let name = prompt("Enter your name : ");

fs.appendFile("js/write.txt",name,(err,file) => {
    if(err) throw err ;
    // console.log(file);
    // let name = "Jayendra Parmar";
    // console.log(name);
    // fs.appendFile("Jayendra Parmar");
})