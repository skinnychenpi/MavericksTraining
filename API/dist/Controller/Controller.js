"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmployee = exports.hello = exports.Controller = void 0;
const Employee_1 = require("../Model/Employee");
class Controller {
    constructor() {
        this.employees = [];
    }
    hello(req, res) {
        return res.json({
            message: 'Hello World!'
        });
    }
    showAllEmployee(req, res) {
        var name = req.body.name;
        var id = req.body.id;
        var salary = req.body.salary;
        try {
            var department = req.body.department;
        }
        catch (err) {
            res.status(400).send({ error: "Bad input of department." });
        }
        var newEmployee = new Employee_1.Employee(id, name, salary, department);
        this.employees.push(newEmployee);
        return res.json(this.jsonifyEmployee(newEmployee));
    }
    jsonifyEmployee(emp) {
        let json = { id: emp.ID, name: emp.name, salary: emp.salary, department: emp.department };
        return json;
    }
}
exports.Controller = Controller;
function hello(req, res) {
    res.json({
        message: 'Hello World!'
    });
}
exports.hello = hello;
function createEmployee(req, res) {
    var name = req.body.name;
    var id = req.body.id;
    var salary = req.body.salary;
    try {
        var department = req.body.department;
    }
    catch (err) {
        res.status(400).send({ error: "Bad input of department." });
    }
    var newEmployee = new Employee_1.Employee(id, name, salary, department);
    this.employees.push(newEmployee);
    res.json(this.jsonifyEmployee(newEmployee));
}
exports.createEmployee = createEmployee;
//# sourceMappingURL=Controller.js.map