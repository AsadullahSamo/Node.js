const fs = require("fs");
const http = require("http");


const html = fs.readFileSync("../files/index.html", "utf-8")


//      CREATE A SERVER
const server = http.createServer((req, res) => {
    res.write(html)
    res.write("<h3> This is heading 3 </h3>")
    res.end("Hello from the server")
    console.log("A new req is received")
})

//      START A SERVER
server.listen(8000, "localhost", () => {
    console.log("Server has started");
})