const fs = require('fs')
const path = require('path')

//Create Folder
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) console.log("Error", err)
//     else
//         console.log("Folder created")
// })

//create and write File
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), "Hello Duniya", function (err) {
//     if (err) console.log("Error", err)
//     else
//         console.log("Folder created")
// })

//Read the File
// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf-8', function (err, data) {
//     if (err) console.log("Error", err)
//     else
//         console.log(data)
// })

//Rename fthe File

fs.rename(path.join(__dirname, 'test', 'hello'), path.join(__dirname, 'test', 'index'), (err) => {
    if (err) console.log("Error", err)
    else
        console.log("File Renamed")
})