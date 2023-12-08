const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    
    let rs = fs.createReadStream("../files/large-file.txt");
    rs.on("data", (chunk) => {
        res.write(chunk);
    })

    rs.on("end", () => {
        res.end();
    })

    rs.on("error", (error) => {
        console.log(error.message);
        res.statusCode = 500;
        res.statusMessage = "Internal server error"
    })
})

server.listen(8000, "localhost", () => {
    console.log("Server has started");    
})