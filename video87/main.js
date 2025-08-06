const fs = require("fs");
// console.log("fs")

// console.log("starting");
// fs.writeFileSync("test.txt", "Hello, World!");
// console.log("Ending");

console.log("starting");
fs.writeFile("test2.txt", "You are great!", () => {
    console.log("done");
    fs.readFile("test2.txt", (error, data) =>{
        console.log(error, data.toString());
    })
})

fs.appendFile("test2.txt", " You are awesome", (d, e) => {
    console.log(d)})

    console.log("Ending");