const http = require("http");
const fs = require("fs");

const html = fs.readFileSync("../files/sending_html_res.html", "utf-8")
const products = JSON.parse(fs.readFileSync("../files/products.json", "utf-8"))

const server = http.createServer((req, res) => {
    const path = req.url;
    
    if(path === "/" || path.toLocaleLowerCase() === "/home") {
        res.writeHead(200, {  // This header must be before response
            'Content-Type': 'text/html'
        })
        res.end(html.replace("{{%CONTENT%}}", "You are in home page"))
    }
    else if(path.toLocaleLowerCase() === "/about") {
        res.writeHead(200, {  // This header must be before response
            'Content-Type': 'text/html'
        })
        res.end(html.replace("{{%CONTENT%}}", "You are in about page"))
    }
    else if(path.toLocaleLowerCase() === "/contact") {
        res.writeHead(200, {  // This header must be before response
            'Content-Type': 'text/html'
        })
        res.end(html.replace("{{%CONTENT%}}", "You are in contact page"))
    }
    else if(path.toLocaleLowerCase() === "/products") {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(products))
    }
    else {
        res.writeHead(404, {  // This header must be before response
            'Content-Type': 'text/html'
        })
        res.end(html.replace("{{%CONTENT%}}", "Error 404: Page not found"))
    }

    // res.end(html)
})


server.listen(8000, "localhost", () => {
    console.log("Server has started");
})
