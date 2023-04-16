// const fs = require('fs');

// const readStream = fs.createReadStream('./file1.txt');
// const writeStream = fs.createWriteStream('./file3.txt');

// readStream.pipe(writeStream);
// console.log("File Copied...");

// -----------------------------------------------

// const fs = require('fs');
// const zlib = require('zlib');

// fs.createReadStream('./file1.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('./file1.txt.gz'));

// console.log("File Compressed...");

const fs = require('fs');
const crypto = require('crypto');

const cipher = crypto.createCipher('aes-256-cbc','my-key');

fs.createReadStream('./file1.txt')
    .pipe(cipher)
    .pipe(fs.createWriteStream('./file1-enc.txt'));

console.log("File Encrypted...");