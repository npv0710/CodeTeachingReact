"use strict";
exports.__esModule = true;
exports.printDepartment = exports.department1 = exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
    }
    Department.prototype.getId = function () {
        return this.id;
    };
    Department.prototype.getName = function () {
        return this.name;
    };
    return Department;
}());
exports.Department = Department;
function printDepartment(d) {
    console.log('Deparment Id: ' + d.getId());
    console.log('Deparment name: ' + d.getName());
}
exports.printDepartment = printDepartment;
var department1 = new Department(1, 'DEV');
exports.department1 = department1;
