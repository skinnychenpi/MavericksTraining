"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeSchema = exports.Dept = exports.Employee = void 0;
// export type Dept = "MKT" | "HR" | "SD";
class Employee {
    constructor(ID, name, salary, department) {
        this.ID = ID;
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
}
exports.Employee = Employee;
var Dept;
(function (Dept) {
    Dept["MKT"] = "MKT";
    Dept["HR"] = "HR";
    Dept["SD"] = "SD";
})(Dept = exports.Dept || (exports.Dept = {}));
const Joi = require('joi');
exports.employeeSchema = Joi.object({
    name: Joi.string().alphanum()
        .min(2)
        .max(64)
        .required(),
    id: Joi.number().integer().min(0).required(),
    salary: Joi.number().integer().min(0).required(),
    department: Joi.string().valid(Dept.MKT, Dept.HR, Dept.SD).required()
});
//# sourceMappingURL=Employee.js.map