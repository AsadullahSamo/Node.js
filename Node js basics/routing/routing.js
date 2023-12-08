/*
- https:www.example.com/Books?author=john&id=101  --> (?author=john&id=101) This is known as query string
- Query strings are indicated by "?" and more than one query strings are separated by "&"
- It is possible to extract query strings using Routing
*/

const http = require("http");

const server = http.createServer((req, res) => {
    const path = req.url;
    console.log(path)
    if(path === "/" || path.toLocaleLowerCase() === "/home"){
        res.end("You are in home page")
    }
    else if(path.toLocaleLowerCase() === "/about"){
        res.end("You are in about page")
    }
    else {
        res.end("Error 404: Page not found")
    }
})

server.listen(8000, "localhost", () => {
    console.log("Server has started");
})