const fs = require("fs")

// Reading from input.txt
let textIn = fs.readFileSync("../files/input.txt", "utf-8")
console.log(textIn)

// Writing from input.txt
let content = 
`Data read from input.txt: ${textIn} 
Date Created: ${new Date()}`
fs.writeFileSync("../files/output.txt", content)  // if file doesn't exist, Node.js will create it automatically