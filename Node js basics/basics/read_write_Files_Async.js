const fs = require("fs");

fs.readFile("../files/input.txt", "utf-8", (err, data) => {
    console.log(data);

    fs.writeFile("../files/async_output.txt", `${data}`, () => {
        console.log("File written successfully");
    })
})

