"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeSchema = exports.Dept = exports.Employees = void 0;
// export type Dept = "MKT" | "HR" | "SD";
const sequelize_typescript_1 = require("sequelize-typescript");
// export const Employee = sequelize.define('employee', {
//     ID: {
//         type: DataType.INTEGER,
//         primaryKey: true
//     },
//     name: {
//         type: DataType.STRING
//     },
//     salary: {
//         type: DataType.INTEGER
//     },
//     department: {
//         type: DataType.STRING
//     }
// }, {
//     tableName: 'employees'
// })
let Employees = class Employees extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        primaryKey: true
    })
], Employees.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    })
], Employees.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false
    })
], Employees.prototype, "salary", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    })
], Employees.prototype, "department", void 0);
Employees = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: 'employees'
    })
], Employees);
exports.Employees = Employees;
// export class Employee {
//     public name: String
//     public ID: Number
//     public salary: Number
//     public department: String
//     constructor(ID, name, salary, department : String) {
//         this.ID = ID
//         this.name = name
//         this.salary = salary
//         this.department = department
//     }
// }
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
//# sourceMappingURL=Employee.model.js.map