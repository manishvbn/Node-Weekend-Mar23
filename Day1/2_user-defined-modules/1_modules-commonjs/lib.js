console.log("This is the lib module");
// console.log(module);

// var fname = "Manish";
// module.exports = fname;

// var lname = "Sharma";
// module.exports = lname;

// var fname = "Manish";
// var lname = "Sharma";

// module.exports = { fname, lname };

// ------------------------------ Named Exports
// var fname = "Manish";
// var lname = "Sharma";

// module.exports.firstname = fname;
// module.exports.lastname = lname;

// module.exports.log = function (message) {
//     return `From Lib - ${message.toUpperCase()}`;
// }

// ------------------------------ Named Exports - Shorthand
var fname = "Manish";
var lname = "Sharma";

exports.firstname = fname;
exports.lastname = lname;

exports.log = function (message) {
    return `From Lib - ${message.toUpperCase()}`;
}

// --------- Create and Export Employee Class

// class Employee {
//     constructor(name) {
//         this._name = name;
//     }

//     getName() {
//         return this._name;
//     }

//     setName(value) {
//         this._name = value;
//     }
// }

// exports.Employee = Employee;

// ---------------------

exports.Employee = class {
    constructor(name) {
        this._name = name;
    }

    getName() {
        return this._name;
    }

    setName(value) {
        this._name = value;
    }
}