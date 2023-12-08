const os = require("os");

// 1. os.type() --> Returns name of the OS
console.log(`OS name is: ${os.type()}`);
console.log(`Total memory is: ${os.totalmem()} and free memory is: ${os.freemem()}`);
console.log(`Hostname of OS is: ${os.hostname()}`);
console.log(`OS's default directory for temporary files is: ${os.tmpdir()}`);