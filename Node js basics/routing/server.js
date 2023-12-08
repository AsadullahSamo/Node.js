const http = require("http")

//    CREATE A SERVER
const server = http.createServer((req, res) => {
    // res.end("This is response 1")
    // res.end("This is response 2")     // Multiple res.end() Not allowed
    // res.end("hello from the server")  // Multiple res.end() Not allowed 

    // To acheive above scenario, use res.write() and res.end() in last to stop sending response, otherwise it'll never ends sending response and the tab keeps refreshing
    res.write("This is response 1")
    res.write("\nThis is response 2")
    res.end("\nHello from the server")
    console.log("A new req is received");
})



//    START A SERVER

server.listen(8000, "localhost", () => {
    console.log("Server has started")
});