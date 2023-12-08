const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    // pathname stores only url without query string
    // path stores both url as well as query string
  let {query, pathname, path} = url.parse(req.url, true) // passing true will parse query string from url
  let {id, name} = query;
  
  if(id && name) {
    res.write(`Id is ${id} & name is ${name}`)
    res.write(`\npathname is: ${pathname}`)
    res.end(`\npath is: ${path}`)
  } else {
    res.write("Specify id and name in query url")
    res.write(`\npathname is: ${pathname}`)
    res.end(`\npath is: ${path}`)
  }


})

server.listen(8000, "localhost", () => {
    console.log("Server has started")
})