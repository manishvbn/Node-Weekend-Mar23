class Logger {
    log(message) {
        console.log(`${message}, logged from Log method`);
    }
}

module.exports = new Logger();