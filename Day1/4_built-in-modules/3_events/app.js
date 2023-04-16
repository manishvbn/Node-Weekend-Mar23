const sEmitter = require('./string-emitter');

// var s = sEmitter.getString();
// console.log(s);

// setInterval(function () {
//     var s = sEmitter.getString();
//     console.log(s);
// }, 2000);

// --------------------------------------------

// sEmitter.pushString(s => {
//     console.log(s);
// });

// sEmitter.pushString(s => {
//     console.log("S1 - ", s);
// });

// sEmitter.pushString(s => {
//     console.log("S2 - ", s);
// });

// --------------------------------------------

// sEmitter.on('data', (s) => {
//     console.log(s);
// });

// // Subscription
// sEmitter.on('data', s => {
//     console.log("S1 - ", s);
// });

// // Subscription
// sEmitter.on('data', s => {
//     console.log("S2 - ", s);
// });

// Subscription
sEmitter.on('data', s => {
    console.log("S1 - ", s);
});

let count = 0;

function S2(s) {
    console.log("S2 - ", s);
    ++count;

    // Unsubscribe
    if (count > 2) {
        sEmitter.removeListener('data', S2);
    }
}

// Subscription
sEmitter.on('data', S2);
