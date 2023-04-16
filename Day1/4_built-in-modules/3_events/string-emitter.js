const EventEmitter = require('events');

class StringEmitter extends EventEmitter {
    constructor() {
        super();
        this.run();
    }

    run() {
        const strArr = ["NodeJS", "ReactJS", "Angular", "ExtJS", "jQuery"];
        
        setInterval(() => {
            var str = strArr[Math.floor(Math.random() * strArr.length)];
            this.emit("data", str);   // Publisher
        }, 2000);
    }

    pushString(cb) {
        const strArr = ["NodeJS", "ReactJS", "Angular", "ExtJS", "jQuery"];
        setInterval(() => {
            var str = strArr[Math.floor(Math.random() * strArr.length)];
            cb(str);
        }, 2000);
    }

    getString() {
        const strArr = ["NodeJS", "ReactJS", "Angular", "ExtJS", "jQuery"];
        var str = strArr[Math.floor(Math.random() * strArr.length)];
        return str;
    }
}

module.exports = new StringEmitter();