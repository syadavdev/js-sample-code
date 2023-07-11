const fs = require("fs")

console.log("1")
const res = fs.readFile("text.txt", (err, data) => console.log(data.toString()))
console.log("file : " + res)
console.log("2")