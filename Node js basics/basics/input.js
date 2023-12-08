const readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Please enter your name ", (name) => {
    console.log(`Your name is ${name}`);
    rl.close();
})

// On close event will be fired when closing input interface
rl.on("close", () => {
    console.log("Interface closed");
    process.exit(0);
})