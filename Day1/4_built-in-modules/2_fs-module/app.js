const fs = require('fs');

// Async
// fs.readFile('./file1.txt', 'utf8', (err, data) => {
//     if (err)
//         console.log(err);
//     else
//         console.log(data);
// });

// Sync
// try {
//     var data = fs.readFileSync('./file1.txt', 'utf8');
//     console.log(data);
// } catch (err) {
//     console.log(err);
// }

// var message = "Hello from Node Application " + new Date().toLocaleTimeString();
// fs.writeFile('./file2.txt', message, 'utf8', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log("File Write Completed....");
// });

var message = "Hello from Node Application " + new Date().toLocaleTimeString() + "\n";
fs.appendFile('./file3.txt', message, 'utf8', (err) => {
    if (err)
        console.log(err);
    else
        console.log("File Append Completed....");
});

console.log("Completed and waiting....");
