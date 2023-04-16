// require('./logger.js');
// require('./logger.js');

// const logger1 = require('./logger.js');
// const logger2 = require('./logger.js');

// console.log(logger1 === logger2);

// ---------------------------

// const logger = require('./logger');
// const logger = require('./logger/my-logger');
// const logger = require('./logger/index');
// const logger = require('./logger');

// ---------------------------
// const Logger = require('./loggerType/logger');

// let l1 = new Logger();
// l1.log("Hi From App");

// let l2 = new Logger();
// l2.log("Hi From App Module");

// console.log(l1 === l2);

// ---------------------------
// const loggerInstance1 = require('./loggerSingle/logger');
// loggerInstance1.log("Hi From App");

// const loggerInstance2 = require('./loggerSingle/logger');
// loggerInstance2.log("Hi From App Module");

// console.log(loggerInstance1 === loggerInstance2);

// ---------------------------
// const loggerSingleton = require('./loggerSingleton');

// const loggerInstance1 = loggerSingleton.getLogger();
// loggerInstance1.log("Hi From App");

// const loggerInstance2 = loggerSingleton.getLogger();
// loggerInstance2.log("Hi From App Module");

// console.log(loggerInstance1 === loggerInstance2);

// ---------------------------

// const loggerFactory = require('./loggerFactory');

// let dbLogger = loggerFactory.DBLFactory.getLogger();
// let flLogger = loggerFactory.FLFactory.getLogger();

// dbLogger.log("Hello from App Module");
// flLogger.log("Hello from App Module");

// let dbLogger1 = loggerFactory.DBLFactory.getLogger();
// let dbLogger2 = loggerFactory.DBLFactory.getLogger();

// console.log(dbLogger1 === dbLogger2);

// ------------------------------------------------ Rahul Query
class Car {
    constructor(model, color) {
        this._model = model;
        this._color = color;
    }

    openDoor() {

    }

    startEngine() {

    }

    drive() {

    }
}

class CarFactory {
    static createCar(model, color) {
        switch (model) {
            case "sedan":
                return new Car(model, color);
            case "suv":
                return new Car(model, color);
            default:
                throw new Error(`Invalid car model: ${model}`);
        }
    }
}

// const c = new Car("Mustang", "Black");
const c = CarFactory.createCar("sedan", "blue");
c.openDoor();
c.startEngine();
c.drive();

const c1 = CarFactory.createCar("suv", "black");
