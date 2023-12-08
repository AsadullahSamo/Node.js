const fs = require("fs");

// 1. fs.appendFile(path, data, callback) --> Used to append content in file
// fs.appendFile("../files/input.txt", "\nThis content will be appended to the end of file", (err) => {
//     if(err) throw err
//     console.log("Appended");
// })

// 2. fs.appendFile(path, callback) --> Used to delete a file
// fs.unlink("../files/input.txt", (err) => {
//     if(err) throw err
//     console.log("file deleted");
// })

// 3. fs.rename("oldPath/oldFile.txt", "newPath/newFile.txt", callback) --> to rename a file
fs.rename('newFile.txt', '../files/input.txt', (err) => {
    if (err) throw err;
    console.log('Rename complete!');
});